import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Target, BookOpen, Users, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — MDCAT, ECAT & Parallel Prep | ACME" },
      { name: "description", content: "Explore ACME's MDCAT, ECAT and Phase-I Parallel Prep programs designed for entry test excellence." },
    ],
  }),
  component: Programs,
});

const programs = [
  {
    icon: Target, name: "MDCAT", tag: "Medical",
    desc: "Comprehensive preparation for the Medical & Dental College Admission Test as per the latest PMC syllabus.",
    points: ["Biology, Chemistry, Physics, English & Logical Reasoning", "Weekly assessments & full-length mocks", "Concept-based teaching with past paper drills", "Smart revision plans & doubt sessions"],
  },
  {
    icon: BookOpen, name: "ECAT", tag: "Engineering",
    desc: "Focused engineering entry test prep covering Mathematics, Physics, Chemistry/Computer and English.",
    points: ["Topic-wise concept building", "Daily MCQ practice with timed tests", "ECAT past papers analysis", "Engineering counselling support"],
  },
  {
    icon: Users, name: "Parallel Prep", tag: "Phase-I",
    desc: "Phase-I parallel preparation alongside FSc — start your entry test journey from 1st year and stay miles ahead.",
    points: ["Aligned with FSc curriculum", "Foundation + advanced concepts", "Continuous assessment & feedback", "Long-term retention strategy"],
  },
];

function Programs() {
  return (
    <Layout>
      <PageHero title="Our Programs" subtitle="Structured, syllabus-aligned and outcome-driven preparation paths." />
      <section className="container mx-auto px-4 py-16 space-y-10">
        {programs.map((p, i) => (
          <div key={p.name} className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground rounded-2xl p-10 shadow-[var(--shadow-elegant)]">
              <div className="text-xs uppercase tracking-widest text-gold font-semibold mb-2">{p.tag}</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-gold text-primary grid place-items-center"><p.icon className="h-6 w-6" /></div>
                <h2 className="text-3xl font-bold">{p.name}</h2>
              </div>
              <p className="text-primary-foreground/80">{p.desc}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">What's Included</h3>
              <ul className="space-y-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
              <Link to="/admissions" className="inline-flex mt-6 bg-primary text-primary-foreground px-5 py-2.5 rounded-md font-semibold hover:opacity-90">
                Enroll in {p.name}
              </Link>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
