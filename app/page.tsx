import Link from "next/link";
import { ActivityGrid, Spotlight, Terminal } from "./portfolio-interactions";
import { projects } from "./projects";

const stack: Array<[string, string[]]> = [
  ["Languages", ["TypeScript", "JavaScript", "Java"]],
  ["Frontend", ["React", "Next.js", "Tailwind"]],
  ["Backend", ["Node.js", "NestJS", "Spring Boot", "Express"]],
  ["Databases", ["PostgreSQL", "MongoDB", "Redis"]],
  ["Animation", ["Motion", "GSAP"]],
  ["Tools", ["Git", "Docker", "Figma", "Postman"]],
];

const stats: Array<[string, string, string]> = [
  ["06", "yr", "Shipping in prod"],
  ["24", "+", "Projects delivered"],
  ["1.2k", "↑", "Commits / year"],
  ["11", "★", "OSS contributions"],
];

const timeline: Array<[string, string, string, string]> = [
  [
    "2024 - PRESENT",
    "Senior Software Engineer",
    "stealth startup",
    "Leading platform work on a distributed data product. Shipping TypeScript services and Next.js surfaces.",
  ],
  [
    "2022 - 2024",
    "Software Engineer",
    "fintech (remote)",
    "Built ledger primitives and reconciliation pipelines in Java / Spring Boot.",
  ],
  [
    "2020 - 2022",
    "Full-stack Engineer",
    "agency",
    "Delivered 12+ client products across React, Node and NestJS stacks.",
  ],
  [
    "2019 - 2020",
    "Junior Engineer",
    "first role",
    "Wrote my first production code. Learned git the hard way.",
  ],
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="label">
      <span className="bar" />
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Spotlight />
      <div className="shell">
        <nav className="nav">
          <div className="brand">
            <span className="dot" />
            rusith.dev
          </div>
          <div className="navlinks">
            <a href="#work">work</a>
            <a href="#about">about</a>
            <a href="#stack">stack</a>
            <a href="#contact">contact</a>
          </div>
        </nav>

        <main className="bento">
          <section className="cell c-hero">
            <div className="hero">
              <div className="hero-top">
                <div className="hero-meta">- PORTFOLIO / 2026</div>
                <div className="hero-meta">INDEX · 01</div>
              </div>
              <div>
                <h1 className="hero-title">
                  Rusith Tharindu
                  <br />
                  Thushan.
                  <br />
                  <em>Software engineer</em>
                  <br />
                  building resilient systems.
                </h1>
                <p className="hero-sub">
                  I design and ship full-stack products end-to-end - from{" "}
                  <b>TypeScript</b> front-ends to <b>Spring Boot</b> services.
                  Currently focused on composable architectures, clean APIs,
                  and fast teams.
                </p>
              </div>
            </div>
          </section>

          <section className="cell c-status" id="about">
            <div className="status">
              <div>
                <Label>Status</Label>
                <div className="status-avail">
                  <span className="pulse" />
                  Available · May 2026
                </div>
              </div>
              <div className="status-msg">
                Open to <em>full-time</em> and select <em>contract</em> work on
                product teams that value craft.
              </div>
              <div className="status-meta">
                <div className="row">
                  <b>Location</b>
                  <span>Remote · GMT+5:30</span>
                </div>
                <div className="row">
                  <b>Response</b>
                  <span>Within 24 hours</span>
                </div>
                <div className="row">
                  <b>Stack pref</b>
                  <span>TS · Node · JVM</span>
                </div>
              </div>
            </div>
          </section>

          <section className="cell c-about">
            <div className="about">
              <Label>About</Label>
              <p>
                <strong>I ship software that lasts.</strong> Six years deep in
                product engineering - mostly the quiet middle layer where data
                meets UI and decisions compound. I care about boring
                correctness, fast feedback loops, and teammates who argue well.
              </p>
              <p>Off-hours: reading type systems, running long, and tuning small interfaces.</p>
            </div>
          </section>

          <section className="cell c-stack" id="stack">
            <Label>Stack</Label>
            <div className="stack-list">
              {stack.map(([category, items]) => (
                <div className="stack-row" key={category}>
                  <div className="stack-cat">{category}</div>
                  <div className="stack-chips">
                    {items.map((item, index) => (
                      <span
                        className={index < 2 && category === "Languages" ? "chip primary" : "chip"}
                        key={item}
                      >
                        <span className="sq" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="cell c-stats">
            <Label>By the numbers</Label>
            <div className="stats-grid">
              {stats.map(([value, suffix, label]) => (
                <div className="stat" key={label}>
                  <div className="stat-num">
                    {value}
                    <sup>{suffix}</sup>
                  </div>
                  <div className="stat-lab">{label}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="cell c-projects" id="work">
            <div className="projects">
              <div className="projects-head">
                <Label>Selected work</Label>
                <a href="#work" className="view">
                  view all →
                </a>
              </div>
              <div className="project-list">
                {projects.map((project) => (
                  <Link className="project" href={`/projects/${project.slug}`} key={project.slug}>
                    <div className="proj-num">{project.number}</div>
                    <div>
                      <div className="proj-title">{project.title}</div>
                      <div className="proj-desc">{project.description}</div>
                    </div>
                    <div className="proj-tags">
                      {project.tags.map((tag) => (
                        <span className="proj-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="proj-arrow">→</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="cell c-github">
            <div className="gh">
              <Label>Activity</Label>
              <div className="gh-head">
                <div className="gh-count">
                  1,284 <small>CONTRIBUTIONS</small>
                </div>
                <div className="gh-year">past 12 months</div>
              </div>
              <ActivityGrid />
              <div className="gh-legend">
                <span>Apr &apos;25</span>
                <span className="gh-scale">
                  less
                  {["#18181b", "#2a1a1c", "#4a1f22", "#7a2a2e", "oklch(0.72 0.18 20)"].map(
                    (color) => (
                      <i style={{ background: color }} key={color} />
                    ),
                  )}
                  more
                </span>
                <span>Apr &apos;26</span>
              </div>
            </div>
          </section>

          <section className="cell c-terminal">
            <div className="term">
              <div className="term-bar">
                <span className="term-dot r" />
                <span className="term-dot y" />
                <span className="term-dot g" />
                <span className="term-title">rusith@dev ~ /portfolio</span>
              </div>
              <Terminal />
            </div>
          </section>

          <section className="cell c-timeline">
            <Label>Experience</Label>
            <div className="tl-list">
              {timeline.map(([year, role, company, description], index) => (
                <div className={index === 0 ? "tl-item current" : "tl-item"} key={role}>
                  <div className="tl-year">{year}</div>
                  <div className="tl-role">
                    {role} <span className="tl-co">· {company}</span>
                  </div>
                  <div className="tl-desc">{description}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="cell c-contact" id="contact">
            <div className="contact">
              <div className="contact-left">
                <Label>Get in touch</Label>
                <div className="contact-h">Let&apos;s build something <em>worth shipping.</em></div>
                <div className="contact-sub">Reply time under 24h. Bring problems, not just specs.</div>
              </div>
              <div className="contact-right">
                <a href="mailto:hello@rusith.dev" className="social primary" aria-label="Email">
                  <span aria-hidden="true">✉</span>
                  hello@rusith.dev
                  <span aria-hidden="true">→</span>
                </a>
                <div className="socials">
                  {["GitHub", "LinkedIn", "X", "Medium", "Bluesky", "Reddit"].map((name) => (
                    <a href="#" className="social icon" aria-label={name} title={name} key={name}>
                      {name.slice(0, 1)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="foot">
          <span>© 2026 RUSITH · CRAFTED WITH INTENT</span>
          <span>
            v1.0 · <span className="live-dot">●</span> LIVE
          </span>
        </footer>
      </div>
    </>
  );
}
