import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-border/70 bg-card/70 backdrop-blur">
      <div className="container relative mx-auto px-4 py-14">
        <div className="mb-10 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-primary/25 bg-primary/10 px-4 py-2 text-primary">
              <span className="text-xl leading-none">§</span>
              <span className="font-semibold">Sven Thamm</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Berufliche Betreuung in Kiel mit klarem Fokus auf Verlässlichkeit, Struktur und menschliche Nähe.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="mb-3 text-sm font-semibold">Navigation</p>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Start</Link>
              <Link to="/leistungen" className="hover:text-primary">Leistungen</Link>
              <Link to="/ueber-mich" className="hover:text-primary">Unser Team</Link>
              <Link to="/kontakt" className="hover:text-primary">Kontakt</Link>
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="mb-3 text-sm font-semibold">Kontakt in Kiel</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="tel:+491234567890" className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4" /> +49 (0) 123 456 7890
              </a>
              <a href="mailto:sven.thamm@btkiel.de" className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4" /> sven.thamm@btkiel.de
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Lorentzendamm 6-8, 24103 Kiel
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border/70 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Sven Thamm. Alle Rechte vorbehalten.</p>
          <Link to="/impressum" className="hover:text-primary">Impressum und Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
