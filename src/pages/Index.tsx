import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PropertyGrid } from "@/components/PropertyGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  // Simuler un utilisateur non connecté pour la démo
  const isLoggedIn = false;

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PropertyGrid isLoggedIn={isLoggedIn} />
      <Footer />
    </div>
  );
};

export default Index;
