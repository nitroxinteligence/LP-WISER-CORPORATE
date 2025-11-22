"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Send, Target, BarChart3, Check, Image, Sparkles } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "Jornada Hiper Personalizada",
    subtitle: "Conversacional Omnichannel com IA & CRM",
    features: [
      {
        title: "Orquestração multicanal inteligente",
        items: [
          "WhatsApp API Oficial, SMS, RCS, E-mail, Voz",
          "Mensagens personalizadas por comportamento",
          "Timing perfeito definido por Machine Learning",
        ],
      },
      {
        title: "Integração completa com CRM",
        items: [
          "Kommo, Smartico, Optimove, RD Station",
          "Histórico unificado em tempo real",
          "Gatilhos automáticos por eventos",
        ],
      },
      {
        title: "IA conversacional 24/7",
        items: [
          "Qualificação automatizada de leads",
          "Respostas contextualizadas",
          "Escalada inteligente para humanos",
        ],
      },
      {
        title: "Jornadas sob medida",
        items: [
          "Onboarding, reativação, upsell",
          "A/B testing automático",
          "Otimização contínua de conversão",
        ],
      },
    ],
  },
  {
    icon: Send,
    title: "Disparos em Massa",
    subtitle: "Milhões de mensagens com inteligência e entregabilidade máxima",
    features: [
      {
        title: "Alto volume com qualidade",
        items: [
          "WhatsApp API Oficial: até 100 milhões/mês",
          "Taxa de entrega 95%+",
          "Agente IA para respostas automáticas",
        ],
      },
      {
        title: "Multicanal coordenado",
        items: [
          "SMS: alcance universal",
          "RCS: mensagens ricas e interativas",
          "E-mail: campanhas segmentadas",
          "Voz: humanização em escala",
        ],
      },
      {
        title: "Segmentação avançada",
        items: [
          "Por comportamento e perfil",
          "Horários otimizados por IA",
          "Frequência inteligente anti-spam",
          "Higienização & Enriquecimento de base",
        ],
      },
      {
        title: "Analytics em tempo real",
        items: [
          "Taxa de entrega, leitura, resposta",
          "ROI por canal e campanha",
          "Insights acionáveis automáticos",
        ],
      },
    ],
  },
  {
    icon: Target,
    title: "Aquisição Inteligente",
    subtitle: "Novos clientes com custo baixo e conversão alta",
    features: [
      {
        title: "Captação omnichannel",
        items: [
          "Landing pages integradas",
          "Formulários conversacionais",
          "Lead magnets automatizados",
        ],
      },
      {
        title: "Qualificação por IA",
        items: [
          "Scoring automático de leads",
          "Roteamento inteligente",
          "Priorização por potencial",
        ],
      },
      {
        title: "Nutrição automatizada",
        items: [
          "Sequências personalizadas",
          "Conteúdo por estágio do funil",
          "Follow-up incansável",
        ],
      },
      {
        title: "Custo de aquisição otimizado",
        items: [
          "30% menor que métodos tradicionais",
          "ROI positivo em 30 dias",
          "Escalabilidade sem aumentar time",
        ],
      },
    ],
  },
  {
    icon: BarChart3,
    title: "Gestão com IA",
    subtitle: "Decisões baseadas em dados, não em achismos",
    features: [
      {
        title: "Dashboard executivo em tempo real",
        items: [
          "Métricas consolidadas de todos canais",
          "Visualização clara e objetiva",
          "Alertas de oportunidades e riscos",
        ],
      },
      {
        title: "IA analítica preditiva",
        items: [
          "Previsão de churn",
          "Identificação de upsell",
          "Tendências de comportamento",
        ],
      },
      {
        title: "Relatórios automáticos",
        items: [
          "Performance por campanha",
          "Análise de cohort",
          "Attribution multi-touch",
        ],
      },
      {
        title: "Insights acionáveis",
        items: [
          "Recomendações automáticas",
          "Benchmarks do setor",
          "Planos de ação sugeridos",
        ],
      },
    ],
  },
];

