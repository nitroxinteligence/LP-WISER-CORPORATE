"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso de equipe técnica?",
    answer:
      "Não. Cuidamos de toda implementação e integração. Nossa equipe especializada cuida de todo o processo técnico, desde a configuração inicial até a integração com seus sistemas existentes.",
  },
  {
    question: "Quanto tempo leva para implementar?",
    answer:
      "Entre 15 a 30 dias para estar operacional. Para projetos maiores, o tempo pode aumentar. O cronograma é adaptado conforme a complexidade da sua operação e necessidades específicas.",
  },
  {
    question: "Funciona para meu segmento?",
    answer:
      "Já implementamos em dezenas de setores: bets, loteria, clubes, e-commerce, fintech, SaaS, entre outros. Nossa solução é adaptável para qualquer segmento que precise de comunicação eficiente com clientes.",
  },
  {
    question: "Preciso trocar meu CRM?",
    answer:
      "Não. Integramos com sistemas existentes. Trabalhamos com os principais CRMs do mercado (Kommo, Smartico, Optimove, RD Station) e podemos integrar com praticamente qualquer sistema via API.",
  },
  {
    question: "Quanto custa?",
    answer:
      "Modelos flexíveis: mensalidade fixa, custo por disparo ou success fee. Consultoria gratuita para orçamento personalizado. Entre em contato para receber uma proposta adequada ao seu volume e necessidades.",
  },
  {
    question: "E se não der resultado?",
    answer:
      "Trabalhamos com métricas claras e acompanhamento contínuo. Temos histórico de 98% de satisfação e ROI positivo em nossos clientes. Nosso compromisso é com resultados mensuráveis e melhoria contínua.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="faq"
      ref={ref}
      className="py-12 md:py-16 lg:py-20 xl:py-24 px-4 md:px-6 lg:px-8 bg-background"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-headings font-medium text-white mb-4
            text-[28px] leading-[34px]
            md:text-[36px] md:leading-[44px]
            lg:text-[44px] lg:leading-[52px]
            tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-white/80 font-body text-base md:text-lg">
            Tire suas dúvidas sobre nossas soluções
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="relative p-[1px] rounded-xl bg-gradient-to-br from-[#1d232d] to-[#1D2024] group"
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-0 bg-gradient-to-br from-[#151B25] to-[#000000] rounded-[11px] px-6 md:px-8 overflow-hidden transition-all"
                >
                  <AccordionTrigger className="text-left text-white font-headings font-semibold text-sm md:text-base lg:text-lg hover:no-underline hover:text-white/90 transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 font-body text-xs md:text-sm lg:text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
