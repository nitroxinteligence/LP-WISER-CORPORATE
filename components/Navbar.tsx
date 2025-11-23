"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Sobre", href: "#sobre" },
  { name: "Soluções", href: "#solucoes" },
  { name: "Casos", href: "#casos" },
  { name: "Diferenciais", href: "#diferenciais" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past hero section (approximately one viewport height)
      const heroHeight = window.innerHeight;
      setScrolled(window.scrollY > heroHeight * 0.8);

      // Find active section
      const sections = navigation.map((item) => {
        const element = document.querySelector(item.href);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: item.href,
            top: rect.top,
            bottom: rect.bottom,
          };
        }
        return null;
      }).filter(Boolean);

      const current = sections.find(
        (section) => section && section.top <= 100 && section.bottom >= 100
      );

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "translate-y-0 opacity-100 bg-background/95 backdrop-blur-md border-b border-white/10"
          : "-translate-y-full opacity-0 bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between px-4 md:px-6 lg:px-8 py-4 md:py-5">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 bg-white rounded-lg transition-all hover:shadow-lg hover:shadow-white/30"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="font-headings font-bold text-black text-xl">
              W
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item.href)}
                className={`text-sm font-body font-medium transition-colors relative ${
                  activeSection === item.href
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.name}
                {activeSection === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#111B33] to-[#010103] rounded-full" />
                )}
              </button>
            ))}
            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/5581998132001?text=Olá! Gostaria de agendar uma consultoria gratuita.",
                  "_blank"
                )
              }
              className="bg-white hover:bg-white/90 text-black font-semibold px-6 py-2.5 rounded-lg transition-all shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/40"
            >
              Falar com Especialista
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-background/98 backdrop-blur-md">
            <div className="flex flex-col gap-4 p-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleClick(item.href)}
                  className={`text-left py-2 font-body transition-colors ${
                    activeSection === item.href
                      ? "text-white font-semibold"
                      : "text-white/80"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => {
                  window.open(
                    "https://wa.me/5581998132001?text=Olá! Gostaria de agendar uma consultoria gratuita.",
                    "_blank"
                  );
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-white hover:bg-white/90 text-black font-semibold px-6 py-3 rounded-lg shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/40"
              >
                Falar com Especialista
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
