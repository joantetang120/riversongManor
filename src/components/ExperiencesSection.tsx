import { Compass, Waves, Sparkles, Bird, Utensils } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import experiencePaddle from "@/assets/portrait-overweight-couple-traveling-world-together-min.jpg";
import experienceSpa from "@/assets/interior-sauna-min.jpg";

export const ExperiencesSection = () => {
  const { t, getText } = useTranslation();

  const experiences = [
    {
      icon: Compass,
      title: getText(t.experiences.items.hiking.title),
      description: getText(t.experiences.items.hiking.description),
    },
    {
      icon: Waves,
      title: getText(t.experiences.items.fishing.title),
      description: getText(t.experiences.items.fishing.description),
    },
    {
      icon: Sparkles,
      title: getText(t.experiences.items.wellness.title),
      description: getText(t.experiences.items.wellness.description),
    },
    {
      icon: Bird,
      title: getText(t.experiences.items.wildlife.title),
      description: getText(t.experiences.items.wildlife.description),
    },
    {
      icon: Utensils,
      title: getText(t.experiences.items.gastronomy.title),
      description: getText(t.experiences.items.gastronomy.description),
    },
  ];

  return (
    <section id="experiences" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <p className="text-accent font-body text-sm tracking-luxury uppercase mb-4">
              {getText(t.experiences.tagline)}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground font-medium mb-6 leading-tight">
              {getText(t.experiences.title)}
            </h2>
            <div className="w-16 h-px bg-accent mb-8" />
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-10">
              {getText(t.experiences.description)}
            </p>

            {/* Experiences List */}
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors duration-300">
                    <exp.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground font-medium mb-1">
                      {exp.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-sm overflow-hidden shadow-elevated img-reveal">
                <img
                  src={experiencePaddle}
                  alt="Activities in nature"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>

              {/* Secondary Image */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 md:w-64 md:h-64 rounded-sm overflow-hidden shadow-card z-20 border-4 border-background img-reveal hidden md:block">
                <img
                  src={experienceSpa}
                  alt="Wellness and relaxation"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-accent/30 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
