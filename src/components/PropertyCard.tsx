import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Eye } from "lucide-react";

interface PropertyCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  type: "Vente" | "Location";
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  isLoggedIn?: boolean;
  onViewDetails: () => void;
}

export const PropertyCard = ({
  title,
  price,
  location,
  type,
  bedrooms,
  bathrooms,
  area,
  image,
  isLoggedIn = false,
  onViewDetails,
}: PropertyCardProps) => {
  return (
    <Card className="group overflow-hidden bg-gradient-card hover:shadow-hover transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
      <div className="relative">
        <div
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <Badge
            variant={type === "Vente" ? "default" : "secondary"}
            className="absolute top-3 left-3 bg-primary/90 text-primary-foreground"
          >
            {type}
          </Badge>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center text-muted-foreground mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        <div className="text-2xl font-bold text-primary">
          {price}
          {type === "Location" && <span className="text-sm text-muted-foreground">/mois</span>}
        </div>

        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span>{bedrooms} ch.</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{bathrooms} sdb</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span>{area} m²</span>
          </div>
        </div>

        <Button 
          onClick={onViewDetails}
          variant={isLoggedIn ? "default" : "outline"} 
          className="w-full"
        >
          <Eye className="w-4 h-4 mr-2" />
          {isLoggedIn ? "Voir les détails" : "Se connecter pour voir"}
        </Button>
      </div>
    </Card>
  );
};