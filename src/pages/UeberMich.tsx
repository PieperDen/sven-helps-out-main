import { Award, Heart, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UeberMich = () => {
  const values = [
    {
      icon: Heart,
      title: "Empathie",
      description: "Mit Empathie, Respekt und echter Anteilnahme – auf Augenhöhe.",
    },
    {
      icon: Users,
      title: "Zusammenarbeit",
      description: "Wir entwickeln gemeinsam Lösungen, die zu Ihrer Lebenssituation passen.",
    },
    {
      icon: Target,
      title: "Zielorientierung",
      description: "Strukturiert, Schritt für Schritt – und wir feiern Fortschritte.",
    },
    {
      icon: Award,
      title: "Professionalität",
      description: "Fachlich fundiert, verlässlich und menschlich nah.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-in fade-in-50 slide-in-from-top-4 duration-700">Über mich</h1>
                <p className="text-xl text-muted-foreground animate-in fade-in-50 slide-in-from-top-4 duration-700 delay-150">
                  Sven Thamm – Ihr Partner für soziale Betreuung
                </p>
              </div>

              <div className="prose prose-lg max-w-none mb-16">
                <Card className="border-2 animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
                  <CardContent className="p-8 space-y-4 text-muted-foreground">
                    <p>
                      Hallo! Ich bin Sven Thamm. Ich unterstütze Menschen im Alltag – unkompliziert, persönlich und mit Herz. 
                      Für mich ist das nicht nur ein Job, sondern das, was mich antreibt.
                    </p>
                    <p>
                      Seit vielen Jahren begleite ich Menschen dabei, ihren Alltag leichter und selbstbestimmter zu gestalten. 
                      Wichtig ist mir eine Zusammenarbeit auf Augenhöhe. Jeder Mensch bringt seine eigene Geschichte, Stärken 
                      und Herausforderungen mit – und genau daran knüpfen wir an.
                    </p>
                    <p>
                      Durch meine Ausbildung und regelmäßige Weiterbildungen bringe ich fachliches Know-how mit. Gleichzeitig bleibe ich 
                      bodenständig und authentisch – denn in einer entspannten Atmosphäre fällt Vertrauen leichter.
                    </p>
                    <p>
                      Ich freue mich darauf, Sie kennenzulernen und gemeinsam passende Lösungen für Ihre Situation zu finden.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-12">Meine Werte</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <Card
                      key={index}
                      className="border-2 hover:border-primary/50 transition-all hover:shadow-[var(--shadow-soft)] animate-in fade-in-50 slide-in-from-bottom-4 duration-700"
                      style={{ animationDelay: `${index * 120 + 100}ms` }}
                    >
                      <CardContent className="p-6 flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                            <value.icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                          <p className="text-sm text-muted-foreground">{value.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4">Lernen wir uns kennen!</h2>
                  <p className="text-muted-foreground mb-6">
                    In einem unverbindlichen Erstgespräch finden wir gemeinsam heraus, wie ich Sie am besten unterstützen kann.
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

export default UeberMich;
