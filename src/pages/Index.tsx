import {
  ArrowDownToLine,
  ArrowRight,
  Camera,
  Code2,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Medal,
  Phone,
  ServerCog,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/nandhanananda-profile.png";

const navItems = ["About", "Education", "Skills", "Services", "Projects", "Interests", "Contact"];

const education = [
  { degree: "Master of Computer Applications (MCA)", school: "Mar Athanasios College For Advanced Studies", years: "2024–2026" },
  { degree: "B.Sc. Computer Science", school: "Assumption College", years: "2021–2024" },
];

const skillGroups = [
  { title: "Languages", icon: Code2, skills: ["Python", "C", "C++", "JavaScript"] },
  { title: "Frontend", icon: Layers3, skills: ["HTML", "CSS", "React"] },
  { title: "Backend", icon: ServerCog, skills: ["Django", "REST APIs"] },
  { title: "Database", icon: Database, skills: ["MySQL", "SQLite", "MongoDB"] },
  { title: "Core Concepts", icon: Sparkles, skills: ["OOP", "DBMS", "Machine Learning"] },
  { title: "Tools", icon: Trophy, skills: ["VS Code", "Linux", "Postman"] },
];

const services = [
  { title: "Full Stack Web Development", copy: "End-to-end web apps with responsive interfaces, secure flows, and practical features." },
  { title: "Backend Development", copy: "Reliable Django backends designed around clean models, views, and business logic." },
  { title: "REST API Development", copy: "Structured APIs for smooth communication between frontend, backend, and data layers." },
  { title: "Database Design", copy: "Organized schemas and queries for efficient storage, retrieval, and maintainability." },
];

const projects = [
  {
    title: "Homeo Clinic Management System",
    copy: "A full-featured client web application to manage appointments, patients, prescriptions, admin dashboard, secure authentication, and database integration.",
    tags: ["Django", "Python", "Database", "Auth"],
  },
  {
    title: "Hospital Recommendation System",
    copy: "A responsive platform that recommends hospitals based on user preferences and location, supported by backend filtering logic for better decisions.",
    tags: ["Web App", "Filtering", "Responsive UI"],
  },
  {
    title: "E-Waste Collection Management System",
    copy: "A CRUD-based system for managing and tracking e-waste collection requests with database connectivity and efficient request handling.",
    tags: ["CRUD", "MySQL", "Management"],
  },
];

const interests = [
  { title: "Mobile Photography", icon: Camera, copy: "I capture everyday moments through mobile photography, turning simple scenes into meaningful visual stories." },
  { title: "Javelin Throw Winner", icon: Medal, copy: "A confident athletic achievement that reflects discipline, focus, and the drive to perform under pressure." },
];

const Index = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-hero-gradient text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-glass-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-12">
          <a href="#home" className="text-sm font-bold tracking-wide text-gradient">NS.dev</a>
          <div className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {item}
              </a>
            ))}
          </div>
          <Button variant="hero" size="sm" asChild>
            <a href="#contact"><ArrowDownToLine />Resume</a>
          </Button>
        </div>
      </nav>

      <section id="home" className="portfolio-section grid min-h-screen items-center gap-12 pt-28 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="aurora-grid absolute inset-0 opacity-60" />
        <div className="relative z-10 animate-reveal">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl">
            <MapPin className="size-4 text-cyan" /> Kerala, India
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Nandhanananda <span className="text-gradient">Shenoy</span>
          </h1>
          <p className="mt-4 text-2xl font-semibold text-cyan">Full Stack Developer</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
            I am a passionate Full Stack Developer with hands-on experience in building dynamic web applications using Python and Django. I enjoy creating efficient, user-friendly solutions and have a strong foundation in REST APIs, databases, and problem-solving. I’m continuously learning and aiming to build impactful software that solves real-world problems.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="hero" size="lg" asChild><a href="#projects">View Projects <ArrowRight /></a></Button>
            <Button variant="glass" size="lg" asChild><a href="#contact">Contact Me</a></Button>
            <Button variant="glass" size="lg" asChild>
              <a href="/nandhanananda-portfolio-source.zip" download><ArrowDownToLine />Download Source</a>
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <a aria-label="GitHub" href="https://github.com/Nandhana-shenoy" className="glass-panel rounded-full p-3 transition-transform hover:-translate-y-1"><Github className="size-5" /></a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com" className="glass-panel rounded-full p-3 transition-transform hover:-translate-y-1"><Linkedin className="size-5" /></a>
          </div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-md animate-float">
          <div className="absolute -inset-8 rounded-full bg-primary-gradient opacity-25 blur-3xl" />
          <div className="glass-panel relative rounded-[2rem] p-4">
            <img src={profileImage} alt="Professional profile portrait of Nandhanananda Shenoy" width={1024} height={1024} className="aspect-square rounded-[1.5rem] object-cover" />
            <div className="absolute -bottom-5 left-6 right-6 rounded-2xl border border-glass-border bg-background/80 p-4 text-center shadow-glow backdrop-blur-xl">
              <p className="text-sm font-semibold">Python • Django • REST APIs</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="portfolio-section">
        <SectionTitle eyebrow="About Me" title="Building practical software with clarity and purpose" />
        <div className="glass-panel rounded-3xl p-8 md:p-10">
          <p className="text-lg leading-8 text-muted-foreground">
            I’m focused on Full Stack Development with a strong interest in Python, Django, REST APIs, databases, and modern frontend technologies. My approach combines problem-solving, adaptability, and continuous learning to create applications that are useful, efficient, and easy to use in real-world scenarios.
          </p>
        </div>
      </section>

      <section id="education" className="portfolio-section">
        <SectionTitle eyebrow="Education" title="Academic foundation" />
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item) => <InfoCard key={item.degree} icon={GraduationCap} title={item.degree} subtitle={item.school} meta={item.years} />)}
        </div>
      </section>

      <section id="skills" className="portfolio-section">
        <SectionTitle eyebrow="Skills" title="Technical toolkit" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <div key={title} className="glass-panel rounded-2xl p-6 transition-transform hover:-translate-y-2">
              <Icon className="mb-5 size-8 text-cyan" />
              <h3 className="text-xl font-bold">{title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => <span key={skill} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="portfolio-section">
        <SectionTitle eyebrow="Services" title="What I can build" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => <ServiceCard key={service.title} index={index + 1} {...service} />)}
        </div>
      </section>

      <section id="projects" className="portfolio-section">
        <SectionTitle eyebrow="Portfolio" title="Selected projects" />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
        </div>
      </section>

      <section id="interests" className="portfolio-section">
        <SectionTitle eyebrow="Beyond Code" title="Interests & achievements" />
        <div className="grid gap-6 lg:grid-cols-2">
          {interests.map(({ title, icon: Icon, copy }) => (
            <div key={title} className="glass-panel group rounded-3xl p-8 transition-transform hover:-translate-y-2">
              <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-soft-gradient text-cyan group-hover:animate-float"><Icon className="size-7" /></div>
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-4 leading-7 text-muted-foreground">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="portfolio-section">
        <div className="glass-panel grid gap-10 rounded-[2rem] p-8 md:p-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan">Contact</p>
            <h2 className="text-4xl font-black md:text-5xl">Let’s build something useful.</h2>
            <div className="mt-8 space-y-4 text-muted-foreground">
              <a href="tel:9037174601" className="flex items-center gap-3 hover:text-foreground"><Phone className="size-5 text-cyan" />9037174601</a>
              <a href="mailto:nandhanashenoy4@gmail.com" className="flex items-center gap-3 hover:text-foreground"><Mail className="size-5 text-cyan" />nandhanashenoy4@gmail.com</a>
              <a href="https://github.com/Nandhana-shenoy" className="flex items-center gap-3 hover:text-foreground"><Github className="size-5 text-cyan" />github.com/Nandhana-shenoy</a>
            </div>
          </div>
          <form className="grid gap-4">
            <input aria-label="Name" placeholder="Name" className="rounded-xl border border-glass-border bg-input px-4 py-3 outline-none ring-offset-background focus:ring-2 focus:ring-ring" />
            <input aria-label="Email" placeholder="Email" type="email" className="rounded-xl border border-glass-border bg-input px-4 py-3 outline-none ring-offset-background focus:ring-2 focus:ring-ring" />
            <textarea aria-label="Message" placeholder="Message" rows={5} className="rounded-xl border border-glass-border bg-input px-4 py-3 outline-none ring-offset-background focus:ring-2 focus:ring-ring" />
            <Button variant="hero" size="lg" type="button">Send Message <ArrowRight /></Button>
          </form>
        </div>
      </section>

      <footer className="border-t border-glass-border/60 px-6 py-8 text-center text-sm text-muted-foreground">
        <div className="mb-3 flex justify-center gap-4"><Github className="size-5" /><Linkedin className="size-5" /></div>
        © 2026 Nandhanananda Shenoy. Full Stack Developer.
      </footer>
    </main>
  );
};

const SectionTitle = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="mb-10 text-center">
    <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan">{eyebrow}</p>
    <h2 className="text-3xl font-black md:text-5xl">{title}</h2>
  </div>
);

