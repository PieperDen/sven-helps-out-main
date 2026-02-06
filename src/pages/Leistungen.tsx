import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const Leistungen = () => {
  const services = [
    {
      title: "Berufsbetreuung",
      items: [
       "Hier muss etwas hin",
      ],
      description:
        "Praktische Hilfe im Alltag – zuverlässig, flexibel und individuell an Ihre Bedürfnisse angepasst.",
    },
    {
      title: "Rechtsanwalt und Rechtliche Beratung",
      items: [
        "Hier muss etwas hin",
      ],
      description:
        "Gemeinsam aktiv bleiben: Kontakte pflegen, Neues erleben und Teilhabe gestalten.",
    },
    {
      title: "Verfahrenspflegschaften",
      items: [
        "Hier muss etwas hin",
      ],
      description:
        "Individuelle Beratung auf Augenhöhe – lösungsorientiert, respektvoll und stärkenfokussiert.",
    },
    {
      title: "Alltagsbegleitung/Alltagshilfe",
      items: [
       "Hier muss etwas hin",
      ],
      description:
        "Entlastung bei Papierkram und Organisation – damit Sie den Kopf frei haben.",
    },
  ] as const;

  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-in fade-in-50 slide-in-from-top-4 duration-700">
                Meine Leistungen
              </h1>
              <p className="text-lg text-muted-foreground">
                Individuelle Unterstützung in allen Bereichen des täglichen Lebens. Ich bin für Sie da, wenn Sie Hilfe
                benötigen.
              </p>
            </div>

            {/* 4 Reiter sichtbar; Klick vergrößert die Karte und zeigt Details */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => {
                const isExpanded = expandedIndex === index;
                return (
                  <Card
                    key={index}
                    onClick={() => handleToggle(index)}
                    className={cn(
                      "group cursor-pointer border-2 transition-all hover:border-primary/50 hover:shadow-[var(--shadow-soft)] animate-in fade-in-50 slide-in-from-bottom-4 duration-700",
                      isExpanded ? "md:col-span-2 ring-1 ring-primary/30" : "",
                    )}
                    style={{ animationDelay: `${index * 120 + 100}ms` }}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between text-2xl text-primary">
                        {service.title}
                        <span
                          className={cn(
                            "ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs transition-colors",
                            isExpanded
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-background text-muted-foreground border-muted",
                          )}
                          aria-hidden
                        >
                          {isExpanded ? "-" : "+"}
                        </span>
                      </CardTitle>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Klicken für mehr Informationen
                      </p>
                    </CardHeader>
                    <CardContent>
                      {/* Kurzinfo immer sichtbar */}
                      <ul className={cn("space-y-3", isExpanded ? "mb-4" : "")}
                        aria-label={service.title}
                      >
                        {(isExpanded ? service.items : service.items.slice(0, 2)).map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Mehr Informationen nur im erweiterten Zustand */}
                      {isExpanded && (
                        <div className="space-y-4 text-muted-foreground">
                          {service.description && <p>{service.description}</p>}
                          <div className="text-sm opacity-80">
                            Für Fragen oder individuelle Anliegen kontaktieren Sie mich gerne über die Seite
                            <span className="font-medium"> Kontakt</span>.
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="max-w-3xl mx-auto mt-16 text-center">
              <Card className="bg-accent">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Weitere Leistungen auf Anfrage</h2>
                  <p className="text-muted-foreground">
                    Jeder Mensch hat individuelle Bedürfnisse. Sprechen Sie mich gerne an, wenn Sie spezielle
                    Unterstützung benötigen, die hier nicht aufgeführt ist.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Leistungen;
