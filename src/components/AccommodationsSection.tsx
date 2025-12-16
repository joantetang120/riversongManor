import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import sibtonManor from "@/assets/sibton-manor.jpg";
import walledGarden from "@/assets/walled-garden.jpg";
import chapelBarn from "@/assets/chapel-barn.jpg";
import cottageHideaway from "@/assets/cottage-hideaway.jpg";

const accommodations = [
  {
    image: sibtonManor,
    title: "Sibton Park Manor",
    subtitle: "Grand Manoir Historique",
    description:
      "12 chambres somptueuses, cinéma privé, spa et jardins à l'anglaise. L'élégance d'une autre époque.",
    features: ["12 Chambres", "Cinéma", "Spa", "Jardins"],
  },
  {
    image: walledGarden,
    title: "Walled Garden Retreat",
    subtitle: "Élégance Contemporaine",
    description:
      "Architecture moderne au cœur d'un jardin clos. Sauna finlandais et hot tub sous les étoiles.",
    features: ["Design Moderne", "Sauna", "Hot Tub", "Jardin Privé"],
  },
  {
    image: chapelBarn,
    title: "Chapel Barn",
    subtitle: "Grange Rénovée",
    description:
      "Charme rustique et confort absolu. Piscine intérieure chauffée, salle de sport et espaces de divertissement.",
    features: ["Piscine Intérieure", "Gym", "Billard", "Poutres Apparentes"],
  },
  {
    image: cottageHideaway,
    title: "Cottages & Hideaways",
    subtitle: "Retraites Intimes",
    description:
      "Moat Cottage, Hex Cottage, Cartshed... Des refuges pittoresques nichés dans la campagne.",
    features: ["Intime", "Charme Rustique", "Cheminée", "Nature"],
  },
];

export const AccommodationsSection = () => {
  return (
    <section id="accommodations" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p className="text-accent font-body text-sm tracking-luxury uppercase mb-4">
            Hébergements
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground font-medium mb-6 leading-tight">
            Nos Propriétés Iconiques
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mb-8" />
          <p className="font-body text-muted-foreground text-lg">
            Des manoirs historiques aux cottages pittoresques, chaque propriété
            raconte une histoire unique.
          </p>
        </div>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {accommodations.map((item, index) => (
            <article
              key={item.title}
              className="group bg-card rounded-sm overflow-hidden shadow-card card-hover animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-72 md:h-80 overflow-hidden img-reveal">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-accent font-body text-xs tracking-luxury uppercase mb-2">
                  {item.subtitle}
                </p>
                <h3 className="font-display text-2xl text-foreground font-medium mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-body rounded-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto text-primary hover:text-accent font-body text-sm tracking-refined uppercase"
                >
                  Découvrir
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="tracking-luxury uppercase px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Voir toutes les propriétés
          </Button>
        </div>
      </div>
    </section>
  );
};
