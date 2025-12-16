import { Heart, Users, Utensils, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/LanguageContext";
import weddingImage from "@/assets/stylish-trendy-afro-france-couple-posed-together-autumn-day-black-african-models-love-sitting-against-wooden-decoration-with-flowers-pumpkins-min.jpg";

export const EventsSection = () => {
  const { t, getText } = useTranslation();

  const features = [
    {
      icon: Heart,
      title: getText(t.events.items.weddings.title),
      description: getText(t.events.items.weddings.description),
    },
    {
      icon: Users,
      title: getText(t.events.items.family.title),
      description: getText(t.events.items.family.description),
    },
    {
      icon: Utensils,
      title: getText(t.events.items.gastronomy.title),
      description: getText(t.events.items.gastronomy.description),
    },
    {
      icon: Music,
      title: getText(t.events.items.private.title),
      description: getText(t.events.items.private.description),
    },
  ];

  return (
    <section id="events" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-elevated img-reveal">
              <img
                src={weddingImage}
                alt="Event in the mountains"
                className="w-full h-[400px] md:h-[550px] object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-sm -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/20 rounded-sm -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <p className="text-accent font-body text-sm tracking-luxury uppercase mb-4">
              {getText(t.events.tagline)}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground font-medium mb-6 leading-tight">
              {getText(t.events.title)}
            </h2>
            <div className="w-16 h-px bg-accent mb-8" />
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-10">
              {getText(t.events.description)}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-base text-foreground font-medium mb-1">
                      {feature.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="tracking-luxury uppercase px-8 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {getText(t.events.cta)}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
