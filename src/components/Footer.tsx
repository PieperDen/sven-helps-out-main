import { Link } from "react-router-dom";
import { Heart, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-primary fill-current" />
              <span className="font-bold text-lg">Sven Thamm</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professionelle soziale Betreuung mit Herz und Engagement
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Start
                </Link>
              </li>
              <li>
                <Link to="/leistungen" className="text-muted-foreground hover:text-primary transition-colors">
                  Meine Leistungen
                </Link>
              </li>
              <li>
                <Link to="/ueber-mich" className="text-muted-foreground hover:text-primary transition-colors">
                  Unser Team
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/wo-du-uns-findest" className="text-muted-foreground hover:text-primary transition-colors">
                  Wo du uns findest
                </Link>
              </li>
              <li>
                <Link to="/impressum" className="text-muted-foreground hover:text-primary transition-colors">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+491234567890" className="hover:text-primary transition-colors">
                  +49 (0) 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:sven.thamm@btkiel.de" className="hover:text-primary transition-colors">
                  sven.thamm@btkiel.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sven Thamm. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
