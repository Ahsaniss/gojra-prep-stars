import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

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

export function PageHero({ title, subtitle, background, cta }: { title: string; subtitle?: string; background?: string; cta?: boolean | { label?: string; to?: string } }) {
  return (
    <section className={`relative overflow-hidden ${background ? "min-h-[280px] sm:min-h-[360px] md:min-h-[460px] lg:min-h-[560px]" : "bg-primary text-primary-foreground"}`}>
      {background && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${background})` }}
          aria-hidden
        />
      )}
      <div className={`absolute inset-0 ${background ? "bg-[rgba(2,6,23,0.7)] md:bg-[rgba(2,6,23,0.55)]" : ""}`} />
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="hidden sm:inline-block px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            ACME Gojra Campus
          </div>
          <h1
            className={`font-bold mb-3 ${background ? "text-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl" : "text-4xl md:text-5xl text-primary-foreground"}`}
            style={background ? { textShadow: "0 6px 20px rgba(0,0,0,0.6)" } : undefined}
          >
            {title}
          </h1>
          {subtitle && (
            <p className={`max-w-2xl ${background ? "text-white/90 text-base sm:text-lg" : "text-primary-foreground/80 text-lg"}`} style={background ? { textShadow: "0 3px 12px rgba(0,0,0,0.45)" } : undefined}>
              {subtitle}
            </p>
          )}
          {background && cta !== false && (
            <div className="mt-6">
              <Link to={(typeof cta === "object" && cta.to) || "/admissions"} className="inline-block bg-gold text-gold-foreground font-semibold px-5 py-3 rounded-md shadow-[var(--shadow-gold)] hover:opacity-95">
                {(typeof cta === "object" && cta.label) || "Apply Online"}
              </Link>
            </div>
          )}
      </div>
    </section>
  );
}
