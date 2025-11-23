"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Founder() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-card-bg-end"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center"
        >
          {/* Imagem do Diego - Esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] max-w-md mx-auto lg:mx-0"
          >
            <div className="relative p-[1px] rounded-xl bg-gradient-to-br from-[#1d232d] to-[#1D2024] h-full shadow-2xl shadow-black/50">
              <div className="relative h-full rounded-[11px] overflow-hidden bg-gradient-to-br from-[#151B25] to-[#000000]">
                <Image
                  src="https://ckwjxuxatlqnuxbfltul.supabase.co/storage/v1/object/public/docs-wiser-corp/img-diego-sobre-2%20(1)-redimensionado-para-1080x1620.jpeg"
                  alt="Diego Castro - Founder & CEO Wiser Corporate"
                  fill
                  className="object-cover object-top"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAEAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwABwj/9k="
                />
                {/* Sombra suave na parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Conteúdo - Direita */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-white font-headings font-medium text-3xl md:text-4xl lg:text-5xl mb-2" style={{ fontWeight: 500 }}>
              Diego Castro
            </h3>

            <p className="text-white/80 font-body text-lg md:text-xl mb-8">
              Founder & CEO
            </p>

            <div className="space-y-4 text-white/80 font-body text-sm md:text-base lg:text-lg leading-relaxed">
              <p>
                Especialista em comunicação empresarial e automação com
                IA. Mais de 8 anos liderando projetos de transformação
                digital em empresas de alto crescimento nos setores de
                apostas, loteria, clubes esportivos e varejo.
              </p>
              <p>
                Responsável por implementações que geraram mais de{" "}
                <span className="text-white font-semibold">
                  R$ 50 milhões em receita incremental
                </span>{" "}
                para clientes, combinando visão estratégica com execução
                técnica impecável.
              </p>
              <p>
                Hoje lidera a Wiser Corporate na missão de democratizar
                acesso a comunicação inteligente para empresas que querem
                escalar com eficiência.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
