import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, GraduationCap, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/faculty", label: "Faculty" },
  { to: "/toppers", label: "Toppers" },
  { to: "/admissions", label: "Admissions" },
  { to: "/campuses", label: "Campuses" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur border-b border-white/10 text-primary-foreground">
      <div className="bg-gold text-gold-foreground text-xs">
        <div className="container mx-auto px-4 py-1.5 flex flex-wrap justify-between gap-2">
          <span className="font-medium">📅 New Session starts 29th April 2026 — Registrations Open</span>
          <a href="tel:+923000000000" className="hidden sm:flex items-center gap-1 font-medium">
            <Phone className="h-3 w-3" /> info@acme.edu.pk
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="h-10 w-10 rounded-md bg-gold flex items-center justify-center shadow-[var(--shadow-gold)] group-hover:scale-105 transition">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-lg tracking-tight">ACME</div>
            <div className="text-[10px] uppercase tracking-widest text-gold">Education System</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm rounded-md hover:bg-white/10 transition"
              activeProps={{ className: "px-3 py-2 text-sm rounded-md bg-white/10 text-gold font-semibold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/admissions"
          className="hidden md:inline-flex items-center bg-gold text-gold-foreground px-4 py-2 rounded-md font-semibold text-sm hover:opacity-90 transition shadow-[var(--shadow-gold)]"
        >
          Apply Online
        </Link>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-primary">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-md hover:bg-white/10"
                activeProps={{ className: "px-3 py-2.5 rounded-md bg-white/10 text-gold font-semibold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/admissions" onClick={() => setOpen(false)} className="mt-2 bg-gold text-gold-foreground text-center py-2.5 rounded-md font-semibold">
              Apply Online
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
