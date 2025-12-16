import { Leaf, Star, Heart, Calendar } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

export const AboutSection = () => {
  const { t, getText } = useTranslation();

  const values = [
    {
      icon: Leaf,
      title: getText(t.about.values.pureAir.title),
      description: getText(t.about.values.pureAir.description),
    },
    {
      icon: Star,
      title: getText(t.about.values.comfort.title),
      description: getText(t.about.values.comfort.description),
    },
    {
      icon: Heart,
      title: getText(t.about.values.tranquility.title),
      description: getText(t.about.values.tranquility.description),
    },
    {
      icon: Calendar,
      title: getText(t.about.values.escape.title),
      description: getText(t.about.values.escape.description),
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p className="text-accent font-body text-sm tracking-luxury uppercase mb-4">
            {getText(t.about.tagline)}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground font-medium mb-8 leading-tight">
            {getText(t.about.title)}
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mb-8" />
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            {getText(t.about.description)}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
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
            "{getText(t.about.quote)}"
          </blockquote>
          <p className="mt-4 text-muted-foreground font-body text-sm tracking-luxury uppercase">
            {getText(t.about.quoteAuthor)}
          </p>
        </div>
      </div>
    </section>
  );
};
