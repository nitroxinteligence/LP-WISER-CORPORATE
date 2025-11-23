"use client";

import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import { MorphingText } from '@/components/MorphingText';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 lg:pt-24 pb-32 md:pb-40 lg:pb-48 px-4 md:px-6 lg:px-8 overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full" aria-hidden="true">
        {/* Mobile: posição 80% center | Desktop: center center */}
        <Image
          src="https://ckwjxuxatlqnuxbfltul.supabase.co/storage/v1/object/public/docs-wiser-corp/img-2-bg-wiser-corp.png"
          alt="Escritório moderno com tecnologia de comunicação empresarial inteligente"
          fill
          loading="eager"
          className="object-cover object-[80%_center] md:object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1920px) 100vw, 1920px"
          quality={85}
        />

        {/* Overlay gradientes otimizados para mobile e desktop */}
        {/* Mobile: gradiente vertical suave | Desktop: gradiente mais complexo */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 md:from-black/50 md:via-black/30 md:to-black/60" />

        {/* Gradiente horizontal apenas no desktop para moldura lateral */}
        <div className="pointer-events-none absolute inset-0 hidden md:block bg-gradient-to-r from-black/30 via-transparent to-black/30" />

        {/* Sombra inferior progressiva - mais suave no mobile */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 md:h-40 lg:h-48 bg-gradient-to-t from-[#000000]/90 md:from-[#000000] to-transparent" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10" style={{ position: 'relative', zIndex: 10 }}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-headings font-regular text-white mb-2 md:mb-3
              text-[40px] leading-[46px]
              md:text-[56px] md:leading-[64px]
              lg:text-[68px] lg:leading-[76px]
              xl:text-[76px] xl:leading-[84px]
              tracking-tight"
          >
            Conectamos canais. Automatizamos
          </motion.h1>

          {/* Morphing Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 md:mb-5 lg:mb-6"
          >
            <MorphingText
              words={["vendas", "comunicação", "CRMs", "disparos", "atendimento", "negócios"]}
              interval={2500}
              className="font-headings font-semibold
                text-[40px] leading-[46px]
                md:text-[56px] md:leading-[64px]
                lg:text-[68px] lg:leading-[76px]
                xl:text-[76px] xl:leading-[84px]
                tracking-tight"
            />
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-white/90 mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto
              text-sm leading-relaxed
              md:text-base md:leading-relaxed
              lg:text-lg lg:leading-relaxed
              xl:text-xl xl:leading-relaxed"
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
