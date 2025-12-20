import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <WhyUs />
        <Testimonials />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
