import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wiser Corporate - Conectamos canais. Automatizamos resultados.",
  description: "A Wiser Corporate transforma como sua empresa se comunica com clientes: mais conversões, menos custos operacionais, zero fricção.",
  keywords: ["comunicação omnichannel", "automação", "IA", "WhatsApp API", "CRM", "marketing digital"],
  authors: [{ name: "Wiser Corporate" }],
  openGraph: {
    title: "Wiser Corporate - Conectamos canais. Automatizamos resultados.",
    description: "A Wiser Corporate transforma como sua empresa se comunica com clientes: mais conversões, menos custos operacionais, zero fricção.",
    url: "https://wisercorporate.com",
    siteName: "Wiser Corporate",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wiser Corporate - Conectamos canais. Automatizamos resultados.",
    description: "A Wiser Corporate transforma como sua empresa se comunica com clientes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${inter.variable} ${manrope.variable} font-body antialiased bg-background text-white`}
      >
        {children}
      </body>
    </html>
  );
}