const InfoCard = ({ icon: Icon, title, subtitle, meta }: { icon: typeof GraduationCap; title: string; subtitle: string; meta: string }) => (
  <div className="glass-panel rounded-3xl p-7 transition-transform hover:-translate-y-2">
    <Icon className="mb-5 size-8 text-cyan" />
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="mt-3 text-muted-foreground">{subtitle}</p>
    <p className="mt-4 font-semibold text-gold">{meta}</p>
  </div>
);

const ServiceCard = ({ index, title, copy }: { index: number; title: string; copy: string }) => (
  <div className="glass-panel rounded-2xl p-6 transition-transform hover:-translate-y-2">
    <span className="text-sm font-black text-gradient">0{index}</span>
    <h3 className="mt-4 text-xl font-bold">{title}</h3>
    <p className="mt-4 text-sm leading-6 text-muted-foreground">{copy}</p>
  </div>
);

const ProjectCard = ({ title, copy, tags }: { title: string; copy: string; tags: string[] }) => (
  <article className="glass-panel group overflow-hidden rounded-3xl transition-transform hover:-translate-y-2">
    <div className="noise-overlay flex h-44 items-center justify-center bg-soft-gradient">
      <Code2 className="size-16 text-cyan transition-transform group-hover:scale-110" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{copy}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => <span key={tag} className="rounded-full border border-glass-border px-3 py-1 text-xs text-muted-foreground">{tag}</span>)}
      </div>
    </div>
  </article>
);

export default Index;