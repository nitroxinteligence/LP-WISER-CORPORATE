"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Send, Target, BarChart3, Check, Image } from "lucide-react";

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
          <div className="inline-block mb-6 px-6 py-2 rounded-[55px] border border-[#171819] bg-transparent">
            <span className="text-white/80 font-body text-sm md:text-base">
              Inteligente, integrada e rentável
            </span>
          </div>
          <h2 className="font-headings font-medium text-white mb-4
            text-[28px] leading-[34px]
            md:text-[36px] md:leading-[44px]
            lg:text-[44px] lg:leading-[52px]
            tracking-tight">
            A nova era da comunicação empresarial
          </h2>
        </motion.div>

        {/* Solutions Cards */}
        <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {solutions.map((solution, index) => {

            // Wrapper especial para os dois primeiros cards com vídeo sticky
            if (index === 0) {
              return (
                <div key="first-two-cards" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                  {/* Coluna Esquerda: Cards de Conteúdo */}
                  <div className="space-y-12">
                    {/* Card 1: Jornada Hiper Personalizada (index 0) */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                      transition={{ duration: 0.6, delay: 0 * 0.1 }}
                    >
                      <div className="relative p-[1px] rounded-xl bg-gradient-to-br from-[#1d232d] to-[#1D2024] group">
                        <Card className="relative border-0 bg-gradient-to-br from-[#151B25] to-[#000000] transition-all duration-500 ease-out rounded-[11px]">
                          {/* Gradient Border Effect on Hover */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <div className="absolute inset-[1px] bg-gradient-to-br from-[#151B25] to-[#000000] rounded-[inherit]" />
                          </div>

                          <CardContent className="relative p-8 md:p-10 lg:p-12">
                            {/* Header Section */}
                            <div className="space-y-3 mb-10">
                              <h3 className="text-white font-headings font-semibold text-2xl md:text-3xl lg:text-[32px] tracking-tight">
                                {solutions[0].title}
                              </h3>
                              <p className="text-white/60 font-body text-sm md:text-base leading-relaxed">
                                {solutions[0].subtitle}
                              </p>
                            </div>

                            {/* Features Grid */}
                            <div className="space-y-6">
                              {solutions[0].features.map((feature, featureIndex) => (
                                <motion.div
                                  key={featureIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                  transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                                  className="group/feature relative"
                                >
                                  {/* Feature Container */}
                                  <div className="relative rounded-lg
                                    bg-gradient-to-br from-white/[0.03] to-transparent
                                    border border-white/[0.06]
                                    p-5 md:p-6
                                    hover:bg-white/[0.05] hover:border-white/10
                                    transition-all duration-300">

                                    {/* Feature Title */}
                                    <h4 className="text-white/90 font-headings font-medium text-base md:text-lg mb-4 flex items-center gap-2">
                                      <span className="w-1 h-4 bg-accent-primary rounded-full opacity-70" />
                                      {feature.title}
                                    </h4>

                                    {/* Items List */}
                                    <ul className="space-y-3 pl-3">
                                      {feature.items.map((item, itemIndex) => (
                                        <li
                                          key={itemIndex}
                                          className="text-white/60 text-sm md:text-[15px] leading-relaxed
                                            flex items-start gap-3
                                            hover:text-white/80 transition-colors duration-200"
                                        >
                                          <Check className="w-4 h-4 text-accent-primary/70 flex-shrink-0 mt-0.5
                                            group-hover/feature:text-accent-primary
                                            transition-colors duration-300" />
                                          <span className="flex-1">{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Separator Line (except last item) */}
                                  {featureIndex < solutions[0].features.length - 1 && (
                                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                                  )}
                                </motion.div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </motion.div>

                    {/* Card 2: Disparos em Massa (index 1) */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                      transition={{ duration: 0.6, delay: 1 * 0.1 }}
                    >
                      <div className="relative p-[1px] rounded-xl bg-gradient-to-br from-[#1d232d] to-[#1D2024] group">
                        <Card className="relative border-0 bg-gradient-to-br from-[#151B25] to-[#000000] transition-all duration-500 ease-out rounded-[11px]">
                          {/* Gradient Border Effect on Hover */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <div className="absolute inset-[1px] bg-gradient-to-br from-[#151B25] to-[#000000] rounded-[inherit]" />
                          </div>

                          <CardContent className="relative p-8 md:p-10 lg:p-12">
                            {/* Header Section */}
                            <div className="space-y-3 mb-10">
                              <h3 className="text-white font-headings font-semibold text-2xl md:text-3xl lg:text-[32px] tracking-tight">
                                {solutions[1].title}
                              </h3>
                              <p className="text-white/60 font-body text-sm md:text-base leading-relaxed">
                                {solutions[1].subtitle}
                              </p>
                            </div>

                            {/* Features Grid */}
                            <div className="space-y-6">
                              {solutions[1].features.map((feature, featureIndex) => (
                                <motion.div
                                  key={featureIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                  transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                                  className="group/feature relative"
                                >
                                  {/* Feature Container */}
                                  <div className="relative rounded-lg
                                    bg-gradient-to-br from-white/[0.03] to-transparent
                                    border border-white/[0.06]
                                    p-5 md:p-6
                                    hover:bg-white/[0.05] hover:border-white/10
                                    transition-all duration-300">

                                    {/* Feature Title */}
                                    <h4 className="text-white/90 font-headings font-medium text-base md:text-lg mb-4 flex items-center gap-2">
                                      <span className="w-1 h-4 bg-accent-primary rounded-full opacity-70" />
                                      {feature.title}
                                    </h4>

                                    {/* Items List */}
                                    <ul className="space-y-3 pl-3">
                                      {feature.items.map((item, itemIndex) => (
                                        <li
                                          key={itemIndex}
                                          className="text-white/60 text-sm md:text-[15px] leading-relaxed
                                            flex items-start gap-3
                                            hover:text-white/80 transition-colors duration-200"
                                        >
                                          <Check className="w-4 h-4 text-accent-primary/70 flex-shrink-0 mt-0.5
                                            group-hover/feature:text-accent-primary
                                            transition-colors duration-300" />
                                          <span className="flex-1">{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Separator Line (except last item) */}
                                  {featureIndex < solutions[1].features.length - 1 && (
                                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                                  )}
                                </motion.div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </motion.div>
                  </div>

                  {/* Coluna Direita: Vídeo Sticky */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.6, delay: 0 * 0.1 }}
                    className="sticky top-24"
                  >
                    <div className="relative p-[1px] rounded-xl bg-gradient-to-br from-[#1d232d] to-[#1D2024] group">
                      <Card className="relative group
                        bg-gradient-to-br from-[#151B25] to-[#000000]
                        border-0
                        transition-all duration-500 rounded-[11px]">
                        {/* Subtle glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <CardContent className="relative p-0 overflow-hidden rounded-[11px]">
                          <div className="w-full aspect-video max-h-[450px]">
                            <video
                              loop
                              playsInline
                              className="w-full h-full object-cover"
                              onMouseEnter={(e) => {
                                e.currentTarget.muted = false;
                                e.currentTarget.play();
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.muted = true;
                                e.currentTarget.pause();
                              }}
                            >
                              <source
                                src="https://ckwjxuxatlqnuxbfltul.supabase.co/storage/v1/object/sign/docs-wiser-corp/video-1-homem.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wZmZiNWI3ZC0wNWJkLTQxNTQtYTFlZS1kM2Y5MWFhMjc4ZDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkb2NzLXdpc2VyLWNvcnAvdmlkZW8tMS1ob21lbS5tcDQiLCJpYXQiOjE3NjM3ODM4ODgsImV4cCI6MjExMDY3OTg4OH0.A_STL1QQeG4lXDxSSixHCNvTgjUOhWyTAf4H0M5_XXE"
                                type="video/mp4"
                              />
                              Seu navegador não suporta vídeos HTML5.
                            </video>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                </div>
              );
            }

            // Index 1 retorna null (já renderizado dentro do wrapper do index 0)
            if (index === 1) {
              return null;
            }

            // Wrapper para cards 2 e 3 (Aquisição Inteligente + Gestão com IA) com vídeo sticky
            if (index === 2) {
              return (
                <div key="second-two-cards" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                  {/* Coluna Esquerda: Cards de Conteúdo */}
                  <div className="space-y-12">
                    {/* Card 1: Aquisição Inteligente (index 2) */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                      transition={{ duration: 0.6, delay: 2 * 0.1 }}
                    >
                      <div className="relative p-[1px] rounded-xl bg-gradient-to-br from-[#1d232d] to-[#1D2024] group">
                        <Card className="relative border-0 bg-gradient-to-br from-[#151B25] to-[#000000] transition-all duration-500 ease-out rounded-[11px]">
                          {/* Gradient Border Effect on Hover */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <div className="absolute inset-[1px] bg-gradient-to-br from-[#151B25] to-[#000000] rounded-[inherit]" />
                          </div>

                          <CardContent className="relative p-8 md:p-10 lg:p-12">
                            {/* Header Section */}
                            <div className="space-y-3 mb-10">
                              <h3 className="text-white font-headings font-semibold text-2xl md:text-3xl lg:text-[32px] tracking-tight">
                                {solutions[2].title}
                              </h3>
                              <p className="text-white/60 font-body text-sm md:text-base leading-relaxed">
                                {solutions[2].subtitle}
                              </p>
                            </div>

                            {/* Features Grid */}
                            <div className="space-y-6">
                              {solutions[2].features.map((feature, featureIndex) => (
                                <motion.div
                                  key={featureIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                  transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                                  className="group/feature relative"
                                >
                                  {/* Feature Container */}
                                  <div className="relative rounded-lg
                                    bg-gradient-to-br from-white/[0.03] to-transparent
                                    border border-white/[0.06]
                                    p-5 md:p-6
                                    hover:bg-white/[0.05] hover:border-white/10
                                    transition-all duration-300">

                                    {/* Feature Title */}
                                    <h4 className="text-white/90 font-headings font-medium text-base md:text-lg mb-4 flex items-center gap-2">
                                      <span className="w-1 h-4 bg-accent-primary rounded-full opacity-70" />
                                      {feature.title}
                                    </h4>

                                    {/* Items List */}
                                    <ul className="space-y-3 pl-3">
                                      {feature.items.map((item, itemIndex) => (
                                        <li
                                          key={itemIndex}
                                          className="text-white/60 text-sm md:text-[15px] leading-relaxed
                                            flex items-start gap-3
                                            hover:text-white/80 transition-colors duration-200"
                                        >
                                          <Check className="w-4 h-4 text-accent-primary/70 flex-shrink-0 mt-0.5
                                            group-hover/feature:text-accent-primary
                                            transition-colors duration-300" />
                                          <span className="flex-1">{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Separator Line (except last item) */}
                                  {featureIndex < solutions[2].features.length - 1 && (
                                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                                  )}
                                </motion.div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </motion.div>

                    {/* Card 2: Gestão com IA (index 3) */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                      transition={{ duration: 0.6, delay: 3 * 0.1 }}
                    >
                      <div className="relative p-[1px] rounded-xl bg-gradient-to-br from-[#1d232d] to-[#1D2024] group">
                        <Card className="relative border-0 bg-gradient-to-br from-[#151B25] to-[#000000] transition-all duration-500 ease-out rounded-[11px]">
                          {/* Gradient Border Effect on Hover */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <div className="absolute inset-[1px] bg-gradient-to-br from-[#151B25] to-[#000000] rounded-[inherit]" />
                          </div>

                          <CardContent className="relative p-8 md:p-10 lg:p-12">
                            {/* Header Section */}
                            <div className="space-y-3 mb-10">
                              <h3 className="text-white font-headings font-semibold text-2xl md:text-3xl lg:text-[32px] tracking-tight">
                                {solutions[3].title}
                              </h3>
                              <p className="text-white/60 font-body text-sm md:text-base leading-relaxed">
                                {solutions[3].subtitle}
                              </p>
                            </div>

                            {/* Features Grid */}
                            <div className="space-y-6">
                              {solutions[3].features.map((feature, featureIndex) => (
                                <motion.div
                                  key={featureIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                  transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                                  className="group/feature relative"
                                >
                                  {/* Feature Container */}
                                  <div className="relative rounded-lg
                                    bg-gradient-to-br from-white/[0.03] to-transparent
                                    border border-white/[0.06]
                                    p-5 md:p-6
                                    hover:bg-white/[0.05] hover:border-white/10
                                    transition-all duration-300">

                                    {/* Feature Title */}
                                    <h4 className="text-white/90 font-headings font-medium text-base md:text-lg mb-4 flex items-center gap-2">
                                      <span className="w-1 h-4 bg-accent-primary rounded-full opacity-70" />
                                      {feature.title}
                                    </h4>

                                    {/* Items List */}
                                    <ul className="space-y-3 pl-3">
                                      {feature.items.map((item, itemIndex) => (
                                        <li
                                          key={itemIndex}
                                          className="text-white/60 text-sm md:text-[15px] leading-relaxed
                                            flex items-start gap-3
                                            hover:text-white/80 transition-colors duration-200"
                                        >
                                          <Check className="w-4 h-4 text-accent-primary/70 flex-shrink-0 mt-0.5
                                            group-hover/feature:text-accent-primary
                                            transition-colors duration-300" />
                                          <span className="flex-1">{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Separator Line (except last item) */}
                                  {featureIndex < solutions[3].features.length - 1 && (
                                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                                  )}
                                </motion.div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </motion.div>
                  </div>

                  {/* Coluna Direita: Vídeo Sticky */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.6, delay: 2 * 0.1 }}
                    className="sticky top-24"
                  >
                    <div className="relative p-[1px] rounded-xl bg-gradient-to-br from-[#1d232d] to-[#1D2024] group">
                      <Card className="relative group
                        bg-gradient-to-br from-[#151B25] to-[#000000]
                        border-0
                        transition-all duration-500 rounded-[11px]">
                        {/* Subtle glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <CardContent className="relative p-0 overflow-hidden rounded-[11px]">
                          <div className="w-full aspect-video max-h-[450px]">
                            <video
                              loop
                              playsInline
                              className="w-full h-full object-cover"
                              onMouseEnter={(e) => {
                                e.currentTarget.muted = false;
                                e.currentTarget.play();
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.muted = true;
                                e.currentTarget.pause();
                              }}
                            >
                              <source
                                src="https://ckwjxuxatlqnuxbfltul.supabase.co/storage/v1/object/sign/docs-wiser-corp/video-2-mulher.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wZmZiNWI3ZC0wNWJkLTQxNTQtYTFlZS1kM2Y5MWFhMjc4ZDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkb2NzLXdpc2VyLWNvcnAvdmlkZW8tMi1tdWxoZXIubXA0IiwiaWF0IjoxNzYzNzgyODI4LCJleHAiOjIxMTA2Nzg4Mjh9.RjvXbGnwgLN_ws557yNBAs8Phya7qtb6dtLYAlIBL5w"
                                type="video/mp4"
                              />
                              Seu navegador não suporta vídeos HTML5.
                            </video>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                </div>
              );
            }

            // Index 3 retorna null (já renderizado dentro do wrapper do index 2)
            if (index === 3) {
              return null;
            }

            // Demais cards com mesmo layout (2 cards separados)
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
                {/* Card 1: Conteúdo (sem ícone) - Wrapper com gradient border */}
                <div className="relative p-[1px] rounded-xl bg-gradient-to-br from-[#1d232d] to-[#1D2024] group">
                  <Card className="relative group
                    bg-gradient-to-br from-[#151B25] to-[#000000]
                    border-0
                    transition-all duration-500 ease-out rounded-[11px]">
                    {/* Gradient Border Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-[1px] bg-gradient-to-br from-[#151B25] to-[#000000] rounded-[inherit]" />
                    </div>

                    <CardContent className="relative p-8 md:p-10 lg:p-12">
                      {/* Header Section */}
                      <div className="space-y-3 mb-10">
                        <h3 className="text-white font-headings font-semibold text-2xl md:text-3xl lg:text-[32px] tracking-tight">
                          {solution.title}
                        </h3>
                        <p className="text-white/60 font-body text-sm md:text-base leading-relaxed">
                          {solution.subtitle}
                        </p>
                      </div>

                      {/* Features Grid */}
                      <div className="space-y-6">
                        {solution.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                            className="group/feature relative"
                          >
                            {/* Feature Container */}
                            <div className="relative rounded-lg
                              bg-gradient-to-br from-white/[0.03] to-transparent
                              border border-white/[0.06]
                              p-5 md:p-6
                              hover:bg-white/[0.05] hover:border-white/10
                              transition-all duration-300">

                              {/* Feature Title */}
                              <h4 className="text-white/90 font-headings font-medium text-base md:text-lg mb-4 flex items-center gap-2">
                                <span className="w-1 h-4 bg-accent-primary rounded-full opacity-70" />
                                {feature.title}
                              </h4>

                              {/* Items List */}
                              <ul className="space-y-3 pl-3">
                                {feature.items.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="text-white/60 text-sm md:text-[15px] leading-relaxed
                                      flex items-start gap-3
                                      hover:text-white/80 transition-colors duration-200"
                                  >
                                    <Check className="w-4 h-4 text-accent-primary/70 flex-shrink-0 mt-0.5
                                      group-hover/feature:text-accent-primary
                                      transition-colors duration-300" />
                                    <span className="flex-1">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Separator Line (except last item) */}
                            {featureIndex < solution.features.length - 1 && (
                              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Card 2: Imagem - Sticky - Wrapper com gradient border */}
                <div className="sticky top-24">
                  <div className="relative p-[1px] rounded-xl bg-gradient-to-br from-[#1d232d] to-[#1D2024] group">
                    <Card className="relative group
                      bg-gradient-to-br from-[#151B25] to-[#000000]
                      border-0
                      transition-all duration-500 rounded-[11px]">
                      {/* Subtle glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <CardContent className="relative p-0">
                        <div className="w-full flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px] p-12">
                          {/* Icon with subtle animation */}
                          <div className="relative">
                            <div className="absolute inset-0 bg-accent-primary/20 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <Image className="relative w-20 h-20 text-white/20 group-hover:text-white/30 transition-colors duration-300" aria-label="Visual Preview" />
                          </div>

                          {/* Text */}
                          <p className="mt-6 text-white/30 text-sm font-body tracking-wide">
                            Visual Preview
                          </p>

                          {/* Decorative grid pattern */}
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
