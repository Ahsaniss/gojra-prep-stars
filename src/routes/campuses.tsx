import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { MapPin, Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/campuses")({
  head: () => ({
    meta: [
      { title: "Our Campuses — ACME Education System" },
      { name: "description", content: "Visit ACME at Gojra, Islamabad and Rawalpindi campuses." },
    ],
  }),
  component: Campuses,
});

const campuses = [
  { name: "Gojra Campus", address: "Main Campus, Gojra, Toba Tek Singh, Punjab", phone: "+92 300 0000000", email: "gojra@acme.edu.pk", featured: true },
  { name: "Islamabad Campus", address: "Plot No. 12, Sector G-9, Islamabad", phone: "+92 300 0000001", email: "isb@acme.edu.pk" },
  { name: "Rawalpindi Campus", address: "Main Murree Road, Rawalpindi", phone: "+92 300 0000002", email: "rwp@acme.edu.pk" },
];

function Campuses() {
  return (
    <Layout>
      <PageHero title="Our Campuses" subtitle="Three locations across Pakistan, one standard of excellence." />
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-6">
        {campuses.map((c) => (
          <div key={c.name} className={`rounded-2xl p-7 border ${c.featured ? "bg-primary text-primary-foreground border-gold" : "bg-card"}`}>
            <div className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-4 ${c.featured ? "bg-gold text-gold-foreground" : "bg-secondary text-secondary-foreground"}`}>
              {c.featured ? "Flagship" : "Branch"}
            </div>
            <h3 className="text-2xl font-bold mb-4">{c.name}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><MapPin className={`h-4 w-4 mt-0.5 shrink-0 ${c.featured ? "text-gold" : "text-primary"}`} />{c.address}</li>
              <li className="flex gap-2"><Phone className={`h-4 w-4 mt-0.5 shrink-0 ${c.featured ? "text-gold" : "text-primary"}`} />{c.phone}</li>
              <li className="flex gap-2"><Mail className={`h-4 w-4 mt-0.5 shrink-0 ${c.featured ? "text-gold" : "text-primary"}`} />{c.email}</li>
            </ul>
          </div>
        ))}
      </section>
      <section className="container mx-auto px-4 pb-16">
        <div className="rounded-2xl overflow-hidden border h-[400px]">
          <iframe
            title="ACME Gojra Campus Map"
            src="https://www.google.com/maps?q=Gojra,+Toba+Tek+Singh,+Punjab&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </section>
    </Layout>
  );
}
