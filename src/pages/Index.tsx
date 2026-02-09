import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Handshake,
  HeartHandshake,
  MapPinned,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/SvenThamm.jpg";
import Reveal from "@/components/Reveal";

const Index = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Rechtssichere Betreuung",
      text: "Klare Vertretung in persoenlichen, gesundheitlichen und finanziellen Angelegenheiten.",
    },
    {
      icon: Users,
      title: "Menschlich und verbindlich",
      text: "Zusammenarbeit auf Augenhoehe mit Klientinnen, Klienten und Angehoerigen.",
    },
    {
      icon: MapPinned,
      title: "In Kiel verankert",
      text: "Kurze Wege, feste Ansprechpartner und schnelle Erreichbarkeit vor Ort.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Erstgespraech",
      text: "Wir klaeren Ihre Situation, Prioritaeten und den konkreten Unterstuetzungsbedarf.",
      icon: Handshake,
    },
    {
      step: "02",
      title: "Strukturierter Plan",
      text: "Sie erhalten einen nachvollziehbaren Ablauf mit klaren Zustaendigkeiten.",
      icon: CalendarDays,
    },
    {
      step: "03",
      title: "Verlaessliche Begleitung",
      text: "Ich setze die vereinbarten Schritte konsequent um und halte Sie informiert.",
      icon: CheckCircle2,
    },
  ];

  const facts = [
    { label: "Antwortzeit", value: "< 24h" },
    { label: "Region", value: "Kiel + Umkreis" },
    { label: "Erreichbar", value: "Mo-Fr 9-19 Uhr" },
  ];

  return (
    <div className="page-shell min-h-screen flex flex-col">
      <Header />

      <main className="relative z-10 flex-1">
        <section className="container mx-auto px-4 pb-12 pt-10 md:pb-16 md:pt-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-7">
              <span className="eyebrow">Berufliche Betreuung in Kiel</span>
              <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight md:text-6xl">
                Verlaessliche rechtliche Betreuung. Menschlich, strukturiert und erreichbar.
              </h1>
              <p className="section-copy mt-6 max-w-2xl">
                Ich begleite Menschen in anspruchsvollen Lebenslagen mit klarer Organisation,
                respektvoller Kommunikation und einem festen Blick auf Selbstbestimmung.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-xl">
                  <Link to="/kontakt">
                    Erstgespraech anfragen <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl border-primary/30">
                  <Link to="/leistungen">Leistungen ansehen</Link>
                </Button>
              </div>

              <div className="mt-9 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
                {facts.map((fact) => (
                  <div key={fact.label} className="rounded-2xl border border-border/80 bg-card/80 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{fact.label}</p>
                    <p className="mt-1 text-sm font-semibold">{fact.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5" delayClass="stagger-1">
              <div className="glass-panel overflow-hidden rounded-3xl p-3">
                <div className="relative overflow-hidden rounded-2xl">
                  <img src={heroImage} alt="Sven Thamm in Kiel" className="h-[420px] w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent p-5 text-white">
                    <p className="text-sm font-semibold">Sven Thamm</p>
                    <p className="text-xs text-white/85">Beruflicher Betreuer</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8 md:py-12">
          <Reveal>
            <div className="mb-8 text-center">
              <h2 className="section-title">Warum Mandantinnen und Mandanten auf diese Betreuung setzen</h2>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((item, idx) => (
              <Reveal key={item.title} delayClass={idx === 0 ? "" : idx === 1 ? "stagger-1" : "stagger-2"}>
                <Card className="premium-card h-full rounded-3xl">
                  <CardContent className="p-7">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-14">
          <Reveal>
            <div className="mb-10 text-center">
              <span className="eyebrow">So laeuft es ab</span>
              <h2 className="section-title mt-4">Ein klarer Ablauf, der Sicherheit gibt</h2>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {process.map((item, idx) => (
              <Reveal key={item.title} delayClass={idx === 0 ? "" : idx === 1 ? "stagger-1" : "stagger-2"}>
                <div className="premium-card h-full rounded-3xl p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-[0.18em] text-primary">{item.step}</span>
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 pb-16">
          <Reveal>
            <Card className="overflow-hidden rounded-3xl border-0 text-primary-foreground" style={{ backgroundImage: "var(--gradient-cta)" }}>
              <CardContent className="grid gap-6 p-8 md:grid-cols-12 md:items-center md:p-12">
                <div className="md:col-span-8">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
                    <BadgeCheck className="h-4 w-4" />
                    Vertraulich, transparent, verbindlich
                  </div>
                  <h2 className="text-3xl font-semibold md:text-4xl">Zeit fuer ein ruhiges, klares Erstgespraech?</h2>
                  <p className="mt-3 max-w-2xl text-sm text-primary-foreground/90 md:text-base">
                    Sie schildern Ihre Situation, ich erklaere die naechsten Schritte. Ohne Druck, aber mit Plan.
                  </p>
                </div>
                <div className="md:col-span-4 md:justify-self-end">
                  <Button asChild size="lg" variant="secondary" className="w-full rounded-xl bg-white text-primary hover:bg-white/90">
                    <Link to="/kontakt">
                      Jetzt Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <p className="mt-3 text-xs text-primary-foreground/85">Alternativ direkt telefonisch erreichbar.</p>
                  <a href="tel:+491234567890" className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground hover:text-white">
                    <Clock3 className="h-4 w-4" /> +49 (0) 123 456 7890
                  </a>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </section>

        <section className="container mx-auto px-4 pb-14">
          <Reveal>
            <div className="rounded-3xl border border-border/75 bg-card/70 p-8">
              <div className="mb-4 flex items-center gap-3 text-primary">
                <HeartHandshake className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.14em]">Vertrauensanker</span>
              </div>
              <p className="section-copy max-w-4xl">
                Berufliche Betreuung bedeutet fuer mich: klare Entscheidungen, dokumentierte Prozesse und ein respektvoller Umgang in jeder Situation. Genau diese Mischung aus Fachlichkeit und Menschlichkeit soll auf dieser Website sichtbar sein.
              </p>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
