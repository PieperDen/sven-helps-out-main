import { Bus, Clock, MapPin, Navigation } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Reveal from "@/components/Reveal";

const WoDuUnsFindest = () => {
  const highlights = [
    {
      icon: MapPin,
      title: "Adresse",
      description: "Lorentzendamm 6-8, 24103 Kiel",
      details: "Das Buero befindet sich zentral in Kiel mit guter Erreichbarkeit.",
    },
    {
      icon: Navigation,
      title: "Im Gebaeude",
      description: "Turmbau, 1. Obergeschoss, Raum T-1.04",
      details: "Vor Ort weist die Beschilderung den Weg zur Betreuung.",
    },
    {
      icon: Bus,
      title: "Anfahrt mit OePNV",
      description: "Buslinien 61, 62, 32 und 11",
      details: "Haltestellen Schlossgarten, Hospitalstrasse, Jensendamm, Martensdamm.",
    },
    {
      icon: Clock,
      title: "Termine",
      description: "Nur nach Vereinbarung",
      details: "Persoenliche Gespraeche finden nach vorheriger Terminabsprache statt.",
    },
  ];

  return (
    <div className="page-shell min-h-screen flex flex-col">
      <Header />

      <main className="relative z-10 flex-1">
        <section className="container mx-auto px-4 pb-16 pt-10 md:pt-14">
          <Reveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="eyebrow">Standort Kiel</span>
              <h1 className="mt-4 text-4xl font-semibold md:text-5xl">Gut erreichbar im Herzen von Kiel</h1>
              <p className="section-copy mt-5">
                Fuer persoenliche Beratungsgespraeche empfangen wir Sie in ruhiger Atmosphaere am Lorentzendamm.
              </p>
            </div>
          </Reveal>

          <div className="mb-10 grid gap-5 md:grid-cols-2">
            {highlights.map((highlight, index) => (
              <Reveal key={highlight.title} delayClass={index % 2 === 0 ? "" : "stagger-1"}>
                <Card className="premium-card h-full rounded-3xl">
                  <CardHeader className="pb-2">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <highlight.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl">{highlight.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-foreground/90">{highlight.details}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="glass-panel overflow-hidden rounded-3xl">
              <iframe
                title="Standort Lorentzendamm 6-8, Kiel"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.056101212105!2d10.138220476872692!3d54.32559819809067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b2576b3cab5f61%3A0xa2bd1938d6fad01d!2sLorentzendamm%206%2C%2024105%20Kiel!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WoDuUnsFindest;
