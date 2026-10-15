import type { CSSProperties } from 'react';
import { ArrowDown, ArrowUpRight, BrainCircuit, Code2, Cloud, Smartphone, Layers3, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Header } from '@/components/Header';
import { LogoMark } from '@/components/LogoMark';
import { MotionRoot } from '@/components/MotionRoot';

const services = [
  {n:'01', icon:BrainCircuit, name:'AI & Intelligent Automation', desc:'Bring AI into real workflows with practical integrations, intelligent assistants, and automation built around your business.', tags:'LLM Integrations  /  AI Workflows'},
  {n:'02', icon:Code2, name:'Web Application Development', desc:'Fast, accessible, and dependable digital experiences designed for your users and engineered to grow.', tags:'Web Platforms  /  Full-Stack'},
  {n:'03', icon:Smartphone, name:'Mobile App Development', desc:'Thoughtful iOS and Android experiences, from the first prototype through launch and beyond.', tags:'iOS  /  Android  /  Cross-Platform'},
  {n:'04', icon:Layers3, name:'SaaS & Product Engineering', desc:'Turn an idea into a real product with scalable architecture, iterative delivery, and maintainable code.', tags:'MVPs  /  Platforms  /  APIs'},
  {n:'05', icon:Cloud, name:'Cloud & DevOps', desc:'Build a stronger foundation with modern infrastructure, streamlined deployments, and reliable operations.', tags:'Cloud Infrastructure  /  CI/CD'},
  {n:'06', icon:ShieldCheck, name:'Software Quality & Testing', desc:'Improve reliability and release with confidence through thoughtful test strategies and automation.', tags:'Test Automation  /  QA Engineering'},
];

const steps = [
  {num:'01', title:'Discover', desc:'We get clear on your business, users, and what success should look like.'},
  {num:'02', title:'Design', desc:'We shape a practical solution and make the important trade-offs early.'},
  {num:'03', title:'Build', desc:'We turn the plan into working software with quality built into every step.'},
  {num:'04', title:'Evolve', desc:'We refine, support, and improve the product as your needs grow.'},
];

const technologies = ['TypeScript','React','Next.js','Node.js','Python','Swift','AWS','Docker','PostgreSQL','AI / LLMs'];

