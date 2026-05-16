import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import heroImg from "@/assets/hero-students.jpg";
import { Award, BookOpen, Users, Target, ArrowRight, GraduationCap, CheckCircle2, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACME Education System — MDCAT & ECAT Prep | Gojra Campus" },
      { name: "description", content: "Join Pakistan's top entry test academy. MDCAT, ECAT and Parallel Prep for the 2026 session. Experienced faculty, proven results." },
      { property: "og:title", content: "ACME Education System — Gojra Campus" },
      { property: "og:description", content: "MDCAT & ECAT 2026 preparation with Pakistan's leading academy." },
    ],
  }),
  component: Index,
});

const toppers = [
  { name: "Laraib Musrat", program: "MBBS", college: "SZABMU University" },
  { name: "Pareesay Fatima", program: "MBBS", college: "UHS-Lahore" },
  { name: "Anas Bilal", program: "MBBS", college: "Quaid-e-Azam Medical College" },
  { name: "M. Hanzala", program: "MBBS", college: "Shifa Int. College" },
  { name: "Zohaib Abbas", program: "MBBS", college: "KMU Medical College" },
  { name: "Sameen Zahra", program: "BDS", college: "SZABMU University" },
];

const programs = [
  { icon: Target, title: "MDCAT", desc: "Comprehensive medical entry test preparation with PMC syllabus coverage." },
  { icon: BookOpen, title: "ECAT", desc: "Engineering entry test prep with concept-driven teaching methodology." },
  { icon: Users, title: "Parallel Prep", desc: "Phase-I parallel preparation alongside FSc — get ahead from day one." },
];

const stats = [
  { value: "5000+", label: "Students Mentored" },
  { value: "35", label: "Per Class (Max)" },
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "Success Rate" },
];

function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mb-5">
              <Star className="h-3 w-3 fill-gold" /> New Session 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-5">
              Your Gateway to <span className="text-gold">MDCAT & ECAT</span> Success
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl">
              Pakistan's leading entry test preparation academy. Experienced faculty, conducive environment, and a legacy of producing top scorers across the country.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/admissions" className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-6 py-3 rounded-md font-semibold shadow-[var(--shadow-gold)] hover:opacity-90 transition">
                Apply Online <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/programs" className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition">
                Explore Programs
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {["Session starts 29 April 2026", "35 students per class", "Scholarships up to 100%"].map((t) => (
                <div key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-gold" /> {t}</div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/20 rounded-2xl blur-2xl" />
            <img src={heroImg} alt="ACME students preparing for entry tests" width={1536} height={1024} className="relative rounded-2xl shadow-[var(--shadow-elegant)] w-full h-auto object-cover aspect-[4/3]" />
            <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground p-4 rounded-xl shadow-[var(--shadow-elegant)] hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gold grid place-items-center"><Award className="h-5 w-5 text-primary" /></div>
                <div>
                  <div className="font-bold text-sm">Legacy Continuous</div>
                  <div className="text-xs text-muted-foreground">Top Results Since 2014</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gold text-gold-foreground">
        <div className="container mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-display">{s.value}</div>
              <div className="text-xs md:text-sm font-medium opacity-80 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">What We Offer</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Programs Built for Top Scorers</h2>
          <p className="text-muted-foreground">Structured curriculum, expert mentors, and a proven preparation framework.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div key={p.title} className="group relative bg-card border rounded-xl p-7 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all">
              <div className="h-12 w-12 rounded-lg bg-primary text-primary-foreground grid place-items-center mb-5 group-hover:bg-gold group-hover:text-gold-foreground transition">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm mb-5">{p.desc}</p>
              <Link to="/programs" className="text-sm font-semibold text-primary hover:text-gold inline-flex items-center gap-1">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Toppers */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-gold mb-2">Pride of ACME</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Recent Toppers</h2>
            <p className="text-muted-foreground">Students who turned their dreams into reality with ACME.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {toppers.map((t) => (
              <div key={t.name} className="bg-card border rounded-xl p-6 flex items-center gap-4 hover:shadow-[var(--shadow-elegant)] transition">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary-glow grid place-items-center text-primary-foreground font-bold text-xl shrink-0">
                  {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-gold font-semibold">{t.program}</div>
                  <div className="text-xs text-muted-foreground">{t.college}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/toppers" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-gold">
              View all toppers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-10 md:p-16 text-center">
          <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 70% 30%, var(--gold), transparent 50%)" }} />
          <div className="relative">
            <GraduationCap className="h-12 w-12 text-gold mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Registrations Open for Session 2026</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-7">
              Limited seats — only 35 students per class. Secure your seat today and start your journey to a top medical or engineering university.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/admissions" className="bg-gold text-gold-foreground px-6 py-3 rounded-md font-semibold shadow-[var(--shadow-gold)] hover:opacity-90 transition">Apply Online</Link>
              <Link to="/campuses" className="border border-white/30 px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition">Visit Our Campuses</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
