import conservationImage from "@/assets/conservation.jpg";

const stats = [
  { value: "50,000+", label: "Arbres plantés" },
  { value: "200+", label: "Espèces observées" },
  { value: "8,000", label: "Acres préservés" },
  { value: "15+", label: "Années de rewilding" },
];

const timeline = [
  { year: "2008", event: "Acquisition du domaine" },
  { year: "2010", event: "Début du programme de rewilding" },
  { year: "2015", event: "Première récolte de prairies sauvages" },
  { year: "2020", event: "50 000 arbres plantés" },
  { year: "2024", event: "Certification environnementale" },
];

export const ConservationSection = () => {
  return (
    <section id="conservation" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={conservationImage}
          alt="Conservation landscape"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-accent font-body text-sm tracking-luxury uppercase mb-4">
              Conservation
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary-foreground font-medium mb-6 leading-tight">
              Rewilding & Engagement Écologique
            </h2>
            <div className="w-16 h-px bg-accent mb-8" />
            <p className="font-body text-primary-foreground/80 text-lg leading-relaxed mb-6">
              Ce domaine n'est pas seulement un lieu de séjour — c'est un projet
              de restauration écologique ambitieux.
            </p>
            <p className="font-body text-primary-foreground/70 leading-relaxed mb-10">
              Avec des plantations d'arbres, la reconquête des prairies et des
              habitats sauvages, des programmes pour oiseaux et espèces locales,
              Wilderness Reserve illustre comment nature et luxe peuvent
              coexister harmonieusement.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
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
              Notre Parcours
            </h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
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
                    {index < timeline.length - 1 && (
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-px h-12 bg-primary-foreground/20" />
                    )}
                  </div>
                  <p className="font-body text-primary-foreground/80">
                    {item.event}
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
