"use client";

import { useEffect, useMemo, useState } from "react";
import {
  profile, hero, sections, about, featured, hiddenRepos, services,
  education, experience, skills, toolkit, nextUp,
} from "./data";

type Repo = {
  id: number; name: string; description: string | null; html_url: string;
  homepage: string | null; language: string | null; fork: boolean; updated_at: string;
};
type Status = "loading" | "ok" | "error";
type Sec = { n: string; label: string; title: string[]; text?: string };

const prettify = (s: string) =>
  s.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim().replace(/\b\w/g, (c) => c.toUpperCase());
const monthYear = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });

function Heading({ s }: { s: Sec }) {
  return (
    <div className="heading">
      <span className="label">{s.n} / {s.label}</span>
      <h2>
        {s.title.map((line, i) => (
          <span key={i}>{line}{i < s.title.length - 1 && <br />}</span>
        ))}
      </h2>
      {s.text && <p className="muted">{s.text}</p>}
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  return <div className="tags">{items.map((t) => <span key={t} className="tag">{t}</span>)}</div>;
}

export default function Page() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(`https://api.github.com/users/${profile.github}/repos?per_page=100&sort=updated`, { signal: ctrl.signal })
      .then((r) => { if (!r.ok) throw new Error(String(r.status)); return r.json(); })
      .then((d: Repo[]) => { setRepos(Array.isArray(d) ? d : []); setStatus("ok"); })
      .catch((e) => { if (e?.name !== "AbortError") setStatus("error"); });
    return () => ctrl.abort();
  }, []);

  const projects = useMemo(() => {
    const hidden = new Set(hiddenRepos.map((h) => h.toLowerCase()));
    return repos
      .filter((r) => !r.fork && r.name.toLowerCase() !== profile.github.toLowerCase() && !hidden.has(r.name.toLowerCase()))
      .sort((a, b) => {
        const pa = featured[a.name.toLowerCase()]?.pin ? 1 : 0;
        const pb = featured[b.name.toLowerCase()]?.pin ? 1 : 0;
        if (pa !== pb) return pb - pa;
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      });
  }, [repos]);

  const first = profile.name.split(" ")[0];
  const ghUrl = `https://github.com/${profile.github}`;

  return (
    <>
      <header className="nav">
        <div className="wrap nav-in">
          <a href="#top" className="logo">{"<"}{first}{" />"}</a>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
          </nav>
          <a href="#contact" className="btn primary sm">Contact</a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="wrap hero">
          <div>
            {profile.available && <span className="badge"><i /> Open to work</span>}
            <p className="tagline">{profile.tagline}</p>
            <h1>{hero.headline}</h1>
            <p className="lead">{hero.intro}</p>
            <div className="row">
              <a href="#projects" className="btn primary">View my work</a>
              <a href="#contact" className="btn">Get in touch</a>
              {profile.resume && <a href={profile.resume} className="btn ghost">Resume ↗</a>}
            </div>
          </div>
          <div className="avatar-box">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://github.com/${profile.github}.png?size=400`} alt={`${profile.name}'s photo`} width={240} height={240} />
            <div className="avatar-cap"><b>{profile.name}</b><span>{profile.location}</span></div>
          </div>
        </section>

        {/* 01 ABOUT */}
        <section id="about" className="wrap">
          <Heading s={sections.about} />
          <div className="two">
            <div>{about.paragraphs.map((p, i) => <p key={i} className="muted body">{p}</p>)}</div>
            <dl className="facts">
              {about.facts.map((f) => <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}
            </dl>
          </div>
        </section>

        {/* 02 PROJECTS */}
        <section id="projects" className="wrap">
          <Heading s={sections.projects} />
          {status === "loading" && <p className="muted">Loading projects…</p>}
          {status === "error" && (
            <div className="notice">Couldn't load projects right now. See them all on <a href={`${ghUrl}?tab=repositories`} target="_blank" rel="noreferrer">my GitHub</a>.</div>
          )}
          {status === "ok" && projects.length === 0 && (
            <div className="notice">No public projects found yet. Check <a href={ghUrl} target="_blank" rel="noreferrer">my GitHub</a>.</div>
          )}
          <div className="grid projects">
            {projects.map((p, i) => {
              const f = featured[p.name.toLowerCase()];
              return (
                <article className="card project" key={p.id}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{f?.title || prettify(p.name)}</h3>
                  <p className="muted">{f?.blurb || p.description || "No description yet."}</p>
                  <div className="meta">
                    {p.language && <span className="tag">{p.language}</span>}
                    <span className="muted small">Updated {monthYear(p.updated_at)}</span>
                  </div>
                  <div className="links">
                    <a href={p.html_url} target="_blank" rel="noreferrer">Code ↗</a>
                    {p.homepage && <a href={p.homepage.startsWith("http") ? p.homepage : `https://${p.homepage}`} target="_blank" rel="noreferrer">Live demo ↗</a>}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* 03 SERVICES */}
        <section id="services" className="wrap">
          <Heading s={sections.services} />
          <div className="grid">
            {services.map((s, i) => (
              <div className="card" key={s.title}>
                <span className="num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p className="muted">{s.text}</p>
                <Tags items={s.tags} />
              </div>
            ))}
          </div>
        </section>

        {/* 04 EDUCATION */}
        <section id="education" className="wrap">
          <Heading s={sections.education} />
          <div className="timeline">
            {education.map((e) => (
              <div className="card" key={e.school}>
                <div className="between"><h3>{e.school}</h3><span className="mono muted small">{e.when}</span></div>
                <p className="muted">{e.what}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 05 EXPERIENCE */}
        <section id="experience" className="wrap">
          <Heading s={sections.experience} />
          <div className="grid two-col">
            {experience.map((x, i) => (
              <div className="card" key={x.title + x.place}>
                <span className="num">0{i + 1}</span>
                <div className="between"><h3>{x.title}</h3><span className="mono muted small">{x.when}</span></div>
                <strong className="small">{x.place}</strong>
                <p className="muted">{x.text}</p>
                <Tags items={x.tags} />
              </div>
            ))}
          </div>
        </section>

        {/* 06 SKILLS */}
        <section id="skills" className="wrap">
          <Heading s={sections.skills} />
          <div className="grid four">
            {skills.map((s, i) => (
              <div className="card slim" key={s}><span className="num">{String(i + 1).padStart(2, "0")}</span>{s}</div>
            ))}
          </div>
        </section>

        {/* 07 TOOLKIT */}
        <section className="wrap">
          <Heading s={sections.toolkit} />
          <div className="grid five">
            {toolkit.map((t) => (
              <div className="card slim" key={t.name}><b>{t.name}</b><span className="muted small">{t.note}</span></div>
            ))}
          </div>
        </section>

        {/* 08 NEXT */}
        <section className="wrap">
          <Heading s={sections.next} />
          <a href="#projects" className="btn">Take another look</a>
          <div className="grid" style={{ marginTop: "1.5rem" }}>
            {nextUp.map((n) => (
              <div className="card" key={n.title}><h3>{n.title}</h3><p className="muted">{n.text}</p></div>
            ))}
          </div>
        </section>

        {/* 09 CONTACT */}
        <section id="contact" className="wrap">
          <div className="cta">
            <Heading s={sections.contact} />
            <a className="btn primary big" href={`mailto:${profile.email}`}>{profile.email}</a>
            <div className="links">
              <a href={ghUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
              {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href="#top">↑ Back to top</a>
        </div>
      </footer>
    </>
  );
}