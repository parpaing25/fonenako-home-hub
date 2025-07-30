import { Button } from "@/components/ui/button";
import { Home, User, Building, Search, Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Fonenako
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-smooth">
              Accueil
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Annonces
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Agences
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              À propos
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <User className="w-4 h-4" />
              Connexion
            </Button>
            <Button variant="hero" size="sm">
              <Building className="w-4 h-4" />
              Publier
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 shadow-card border border-border">
              <a href="#" className="block px-3 py-2 text-foreground hover:bg-accent rounded-md transition-smooth">
                Accueil
              </a>
              <a href="#" className="block px-3 py-2 text-muted-foreground hover:bg-accent rounded-md transition-smooth">
                Annonces
              </a>
              <a href="#" className="block px-3 py-2 text-muted-foreground hover:bg-accent rounded-md transition-smooth">
                Agences
              </a>
              <a href="#" className="block px-3 py-2 text-muted-foreground hover:bg-accent rounded-md transition-smooth">
                À propos
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <User className="w-4 h-4" />
                  Connexion
                </Button>
                <Button variant="hero" className="w-full justify-start">
                  <Building className="w-4 h-4" />
                  Publier une annonce
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};