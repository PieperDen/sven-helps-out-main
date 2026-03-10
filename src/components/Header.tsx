import { Link, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Start", path: "/" },
    { name: "Leistungen", path: "/leistungen" },
    { name: "Unser Team", path: "/ueber-mich" },
    { name: "Kontakt", path: "/kontakt" },
    { name: "Standort", path: "/wo-du-uns-findest" },
    { name: "Voraussetzungen", path: "/voraussetzungen" },
    { name: "Impressum", path: "/impressum" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 md:px-6">
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all md:px-6",
          scrolled
            ? "glass-panel border-primary/20"
            : "bg-background/75 border-border/65 backdrop-blur-md",
        )}
      >
        <Link to="/" className="group flex items-center gap-3">
          <div className="float-soft flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 group-hover:scale-105">
            <span className="text-xl leading-none">§</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">Sven Thamm</p>
            <p className="text-xs text-muted-foreground">Berufliche Betreuung Kiel</p>
          </div>
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn("nav-link-modern", isActive(item.path) && "text-primary")}
              data-active={isActive(item.path)}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild size="sm" className="rounded-xl">
            <Link to="/kontakt">Erstgespräch</Link>
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background/80 text-foreground md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Navigation öffnen"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-border/70 bg-background/95 p-4 shadow-[var(--shadow-soft)] backdrop-blur md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium",
                  isActive(item.path)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:bg-muted",
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="mt-1 rounded-xl">
              <Link to="tel:+491234567890" onClick={() => setMobileMenuOpen(false)}>
                <PhoneCall className="h-4 w-4" />
                Direkt anrufen
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
