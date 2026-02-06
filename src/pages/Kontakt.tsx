import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Kontakt = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    reason: "",
  });

  const buildMailtoHref = () =>
    `mailto:sven.thamm@btkiel.de?subject=${encodeURIComponent(
      (formData.reason || "") + (formData.name ? " - " + formData.name : ""),
    )}&body=${encodeURIComponent(
      `Nachricht:\n${formData.message}\n\nKontakt:\nName: ${formData.name}\nE-Mail: ${formData.email}${
        formData.phone ? `\nTelefon: ${formData.phone}` : ""
      }`,
    )}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "+49 (0) 123 456 7890",
      link: "tel:+491234567890",
    },
    {
      icon: Mail,
      title: "E-Mail",
      content: "sven.thamm@btkiel.de",
      link: "mailto:sven.thamm@btkiel.de",
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Lorentzendamm 6-8, 24103, Kiel",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-in fade-in-50 slide-in-from-top-4 duration-700">Kontakt</h1>
                <p className="text-xl text-muted-foreground animate-in fade-in-50 slide-in-from-top-4 duration-700 delay-150">
                  Nehmen Sie Kontakt mit mir auf. Ich freue mich auf Ihre Nachricht!
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Contact Form */}
                <Card className="border-2 animate-in fade-in-50 slide-in-from-left-4 duration-700">
                  <CardHeader>
                    <CardTitle className="text-2xl">Nachricht senden</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ihr Name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="reason">Grund der Kontaktaufnahme *</Label>
                        <Select value={formData.reason} onValueChange={(v) => setFormData((p) => ({ ...p, reason: v }))}>
                          <SelectTrigger id="reason">
                            <SelectValue placeholder="Bitte auswählen" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="allgemein">Allgemeine Anfrage</SelectItem>
                            <SelectItem value="leistungen">Frage zu Leistungen</SelectItem>
                            <SelectItem value="termin">Terminvereinbarung</SelectItem>
                            <SelectItem value="rueckruf">Rückruf gewünscht</SelectItem>
                            <SelectItem value="sonstiges">Sonstiges</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">E-Mail *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="ihre@email.de"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+49 123 456789"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Nachricht *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Ihre Nachricht an mich..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button asChild variant="hero" className="w-full">
                        <a href={buildMailtoHref()}
                          onClick={(e) => {
                            if (!formData.name || !formData.email || !formData.reason || !formData.message) {
                              e.preventDefault();
                              toast({
                                title: "Bitte Formular ergänzen",
                                description: "Name, E-Mail, Grund und Nachricht bitte angeben.",
                              });
                              return;
                            }
                            toast({
                              title: "E-Mail wird vorbereitet",
                              description: "Die Nachricht wird in Ihrem E-Mail-Programm geoeffnet.",
                            });
                          }}
                        >
                          Im E‑Mail‑Programm öffnen
                        </a>
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <div className="space-y-6">
                  <Card className="border-2 animate-in fade-in-50 slide-in-from-right-4 duration-700 delay-150">
                    <CardHeader>
                      <CardTitle className="text-2xl">Kontaktinformationen</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {contactInfo.map((info, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                              <info.icon className="h-6 w-6 text-primary" />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{info.content}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 animate-in fade-in-50 slide-in-from-right-4 duration-700 delay-300">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">Erreichbarkeit</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Ich bin von Montag bis Freitag zwischen 9:00 und 19:00 Uhr für Sie erreichbar.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        In dringenden Fällen können Sie mich auch außerhalb der Geschäftszeiten kontaktieren.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 bg-accent/50 animate-in fade-in-50 slide-in-from-right-4 duration-700 delay-500">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3">Direkter Anruf</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Sie möchten lieber direkt mit mir sprechen?
                      </p>
                      <Button asChild variant="secondary" className="w-full">
                        <a href="tel:+491234567890">
                          <Phone className="mr-2 h-4 w-4" />
                          Jetzt anrufen
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Kontakt;
