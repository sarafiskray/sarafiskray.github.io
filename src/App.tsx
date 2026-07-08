import { site, intro, work, projects, education, languages, colophon } from "./content";

function SectionLabel({ children }: { children: string }) {
  return <h2 className="section-label">{children}</h2>;
}

export default function App() {
  return (
    <main className="page">
      <header>
        <h1>{site.name}</h1>
        <p className="location">{site.location}</p>
        <p className="tagline">{site.tagline}</p>
        <nav className="anchor-nav" aria-label="Sections">
          {Object.entries(site.sections).map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section id="about">
        <SectionLabel>{site.sections.about}</SectionLabel>
        {intro.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </section>

      <section id="work">
        <SectionLabel>{site.sections.work}</SectionLabel>
        <div className="work-head">
          <h3>{work.company}</h3>
          <span className="period">{work.period}</span>
        </div>
        <p className="work-role">{work.role}</p>
        <p>{work.summary}</p>
        <ul className="highlights">
          {work.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </section>

      <section id="projects">
        <SectionLabel>{site.sections.projects}</SectionLabel>
        {projects.map((p) => (
          <article className="project" key={p.title}>
            <h3>
              {p.href ? (
                <a href={p.href} target="_blank" rel="noreferrer">
                  {p.title}
                </a>
              ) : (
                p.title
              )}
            </h3>
            <p className="meta">{p.meta}</p>
            <p>{p.description}</p>
          </article>
        ))}
      </section>

      <section id="education">
        <SectionLabel>{site.sections.education}</SectionLabel>
        {education.map((s) => (
          <article className="school" key={s.name}>
            <div className="work-head">
              <h3>{s.name}</h3>
              <span className="period">{s.period}</span>
            </div>
            <p className="school-line">
              {s.credential ? `${s.credential} — ` : ""}
              {s.place}
            </p>
            {s.detail && <p className="school-detail">{s.detail}</p>}
          </article>
        ))}
        <p className="languages">{languages}</p>
      </section>

      <section id="contact">
        <SectionLabel>{site.sections.contact}</SectionLabel>
        <ul className="contact-list">
          {site.links.map((l) => (
            <li key={l.label}>
              <span className="contact-label">{l.label}</span>
              <a href={l.href} target="_blank" rel="noreferrer">
                {l.href.replace("mailto:", "").replace("https://www.", "").replace("https://", "")}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>{colophon}</span>
      </footer>
    </main>
  );
}
