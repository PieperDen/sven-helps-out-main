import { MapPin, Navigation, Bus, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WoDuUnsFindest = () => {
  const highlights = [
    {
      icon: MapPin,
      title: "Adresse",
      description: "Alte Muthesius Kunsthochschule",
      details: "Lorentzendamm 6-8, 24105 Kiel",
    },
    {
      icon: Navigation,
      title: "Eingang",
      description: "Mein Büro befindet sich im Turmbau, im 1 Obergeschoss in Raum T-1.04 .",
      details: "Folgen Sie der Beschilderung zur sozialen Betreuung im Erdgeschoss.",
    },
    {
      icon: Bus,
      title: "OePNV",
      description: "Buslinien 61, 62, 32 über die Haltestellen: Schloßgarten, Hospitalstraße \n Buslinie 11 über die Haltestellen: Jensendamm, Martensdamm, Lorentzendamm",
      details: "Von dort erreichen Sie uns in ca. 3 Gehminuten.",
    },
    {
      icon: Clock,
      title: "Termine",
      description: "Besuche sind nur nach vorheriger Vereinbarung moeglich.",
      details: "Zwischen 9:00 und 17:00 Uhr stehe ich Ihnen gerne zur Verfuegung.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
                Wo du uns findest
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                In der Alten Muthesius, mitten in Kiel
              </h1>
              <p className="text-lg text-muted-foreground">
                Mein Büro befindet sich im geschichtsträchtigen Gebäude der ehemaligen
                Muthesius Kunsthochschule am Lorentzendamm 6-8. Hier empfangen wir Sie in
                ruhiger Atmosphaere für persönliche Beratungen und Planungsgespräche.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-12">
              {highlights.map((highlight) => (
                <Card key={highlight.title} className="h-full">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{highlight.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base">{highlight.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="rounded-xl overflow-hidden border shadow-sm">
                <iframe
                  title="Standort Lorentzendamm 6-8, Kiel"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.056101212105!2d10.138220476872692!3d54.32559819809067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b2576b3cab5f61%3A0xa2bd1938d6fad01d!2sLorentzendamm%206%2C%2024105%20Kiel!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                  className="w-full h-[400px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WoDuUnsFindest;