export default function Home() {
  return <MotionRoot>
  <main id="top">
    <Header/>

    <section className="hero">
      <div className="shell">
        <h1>
          <span className="hero-line" style={{'--i': 0} as CSSProperties}>Technology built</span>
          <span className="hero-line" style={{'--i': 1} as CSSProperties}>for what’s next.</span>
          <span className="hero-line outline" style={{'--i': 2} as CSSProperties}>We make it real.</span>
        </h1>
        <p className="hero-lead" style={{'--i': 3} as CSSProperties}>
          We design, develop, and scale software that helps ambitious businesses move forward. Smart solutions, strong engineering, and people you can build with.
        </p>
        <div className="hero-actions" style={{'--i': 4} as CSSProperties}>
          <a className="btn btn-primary" href="mailto:info@silkitech.com?subject=Project%20inquiry">
            Start a conversation <ArrowDown size={14}/>
          </a>
          <a className="btn btn-ghost" href="#services">
            Explore our services <ArrowDown size={14}/>
          </a>
        </div>
        <p className="hero-note" style={{'--i': 5} as CSSProperties}>A conversation of 30 minutes. No pitch deck required.</p>
      </div>
    </section>

    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0,1].map(copy => (
          <div className="marquee-row" key={copy}>
            {technologies.map(t => <span className="marquee-item" key={`${copy}-${t}`}>{t}<i>*</i></span>)}
          </div>
        ))}
      </div>
    </div>

    <section className="panel-section">
      <div className="shell panel-grid">
        <div data-reveal>
          <div className="section-label">// Software · 01</div>
          <h2>Engineering-first.<br/>Business-focused.</h2>
          <p>Good software solves real problems. We bring the strategy, design, and engineering together to make it happen.</p>
        </div>
        <div className="dark-panel" data-reveal aria-label="SilkiTech build preview" role="img">
          <div className="dark-panel-meta">
            <span>// silkitech / build</span>
            <span className="live-dot"/>
          </div>
          <p className="dark-panel-kicker">Ideas → Engineering → Impact</p>
          <div className="dark-panel-word">BUILD<span className="cursor"/></div>
        </div>
      </div>
    </section>

    <section id="services" className="section">
      <div className="shell">
        <div className="section-top" data-reveal>
          <div>
            <div className="section-label">// What we do · 02</div>
            <h2>Solutions that help<br/>your business go further.</h2>
          </div>
          <p>From first ideas to complex platforms, we build reliable digital solutions that make a difference.</p>
        </div>
        <div className="services-grid">
          {services.map((service, i) => (
            <article className="service-card" data-reveal style={{'--i': i} as CSSProperties} key={service.n}>
              <div className="service-top">
                <span className="service-icon"><service.icon size={22} strokeWidth={1.6}/></span>
                <span className="service-number">{service.n}</span>
              </div>
              <h3>{service.name}</h3>
              <p>{service.desc}</p>
              <div className="service-bottom">
                <span>{service.tags}</span>
                <ArrowUpRight size={16}/>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="about" className="section about-section">
      <div className="shell about-grid">
        <div className="about-visual" data-reveal>
          <div className="about-shape shape-back"/>
          <div className="about-shape shape-front"/>
          <div className="about-overlay">
            <span>Built with purpose.<br/>Made to last.</span>
          </div>
        </div>
        <div className="about-copy" data-reveal>
          <div className="section-label">// About · 03</div>
          <h2>More than code.<br/>A partner in progress.</h2>
          <p>Every great digital product starts with understanding the challenge behind it. At SilkiTech, we pair clear thinking with hands-on engineering to build software that’s useful, dependable, and ready for change.</p>
          <p>We care about the details that matter: thoughtful architecture, simple experiences, and technology that keeps working as your business evolves.</p>
          <div className="principles">
            <div><CheckCircle2 size={16}/> Clear communication</div>
            <div><CheckCircle2 size={16}/> Practical engineering</div>
            <div><CheckCircle2 size={16}/> Long-term thinking</div>
          </div>
          <a className="text-link" href="mailto:info@silkitech.com?subject=About%20SilkiTech">Get to know us <ArrowUpRight size={16}/></a>
        </div>
      </div>
    </section>

    <section id="approach" className="section process-section">
      <div className="shell">
        <div className="section-label light-label" data-reveal>// How we work · 04</div>
        <div className="process-title" data-reveal>
          <h2>From idea to impact.<br/>With a clear path forward.</h2>
          <p>Great products are the result of close collaboration, smart decisions, and steady execution.</p>
        </div>
        <div className="steps-grid">
          {steps.map((step, i) => (
            <div className="step" data-step style={{'--i': i} as CSSProperties} key={step.num}>
              <span className="step-num">{step.num}</span>
              <div className="step-line"/>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="expertise" className="section">
      <div className="shell expertise-layout">
        <div data-reveal>
          <div className="section-label">// Toolkit · 05</div>
          <h2>Modern tools.<br/>Solid foundations.</h2>
          <p>We choose technologies for the problem they’re solving, not just because they’re trending.</p>
        </div>
        <div className="tech-pills" data-reveal>
          {technologies.map(t => <span key={t}>{t}<ArrowUpRight size={14}/></span>)}
        </div>
      </div>
    </section>

    <section className="contact-section" id="contact">
      <div className="shell contact-inner">
        <div data-reveal>
          <div className="section-label light-label">// Let’s talk</div>
          <h2>Have a project<br/>in mind? Let’s talk.</h2>
          <p>Tell us what you’re working on. We’d love to hear about it.</p>
          <a href="mailto:info@silkitech.com?subject=Project%20inquiry" className="contact-email">
            info@silkitech.com <ArrowUpRight size={22}/>
          </a>
        </div>
      </div>
    </section>

    <footer className="footer">
      <div className="shell">
        <div className="footer-main">
          <div>
            <a className="brand footer-brand" href="#top">
              <LogoMark/>
              <span>SILKITECH</span>
            </a>
            <p>Thoughtful technology.<br/>Real business impact.</p>
          </div>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#approach">Approach</a>
            <a href="mailto:info@silkitech.com">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SilkiTech. All rights reserved.</span>
          <span>Made to move you forward.</span>
        </div>
      </div>
    </footer>
  </main>
  </MotionRoot>;
}
