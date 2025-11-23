"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { XCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  "Baixa conversão → Mensagens genéricas que não engajam",
  "Custos crescentes → Equipes grandes sem escala",
  "Falta de integração → Canais desconectados do CRM",
  "Timing errado → Disparos no momento incorreto",
  "Desperdício de leads → Sem follow-up automatizado",
];

export default function Problems() {
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
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-white rounded-[25px] p-6 md:p-8 lg:p-10 xl:p-12 shadow-lg">
            <h2 className="font-headings font-medium text-gray-900 mb-8 md:mb-12 text-center
              text-[28px] leading-[34px]
              md:text-[36px] md:leading-[44px]
              lg:text-[44px] lg:leading-[52px]
              tracking-tight">
              Por que a maioria das empresas perde dinheiro com comunicação?
            </h2>

            <div className="space-y-4 mb-12">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 md:p-5 lg:p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200"
                >
                  <XCircle className="w-5 h-5 md:w-6 md:h-6 text-error flex-shrink-0 mt-1" />
                  <p className="text-gray-800 font-body text-sm md:text-base lg:text-lg">
                    {problem}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center p-8 md:p-10 lg:p-12 rounded-2xl bg-gradient-to-br from-[#141A24] to-[#000101] border border-[#1C2026]"
            >
              <p className="text-white/80 font-body text-base md:text-lg lg:text-xl leading-relaxed mb-4">
                <span className="font-semibold text-white">
                  O problema não é seu produto ou serviço.
                </span>
              </p>
              <p className="text-white font-body text-lg md:text-xl lg:text-2xl font-semibold">
                É o modelo de comunicação ultrapassado.
                <br />E é aqui que a Wiser Corporate entra.
              </p>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
