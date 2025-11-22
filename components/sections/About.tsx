"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sobre"
      ref={ref}
      className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 md:px-6 lg:px-8 bg-background"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-6 xl:gap-8 items-center">
          {/* Conteúdo de texto - Mobile First */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left lg:order-2"
          >
            <h2 className="font-headings font-medium text-white mb-6 md:mb-8
              text-[28px] leading-[34px]
              md:text-[36px] md:leading-[44px]
              lg:text-[44px] lg:leading-[52px]
              xl:text-[52px] xl:leading-[60px]
              tracking-tight">
              Especialistas em comunicação inteligente para empresas que querem
              escalar
            </h2>

            <div className="space-y-6 text-white/80 font-body text-left
              text-sm leading-relaxed
              md:text-base md:leading-relaxed
              lg:text-lg lg:leading-relaxed">
              <p>
                A Wiser Corporate nasceu da necessidade de resolver o maior
                gargalo das empresas em crescimento: comunicação eficiente em
                escala.
              </p>
              <p>
                Combinamos +8 anos de experiência implementando soluções de
                comunicação omnichannel com tecnologia de IA proprietária
                desenvolvida especificamente para maximizar resultados comerciais.
              </p>
              <p>
                Nosso time é especialista em transformar cada ponto de contato com
                o cliente em oportunidade de conversão, retenção e receita.
              </p>
            </div>
          </motion.div>

          {/* Imagem com informações - Desktop à esquerda, Mobile abaixo do texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-md mx-auto lg:mx-0 lg:order-1 mt-8 lg:mt-0"
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden" style={{ minHeight: '400px' }}>
              <Image
                src="https://ckwjxuxatlqnuxbfltul.supabase.co/storage/v1/object/sign/docs-wiser-corp/img-diego-sobre.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wZmZiNWI3ZC0wNWJkLTQxNTQtYTFlZS1kM2Y5MWFhMjc4ZDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkb2NzLXdpc2VyLWNvcnAvaW1nLWRpZWdvLXNvYnJlLmpwZWciLCJpYXQiOjE3NjM3NzExNjQsImV4cCI6MjExMDY2NzE2NH0.O6qaDOPBtf_2iwd_1qEjGF8IZ2kmQwgWTVVeL0U8nzQ"
                alt="Diego Castro - Fundador e CEO"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 450px"
                className="object-cover"
                priority
              />

              {/* Overlay com gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Informações sobre a imagem */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-white/90 font-body text-sm md:text-base leading-relaxed mb-4">
                  Especialista em comunicação empresarial e automação com IA. Mais de 8 anos liderando projetos de transformação digital...
                </p>
                <div>
                  <p className="text-white font-semibold font-body text-sm md:text-base">
                    Diego Castro
                  </p>
                  <p className="text-white/70 font-body text-xs md:text-sm">
                    Fundador e CEO
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
