import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoRiversong from "@/assets/logo-riversong.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Accommodations", href: "#accommodations" },
  { label: "Experiences", href: "#experiences" },
  { label: "Conservation", href: "#conservation" },
  { label: "Weddings & Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <img 
            src={logoRiversong} 
            alt="Riversong Manor" 
            className="h-10 md:h-12 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`link-underline text-sm font-body font-medium tracking-refined uppercase transition-colors duration-300 ${
                isScrolled
                  ? "text-foreground/80 hover:text-primary"
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            variant={isScrolled ? "default" : "outline"}
            className={`tracking-luxury uppercase text-xs px-6 py-5 transition-all duration-300 ${
              isScrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
            }`}
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors duration-300 ${
            isScrolled ? "text-primary" : "text-primary-foreground"
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg shadow-elevated transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-8 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-primary text-lg font-display tracking-refined py-2 border-b border-border/50 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <Button className="mt-4 tracking-luxury uppercase">Book Now</Button>
        </div>
      </div>
    </header>
  );
};
