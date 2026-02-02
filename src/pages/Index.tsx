import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChiSiamo from "@/components/ChiSiamo";
import Progetti from "@/components/Progetti";
import Servizi from "@/components/Servizi";
import Contatti from "@/components/Contatti";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ChiSiamo />
      <Progetti />
      <Servizi />
      <Contatti />
      <Footer />
    </div>
  );
};

export default Index;
