import { Compass, Waves, Sparkles, Bird, PartyPopper } from "lucide-react";
import experiencePaddle from "@/assets/experience-paddle.jpg";
import experienceSpa from "@/assets/experience-spa.jpg";

const experiences = [
  {
    icon: Compass,
    title: "Randonnée & Vélo",
    description: "Explorez les sentiers autour des lacs et à travers les prairies",
  },
  {
    icon: Waves,
    title: "Paddle & Navigation",
    description: "Glissez sur les étangs au lever du soleil",
  },
  {
    icon: Sparkles,
    title: "Bien-être & Spa",
    description: "Massages, saunas et moments de sérénité absolue",
  },
  {
    icon: Bird,
    title: "Observation Nature",
    description: "Découvrez la faune locale avec nos guides experts",
  },
  {
    icon: PartyPopper,
    title: "Événements Privés",
    description: "Mariages, anniversaires et célébrations sur mesure",
  },
];

export const ExperiencesSection = () => {
  return (
    <section id="experiences" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <p className="text-accent font-body text-sm tracking-luxury uppercase mb-4">
              Expériences
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground font-medium mb-6 leading-tight">
              Des moments inoubliables
            </h2>
            <div className="w-16 h-px bg-accent mb-8" />
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-10">
              Nos expériences sont conçues pour enrichir chaque séjour, de la
              tranquillité absolue au plaisir partagé. Chaque activité est une
              invitation à la découverte.
            </p>

            {/* Experiences List */}
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
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
                  alt="Paddleboarding on the lake"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
              
              {/* Secondary Image */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 md:w-64 md:h-64 rounded-sm overflow-hidden shadow-card z-20 border-4 border-background img-reveal hidden md:block">
                <img
                  src={experienceSpa}
                  alt="Spa and wellness"
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
