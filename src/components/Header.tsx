import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Start", path: "/" },
    { name: "Meine Leistungen", path: "/leistungen" },
    { name: "Unser Team", path: "/ueber-mich" },
    { name: "Kontakt", path: "/kontakt" },
    { name: "Wo du uns findest", path: "/wo-du-uns-findest" },
    { name: "Impressum", path: "/impressum" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-opacity">
          <Heart className="h-6 w-6 fill-current" />
          <span>Sven Thamm</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.path)
                  ? "text-primary border-b-2 border-primary"
                  : "text-foreground/80"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild variant="hero" size="sm">
            <Link to="/kontakt">Jetzt Kontakt aufnehmen</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <div className="container mx-auto flex flex-col gap-4 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild variant="hero" size="sm" className="w-full">
                <Link to="/kontakt" onClick={() => setMobileMenuOpen(false)}>
                  Jetzt Kontakt aufnehmen
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
