import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Target, Eye, Heart, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ACME Education System Gojra" },
      { name: "description", content: "Learn about ACME Education System's mission, vision and leadership at the Gojra Campus." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <PageHero title="About ACME" subtitle="Building futures through quality education and conceptual clarity." />
      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            ACME Education System has emerged as one of Pakistan's leading entry test preparation institutes,
            with a continuous legacy of producing top scorers in MDCAT and ECAT. Our Gojra Campus brings the
            same standards of excellence — experienced faculty, focused class sizes, and a structured methodology
            that helps students master concepts rather than memorize them.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 pt-4">
            <div className="bg-card border rounded-xl p-6">
              <Target className="h-8 w-8 text-gold mb-3" />
              <h3 className="font-bold mb-2">Our Mission</h3>
              <p className="text-sm text-muted-foreground">To offer quality education led by experienced faculty within a conducive environment that strengthens conceptual understanding and academic excellence.</p>
            </div>
            <div className="bg-card border rounded-xl p-6">
              <Eye className="h-8 w-8 text-gold mb-3" />
              <h3 className="font-bold mb-2">Our Vision</h3>
              <p className="text-sm text-muted-foreground">To empower every student to realize their full potential and earn admission to Pakistan's top medical and engineering universities.</p>
            </div>
            <div className="bg-card border rounded-xl p-6">
              <Heart className="h-8 w-8 text-gold mb-3" />
              <h3 className="font-bold mb-2">Our Values</h3>
              <p className="text-sm text-muted-foreground">Integrity, discipline, mentorship and a relentless focus on each student's growth.</p>
            </div>
            <div className="bg-card border rounded-xl p-6">
              <Award className="h-8 w-8 text-gold mb-3" />
              <h3 className="font-bold mb-2">Our Legacy</h3>
              <p className="text-sm text-muted-foreground">A continuous record of top results across MDCAT and ECAT, with hundreds of students placed every year.</p>
            </div>
          </div>
        </div>
        <aside className="bg-primary text-primary-foreground p-8 rounded-2xl h-fit">
          <div className="text-xs uppercase tracking-widest text-gold font-semibold mb-3">Leadership</div>
          <div className="h-20 w-20 rounded-full bg-gold text-primary grid place-items-center text-2xl font-bold mb-4">AS</div>
          <h3 className="text-xl font-bold">M. Amir Shahzad</h3>
          <p className="text-sm text-gold mb-4">Vice Principal, ACME Gojra Campus</p>
          <blockquote className="text-sm text-primary-foreground/80 italic border-l-2 border-gold pl-4">
            "Our goal is not just to prepare students for tests — but to build sharp thinkers who walk into any classroom with confidence."
          </blockquote>
        </aside>
      </section>
    </Layout>
  );
}
