import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "A breathtaking escape from modern life. Every detail has been thoughtfully considered.",
    author: "James & Sophie W.",
    location: "London",
  },
  {
    quote: "Luxury, privacy and nature in perfect harmony. We've never experienced anything quite like it.",
    author: "The Harrison Family",
    location: "New York",
  },
  {
    quote: "Un lieu magique où le temps s'arrête. Une expérience inoubliable au cœur de la nature anglaise.",
    author: "Marie-Claire D.",
    location: "Paris",
  },
];

const pressLogos = [
  { name: "Condé Nast Traveller", initials: "CNT" },
  { name: "Tatler", initials: "T" },
  { name: "The Telegraph", initials: "TT" },
  { name: "Country Life", initials: "CL" },
  { name: "Vogue", initials: "V" },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-body text-sm tracking-luxury uppercase mb-4">
            Témoignages
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground font-medium mb-6 leading-tight">
            Ce qu'ils en disent
          </h2>
          <div className="w-16 h-px bg-accent mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((item, index) => (
            <div
              key={item.author}
              className="bg-card p-8 rounded-sm shadow-soft relative animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="w-10 h-10 text-accent/30 mb-4" />
              <blockquote className="font-display text-lg text-foreground italic leading-relaxed mb-6">
                "{item.quote}"
              </blockquote>
              <div>
                <p className="font-body text-foreground font-medium text-sm">
                  {item.author}
                </p>
                <p className="font-body text-muted-foreground text-xs">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Press Logos */}
        <div className="border-t border-border pt-16">
          <p className="text-center text-muted-foreground font-body text-sm tracking-luxury uppercase mb-10">
            Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {pressLogos.map((logo) => (
              <div
                key={logo.name}
                className="group cursor-pointer"
                title={logo.name}
              >
                <span className="font-display text-2xl md:text-3xl text-muted-foreground/50 group-hover:text-foreground transition-colors duration-300 tracking-wider">
                  {logo.initials}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
