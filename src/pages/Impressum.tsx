import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const Impressum = () => {
  return (
    <div className="page-shell min-h-screen flex flex-col">
      <Header />

      <main className="relative z-10 flex-1">
        <section className="container mx-auto px-4 pb-16 pt-10 md:pt-14">
          <Reveal>
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="eyebrow">Rechtliches</span>
              <h1 className="mt-4 text-4xl font-semibold md:text-5xl">Impressum</h1>
            </div>
          </Reveal>

          <div className="mx-auto grid max-w-4xl gap-6">
            <Reveal>
              <Card className="premium-card rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Angaben gemäß § 5 TMG</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">Anbieter</p>
                    <p>Sven Thamm, Soziale Betreuung</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Adresse</p>
                    <p>Lorentzendamm 6-8, 24103 Kiel, Deutschland</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Kontakt</p>
                    <p>Telefon: +49 (0) 123 456 7890</p>
                    <p>E-Mail: sven.thamm@btkiel.de</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delayClass="stagger-1">
              <Card className="premium-card rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Verantwortlich für Inhalte</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>
                    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
                    <br />
                    Sven Thamm
                    <br />
                    Lorentzendamm 6-8
                    <br />
                    24103 Kiel
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delayClass="stagger-2">
              <Card className="premium-card rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Haftungsausschluss</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">Haftung für Inhalte</p>
                    <p>
                      Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für Richtigkeit,
                      Vollständigkeit und Aktualität kann dennoch keine Gewähr übernommen werden.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Haftung für Links</p>
                    <p>
                      Bei direkten oder indirekten Verweisen auf fremde Webseiten liegt die Verantwortung
                      beim jeweiligen Betreiber der verlinkten Seiten.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Urheberrecht</p>
                    <p>
                      Die erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht.
                      Vervielfältigung und Verwertung bedürfen der schriftlichen Zustimmung.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delayClass="stagger-3">
              <Card className="glass-panel rounded-3xl border-primary/15">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Datenschutz</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Die Nutzung dieser Website ist in der Regel ohne Angabe personenbezogener Daten möglich.
                    Daten werden nur erhoben, wenn dies für die Kontaktaufnahme erforderlich ist.
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            <p className="text-center text-xs text-muted-foreground">Stand: {new Date().toLocaleDateString("de-DE")}</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Impressum;
