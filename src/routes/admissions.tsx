import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import bgGojra from "@/assets/campus-bg.jpeg";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Apply Online | ACME Gojra" },
      { name: "description", content: "Apply online for MDCAT, ECAT or Parallel Prep at ACME Gojra. Mark-based scholarships up to 100%." },
    ],
  }),
  component: Admissions,
});

const scholarships = [
  { range: "95% and above", award: "100% Free" },
  { range: "90% – 94%", award: "75% Discount" },
  { range: "85% – 89%", award: "50% Discount" },
  { range: "80% – 84%", award: "25% Discount" },
];

function Admissions() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <PageHero title="Admissions Open" subtitle="Session 2026 — Apply online and secure your seat today." background={bgGojra} />
      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Mark-Based Scholarships</h2>
          <p className="text-muted-foreground mb-6">High-achievers are rewarded with substantial fee discounts based on Matric / O-Level marks.</p>
          <div className="space-y-3 mb-8">
            {scholarships.map((s) => (
              <div key={s.range} className="flex items-center justify-between bg-card border rounded-lg p-4">
                <span className="font-medium">{s.range}</span>
                <span className="font-bold text-gold">{s.award}</span>
              </div>
            ))}
          </div>
          <div className="bg-primary text-primary-foreground rounded-xl p-6">
            <h3 className="font-bold text-gold mb-3">What you'll need</h3>
            <ul className="space-y-2 text-sm">
              {["Matric / O-Level result card", "CNIC / B-Form copy", "Two passport-size photos", "Registration fee receipt"].map((i) => (
                <li key={i} className="flex gap-2 items-start"><CheckCircle2 className="h-4 w-4 text-gold mt-0.5" /> {i}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-card border rounded-2xl p-8 shadow-[var(--shadow-elegant)]">
          <h2 className="text-2xl font-bold mb-2">Online Registration</h2>
          <p className="text-sm text-muted-foreground mb-6">Fill the form — our admissions team will reach out within 24 hours.</p>
          {sent ? (
            <div className="text-center py-12">
              <CheckCircle2 className="h-14 w-14 text-gold mx-auto mb-3" />
              <h3 className="font-bold text-lg">Application Received</h3>
              <p className="text-sm text-muted-foreground">We'll contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
              {[
                { label: "Full Name", type: "text", name: "name" },
                { label: "Phone Number", type: "tel", name: "phone" },
                { label: "Email", type: "email", name: "email" },
                { label: "City", type: "text", name: "city" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-sm font-medium mb-1.5">{f.label}</label>
                  <input required type={f.type} name={f.name} className="w-full px-4 py-2.5 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-gold" />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium mb-1.5">Program</label>
                <select required className="w-full px-4 py-2.5 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-gold">
                  <option value="">Select a program</option>
                  <option>MDCAT</option>
                  <option>ECAT</option>
                  <option>Parallel Prep (Phase-I)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Matric / O-Level Marks (%)</label>
                <input required type="number" min="0" max="100" className="w-full px-4 py-2.5 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-gold" />
              </div>
              <button type="submit" className="w-full bg-gold text-gold-foreground font-semibold py-3 rounded-md hover:opacity-90 shadow-[var(--shadow-gold)] transition">
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
