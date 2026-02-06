import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Impressum</h1>

              <Card className="border-2 mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Angaben gemäß § 5 TMG</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Anbieter:</h3>
                    <p className="text-muted-foreground">
                      Sven Thamm<br />
                      Soziale Betreuung
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Adresse:</h3>
                    <p className="text-muted-foreground">
                      Musterstraße 123<br />
                      12345 Musterstadt<br />
                      Deutschland
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Kontakt:</h3>
                    <p className="text-muted-foreground">
                      Telefon: +49 (0) 123 456 7890<br />
                      E-Mail: sven.thamm@btkiel.de
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Verantwortlich für den Inhalt</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
                    <br />
                    Sven Thamm<br />
                    Musterstraße 123<br />
                    12345 Musterstadt
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Haftungsausschluss</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Haftung für Inhalte</h3>
                    <p className="text-sm">
                      Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                      Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                      nach den allgemeinen Gesetzen verantwortlich.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Haftung für Links</h3>
                    <p className="text-sm">
                      Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen 
                      Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                      Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                      Seiten verantwortlich.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Urheberrecht</h3>
                    <p className="text-sm">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                      dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                      der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                      Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Datenschutz</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. 
                    Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder 
                    E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. 
                    Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
                  </p>
                </CardContent>
              </Card>

              <div className="text-center text-sm text-muted-foreground mt-8">
                <p>Stand: {new Date().toLocaleDateString('de-DE')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Impressum;
