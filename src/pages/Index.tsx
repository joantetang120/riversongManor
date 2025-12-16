import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { AccommodationsSection } from "@/components/AccommodationsSection";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { ConservationSection } from "@/components/ConservationSection";
import { EventsSection } from "@/components/EventsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // JSON-LD Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Riversong Manor",
    description:
      "A private 8,000-acre estate in Suffolk offering luxury accommodations, immersive nature experiences, and world-class hospitality.",
    url: "https://riversongmanor.com",
    telephone: "+44 (0) 1234 567 890",
    email: "reservations@riversongmanor.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sibton Park, Yoxford",
      addressLocality: "Suffolk",
      postalCode: "IP17 3LX",
      addressCountry: "GB",
    },
    image: "https://riversongmanor.com/hero-estate.jpg",
    priceRange: "££££",
    starRating: {
      "@type": "Rating",
      ratingValue: "5",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Spa" },
      { "@type": "LocationFeatureSpecification", name: "Private Estate" },
      { "@type": "LocationFeatureSpecification", name: "Wedding Venue" },
      { "@type": "LocationFeatureSpecification", name: "Nature Reserve" },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <AccommodationsSection />
        <ExperiencesSection />
        <ConservationSection />
        <EventsSection />
        <TestimonialsSection />
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
