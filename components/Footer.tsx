"use client";

import { Separator } from "@/components/ui/separator";
import { Instagram, Linkedin, Mail } from "lucide-react";

const navigation = [
  { name: "Sobre", href: "#sobre" },
  { name: "Soluções", href: "#solucoes" },
  { name: "Casos", href: "#casos" },
  { name: "Diferenciais", href: "#diferenciais" },
  { name: "FAQ", href: "#faq" },
];

const social = [
  {
    name: "Instagram",
    href: "https://instagram.com/wisercorporate",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/wiser-corporate",
    icon: Linkedin,
  },
];

const legal = [
  { name: "Política de Privacidade", href: "#" },
  { name: "Termos de Uso", href: "#" },
  { name: "LGPD", href: "#" },
];

export default function Footer() {
  const handleClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-background border-t border-white/10">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-headings font-bold text-xl md:text-2xl mb-4">
              WISER CORPORATE
            </h3>
            <p className="text-white/70 font-body text-xs md:text-sm leading-relaxed mb-6">
              Conectamos canais. Automatizamos resultados.
            </p>
            <p className="text-white/70 font-body text-xs md:text-sm leading-relaxed">
              Especialistas em comunicação inteligente para empresas que querem
              escalar
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-headings font-semibold text-base md:text-lg mb-4">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleClick(item.href)}
                    className="text-white/70 hover:text-white font-body text-xs md:text-sm transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-headings font-semibold text-base md:text-lg mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contato@wisercorporate.com"
                  className="text-white/70 hover:text-white font-body text-xs md:text-sm transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  contato@wisercorporate.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5581998132001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white font-body text-xs md:text-sm transition-colors"
                >
                  +55 81 998132001
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              {social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all group"
                  >
                    <Icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 font-body text-xs text-center md:text-left">
            © {new Date().getFullYear()} Wiser Corporate • Todos os direitos
            reservados
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            {legal.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/60 hover:text-white font-body text-xs transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
