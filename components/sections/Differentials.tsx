"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import {
  Cpu,
  Zap,
  Network,
  TrendingUp,
  Users,
  Shield,
  Check,
} from "lucide-react";

const differentials = [
  {
    icon: Cpu,
    title: "Tecnologia proprietária",
    items: [
      "IA treinada especificamente para conversão",
      "Algoritmos otimizados para cada setor",
      "Infraestrutura escalável e segura",
    ],
  },
  {
    icon: Zap,
    title: "Implementação rápida",
    items: [
      "No ar em poucos dias",
      "Integração com sistemas existentes",
      "Migração sem downtime",
    ],
  },
  {
    icon: Network,
    title: "Multicanal verdadeiro",
    items: [
      "WhatsApp API Oficial (Meta Business Partner)",
      "SMS, RCS, E-mail, Voz",
      "Orquestração unificada",
    ],
  },
  {
    icon: TrendingUp,
    title: "Foco em ROI",
    items: [
      "Success fee opcional",
      "Métricas claras de performance",
      "Otimização contínua",
    ],
  },
  {
    icon: Users,
    title: "Time especializado",
    items: [
      "+8 anos de mercado",
      "Experiência em múltiplos setores",
      "Suporte técnico dedicado",
    ],
  },
  {
    icon: Shield,
    title: "Compliance total",
    items: ["LGPD e regulamentações", "Segurança de dados", "Opt-in gerenciado"],
  },
];

export default function Differentials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="diferenciais"
      ref={ref}
      className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-card-bg-end"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <Card className="bg-white rounded-[25px] p-6 md:p-8 lg:p-10 xl:p-12 shadow-lg">
            <h2 className="font-headings font-medium text-gray-900 mb-8 md:mb-12 text-center
              text-[28px] leading-[34px]
              md:text-[36px] md:leading-[44px]
              lg:text-[44px] lg:leading-[52px]
              tracking-tight">
              Por que Wiser Corporate é diferente
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {differentials.map((differential, index) => {
                const Icon = differential.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-6 md:p-7 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-[#0E182F] to-[#183996] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <h3 className="text-gray-900 font-headings font-semibold text-lg md:text-xl lg:text-2xl mb-4">
                      {differential.title}
                    </h3>
                    <ul className="space-y-3">
                      {differential.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-gray-700 text-sm md:text-base flex items-start gap-3"
                        >
                          <Check className="w-4 h-4 text-[#183996] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
