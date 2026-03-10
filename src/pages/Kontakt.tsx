import { useState } from "react";
import { Mail, Phone, MapPin, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

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
      content: "Lorentzendamm 6-8, 24103 Kiel",
      link: null,
    },
  ];

  return (
    <div className="page-shell min-h-screen flex flex-col">
      <Header />

      <main className="relative z-10 flex-1">
        <section className="container mx-auto px-4 pb-16 pt-10 md:pt-14">
          <Reveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="eyebrow">Kontakt</span>
              <h1 className="mt-4 text-balance text-4xl font-semibold md:text-5xl">Schnell und unkompliziert erreichbar</h1>
              <p className="section-copy mt-5">
                Schreiben Sie Ihr Anliegen, ich melde mich zeitnah zurück. Für dringende Fälle in Kiel und Umgebung ist ein direkter Anruf oft der schnellste Weg.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Card className="premium-card rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Nachricht senden</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-5">
                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Ihr Name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-Mail *</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="name@beispiel.de" required />
                      </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="reason">Grund *</Label>
                        <Select value={formData.reason} onValueChange={(v) => setFormData((p) => ({ ...p, reason: v }))}>
                            <SelectTrigger id="reason">
                            <SelectValue placeholder="Bitte wählen" />
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
                        <Label htmlFor="phone">Telefon</Label>
                        <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+49 ..." />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Nachricht *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Worum geht es genau?"
                        rows={6}
                        required
                      />
                    </div>

                    <Button asChild className="rounded-xl">
                      <a
                        href={buildMailtoHref()}
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
                            description: "Die Nachricht wird in Ihrem E-Mail-Programm geöffnet.",
                          });
                        }}
                      >
                        Nachricht im E-Mail-Programm öffnen
                      </a>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Reveal>

            <div className="space-y-6 lg:col-span-5">
              <Reveal delayClass="stagger-1">
                <Card className="premium-card rounded-3xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Kontaktinformationen</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    {contactInfo.map((info) => (
                      <div key={info.title} className="group flex gap-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                          <info.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold">{info.title}</p>
                          {info.link ? (
                            <a href={info.link} className="text-sm text-muted-foreground hover:text-primary">
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-sm text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </Reveal>

              <Reveal delayClass="stagger-2">
                <Card className="glass-panel rounded-3xl border-primary/20">
                  <CardContent className="space-y-3 p-6">
                    <p className="text-sm font-semibold">Erreichbarkeit</p>
                    <p className="text-sm text-muted-foreground">
                      Montag bis Freitag von 9:00 bis 19:00 Uhr. In dringenden Fällen bitte direkt telefonisch melden.
                    </p>
                    <a href="tel:+491234567890" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80">
                      <Clock3 className="h-4 w-4" /> Jetzt anrufen
                    </a>
                  </CardContent>
                </Card>
              </Reveal>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Kontakt;
