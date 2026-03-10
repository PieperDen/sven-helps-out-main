import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Scale, Shield, Stethoscope, WalletCards } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const Leistungen = () => {
  const services = [
    {
      icon: Shield,
      title: "Berufsbetreuung",
      hint: null,
      description:
        "Vertretung in den gerichtlich festgelegten Aufgabenkreisen mit klarer Dokumentation und verständlicher Kommunikation.",
      details:
        "Ich übernehme die rechtliche Vertretung in den festgelegten Aufgabenkreisen strukturiert, nachvollziehbar und mit klarer Priorisierung. Komplexe Sachverhalte werden verständlich aufbereitet, damit Entscheidungen sicher getroffen werden können.",
      items: ["Behördenangelegenheiten", "Anträge und Fristen", "Korrespondenz mit Institutionen"],
    },
    {
      icon: Scale,
      title: "Verfahrenspflegschaften",
      hint: "Hinweis: Verfahrenspflegschaften sind nicht frei buchbar, sondern werden durch gerichtliche Bestellung übertragen.",
      description:
        "Unabhängige Wahrnehmung von Interessen in gerichtlichen Verfahren, präzise und respektvoll.",
      details:
        "Als Verfahrenspfleger vertrete ich die Perspektive der betroffenen Person im Verfahren. Relevante Informationen werden sorgfältig gesammelt, eingeordnet und verständlich für das Gericht dargestellt.",
      items: ["Gespräche mit Beteiligten", "Stellungnahmen für Gerichte", "Vertretung der Perspektive der Betroffenen"],
    },
    {
      icon: WalletCards,
      title: "Alltagsbegleitung / Alltagshilfe",
      hint: null,
      description:
        "Praktische Unterstützung im Alltag, damit wichtige Aufgaben verlässlich erledigt werden.",
      details:
        "Ich unterstütze bei organisatorischen und alltagsnahen Themen, damit Strukturen stabil bleiben und Überforderung reduziert wird. Ziel ist eine spürbare Entlastung im täglichen Ablauf.",
      items: ["Begleitung bei Terminen", "Unterstützung bei Anträgen", "Hilfe bei Schriftverkehr und Organisation"],
    },
    {
      icon: Stethoscope,
      title: "Rechtsanwalt und rechtliche Beratung",
      hint: null,
      description:
        "Rechtliche Einschätzung und Beratung in betreuungsrelevanten Fragen, klar und verständlich erklärt.",
      details:
        "Bei rechtlichen Fragestellungen werden Optionen transparent erläutert und gemeinsam eingeordnet. So entsteht eine belastbare Grundlage für Entscheidungen und das weitere Vorgehen.",
      items: ["Einordnung rechtlicher Möglichkeiten", "Klärung nächster Schritte", "Abstimmung mit beteiligten Stellen"],
    },
  ];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="page-shell min-h-screen flex flex-col">
      <Header />

      <main className="relative z-10 flex-1">
        <section className="container mx-auto px-4 pb-16 pt-10 md:pt-14">
          <Reveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="eyebrow">Leistungsspektrum</span>
              <h1 className="mt-4 text-balance text-4xl font-semibold md:text-5xl">Betreuung mit Struktur und klaren Zielen</h1>
              <p className="section-copy mt-5">
                Jede Betreuung ist individuell. Die folgenden Bereiche zeigen, wo Unterstützung in Kiel konkret entlastet und Sicherheit schafft.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.title} delayClass={index % 2 === 0 ? "" : "stagger-1"}>
                <Card
                  className={`premium-card group h-full rounded-3xl transition-all duration-300 ${expandedIndex === index ? "md:col-span-2 border-primary/40" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedIndex((prev) => (prev === index ? null : index))}
                    className="w-full text-left"
                    aria-expanded={expandedIndex === index}
                  >
                    <CardHeader>
                      <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                        <service.icon className="h-5 w-5" />
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <span className="mt-1 inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-primary/30 px-2 text-xs font-semibold text-primary">
                          {expandedIndex === index ? "−" : "+"}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                      {service.hint && (
                        <p className="mb-5 rounded-xl border border-amber-300/50 bg-amber-100/60 px-3 py-2 text-sm text-amber-900">
                          {service.hint}
                        </p>
                      )}
                      {expandedIndex === index && (
                        <p className="mb-5 text-sm leading-relaxed text-foreground/90">{service.details}</p>
                      )}
                      <ul className="space-y-2">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </button>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 pb-16">
          <Reveal>
            <Card className="glass-panel rounded-3xl border-primary/15">
              <CardContent className="flex flex-col gap-5 p-7 md:flex-row md:items-center md:justify-between md:p-9">
                <div>
                  <h2 className="text-2xl font-semibold">Unklar, welcher Bereich passt?</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Im Erstgespräch klären wir gemeinsam den Bedarf und priorisieren die nächsten Schritte.
                  </p>
                </div>
                <Button asChild className="rounded-xl">
                  <Link to="/kontakt">
                    Erstgespräch anfragen <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Leistungen;
