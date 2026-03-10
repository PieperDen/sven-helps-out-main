import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import heroImage from "@/assets/hero-image.jpg";
import Profilbild from "@/assets/Profilbild.png";
import SvenThamm from "@/assets/SvenThamm.jpg";
import HendrikGrönholdt from "@/assets/HendrikGrönholdt.png";
import JenniferGrönholdt from "@/assets/JenniferGrönholdt.png";

const UnserTeam = () => {
  const team = [
    {
      name: "Sven Thamm",
      role: "Rechtsanwalt",
      bio: "Als Rechtsanwalt berate und vertrete ich Mandantinnen und Mandanten in sozialrechtlichen Fragen — klar, verlässlich und auf Augenhöhe.",
      image: SvenThamm,
    },
    {
      name: "Jennifer Grönholdt",
      role: "Sachbearbeitung",
      bio: "Bringt Ordnung in komplexe Unterlagen, hält Prozesse transparent und sorgt für klare Rückmeldungen für Klientinnen, Klienten und Angehörige in Kiel.",
      image: JenniferGrönholdt,
    },
    {
      name: "Hendrik Grönholdt",
      role: "Sachbearbeitung",
      bio: "Unterstützt bei Anfragen und organisatorischen Schritten mit ruhiger, verbindlicher Arbeitsweise und klaren Prioritäten.",
      image: HendrikGrönholdt,
    },
    {
      name: "Dennis Pieper",
      role: "Entwickler",
      bio: "Kümmert sich um IT-Dinge.",
      image: Profilbild,
    },
  ];

  return (
    <div className="page-shell min-h-screen flex flex-col">
      <Header />

      <main className="relative z-10 flex-1">
        <section className="container mx-auto px-4 pb-12 pt-10 md:pt-14">
          <Reveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="eyebrow">Unser Team</span>
              <h1 className="mt-4 text-4xl font-semibold md:text-5xl">Gemeinsam für Sie da.</h1>
              <p className="section-copy mt-5">
                Bei uns zieht jeder an einem Strang — damit Sie immer einen festen Ansprechpartner haben und gleichzeitig auf ein ganzes Team vertrauen können.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {team.map((member, index) => (
              <Reveal key={member.name} delayClass={index % 2 === 0 ? "" : "stagger-1"}>
                <Card className="premium-card overflow-hidden rounded-3xl">
                  <CardContent className="p-0">
                    <div className="grid min-h-[390px] md:grid-cols-2">
                      <div className="h-64 md:h-full">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                          decoding="async"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="flex flex-col justify-center p-6 md:p-7">
                        <h3 className="text-2xl font-semibold">{member.name}</h3>
                        <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UnserTeam;
