import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import bgGojra from "@/assets/campus-bg.jpeg";
import { Award } from "lucide-react";

export const Route = createFileRoute("/toppers")({
  head: () => ({
    meta: [
      { title: "Our Toppers — ACME Education System" },
      { name: "description", content: "Celebrating ACME's MDCAT and BDS toppers placed in Pakistan's top medical universities." },
    ],
  }),
  component: Toppers,
});

const toppers = [
  { name: "Laraib Musrat", program: "MBBS", college: "SZABMU University" },
  { name: "Pareesay Fatima", program: "MBBS", college: "UHS-Lahore" },
  { name: "Anas Bilal", program: "MBBS", college: "Quaid-e-Azam Medical College" },
  { name: "M. Hanzala", program: "MBBS", college: "Shifa Int. College" },
  { name: "Zohaib Abbas", program: "MBBS", college: "KMU Medical College" },
  { name: "Sameen Zahra", program: "BDS", college: "SZABMU University" },
];

function Toppers() {
  return (
    <Layout>
      <PageHero title="Our Toppers" subtitle="Their hard work, our mentorship — these are the results." background={bgGojra} />
      <section className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toppers.map((t) => (
            <div key={t.name} className="relative bg-card border rounded-2xl p-7 overflow-hidden group hover:shadow-[var(--shadow-elegant)] transition">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform" />
              <div className="relative">
                <Award className="h-8 w-8 text-gold mb-3" />
                <h3 className="text-xl font-bold mb-1">{t.name}</h3>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold mb-3">{t.program}</div>
                <div className="text-sm text-muted-foreground">{t.college}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
