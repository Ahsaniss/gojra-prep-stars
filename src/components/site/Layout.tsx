import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MessageCircle } from "lucide-react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <a
        href="https://wa.me/923000000000"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-[oklch(0.7_0.18_145)] text-white grid place-items-center shadow-[var(--shadow-elegant)] hover:scale-110 transition"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 20% 50%, var(--gold), transparent 50%)" }} />
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="inline-block px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold uppercase tracking-widest mb-4">
          ACME Gojra Campus
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3">{title}</h1>
        {subtitle && <p className="text-lg text-primary-foreground/80 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
