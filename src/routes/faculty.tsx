import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty — ACME Gojra Campus" },
      { name: "description", content: "Meet ACME Gojra's experienced faculty and academic leadership." },
    ],
  }),
  component: Faculty,
});

const faculty = [
  { name: "M. Amir Shahzad", role: "Vice Principal", subject: "Administration & Mentorship", initials: "AS" },
  { name: "Victor John", role: "Senior Instructor", subject: "Chemistry & Biology", initials: "VJ" },
  { name: "Dr. Sara Khan", role: "Senior Instructor", subject: "Biology", initials: "SK" },
  { name: "Prof. Imran Ali", role: "Senior Instructor", subject: "Physics", initials: "IA" },
  { name: "Ms. Hira Tariq", role: "Instructor", subject: "English & Logical Reasoning", initials: "HT" },
  { name: "Mr. Bilal Ahmed", role: "Instructor", subject: "Mathematics (ECAT)", initials: "BA" },
];

function Faculty() {
  return (
    <Layout>
      <PageHero title="Our Faculty" subtitle="Experienced educators committed to your success." />
      <section className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((f) => (
            <div key={f.name} className="bg-card border rounded-xl p-7 text-center hover:shadow-[var(--shadow-elegant)] transition">
              <div className="h-24 w-24 rounded-full mx-auto mb-4 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground grid place-items-center text-3xl font-bold font-display">
                {f.initials}
              </div>
              <h3 className="font-bold text-lg">{f.name}</h3>
              <div className="text-sm text-gold font-semibold">{f.role}</div>
              <div className="text-xs text-muted-foreground mt-1">{f.subject}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
