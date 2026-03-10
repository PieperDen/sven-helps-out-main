import { Link } from "react-router-dom";
import {
  CheckCircle2,
  CircleHelp,
  FileCheck2,
  Gavel,
  ArrowRight,
  Scale,
  Shield,
  Stethoscope,
  WalletCards,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Voraussetzungen = () => {
  const fields = [
    {
      icon: Shield,
      title: "Berufsbetreuung (rechtliche Betreuung)",
      checks: [
        "Die betroffene Person ist volljährig und kann rechtliche Angelegenheiten ganz oder teilweise nicht selbst besorgen.",
        "Die Ursache liegt in einer Krankheit oder Behinderung.",
        "Die Betreuung ist erforderlich, weil Vollmacht oder andere Hilfen nicht ausreichen.",
        "Die Bestellung erfolgt durch das Betreuungsgericht (nicht frei buchbar).",
      ],
      legal: "Rechtsgrundlage: § 1814 BGB; Auswahl des Betreuers nach § 1816 BGB.",
    },
    {
      icon: Scale,
      title: "Verfahrenspflegschaften",
      checks: [
        "Verfahrenspflegschaften werden ausschließlich im gerichtlichen Verfahren bestellt.",
        "Voraussetzung ist, dass dies zur Wahrnehmung der Interessen der betroffenen Person erforderlich ist.",
        "Der Verfahrenspfleger bringt Wünsche bzw. mutmaßlichen Willen im Verfahren ein.",
        "Eine freie Buchung durch Privatpersonen ist nicht möglich.",
      ],
      legal: "Rechtsgrundlage: § 276 FamFG; Vergütung in § 277 FamFG.",
    },
    {
      icon: Stethoscope,
      title: "Rechtsanwalt und rechtliche Beratung",
      checks: [
        "Selbständige außergerichtliche Rechtsdienstleistungen sind nur erlaubt, wenn eine gesetzliche Befugnis besteht.",
        "Umfassende rechtliche Beratung und Vertretung in Rechtsangelegenheiten ist Aufgabe eines Rechtsanwalts.",
        "Für Mandatierung ist deshalb in der Regel die anwaltliche Zulassung maßgeblich.",
      ],
      legal: "Rechtsgrundlage: § 3 RDG und § 3 BRAO.",
    },
    {
      icon: WalletCards,
      title: "Alltagsbegleitung / Alltagshilfe",
      checks: [
        "Für reine Alltagshilfe gibt es in der Regel keine gerichtliche Bestellvoraussetzung.",
        "Die Unterstützung erfolgt auf privater Vereinbarung oder über zuständige Sozialleistungsträger.",
        "Ein Erstgespräch dient der Klärung, welche Form von Hilfe im konkreten Fall passend ist.",
      ],
      legal: "Rechtsgrundlage: Keine einheitliche Sondervorschrift wie bei Betreuung/Verfahrenspflege.",
    },
  ];

  const important = [
    {
      icon: Gavel,
      title: "Verfahrenspflegschaften",
      text: "Verfahrenspflegschaften sind nicht frei buchbar. Die Bestellung erfolgt allein durch das zuständige Gericht.",
    },
    {
      icon: FileCheck2,
      title: "Unterlagen",
      text: "Hilfreich sind vorhandene Schreiben von Behörden, Gerichten oder Einrichtungen. Fehlende Unterlagen schließen ein Erstgespräch nicht aus.",
    },
    {
      icon: CircleHelp,
      title: "Unsicher?",
      text: "Wenn Sie unsicher sind, ob Voraussetzungen vorliegen, kann eine kurze Einordnung im Erstkontakt sinnvoll sein.",
    },
  ];

  return (
    <div className="page-shell min-h-screen flex flex-col">
      <Header />

      <main className="relative z-10 flex-1">
        <section className="container mx-auto px-4 pb-16 pt-10 md:pt-14">
          <Reveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="eyebrow">Voraussetzungen</span>
              <h1 className="mt-4 text-balance text-4xl font-semibold md:text-5xl">
                Rechtliche Voraussetzungen nach Leistungsfeld
              </h1>
              <p className="section-copy mt-5">
                Die folgenden Punkte orientieren sich an den gesetzlichen Grundlagen und helfen bei einer
                ersten Einschätzung. Sie ersetzen keine individuelle Rechtsprüfung im Einzelfall.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mb-10 grid max-w-6xl gap-5 md:grid-cols-2">
            {fields.map((field, index) => (
              <Reveal key={field.title} delayClass={index % 2 === 0 ? "" : "stagger-1"}>
                <Card className="premium-card h-full rounded-3xl">
                  <CardHeader>
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <field.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl">{field.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {field.checks.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs text-muted-foreground">{field.legal}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
            {important.map((item, index) => (
              <Reveal key={item.title} delayClass={index === 0 ? "" : index === 1 ? "stagger-1" : "stagger-2"}>
                <Card className="premium-card h-full rounded-3xl">
                  <CardHeader>
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
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
                  <h2 className="text-2xl font-semibold">Nächster Schritt</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Wenn Punkte auf Ihre Situation zutreffen, vereinbaren Sie ein unverbindliches Erstgespräch zur Einordnung.
                  </p>
                </div>
                <Button asChild className="rounded-xl">
                  <Link to="/kontakt">
                    Zum Kontakt <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </Reveal>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Stand der rechtlichen Einordnung: 9. Februar 2026.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Voraussetzungen;
