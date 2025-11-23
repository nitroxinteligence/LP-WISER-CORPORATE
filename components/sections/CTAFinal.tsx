"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import { MorphingText } from '@/components/MorphingText';

const benefits = [
  "Consultoria gratuita de 30 minutos",
  "Análise do seu cenário atual",
  "Proposta personalizada em 48h",
  "Cases e demonstração ao vivo",
];

export default function CTAFinal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-20 lg:py-24 xl:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background via-card-bg-end to-background relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Title outside container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <MorphingText
            words={["Mais conversões.", "Menos custos.", "Comunicação inteligente."]}
            interval={3000}
            className="font-headings font-medium text-white
              text-[32px] leading-[38px]
              md:text-[40px] md:leading-[48px]
              lg:text-[48px] lg:leading-[56px]
              tracking-tight"
          />
        </motion.div>

        {/* Container for content with white background */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 md:p-10 lg:p-12 shadow-lg">
            <p className="text-gray-900 font-body text-lg md:text-xl lg:text-2xl mb-10 text-center">
              Se você quer crescer sem explodir seus custos operacionais,<br />
              fale com a Wiser Corporate.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-success" />
                  </div>
                  <span className="text-gray-900 font-body text-sm md:text-base text-left">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center justify-center"
            >
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/5581998132001?text=Olá! Gostaria de agendar uma consultoria gratuita.",
                    "_blank"
                  )
                }
                className="group relative w-full sm:w-auto bg-gradient-to-br from-[#000000] to-[#1a1a1a] hover:from-[#1a1a1a] hover:to-[#000000] text-white font-body font-semibold px-10 py-4 md:px-14 md:py-5 rounded-lg transition-all shadow-lg hover:shadow-xl text-sm md:text-base overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-0 group-hover:gap-2 transition-all duration-300">
                  Agendar consultoria gratuita
                  <ArrowRight className="w-0 h-0 opacity-0 group-hover:w-5 group-hover:h-5 group-hover:opacity-100 transition-all duration-300" />
                </span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
