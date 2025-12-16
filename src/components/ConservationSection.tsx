import { useTranslation } from "@/contexts/LanguageContext";
import conservationImage from "@/assets/conservation.jpg";

export const ConservationSection = () => {
  const { t, getText, language } = useTranslation();

  const stats = [
    { value: t.conservation.stats.altitude.value, label: getText(t.conservation.stats.altitude.label) },
    { value: t.conservation.stats.birds.value, label: getText(t.conservation.stats.birds.label) },
    { value: t.conservation.stats.trails.value, label: getText(t.conservation.stats.trails.label) },
    { value: t.conservation.stats.years.value, label: getText(t.conservation.stats.years.label) },
  ];

  return (
    <section id="conservation" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={conservationImage}
          alt="Mountain landscape"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-accent font-body text-sm tracking-luxury uppercase mb-4">
              {getText(t.conservation.tagline)}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary-foreground font-medium mb-6 leading-tight">
              {getText(t.conservation.title)}
            </h2>
            <div className="w-16 h-px bg-accent mb-8" />
            <p className="font-body text-primary-foreground/80 text-lg leading-relaxed mb-6">
              {getText(t.conservation.description1)}
            </p>
            <p className="font-body text-primary-foreground/70 leading-relaxed mb-10">
              {getText(t.conservation.description2)}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="font-display text-3xl md:text-4xl text-accent font-semibold mb-1">
                    {stat.value}
                  </p>
                  <p className="font-body text-primary-foreground/60 text-xs tracking-refined uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-sm p-8 md:p-10 border border-primary-foreground/10">
            <h3 className="font-display text-2xl text-primary-foreground font-medium mb-8">
              {getText(t.conservation.timelineTitle)}
            </h3>
            <div className="space-y-6">
              {t.conservation.timeline.map((item, index) => (
                <div
                  key={item.year}
                  className="flex items-center gap-6 group animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="font-display text-lg text-accent font-semibold">
                      {item.year}
                    </span>
                  </div>
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-accent group-hover:scale-125 transition-transform duration-300" />
                    {index < t.conservation.timeline.length - 1 && (
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-px h-12 bg-primary-foreground/20" />
                    )}
                  </div>
                  <p className="font-body text-primary-foreground/80">
                    {item.event[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
