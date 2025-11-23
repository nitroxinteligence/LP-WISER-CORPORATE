"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from 'react-countup';
import { TextReveal } from '@/components/TextReveal';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

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
            <TextReveal
              text="Somos especialistas em comunicação inteligente para empresas que querem escalar"
              className="font-headings font-medium mb-6 md:mb-8
                text-[28px] leading-[34px]
                md:text-[36px] md:leading-[44px]
                lg:text-[44px] lg:leading-[52px]
                xl:text-[52px] xl:leading-[60px]
                tracking-tight"
            />

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

          {/* Card WISER CORPORATE e Stats - Desktop à esquerda, Mobile abaixo do texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-md mx-auto lg:mx-0 lg:order-1 mt-8 lg:mt-0 space-y-4"
          >
            <div className="relative w-full rounded-2xl overflow-hidden bg-white flex items-center justify-center py-12 md:py-16 px-8">
              <h3 className="font-headings font-normal bg-gradient-to-br from-[#141A24] to-[#000101] bg-clip-text text-transparent
                text-[28px] leading-[34px]
                md:text-[32px] md:leading-[38px]
                lg:text-[36px] lg:leading-[42px]
                tracking-tight text-center whitespace-nowrap">
                WISER CORPORATE
              </h3>
            </div>

            {/* Stats Cards */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 gap-4"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
