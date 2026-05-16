import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import bgGojra from "@/assets/WhatsApp Image 2026-05-16 at 10.34.08 AM.jpeg";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ACME Gojra Campus" },
      { name: "description", content: "Get in touch with ACME Education System Gojra Campus." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <PageHero title="Get in Touch" subtitle="Questions about admissions, scholarships or programs? We're here to help." background={bgGojra} />
      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10">
        <div className="space-y-5">
          {[
            { icon: MapPin, title: "Visit", text: "Main Campus, Gojra, Toba Tek Singh, Punjab" },
            { icon: Phone, title: "Call", text: "+92 300 0000000" },
            { icon: Mail, title: "Email", text: "info@acme.edu.pk · admission@acme.edu.pk" },
          ].map((c) => (
            <div key={c.title} className="flex gap-4 p-5 bg-card border rounded-xl">
              <div className="h-12 w-12 rounded-lg bg-primary text-primary-foreground grid place-items-center shrink-0">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.text}</p>
              </div>
            </div>
          ))}
          <div className="flex gap-3 pt-2">
            <a href="https://instagram.com/acmeeducationsystem" className="h-11 w-11 rounded-full bg-primary text-primary-foreground grid place-items-center hover:bg-gold hover:text-gold-foreground transition"><Instagram className="h-5 w-5" /></a>
            <a href="https://facebook.com/acmeeducationsystem" className="h-11 w-11 rounded-full bg-primary text-primary-foreground grid place-items-center hover:bg-gold hover:text-gold-foreground transition"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="bg-card border rounded-2xl p-8 shadow-[var(--shadow-elegant)]">
          {sent ? (
            <div className="text-center py-10">
              <h3 className="text-xl font-bold mb-2">Message Sent</h3>
              <p className="text-sm text-muted-foreground">We'll reply within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <h2 className="text-2xl font-bold mb-1">Send a Message</h2>
              <div>
                <label className="block text-sm font-medium mb-1.5">Name</label>
                <input required className="w-full px-4 py-2.5 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Email</label>
                <input required type="email" className="w-full px-4 py-2.5 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Message</label>
                <textarea required rows={5} className="w-full px-4 py-2.5 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
              <button className="w-full bg-gold text-gold-foreground font-semibold py-3 rounded-md hover:opacity-90 shadow-[var(--shadow-gold)] transition">Send</button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
