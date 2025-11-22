import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Problems from "@/components/sections/Problems";
import Solutions from "@/components/sections/Solutions";
import CasesTimeline from "@/components/sections/CasesTimeline";
import Differentials from "@/components/sections/Differentials";
import Founder from "@/components/sections/Founder";
import FAQ from "@/components/sections/FAQ";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Problems />
      <Solutions />
      <CasesTimeline />
      <Differentials />
      <Founder />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
