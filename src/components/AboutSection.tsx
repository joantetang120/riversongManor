import { Leaf, Star, Heart, Calendar } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Immersion dans la nature",
    description: "8 000 acres de prairies, forêts et lacs préservés",
  },
  {
    icon: Star,
    title: "Expériences sur mesure",
    description: "Chaque séjour est unique, façonné selon vos désirs",
  },
  {
    icon: Heart,
    title: "Conservation & rewilding",
    description: "Un engagement profond pour la restauration écologique",
  },
  {
    icon: Calendar,
    title: "Séjours privés & événements",
    description: "Mariages, célébrations et retraites exclusives",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p className="text-accent font-body text-sm tracking-luxury uppercase mb-4">
            Notre Histoire
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground font-medium mb-8 leading-tight">
            Un sanctuaire où nature et luxe se rencontrent
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mb-8" />
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Wilderness Reserve est un domaine privé unique en Angleterre, conçu
            pour permettre à chacun de reconnecter avec la nature, le luxe et
            l'histoire. Situé dans la campagne de Suffolk, c'est une collection
            de maisons historiques, de cottages pittoresques et d'hébergements
            exclusifs répartis dans 8 000 acres de prairies, forêts et lacs.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-500">
                <value.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-500" />
              </div>
              <h3 className="font-display text-xl text-foreground font-medium mb-3">
                {value.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-2xl mx-auto text-center mt-20 pt-16 border-t border-border">
          <blockquote className="font-display text-2xl md:text-3xl text-foreground italic font-light leading-relaxed">
            "Where wilderness meets refined elegance"
          </blockquote>
          <p className="mt-4 text-muted-foreground font-body text-sm tracking-luxury uppercase">
            — The Philosophy of Wilderness Reserve
          </p>
        </div>
      </div>
    </section>
  );
};
