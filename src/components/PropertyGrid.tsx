import { PropertyCard } from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const mockProperties = [
  {
    id: "1",
    title: "Appartement moderne avec vue panoramique",
    price: "450 000 €",
    location: "Paris 15ème, Île-de-France",
    type: "Vente" as const,
    bedrooms: 3,
    bathrooms: 2,
    area: 85,
    image: property1,
  },
  {
    id: "2",
    title: "Maison familiale avec jardin",
    price: "1 800 €",
    location: "Marseille, Provence-Alpes-Côte d'Azur",
    type: "Location" as const,
    bedrooms: 4,
    bathrooms: 2,
    area: 120,
    image: property2,
  },
  {
    id: "3",
    title: "Penthouse de luxe en centre-ville",
    price: "2 300 000 €",
    location: "Lyon 2ème, Auvergne-Rhône-Alpes",
    type: "Vente" as const,
    bedrooms: 5,
    bathrooms: 3,
    area: 200,
    image: property3,
  },
  {
    id: "4",
    title: "Studio rénové proche métro",
    price: "950 €",
    location: "Paris 11ème, Île-de-France",
    type: "Location" as const,
    bedrooms: 1,
    bathrooms: 1,
    area: 28,
    image: property1,
  },
  {
    id: "5",
    title: "Villa avec piscine et vue mer",
    price: "750 000 €",
    location: "Nice, Provence-Alpes-Côte d'Azur",
    type: "Vente" as const,
    bedrooms: 4,
    bathrooms: 3,
    area: 180,
    image: property2,
  },
  {
    id: "6",
    title: "Loft industriel atypique",
    price: "2 100 €",
    location: "Bordeaux, Nouvelle-Aquitaine",
    type: "Location" as const,
    bedrooms: 2,
    bathrooms: 1,
    area: 95,
    image: property3,
  },
];

interface PropertyGridProps {
  isLoggedIn?: boolean;
}

export const PropertyGrid = ({ isLoggedIn = false }: PropertyGridProps) => {
  const { toast } = useToast();

  const handleViewDetails = () => {
    if (!isLoggedIn) {
      toast({
        title: "Connexion requise",
        description: "Veuillez vous connecter pour voir les détails de cette annonce.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Détails de l'annonce",
        description: "Redirection vers la page de détails...",
      });
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Annonces récentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection de biens immobiliers disponibles à la vente et à la location
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProperties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
              isLoggedIn={isLoggedIn}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Voir toutes les annonces
          </Button>
        </div>
      </div>
    </section>
  );
};