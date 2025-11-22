"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CountUp from "react-countup";
import { TrendingUp, Users, Target } from "lucide-react";

const cases = [
  {
    company: "LUVA BET",
    icon: TrendingUp,
    tag: "iGaming",
    duration: "3 meses de campanha",
    results: [
      { label: "em depósitos incrementais", value: "+R$ 6M", prefix: "", isText: true },
      { label: "de aumento em conversão", value: "12", suffix: "%", isText: false },
    ],
  },
  {
    company: "F12 BET",
    icon: Users,
    tag: "iGaming",
    duration: "2 meses de implementação",
    results: [
      { label: "em receita adicional", value: "+R$ 4M", prefix: "", isText: true },
      { label: "redução em churn", value: "35", suffix: "%", isText: false },
    ],
  },
  {
    company: "CLUBE NÁUTICO",
    icon: Target,
    tag: "Esportes",
    duration: "2 dias de campanha",
    results: [
      { label: "Campanha", value: "novos sócios", prefix: "", isText: true },
      { label: "taxa de conversão", value: "34", suffix: "%", isText: false },
    ],
  },
];

const overallResults = [
  { value: "-40", label: "em custos de operação", suffix: "%" },
  { value: "+70", label: "na taxa de resposta", suffix: "%" },
  { value: "+32", label: "em receita por cliente", suffix: "%" },
];

export default function CasesTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="casos"
      ref={ref}
      className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-card-bg-end"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block mb-6 px-6 py-2 rounded-[55px] border border-[#171819] bg-transparent">
            <span className="text-white/80 font-body text-sm md:text-base">
              Cases de Sucesso
            </span>
          </div>
          <h2 className="font-headings font-medium text-white mb-4
            text-[28px] leading-[34px]
            md:text-[36px] md:leading-[44px]
            lg:text-[44px] lg:leading-[52px]
            tracking-tight">
            O que acontece quando comunicação<br />
            encontra inteligência
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line - Cinza Escuro */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800/50 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {cases.map((caseItem, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: isEven ? -40 : 40 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot - Cinza completo, fica branco com glow quando ativo */}
                  <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full z-10 hidden md:block transition-all duration-500 ${
                    isInView
                      ? 'bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]'
                      : 'bg-gray-600'
                  }`} />

                  {/* Card - Wrapper com gradient border */}
                  <div className={`w-full md:w-5/12 ${isEven ? "" : "md:ml-auto"}`}>
                    <div className="relative p-[1px] rounded-xl bg-gradient-to-br from-[#1d232d] to-[#1D2024] group">
                      <Card className="relative border-0 bg-gradient-to-br from-[#151B25] to-[#000000] transition-all duration-500 ease-out rounded-[11px]">
                        {/* Gradient Border Effect on Hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                          <div className="absolute inset-[1px] bg-gradient-to-br from-[#151B25] to-[#000000] rounded-[inherit]" />
                        </div>

                        <CardHeader className="relative">
                          <div className="flex items-center justify-end mb-4">
                            <Badge variant="outline" className="text-white/80 border-white/20">
                              {caseItem.tag}
                            </Badge>
                          </div>
                          {/* Título - Padrão da App */}
                          <CardTitle className="text-white font-headings font-semibold text-2xl md:text-3xl lg:text-4xl">
                            {caseItem.company}
                          </CardTitle>
                          {/* Duração - Padrão da App */}
                          <p className="text-white/70 font-body text-sm md:text-base">
                            {caseItem.duration}
                          </p>
                        </CardHeader>
                        <CardContent className="relative space-y-4">
                          {caseItem.results.map((result, resultIndex) => (
                            <div key={resultIndex}>
                              {/* Valor - Padrão da App */}
                              <div className="text-3xl md:text-4xl lg:text-5xl font-headings font-bold text-white mb-1">
                                {result.isText ? (
                                  result.value
                                ) : (
                                  <>
                                    {result.prefix}
                                    <CountUp
                                      end={parseInt(result.value.replace(/[^0-9]/g, ""))}
                                      duration={2.5}
                                      enableScrollSpy
                                      scrollSpyOnce
                                    />
                                    {result.suffix}
                                  </>
                                )}
                              </div>
                              {/* Label - Padrão da App */}
                              <div className="text-white/70 font-body text-sm md:text-base">
                                {result.label}
                              </div>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Overall Results - Padrão da App */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 md:mt-32 lg:mt-40"
        >
          <div className="text-center mb-8">
            <h3 className="text-white font-headings font-medium text-2xl md:text-3xl mb-2">
              Resultados Gerais
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {overallResults.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              >
                {/* Wrapper com gradient border */}
                <div className="relative p-[1px] rounded-xl bg-gradient-to-br from-[#1d232d] to-[#1D2024] group h-full">
                  <div className="relative text-center p-6 md:p-8 bg-gradient-to-br from-[#151B25] to-[#000000] border-0 rounded-[11px] transition-all duration-500 ease-out h-full">
                    {/* Gradient Border Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-[1px] bg-gradient-to-br from-[#151B25] to-[#000000] rounded-[inherit]" />
                    </div>

                    <div className="relative text-4xl md:text-5xl lg:text-6xl font-headings font-bold text-white mb-3">
                      <CountUp
                        end={parseInt(result.value.replace(/[^0-9]/g, ""))}
                        duration={2.5}
                        prefix={result.value.includes("+") ? "+" : result.value.includes("-") ? "-" : ""}
                        suffix={result.suffix}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    </div>
                    <div className="relative text-white/70 font-body text-sm md:text-base">
                      {result.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
