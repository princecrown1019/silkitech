import type { CSSProperties } from 'react';
import { ArrowDown, ArrowUpRight, BrainCircuit, Code2, Cloud, Smartphone, Layers3, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/Header';
import { LogoMark } from '@/components/LogoMark';
import { MotionRoot } from '@/components/MotionRoot';
import { SilkField } from '@/components/SilkField';

const products = [
  {
    n:'01',
    audience:'Product teams',
    name:'Custom software',
    promise:'Web, mobile, and SaaS — built to last, not just to launch.',
    points:['Product-grade web applications','iOS and Android when the work needs a pocket','Architecture you can keep shipping on'],
  },
  {
    n:'02',
    audience:'Operations',
    name:'AI & automation',
    promise:'Put intelligence in the work you already do, inside the tools you already use.',
    points:['Assistants that take the repetitive hours back','Workflows wired into your existing stack','Integrations that stop the copy-paste'],
  },
];

const services = [
  {n:'01', icon:BrainCircuit, name:'AI & Intelligent Automation', desc:'Bring AI into real workflows with practical integrations, intelligent assistants, and automation built around your business.', before:'Manual work', after:'A system that runs'},
  {n:'02', icon:Code2, name:'Web Application Development', desc:'Fast, accessible, and dependable digital experiences designed for your users and engineered to grow.', before:'A slide deck', after:'A product people use'},
  {n:'03', icon:Smartphone, name:'Mobile App Development', desc:'Thoughtful iOS and Android experiences, from first prototype through launch and beyond.', before:'An idea on paper', after:'An app in their pocket'},
  {n:'04', icon:Layers3, name:'SaaS & Product Engineering', desc:'Turn an idea into a real product with scalable architecture, iterative delivery, and maintainable code.', before:'A weekend prototype', after:'A platform you can sell'},
  {n:'05', icon:Cloud, name:'Cloud & DevOps', desc:'A stronger foundation: modern infrastructure, streamlined deployments, and operations that stay boring.', before:'Fragile deploys', after:'Boring, safe releases'},
  {n:'06', icon:ShieldCheck, name:'Software Quality & Testing', desc:'Improve reliability and release with confidence through thoughtful test strategies and automation.', before:'Hope it works', after:'Know it works'},
];

const quotes = [
  {words:'We pair clear thinking with hands-on engineering. Software that’s useful, dependable, and ready for change.', source:'How we work'},
  {words:'The details that matter: thoughtful architecture, simple experiences, technology that keeps working.', source:'What we care about'},
  {words:'A conversation of thirty minutes. Then we build the next honest version, together.', source:'How it starts'},
];

const steps = [
  {when:'Week 0', body:'We sit with the problem until we can say it back to you, plainly.'},
  {when:'Weeks 1–2', body:'You see a first shape of the work — something real, not a deck.'},
  {when:'Every week after', body:'Another visible piece, until the thing is ready to live in the world.'},
  {when:'After launch', body:'We keep a hand on it. Fixes, improvements, the next honest version.'},
];

const ways = [
  {n:'01', name:'Diagnostic', body:'We find the real problem — including the ones you had not named yet.'},
  {n:'02', name:'Scoped build', body:'A defined product or bottleneck, delivered in phases you can see.'},
  {n:'03', name:'Product partnership', body:'We build with you over quarters, not a one-off handoff.'},
  {n:'04', name:'Care', body:'After launch we stay on the line: quality, operations, the next version.'},
];

const faqs = [
  {q:'How do we start?', a:'A thirty-minute conversation. You tell us what is eating the week. We tell you whether we can help, and how.'},
  {q:'Do we need a spec?', a:'No. A real problem is enough. We write the shape of the work with you before anyone starts building.'},
  {q:'How long does it take?', a:'The first working piece is usually a matter of weeks. You see progress every week after that.'},
  {q:'Who owns the code?', a:'You do. Documentation, repositories, and the ability to walk away are part of the work — that is why people stay.'},
  {q:'Will this replace the tools we already use?', a:'We build alongside them. Nothing is swapped without your word.'},
  {q:'Do you disappear after launch?', a:'No. Launch is a checkpoint, not a goodbye. We stay reachable for what comes next.'},
];

const technologies = ['TypeScript','React','Next.js','Node.js','Python','Swift','AWS','Docker','PostgreSQL','LLMs'];

export default function Home() {
  return <MotionRoot>
    <main id="top">
      <Header/>

      <section className="hero">
        <SilkField/>
        <div className="hero-sheen" aria-hidden="true"/>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>
              <span className="hero-line hero-rise" style={{'--i': 0} as CSSProperties}>Technology built</span>
              <span className="hero-line hero-rise" style={{'--i': 1} as CSSProperties}>for what’s next.</span>
              <span className="hero-line hero-rise outline" style={{'--i': 2} as CSSProperties}>We make it <em>real.</em></span>
            </h1>
            <p className="hero-lead hero-rise" style={{'--i': 3} as CSSProperties}>
              We design, develop, and scale software that helps ambitious businesses move forward. Smart solutions, strong engineering, and people you can build with.
            </p>
            <div className="hero-actions hero-rise" style={{'--i': 4} as CSSProperties}>
              <a className="btn btn-primary" href="#contact">
                Start a conversation <ArrowDown size={14}/>
              </a>
              <a className="btn btn-ghost" href="#work">
                See the work <ArrowDown size={14}/>
              </a>
            </div>
            <p className="hero-note hero-rise" style={{'--i': 5} as CSSProperties}>A conversation of 30 minutes. No pitch deck required.</p>
          </div>
          <div className="hero-stage" aria-hidden="true">
            <div className="stage-frame">
              <div className="stage-meta">
                <span>// silkitech / build</span>
                <span className="live-dot"/>
              </div>
              <p className="stage-line who">you</p>
              <p className="stage-line">This still takes half the week.</p>
              <p className="stage-line who">silkitech</p>
              <p className="stage-line">Understood. Building.</p>
              <p className="stage-kicker">Ideas → Engineering → Impact</p>
              <div className="stage-word">BUILD<span className="cursor"/></div>
              <p className="stage-line who end">you</p>
              <p className="stage-line">Now it takes five minutes.</p>
            </div>
          </div>
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

      <section id="studio" className="section">
        <div className="shell band-grid">
          <div data-reveal>
            <p className="meta">// studio · 01</p>
            <h2>Engineering-first.<br/>Business-focused.</h2>
            <p className="lede">Good software solves real problems. We bring the strategy, design, and engineering together to make it happen.</p>
            <p className="band-note">Clear thinking. Hands-on building. Software that lasts.</p>
          </div>
          <div className="about-visual" data-reveal>
            <div className="about-shape shape-left"/>
            <div className="about-shape shape-mid"/>
            <div className="about-shape shape-right"/>
            <div className="about-overlay">Built with purpose.<br/>Made to last.</div>
          </div>
        </div>
      </section>

      <section id="work" className="section">
        <div className="shell">
          <header className="section-head stack" data-reveal>
            <p className="meta">// work · 02</p>
            <h2>What we build</h2>
            <p className="lede">Two doors into the same studio. Custom software, and the intelligence that sits on top of it.</p>
          </header>
          <ul className="product-grid">
            {products.map((product, i) => (
              <li className="product-card" data-reveal style={{'--i': i} as CSSProperties} key={product.n}>
                <p className="product-top">
                  <span className="product-index">{product.n}</span>
                  <span>{product.audience}</span>
                </p>
                <h3>{product.name}</h3>
                <p className="product-promise">{product.promise}</p>
                <ul className="product-points">
                  {product.points.map(point => <li key={point}>{point}</li>)}
                </ul>
                <a className="product-link" href="#contact">Start a conversation <ArrowUpRight size={14}/></a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="services" className="section">
        <div className="shell">
          <header className="section-head stack" data-reveal>
            <p className="meta">// what we do · 03</p>
            <h2>Solutions that help your business go further.</h2>
          </header>
          <ul className="card-grid">
            {services.map((service, i) => (
              <li className="card" data-reveal style={{'--i': i} as CSSProperties} key={service.n}>
                <div className="card-top">
                  <span className="card-icon"><service.icon size={22} strokeWidth={1.4}/></span>
                  <span className="card-index">{service.n}</span>
                </div>
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
                <div className="card-delta">
                  <s>{service.before}</s>
                  <span>→</span>
                  <b>{service.after}</b>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-invert">
        <div className="shell">
          <header className="section-head stack" data-reveal>
            <p className="meta">// studio · 04</p>
            <h2 className="caps">More than code. A partner in progress.</h2>
          </header>
          <ul className="quote-grid">
            {quotes.map((quote, i) => (
              <li className="quote-card" data-reveal style={{'--i': i} as CSSProperties} key={quote.source}>
                <p className="quote-words">{quote.words}</p>
                <p className="quote-source">{quote.source}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="plan" className="section">
        <div className="shell">
          <header className="section-head stack" data-reveal>
            <p className="meta">// the plan · 05</p>
            <h2 className="caps">How we work</h2>
          </header>
          <ol className="plan">
            {steps.map((step, i) => (
              <li className="plan-step" data-step style={{'--i': i} as CSSProperties} key={step.when}>
                <p className="plan-when">{step.when}</p>
                <p className="plan-body">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-invert">
        <div className="shell">
          <header className="section-head stack" data-reveal>
            <p className="meta">// the promise · 06</p>
            <h2 className="caps">We stay until it works.</h2>
          </header>
          <div className="guarantee" data-reveal>
            <div className="guarantee-cell">
              <p className="guarantee-lead">If we take the work, we see it through. A written definition of done — then we don’t disappear at launch.</p>
              <p className="guarantee-body">Every version ships with a clear finish line. We keep going until we get there.</p>
            </div>
            <div className="guarantee-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.9">
                <path d="M12 2.75 4.4 5.8v5.9c0 4.45 3.24 8.5 7.6 9.55 4.36-1.05 7.6-5.1 7.6-9.55V5.8L12 2.75Z"/>
                <path d="m8.8 12.2 2.1 2.1 4.3-4.4"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <header className="section-head stack" data-reveal>
            <p className="meta">// formats · 07</p>
            <h2 className="caps">How we can work with you</h2>
          </header>
          <ul className="ways">
            {ways.map((way, i) => (
              <li className="ways-row" data-reveal style={{'--i': i} as CSSProperties} key={way.n}>
                <span className="ways-index">{way.n}</span>
                <h3>{way.name}</h3>
                <p>{way.body}</p>
              </li>
            ))}
          </ul>
          <p className="ways-note" data-reveal>Every engagement starts the same way: a diagnosis, then the smallest honest version of the work.</p>
        </div>
      </section>

      <section className="section section-invert">
        <div className="shell">
          <p className="meta" data-reveal>// fit · 08</p>
          <div className="fit">
            <div className="fit-col" data-reveal>
              <h2>It’s for you if:</h2>
              <ul>
                <li><span>+</span>you have a real product or process to ship</li>
                <li><span>+</span>you want senior engineering, not a slide deck</li>
                <li><span>+</span>someone on your team still copies data by hand</li>
                <li><span>+</span>you need the thing to keep working after launch</li>
              </ul>
            </div>
            <div className="fit-col no" data-reveal>
              <h2>It’s not for you if:</h2>
              <ul>
                <li><span>–</span>you want a presentation about AI</li>
                <li><span>–</span>you’re shopping for the cheapest bid</li>
                <li><span>–</span>nothing actually repeats in the work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <header className="section-head stack" data-reveal>
            <p className="meta">// faq · 09</p>
            <h2 className="caps">If you’re wondering</h2>
          </header>
          <div className="faq">
            {faqs.map((item, i) => (
              <details className="faq-row" data-reveal style={{'--i': i} as CSSProperties} key={item.q}>
                <summary>
                  <span className="faq-index">{String(i + 1).padStart(2,'0')}</span>
                  <span className="faq-q">{item.q}</span>
                  <span className="faq-sign" aria-hidden="true"/>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="shell contact-layout">
          <div data-reveal>
            <p className="meta">// contact · 10</p>
            <h2 className="caps">Have a project in mind?<br/>Let’s talk.</h2>
            <p className="lede">Tell us what is eating the week. We’d like to hear it.</p>
            <a className="contact-email" href="mailto:info@silkitech.com?subject=Project%20inquiry">
              info@silkitech.com <ArrowUpRight size={22}/>
            </a>
          </div>
          <div className="contact-aside" data-reveal>
            <p className="contact-aside-kicker">A conversation of 30 minutes.</p>
            <p>No pitch deck. No theatre. If we can help, we say how. If we can’t, we say that too.</p>
            <a className="btn btn-primary" href="mailto:info@silkitech.com?subject=Project%20inquiry">
              Write to us <ArrowUpRight size={14}/>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell">
          <div className="footer-top">
            <div>
              <a className="brand" href="#top">
                <LogoMark size={28}/>
                <span>SILKITECH</span>
              </a>
              <p className="footer-blurb">Thoughtful technology.<br/>Real business impact.</p>
            </div>
            <div className="footer-groups">
              <div>
                <p className="footer-group-title">Explore</p>
                <a href="#work">Work</a>
                <a href="#studio">Studio</a>
                <a href="#plan">Process</a>
              </div>
              <div>
                <p className="footer-group-title">Contact</p>
                <a href="mailto:info@silkitech.com">info@silkitech.com</a>
                <a href="#contact">Start a conversation</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} SilkiTech</span>
            <span>Made to move you forward.</span>
          </div>
        </div>
      </footer>
    </main>
  </MotionRoot>;
}
