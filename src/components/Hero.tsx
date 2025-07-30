import { Button } from "@/components/ui/button";
import { Search, MapPin, Home, Building } from "lucide-react";
import heroImage from "@/assets/hero-real-estate.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Trouvez votre
                <span className="bg-gradient-primary bg-clip-text text-transparent"> bien idéal</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Le réseau social immobilier qui révolutionne l'achat, la vente et la location de biens immobiliers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                <Search className="w-5 h-5" />
                Explorer les annonces
              </Button>
              <Button variant="outline" size="xl">
                <Building className="w-5 h-5" />
                Publier une annonce
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Annonces</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Agences</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Utilisateurs</div>
              </div>
            </div>
          </div>

          {/* Right Content - Search Card */}
          <div className="animate-slide-up">
            <div className="bg-gradient-card p-8 rounded-2xl shadow-hover backdrop-blur-sm border border-border/50">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Recherche rapide
              </h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="justify-start">
                    <Home className="w-4 h-4" />
                    Vente
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Building className="w-4 h-4" />
                    Location
                  </Button>
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Ville, quartier, code postal..."
                    className="w-full pl-10 pr-4 py-3 bg-background border border-input rounded-md focus:ring-2 focus:ring-ring focus:border-transparent transition-smooth"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Prix min"
                    className="px-4 py-3 bg-background border border-input rounded-md focus:ring-2 focus:ring-ring focus:border-transparent transition-smooth"
                  />
                  <input
                    type="text"
                    placeholder="Prix max"
                    className="px-4 py-3 bg-background border border-input rounded-md focus:ring-2 focus:ring-ring focus:border-transparent transition-smooth"
                  />
                </div>

                <Button variant="hero" className="w-full" size="lg">
                  <Search className="w-5 h-5" />
                  Rechercher
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};