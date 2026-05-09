import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import ImpactMetrics from "@/components/ImpactMetrics";
import TabbedTechStack from "@/components/TabbedTechStack";
import CaseStudies from "@/components/CaseStudies";
import CodeSnippet from "@/components/CodeSnippet";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <ImpactMetrics />
        <TabbedTechStack />
        <CaseStudies />
        <CodeSnippet />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
