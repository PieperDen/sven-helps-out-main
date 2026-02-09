import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import betterPicture from "@/assets/betterPicture.jpg";
import Profilbild from "@/assets/Profilbild.png";
import SvenThamm from "@/assets/SvenThamm.jpg";

const UnserTeam = () => {
  const team = [
    {
      name: "Sven Thamm",
      role: "Inhaber & Betreuung",
      bio:
        "Ich begleite Menschen mit Herz, Verlaesslichkeit und Struktur - immer auf Augenhoehe und mit Blick auf das, was wirklich hilft.",
      image: SvenThamm,
    },
    {
      name: "Jessica",
      role: "Sachbearbeiterin",
      bio:
        "Bringt Ruhe und Klarheit in herausfordernde Situationen und findet praxisnahe Loesungen gemeinsam mit Klientinnen und Klienten.",
      image: betterPicture,
    },
    {
      name: "Hendrik",
      role: "Sachbearbeiter",
      bio:
        "Packt an, hoert zu und unterstuetzt dort, wo es im Alltag wirklich zaehlt - zuverlaessig und menschlich.",
      image: betterPicture,
    },
    {
      name: "Dennis Pieper",
      role: "Organisation & Koordination",
      bio:
        "Sorgt fuer Struktur, gute Ablaeufe und die richtige Portion Gelassenheit - damit Unterstuetzung leicht wird.",
      image: Profilbild,
    },
  ];

  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set([0]));

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idxAttr = (entry.target as HTMLElement).dataset.index;
          const idx = idxAttr ? Number(idxAttr) : -1;
          if (idx < 0) return;
          setVisibleIndices((prev) => {
            if (prev.has(idx)) return prev;
            const next = new Set(prev);
            next.add(idx);
            return next;
          });
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    itemRefs.current.forEach((el, idx) => {
      if (el) {
        (el as HTMLElement).dataset.index = String(idx);
        obs.observe(el);
      }
    });
    return () => obs.disconnect();
  }, []);

  const makeSetRef = (idx: number) => (el: HTMLElement | null) => {
    itemRefs.current[idx] = el;
    if (el) (el as HTMLElement).dataset.index = String(idx);
  };

  const TeamMemberCard = ({
    member,
    index,
  }: {
    member: typeof team[number];
    index: number;
  }) => {
    const isLeft = index % 2 === 0;
    const visible = visibleIndices.has(index);

    const cardClasses = [
      "rounded-2xl md:rounded-3xl border border-border/60 overflow-hidden bg-gradient-to-br from-background to-muted/30 shadow-[var(--shadow-soft)] transition-all duration-700 ease-out will-change-transform",
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
    ].join(" ");

    const imgWrapperClasses = [
      isLeft ? "md:order-1" : "md:order-2",
      "order-1 h-72 md:h-full bg-muted/40 transition duration-700 ease-out will-change-transform",
      visible ? "translate-x-0 opacity-100" : isLeft ? "-translate-x-10 opacity-0" : "translate-x-10 opacity-0",
    ].join(" ");

    const textWrapperClasses = [
      isLeft ? "md:order-2" : "md:order-1",
      "order-2 p-8 md:p-10 flex flex-col justify-center gap-3 transition duration-700 ease-out will-change-transform",
      visible ? "translate-x-0 opacity-100" : isLeft ? "translate-x-8 opacity-0" : "-translate-x-8 opacity-0",
    ].join(" ");

    return (
      <Card className={cardClasses}>
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2">
            <div className={imgWrapperClasses} style={{ transitionDelay: index * 60 + 60 + "ms" }}>
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover will-change-transform"
                loading="lazy"
              />
            </div>
            <div className={textWrapperClasses} style={{ transitionDelay: index * 60 + 120 + "ms" }}>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{member.name}</h3>
              <p className="text-primary font-semibold">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{member.bio}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden py-20 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-secondary/15 blur-3xl" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in-50 slide-in-from-top-4 duration-700">
                  Unser Team
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-in fade-in-50 slide-in-from-top-4 duration-700 delay-150">
                  Persoenlich, professionell und menschlich - wir sind fuer Sie da.
                </p>
              </div>

              <div className="mb-10 text-center text-sm tracking-[0.15em] uppercase text-muted-foreground/80">
                Scrollen Sie entspannt durch unser Team
              </div>

              <div className="space-y-10 md:space-y-14">
                {team.map((member, index) => (
                <section
                  key={member.name}
                  ref={makeSetRef(index)}
                  className="min-h-[72vh] md:min-h-[76vh] flex items-center"
                >
                  <TeamMemberCard member={member} index={index} />
                </section>
                ))}
              </div>

              <div className="mt-16 text-center text-muted-foreground">
                <p>
                  Moechten Sie uns kennenlernen? Wir freuen uns auf Ihre Nachricht.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UnserTeam;
