"use client";

import { motion, useInView } from "framer-motion";
import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import CountUp from 'react-countup';
import { ArrowRight } from 'lucide-react';

// ===================== SHADER =====================
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  varying vec2 vUv;
  uniform float u_time;
  uniform vec3 u_resolution;
  uniform sampler2D u_channel0;

  vec2 toPolar(vec2 p) {
      float r = length(p);
      float a = atan(p.y, p.x);
      return vec2(r, a);
  }

  vec2 fromPolar(vec2 polar) {
      return vec2(cos(polar.y), sin(polar.y)) * polar.x;
  }

  void mainImage(out vec4 fragColor, in vec2 fragCoord) {
      vec2 p = 6.0 * ((fragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y);

      vec2 polar = toPolar(p);
      float r = polar.x;
      float a = polar.y;

      vec2 i = p;
      float c = 0.0;
      float rot = r + u_time + p.x * 0.100;
      for (float n = 0.0; n < 4.0; n++) {
          float rr = r + 0.15 * sin(u_time*0.7 + float(n) + r*2.0);
          p *= mat2(
              cos(rot - sin(u_time / 10.0)), sin(rot),
              -sin(cos(rot) - u_time / 10.0), cos(rot)
          ) * -0.25;

          float t = r - u_time / (n + 30.0);
          i -= p + sin(t - i.y) + rr;

          c += 2.2 / length(vec2(
              (sin(i.x + t) / 0.15),
              (cos(i.y + t) / 0.15)
          ));
      }

      c /= 8.0;

      vec3 baseColor = vec3(0.1, 0.4, 0.8);
      vec3 finalColor = baseColor * smoothstep(0.0, 1.0, c * 0.6);

      fragColor = vec4(finalColor, 1.0);
  }

  void main() {
      vec4 fragColor;
      vec2 fragCoord = vUv * u_resolution.xy;
      mainImage(fragColor, fragCoord);
      gl_FragColor = fragColor;
  }
`;

const CPPNShaderMaterial = shaderMaterial(
  { u_time: 0, u_resolution: new THREE.Vector3(1, 1, 1) },
  vertexShader,
  fragmentShader
);

extend({ CPPNShaderMaterial });

interface CPPNShaderMaterialType extends THREE.ShaderMaterial {
  u_time: number;
  u_resolution: THREE.Vector3;
}

function ShaderPlane() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const materialRef = useRef<CPPNShaderMaterialType>(null!);

  useFrame((state) => {
    if (!materialRef.current) return;
    materialRef.current.u_time = state.clock.elapsedTime * 0.5;
    const { width, height } = state.size;
    materialRef.current.u_resolution.set(width, height, 1.0);
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <cPPNShaderMaterial ref={materialRef} side={THREE.FrontSide} depthTest={false} depthWrite={false} />
    </mesh>
  );
}

function ShaderBackground() {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!canvasRef.current) return;

      gsap.set(canvasRef.current, {
        filter: 'blur(20px)',
        scale: 1.1,
        opacity: 0.7
      });

      gsap.to(canvasRef.current, {
        filter: 'blur(0px)',
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.3
      });
    },
    { scope: canvasRef }
  );

  return (
    <div ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" style={{ background: '#000', zIndex: 0 }}>
      <Canvas
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
        style={{ width: '100%', height: '100%' }}
      >
        <ShaderPlane />
      </Canvas>
      {/* Gradiente superior e inferior */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
      {/* Gradiente lateral esquerdo */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-80 bg-gradient-to-r from-black via-black/70 via-black/40 via-black/20 to-transparent" />
      {/* Gradiente lateral direito */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-black via-black/60 via-black/30 to-transparent" />
    </div>
  );
}

declare module '@react-three/fiber' {
  interface ThreeElements {
    cPPNShaderMaterial: object;
  }
}

// Carregar ShaderBackground apenas no cliente
const ClientShaderBackground = dynamic(() => Promise.resolve(ShaderBackground), {
  ssr: false,
  loading: () => <div className="absolute inset-0 w-full h-full" style={{ background: '#000', zIndex: 0 }} />
});

export default function Hero() {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 lg:pt-24 pb-32 md:pb-40 lg:pb-48 px-4 md:px-6 lg:px-8 overflow-hidden bg-black">
      {/* Background Effects */}
      <ClientShaderBackground />

      <div className="container mx-auto max-w-7xl relative z-10" style={{ position: 'relative', zIndex: 10 }}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-headings font-regular text-white mb-4 md:mb-5 lg:mb-6
              text-[40px] leading-[46px]
              md:text-[56px] md:leading-[64px]
              lg:text-[68px] lg:leading-[76px]
              xl:text-[76px] xl:leading-[84px]
              tracking-tight"
          >
            Conectamos canais. Automatizamos resultados.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-white/90 mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto
              text-base leading-relaxed
              md:text-lg md:leading-relaxed
              lg:text-xl lg:leading-relaxed
              xl:text-2xl xl:leading-relaxed"
          >
            A Wiser Corporate transforma como sua empresa se comunica com
            clientes: mais conversões, menos custos operacionais, zero fricção.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/5581998132001?text=Olá! Gostaria de agendar uma consultoria gratuita.",
                  "_blank"
                )
              }
              className="group relative w-full sm:w-auto bg-white hover:bg-white/90 text-black font-body font-semibold px-10 py-4 md:px-14 md:py-5 rounded-lg transition-all shadow-lg shadow-white/30 hover:shadow-2xl hover:shadow-white/50 text-sm md:text-base overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-0 group-hover:gap-2 transition-all duration-300">
                Quero uma consultoria gratuita
                <ArrowRight className="w-0 h-0 opacity-0 group-hover:w-5 group-hover:h-5 group-hover:opacity-100 transition-all duration-300" />
              </span>
            </button>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { prefix: "+R$ ", value: 50, suffix: "M", label: "em receita gerada" },
              { prefix: "", value: 98, suffix: "%", label: "satisfação dos clientes" },
              { prefix: "+", value: 8, suffix: " anos", label: "de experiência" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-card-bg-start/30 to-card-bg-end/30 border border-card-border/30 backdrop-blur-sm"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-headings font-bold text-white mb-2">
                  {isStatsInView ? (
                    <>
                      {stat.prefix}
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        separator="."
                        decimal=","
                      />
                      {stat.suffix}
                    </>
                  ) : (
                    `${stat.prefix}${stat.value}${stat.suffix}`
                  )}
                </div>
                <div className="text-sm md:text-base font-body text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
