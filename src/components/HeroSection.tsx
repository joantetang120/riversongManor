import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingDialog } from "@/components/BookingDialog";
import heroImage from "@/assets/hero-estate.jpg";
export const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p
            className="text-primary-foreground/80 font-body text-sm md:text-base tracking-luxury uppercase mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Suffolk, England
          </p>

          {/* Main Title */}
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-medium leading-tight mb-6 text-shadow-hero animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Riversong Manor
          </h1>

          {/* Subtitle */}
          <p
            className="font-display text-xl sm:text-2xl md:text-3xl text-primary-foreground/90 italic font-light mb-4 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            The UK's Most Luxurious Country Estate
          </p>

          {/* Description */}
          <p
            className="font-body text-primary-foreground/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            Un domaine privé de plus de 8 000 acres de nature, d'histoires et
            d'expériences exceptionnelles.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 tracking-luxury uppercase px-8 py-6 text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              Discover the Estate
            </Button>
            <BookingDialog />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300 group"
          >
            <span className="text-xs tracking-luxury uppercase font-body">
              Explore
            </span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
