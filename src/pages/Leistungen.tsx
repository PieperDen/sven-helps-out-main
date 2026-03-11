import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Gavel, Scale, Shield, WalletCards } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const Leistungen = () => {
  const services = [
    {
      icon: Gavel,
      title: "Rechtsanwalt und rechtliche Beratung",
      hint: null,
      description:
        "Rechtliche Einschätzung und Beratung in betreuungsrelevanten Fragen, klar und verständlich erklärt — auch im Sozialrecht.",
      details:
        "Bei rechtlichen Fragestellungen werden Optionen transparent erläutert und gemeinsam eingeordnet. So entsteht eine belastbare Grundlage für Entscheidungen und das weitere Vorgehen.",
      items: ["Einordnung rechtlicher Möglichkeiten", "Klärung nächster Schritte", "Abstimmung mit beteiligten Stellen"],
      serviceIntro:
        "Als Rechtsanwalt vertrete ich Mandantinnen und Mandanten engagiert, diskret und mit dem notwendigen Einfühlungsvermögen in rechtlich anspruchsvollen Situationen. Ein besonderer Schwerpunkt meiner Tätigkeit liegt im Familienrecht sowie in der strafrechtlichen Vertretung.",
      subsections: [
        {
          title: "Familienrecht",
          intro:
            "Im Familienrecht unterstütze und begleite ich Mandanten insbesondere in Verfahren rund um das Sorgerecht und Umgangsrecht. Gerade wenn es um das Wohl von Kindern und die Gestaltung des familiären Zusammenlebens nach Trennung oder Scheidung geht, sind rechtliche Klarheit, sachliche Lösungen und eine sensible Herangehensweise von großer Bedeutung. Ich berate Sie umfassend zu Ihren Rechten und vertrete Ihre Interessen sowohl außergerichtlich als auch vor Gericht.",
          itemsIntro: "Zu meinen Tätigkeiten im Familienrecht gehören unter anderem:",
          items: [
            "Beratung und Vertretung in Sorgerechtverfahren",
            "Regelungen zum Umgangsrecht zwischen Eltern und Kindern",
            "Unterstützung bei Konflikten zwischen getrennten oder geschiedenen Eltern",
            "Vertretung in familiengerichtlichen Verfahren",
          ],
        },
        {
          title: "Strafrecht",
          intro:
            "Ein weiterer Schwerpunkt meiner Tätigkeit liegt im Strafrecht. In strafrechtlichen Angelegenheiten ist eine frühzeitige und qualifizierte Verteidigung entscheidend. Ich stehe Ihnen in allen Phasen eines Strafverfahrens zur Seite – von der ersten Beratung über das Ermittlungsverfahren bis hin zur Vertretung vor Gericht.",
          itemsIntro: "Meine Leistungen im Strafrecht umfassen insbesondere:",
          items: [
            "Strafverteidigung im Ermittlungsverfahren",
            "Vertretung vor Strafgerichten",
            "Beratung bei Vorladungen durch Polizei oder Staatsanwaltschaft",
            "Wahrung Ihrer Rechte gegenüber Ermittlungsbehörden",
          ],
        },
        {
          title: "Vertretung im Sozialrecht",
          intro:
            "Im Sozialrecht geht es häufig um existenzielle Fragen wie die Sicherung des Lebensunterhalts, Ansprüche auf Leistungen oder Unterstützung bei Krankheit, Behinderung oder Arbeitslosigkeit. Ich vertrete Mandantinnen und Mandanten sowohl außergerichtlich gegenüber Behörden als auch vor den Sozialgerichten.",
          items: [
            "Beratung zu sozialrechtlichen Ansprüchen",
            "Prüfung von Bescheiden von Behörden und Sozialversicherungsträgern",
            "Einlegung und Begründung von Widersprüchen",
            "Vertretung in Widerspruchsverfahren gegenüber Behörden",
            "Klageverfahren vor den Sozialgerichten",
            "Begleitung in gerichtlichen Verfahren",
          ],
        },
      ],
      serviceOutro:
        "Ziel meiner Arbeit ist es, für meine Mandanten eine rechtlich fundierte und zugleich pragmatische Lösung zu erreichen. Dabei lege ich großen Wert auf eine vertrauensvolle Zusammenarbeit, transparente Beratung und eine konsequente Wahrnehmung Ihrer Interessen.",
    },
    {
      icon: Scale,
      title: "Verfahrenspflegschaften",
      hint: "Hinweis: Verfahrenspflegschaften sind nicht frei buchbar, sondern werden durch gerichtliche Bestellung übertragen.",
      description:
        "Unabhängige Interessenvertretung der betroffenen Person in betreuungsgerichtlichen Verfahren — insbesondere bei freiheitsentziehenden Maßnahmen wie Unterbringungen oder freiheitsbeschränkenden Maßnahmen.",
      details:
        "Der Verfahrenspfleger vertritt im gerichtlichen Verfahren ausschließlich die Interessen und den Willen der betroffenen Person. Ziel ist es, sicherzustellen, dass ihre Rechte gewahrt bleiben und ihre persönliche Sichtweise im Verfahren angemessen berücksichtigt wird. Gerade wenn schwerwiegende Eingriffe in die persönliche Freiheit im Raum stehen, kommt dieser unabhängigen Interessenvertretung eine besondere Bedeutung zu.",
      itemsIntro: "Zu den Aufgaben des Verfahrenspflegers gehören insbesondere:",
      items: [
        "Die persönliche Kontaktaufnahme und Gespräche mit der betroffenen Person",
        "Die Information über das laufende Verfahren und dessen Bedeutung",
        "Die Ermittlung und Darstellung des Willens und der Interessen gegenüber dem Gericht",
        "Die Teilnahme an gerichtlichen Anhörungen und Terminen",
        "Der Austausch mit Betreuern, Ärzten, Pflegeeinrichtungen und weiteren Beteiligten",
      ],
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
      icon: Shield,
      title: "Berufsbetreuung",
      hint: null,
      description:
        "Unterstützung volljähriger Menschen, die ihre Angelegenheiten ganz oder teilweise nicht mehr selbst regeln können — gerichtlich angeordnet und individuell ausgerichtet.",
      details:
        "Als Berufsbetreuer unterstütze ich volljährige Menschen, die aufgrund von Krankheit, Behinderung oder altersbedingten Einschränkungen ihre Angelegenheiten ganz oder teilweise nicht mehr selbst regeln können. Die Betreuung wird durch das zuständige Betreuungsgericht angeordnet und richtet sich immer nach den individuellen Bedürfnissen der betreuten Person.\n\nZiel der rechtlichen Betreuung ist es, die Selbstbestimmung der betreuten Menschen so weit wie möglich zu erhalten und sie in wichtigen Lebensbereichen zu unterstützen.",
      itemsIntro: "Zu den möglichen Aufgaben eines Berufsbetreuers gehören unter anderem:",
      items: [
        "Die Regelung finanzieller Angelegenheiten (z. B. Zahlungsverkehr, Beantragung von Leistungen, Schuldenregulierung)",
        "Die Vertretung gegenüber Behörden, Versicherungen und Institutionen",
        "Die Organisation von medizinischer Versorgung und Pflege",
        "Die Unterstützung bei Wohnungsangelegenheiten (z. B. Mietangelegenheiten oder Wohnungswechsel)",
        "Die Durchsetzung von Ansprüchen und Wahrung der Rechte der betreuten Person",
        "Die Durchführung eines Rechtsmittelverfahrens",
      ],
      outro: [
        "Der Berufsbetreuer handelt dabei stets im Interesse der betreuten Person und orientiert sich an deren Wünschen und Bedürfnissen, soweit dies möglich ist.",
        "Eine rechtliche Betreuung bedeutet keine Entmündigung. Die betreuten Menschen behalten grundsätzlich ihre Rechte und werden in Entscheidungen einbezogen.",
        "Die Zusammenarbeit basiert auf Respekt, Vertrauen und persönlicher Unterstützung, um den Alltag der betreuten Personen zu erleichtern und ihre Lebensqualität zu sichern.",
      ],
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
                Jede Lebenslage ist individuell. Die folgenden Bereiche zeigen, wo Unterstützung in Kiel konkret entlastet und Sicherheit schafft.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => {
              const sameRowAsExpanded = expandedIndex !== null && Math.floor(index / 2) === Math.floor(expandedIndex / 2);
              return (
              <Reveal key={service.title} delayClass={index % 2 === 0 ? "" : "stagger-1"} className={sameRowAsExpanded ? "self-start" : "h-full"}>
                <Card
                  className={`premium-card group rounded-3xl transition-all duration-300 ${sameRowAsExpanded ? "" : "h-full"} ${expandedIndex === index ? "border-primary/40" : ""}`}
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
                        <p className="mb-5 whitespace-pre-line text-sm leading-relaxed text-foreground/90">{service.details}</p>
                      )}
                      {"itemsIntro" in service && expandedIndex === index && (
                        <p className="mb-2 text-sm text-muted-foreground">{(service as typeof service & { itemsIntro: string }).itemsIntro}</p>
                      )}
                      <ul className="space-y-2">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      {"outro" in service && expandedIndex === index && (
                        <div className="mt-4 space-y-3">
                          {(service as typeof service & { outro: string[] }).outro.map((p) => (
                            <p key={p} className="text-sm leading-relaxed text-muted-foreground">{p}</p>
                          ))}
                        </div>
                      )}
                      {"serviceIntro" in service && expandedIndex === index && (
                        <p className="mt-5 text-sm leading-relaxed text-foreground/90">{(service as typeof service & { serviceIntro: string }).serviceIntro}</p>
                      )}
                      {"subsections" in service && expandedIndex === index && (
                        <div className="mt-5 space-y-4">
                          {(service as typeof service & { subsections: { title: string; intro: string; itemsIntro?: string; items: string[] }[] }).subsections.map((sub) => (
                            <div key={sub.title} className="rounded-2xl border border-primary/15 bg-primary/5 p-4">
                              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">{sub.title}</p>
                              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{sub.intro}</p>
                              {sub.itemsIntro && <p className="mb-2 text-sm text-muted-foreground">{sub.itemsIntro}</p>}
                              <ul className="space-y-2">
                                {sub.items.map((item) => (
                                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                      {"serviceOutro" in service && expandedIndex === index && (
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{(service as typeof service & { serviceOutro: string }).serviceOutro}</p>
                      )}
                      {expandedIndex === index && (
                        <Link
                          to="/voraussetzungen"
                          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
                        >
                          Voraussetzungen ansehen <ArrowRight className="h-4 w-4" />
                        </Link>
                      )}
                    </CardContent>
                  </button>
                </Card>
              </Reveal>
              );
            })}
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
