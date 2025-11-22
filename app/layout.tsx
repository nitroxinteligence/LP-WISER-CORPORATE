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
  icons: {
    icon: "https://ckwjxuxatlqnuxbfltul.supabase.co/storage/v1/object/sign/docs-wiser-corp/Logo%20-%20WISER%20CORP.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wZmZiNWI3ZC0wNWJkLTQxNTQtYTFlZS1kM2Y5MWFhMjc4ZDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJkb2NzLXdpc2VyLWNvcnAvTG9nbyAtIFdJU0VSIENPUlAuc3ZnIiwiaWF0IjoxNzYzNzg0NDI0LCJleHAiOjIxMTA2ODA0MjR9.eia4DJuCBWIOuyO-qhBw1LuzJ51tjSIkFBf0eHjO4GE",
  },
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
