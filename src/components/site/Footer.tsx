import { Link } from "@tanstack/react-router";
import { GraduationCap, Facebook, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-10 w-10 rounded-md bg-gold flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="font-display font-bold text-lg">ACME</div>
              <div className="text-[10px] uppercase tracking-widest text-gold">Education System</div>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/70">
            Pakistan's leading MDCAT & ECAT entry test preparation academy. Empowering students to realize their full potential.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="https://facebook.com/acmeeducationsystem" aria-label="Facebook" className="h-9 w-9 rounded-full bg-white/10 hover:bg-gold hover:text-primary grid place-items-center transition"><Facebook className="h-4 w-4" /></a>
            <a href="https://instagram.com/acmeeducationsystem" aria-label="Instagram" className="h-9 w-9 rounded-full bg-white/10 hover:bg-gold hover:text-primary grid place-items-center transition"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="h-9 w-9 rounded-full bg-white/10 hover:bg-gold hover:text-primary grid place-items-center transition"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/programs" className="hover:text-gold">Programs</Link></li>
            <li><Link to="/faculty" className="hover:text-gold">Faculty</Link></li>
            <li><Link to="/toppers" className="hover:text-gold">Our Toppers</Link></li>
            <li><Link to="/admissions" className="hover:text-gold">Admissions</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-gold">Campuses</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>Gojra Campus</li>
            <li>Islamabad Campus</li>
            <li>Rawalpindi Campus</li>
            <li><Link to="/campuses" className="text-gold hover:underline">View all locations →</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-gold">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> Gojra Campus, Toba Tek Singh, Punjab</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> +92 300 0000000</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> info@acme.edu.pk</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} ACME Education System. All rights reserved.</p>
          <p>www.acme.edu.pk</p>
        </div>
      </div>
    </footer>
  );
}