export default function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="solucoes"
      ref={ref}
      className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 md:px-6 lg:px-8 bg-background"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-headings font-medium text-white mb-4
            text-[28px] leading-[34px]
            md:text-[36px] md:leading-[44px]
            lg:text-[44px] lg:leading-[52px]
            tracking-tight">
            A nova era da comunicação empresarial
          </h2>
          <p className="text-white/80 font-body text-base md:text-lg lg:text-xl">
            Inteligente, integrada e rentável
          </p>
        </motion.div>

        {/* Solutions Cards */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {solutions.map((solution, index) => {

            // Primeiro card com layout especial (2 cards separados) - REDESIGN MINIMALISTA
            if (index === 0) {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
                >
                  {/* Card 1: Conteúdo Redesenhado - MINIMALIST DESIGN */}
                  <Card className="relative overflow-hidden rounded-2xl
                    bg-gradient-to-br from-card-bg-start via-card-bg-start/95 to-card-bg-end
                    border-2 border-card-border/50
                    hover:border-accent-primary/30
                    transition-all duration-500 ease-out
                    hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
                    group">

                    {/* Gradient Overlay para profundidade */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

                    {/* Border interno sutil */}
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.05] pointer-events-none" />

                    <CardContent className="relative p-8 md:p-10 lg:p-12">
                      {/* Header Section */}
                      <div className="mb-10 md:mb-12 pb-8 border-b border-white/5">
                        <h3 className="text-white font-headings font-semibold
                          text-2xl md:text-3xl lg:text-4xl
                          mb-3 tracking-tight
                          leading-tight">
                          {solution.title}
                        </h3>
                        <p className="text-white/60 font-body text-sm md:text-base
                          leading-relaxed max-w-md">
                          {solution.subtitle}
                        </p>
                      </div>

                      {/* Features Grid - NOVA ESTRUTURA MINIMALISTA */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {solution.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="group/feature relative"
                          >
                            {/* Feature Card com background sutil */}
                            <div className="relative p-5 md:p-6 rounded-xl
                              bg-gradient-to-br from-white/[0.03] to-white/[0.01]
                              border border-white/[0.06]
                              hover:border-accent-primary/20
                              transition-all duration-300
                              hover:bg-white/[0.04]">

                              {/* Accent indicator - substituindo check icon */}
                              <div className="absolute top-5 left-0 w-1 h-8
                                bg-gradient-to-b from-accent-primary to-accent-primary/40
                                rounded-r-full
                                opacity-0 group-hover/feature:opacity-100
                                transition-opacity duration-300" />

                              {/* Feature Title */}
                              <h4 className="text-white font-semibold text-base md:text-lg
                                mb-4 leading-snug
                                group-hover/feature:text-white/95
                                transition-colors duration-300">
                                {feature.title}
                              </h4>

                              {/* Feature Items - SEM CHECK ICONS */}
                              <ul className="space-y-2.5">
                                {feature.items.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="text-white/50 text-sm md:text-[15px]
                                      leading-relaxed
                                      pl-4 relative
                                      before:content-['']
                                      before:absolute before:left-0 before:top-[10px]
                                      before:w-1.5 before:h-1.5
                                      before:rounded-full
                                      before:bg-accent-primary/40
                                      hover:text-white/70
                                      transition-colors duration-200"
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Card 2: Imagem - Sticky com design aprimorado */}
                  <div className="sticky top-24">
                    <Card className="relative overflow-hidden rounded-2xl
                      bg-gradient-to-br from-card-bg-start via-card-bg-start/95 to-card-bg-end
                      border-2 border-card-border/50
                      hover:border-accent-primary/30
                      transition-all duration-500
                      hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

                      {/* Border interno */}
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.05] pointer-events-none" />

                      <CardContent className="relative p-0">
                        <div className="w-full flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
                          <div className="text-white/20 text-center">
                            <Sparkles className="w-20 h-20 mx-auto mb-6 opacity-20" />
                            <p className="text-sm font-medium tracking-wide uppercase">
                              Visual Preview
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            }

            // Demais cards mantêm o layout atual
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
              >
                {/* Card 1: Conteúdo (layout atual mantido) */}
                <Card className="bg-gradient-to-br from-card-bg-start to-card-bg-end border border-card-border hover:border-white/30 transition-all duration-300">
                  <CardContent className="p-6 md:p-8 lg:p-10">
                    <div className="space-y-6">
                      {/* Title */}
                      <h3 className="text-white font-headings font-semibold text-xl md:text-2xl lg:text-3xl">
                        {solution.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-white/70 font-body text-sm md:text-base">
                        {solution.subtitle}
                      </p>

                      {/* Features List */}
                      <div className="space-y-4">
                        {solution.features.map((feature, featureIndex) => (
                          <div key={featureIndex}>
                            <h4 className="text-white font-semibold text-base md:text-lg mb-2">
                              {feature.title}
                            </h4>
                            <ul className="space-y-2">
                              {feature.items.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="text-white/70 text-sm md:text-base flex items-start gap-2"
                                >
                                  <Check className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Card 2: Imagem - Sticky */}
                <div className="sticky top-24">
                  <Card className="bg-gradient-to-br from-card-bg-start to-card-bg-end border border-card-border hover:border-white/30 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="w-full flex items-center justify-center min-h-[400px]">
                        <div className="text-white/30 text-center">
                          <Image className="w-16 h-16 mx-auto mb-4 opacity-30" aria-label="Visual Preview" />
                          <p className="text-sm">Visual Preview</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
