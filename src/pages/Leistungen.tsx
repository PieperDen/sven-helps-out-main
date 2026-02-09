import { Link } from "react-router-dom";
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
      title: "Rechtliche Betreuung",
      description:
        "Vertretung in den gerichtlich festgelegten Aufgabenkreisen mit klarer Dokumentation und verstaendlicher Kommunikation.",
      items: ["Behordenangelegenheiten", "Antraege und Fristen", "Korrespondenz mit Institutionen"],
    },
    {
      icon: Stethoscope,
      title: "Gesundheit und Versorgung",
      description:
        "Unterstuetzung bei medizinischen Entscheidungen, Terminen und Abstimmung mit Kliniken, Praxen und Diensten.",
      items: ["Begleitung von Behandlungsfragen", "Koordination mit Einrichtungen", "Sicherung der Versorgung"],
    },
    {
      icon: WalletCards,
      title: "Finanzen und Organisation",
      description:
        "Strukturierte Verwaltung finanzieller Themen mit Fokus auf Stabilitaet und Nachvollziehbarkeit.",
      items: ["Zahlungsorganisation", "Uebersicht ueber laufende Kosten", "Schriftverkehr mit Kassen und Aemtern"],
    },
    {
      icon: Scale,
      title: "Verfahrenspflege",
      description:
        "Unabhaengige Wahrnehmung von Interessen in gerichtlichen Verfahren, praezise und respektvoll.",
      items: ["Gesprueche mit Beteiligten", "Stellungnahmen fuer Gerichte", "Vertretung der Perspektive der Betroffenen"],
    },
  ];

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
                Jede Betreuung ist individuell. Die folgenden Bereiche zeigen, wo Unterstuetzung konkret entlastet und Sicherheit schafft.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.title} delayClass={index % 2 === 0 ? "" : "stagger-1"}>
                <Card className="premium-card h-full rounded-3xl">
                  <CardHeader>
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
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
                    Im Erstgespraech klaeren wir gemeinsam den Bedarf und priorisieren die naechsten Schritte.
                  </p>
                </div>
                <Button asChild className="rounded-xl">
                  <Link to="/kontakt">
                    Erstgespraech anfragen <ArrowRight className="h-4 w-4" />
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
