import { Link } from "react-router-dom";
import {
  CheckCircle2,
  CircleHelp,
  FileCheck2,
  Gavel,
  ArrowRight,
  Scale,
  Shield,
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
      icon: Gavel,
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

        <section className="container mx-auto px-4 pb-16 pt-6">
          <Reveal>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="eyebrow">Mandatierung</span>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Ablauf der Mandatierung</h2>
              <p className="section-copy mt-4">
                Eine rechtliche Beratung oder Vertretung beginnt mit der Kontaktaufnahme. Der Ablauf gestaltet sich dabei transparent und nachvollziehbar.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto max-w-6xl">
            {[
              {
                step: "01",
                title: "Kontaktaufnahme",
                text: "Sie können mich telefonisch, per E-Mail oder über das Kontaktformular der Website erreichen. In einer ersten kurzen Schilderung Ihres Anliegens können wir klären, ob und wie ich Sie unterstützen kann und gegebenenfalls einen Termin vereinbaren.",
              },
              {
                step: "02",
                title: "Erstgespräch",
                text: "Im Erstgespräch schildern Sie Ihr Anliegen ausführlicher. Ich prüfe die rechtliche Situation, erläutere mögliche Vorgehensweisen und beantworte Ihre Fragen. Bereits in diesem Gespräch erhalten Sie eine erste Einschätzung zu den Erfolgsaussichten und zum weiteren Vorgehen.",
              },
              {
                step: "03",
                title: "Mandatserteilung",
                text: "Wenn Sie möchten, dass ich Sie rechtlich vertrete, erfolgt die Mandatserteilung. Hierfür unterzeichnen Sie eine Vollmacht sowie eine Mandatsvereinbarung — die Grundlage dafür, dass ich Ihre Interessen gegenüber Behörden, Gerichten oder anderen Beteiligten vertreten kann.",
              },
              {
                step: "04",
                title: "Bearbeitung Ihres Anliegens",
                text: "Nach der Mandatierung beginne ich mit der rechtlichen Bearbeitung Ihres Falls: Prüfung von Unterlagen, Kommunikation mit Behörden sowie — falls erforderlich — die außergerichtliche oder gerichtliche Vertretung Ihrer Interessen.",
              },
              {
                step: "05",
                title: "Information über den Fortgang",
                text: "Während des gesamten Verfahrens halte ich Sie über wichtige Entwicklungen und den Stand Ihres Verfahrens auf dem Laufenden. Entscheidungen über wesentliche Schritte werden selbstverständlich mit Ihnen abgestimmt.",
              },
            ].map((item, idx) => (
              <Reveal key={item.step} delayClass={idx % 2 === 0 ? "" : "stagger-1"}>
                <div className="premium-card group mb-4 rounded-3xl p-6 md:p-7">
                  <div className="flex items-start gap-5">
                    <span className="mt-0.5 shrink-0 text-xs font-semibold tracking-[0.18em] text-primary">{item.step}</span>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Transparenz, eine verständliche Beratung und eine vertrauensvolle Zusammenarbeit sind die Grundlage meiner anwaltlichen Tätigkeit.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-16 pt-6">
          <Reveal>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="eyebrow">Beratungshilfe</span>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Unterstützung bei den Kosten</h2>
              <p className="section-copy mt-4">
                Nicht jeder kann die Kosten für eine anwaltliche Beratung sofort selbst tragen. Für Menschen mit geringem Einkommen gibt es staatliche Unterstützung.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto max-w-6xl grid gap-5 md:grid-cols-2">
            <Reveal>
              <Card className="premium-card h-full rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-xl">Was ist Beratungshilfe?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Beratungshilfe ist eine staatliche Leistung, die es Bürgerinnen und Bürgern mit geringem Einkommen ermöglicht, sich außergerichtlich von einem Rechtsanwalt beraten und vertreten zu lassen — z. B. bei Problemen mit Behörden, im Sozialrecht, im Familienrecht oder in anderen zivilrechtlichen Angelegenheiten.
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delayClass="stagger-1">
              <Card className="premium-card h-full rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-xl">Voraussetzungen</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      "Sie können die Kosten einer anwaltlichen Beratung nicht selbst aufbringen.",
                      "Es besteht keine andere zumutbare Möglichkeit der Hilfe (z. B. Rechtsschutzversicherung).",
                      "Es handelt sich um eine außergerichtliche Angelegenheit.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal>
              <Card className="premium-card h-full rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-xl">Wie erhält man Beratungshilfe?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Der Antrag wird beim zuständigen Amtsgericht gestellt. Das Gericht prüft Ihre persönlichen und wirtschaftlichen Verhältnisse. Bei Bewilligung erhalten Sie einen <span className="font-medium text-foreground">Beratungshilfeschein</span>, den Sie anschließend bei einem Rechtsanwalt Ihrer Wahl vorlegen können.
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delayClass="stagger-1">
              <Card className="premium-card h-full rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-xl">Kosten &amp; Beratung in meiner Kanzlei</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Bei bewilligter Beratungshilfe übernimmt die Staatskasse den größten Teil der Kosten. In der Regel fällt lediglich eine Eigenbeteiligung von <span className="font-medium text-foreground">15 Euro</span> an.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Bitte bringen Sie — sofern vorhanden — den Beratungshilfeschein sowie relevante Unterlagen mit. Sollten Sie noch keinen Schein haben, klären wir gemeinsam, ob die Voraussetzungen für eine Antragstellung vorliegen.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
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
