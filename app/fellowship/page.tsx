"use client";

import React, { useEffect } from "react";
import Head from "next/head";

export default function Page() {
  useEffect(() => {
    const nav = document.getElementById("site-nav");
    if (!nav) return;
    const onScroll = () => {
      if (window.scrollY > 40) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>REACT Fellowship — Real-world Engineering &amp; Application through Collaborative Transformation</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <a className="skip-link" href="#main">Skip to main content</a>

      <div className="nav" role="navigation" id="site-nav" aria-label="Main navigation">
        <div className="nav-inner">
          <a
  href="/"
  className="brand"
  aria-label="REACT home"
>
  REACT
</a>
          <div className="nav-links" role="menubar" aria-label="Primary">
            <a role="menuitem" href="#about">About</a>
            <a role="menuitem" href="#process">Process</a>
            <a role="menuitem" href="#who">Who are you?</a>
            <a role="menuitem" href="https://forms.cloud.microsoft/r/eP2qMdaur7" className="cta" target="_blank" rel="noopener noreferrer">Apply Now</a>
          </div>
        </div>
      </div>

      <header className="hero" id="main" role="banner">
        <div className="inner">
          <div>
            <div className="pill">Real-world Engineering &amp; Application through Collaborative Transformation</div>
            <h1>REACT Fellowship</h1>
            <p className="lead">A six-month, full-time fellowship that takes you from a field problem to an evidence-refined prototype — and the option to launch a startup or social venture.</p>

            <div className="meta" aria-hidden="false">
              <div>Jan — Jun 2026</div>
              <div>Coimbatore, India</div>
              <div>25–30 Fellows</div>
            </div>

            <div className="cta-row">
              <a className="btn btn-primary" href="https://forms.cloud.microsoft/r/eP2qMdaur7" target="_blank" rel="noopener noreferrer">Apply Now</a>
              <a className="btn btn-ghost" href="#who">Who should apply?</a>
            </div>
          </div>

          <aside className="snapshot-card" aria-labelledby="snapshot-title" role="complementary">
            <h3 id="snapshot-title">Program snapshot</h3>
            <p>Fellows embed in real socio-technical systems, validate problems through field immersion, and build solutions that matter.</p>
            <ul>
              <li>Funding</li>
              <li>Mentorship</li>
              <li>Practical outcomes: prototypes &amp; ventures</li>
              <li>Interdisciplinary teams</li>
            </ul>
          </aside>
        </div>
      </header>

      <section id="about" className="container about" aria-labelledby="about-title">
        <h2 id="about-title">About REACT Fellowship</h2>
        <p><strong>REACT</strong> stands for <strong>Real-world Engineering and Application through Collaborative Transformation</strong>. The REACT Fellowship empowers students to engineer solutions in real socio-technical environments. Through hands-on challenges, interdisciplinary projects, and field immersion, REACT bridges the gap between classroom learning and real-world impact.</p>

        <p style={{ marginTop: 12 }}>Participants arrive with a preliminary problem statement, go for field immersion to validate assumptions, return to refine their problem, work on solutions, build prototypes, and — where appropriate — plan for launching startups or businesses to scale impact.</p>
      </section>

      <section id="process" className="container process" aria-labelledby="process-title">
        <h2 id="process-title">The REACT Process</h2>
        <div className="steps" role="list">
          {[
            ["1. Identify a Problem","Students come with a preliminary problem statement based on real community or sectoral needs."],
            ["2. Field Immersion","They go into the field to validate the problem through hands-on observation and stakeholder interactions."],
            ["3. Refine & Define","Insights from immersion are used to refine and sharpen the problem statement for clarity and feasibility."],
            ["4. Develop Solutions","Teams ideate, prototype, and test potential solutions with mentorship and technical support."],
            ["5. Build & Launch","Fellows transform prototypes into viable startups or social ventures ready for impact."],
            ["6. Scale & Sustain","Support continues post-fellowship to help teams scale, sustain, and extend impact in real ecosystems."]
          ].map((s, i) => (
            <div className="step" role="listitem" key={i}>
              <h4>{s[0]}</h4>
              <p>{s[1]}</p>
            </div>
          ))}
        </div>
      </section>

<section id="who" className="container">
  <div className="who-wrap">
    <div>
      <h2>Who should apply?</h2>
      <p className="muted">You might be a fit if any of these sound like you:</p>
      <ul>
        <li><strong>Curious doer:</strong> You want to learn by doing — not by exams.</li>
        <li><strong>Early-stage founder:</strong> You have an idea and want to validate it in the field.</li>
        <li><strong>Cross-disciplinary thinker:</strong> You blend engineering with social systems.</li>
        <li><strong>Committed team player:</strong> You’ll work closely with communities and mentors.</li>
        <li><strong>Entrepreneurial builder:</strong> You’re eager to transform an idea into a tangible product or service — laying the foundation for a startup or venture that creates lasting impact.</li>
      </ul>
    </div>

    <div className="highlight-card">
      <h4>Program highlights</h4>
      <ul>
        <li>6-month full-time fellowship (Jan–Jun 2026)</li>
        <li>Funding, mentorship, and technical support</li>
        <li>Field immersion &amp; community co-design</li>
        <li>Path to prototype, pilot, and launch</li>
      </ul>
      <div className="cohort">Cohort size: 25–30 fellows</div>
    </div>
  </div>
</section>


      <section className="cta-block">
        <div className="cta-inner">
          <h2>Ready to Transform Your Future?</h2>
          <p className="lead">Live in India. Lead a real system. Learn how to build transformation from the inside out.</p>
          <p className="note">Applications are reviewed on a rolling basis — apply early for priority consideration.</p>
          <a className="apply-btn" href="https://forms.cloud.microsoft/r/eP2qMdaur7" target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>
      </section>

      <footer>
        <div className="inner">
          <div>© REACT — Kumaraguru Institutions</div>
          <div className="small muted">Built for REACT Fellowship 2026 • Contact: <a href="mailto:react@kct.ac.in">react@kct.ac.in</a></div>
        </div>
      </footer>

      <style jsx global>{`
        :root{ --accent-1: #5b2df7; --accent-2: #a23df0; --bg-gradient: linear-gradient(135deg,var(--accent-1) 0%, var(--accent-2) 40%, #a73be6 100%); --cta-gradient: linear-gradient(90deg, #4c2bf3 0%, #b31df2 50%, #9b25e8 100%); --muted: #6b7280; --card-border: rgba(91,45,247,0.08); --max-width: 1200px; --radius: 14px; }
        *{box-sizing:border-box}
        html,body{height:100%}
        body{margin:0;font-family:Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;color:#111827;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:1.5;background:#fff}
        a{outline-offset:3px}
        .skip-link{position:absolute;left:-999px;top:auto;width:1px;height:1px;overflow:hidden}
        .skip-link:focus{left:12px;top:12px;width:auto;height:auto;padding:8px 12px;background:#111827;color:#fff;border-radius:6px;z-index:9999}
        .nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 60;
  display: flex;
  justify-content: center;
  align-items: center; /* centers items vertically */
  pointer-events: none;
  transition: background 240ms ease, box-shadow 240ms ease, top 240ms ease;
  background: linear-gradient(135deg, #5b2df7 0%, #a23df0 40%, #a73be6 100%);
  padding: 20px 0; /* increased vertical padding */
  height: 80px; /* optional: ensures consistent height */
}
        /* <-- only change made: nav becomes a solid white bar when scrolled */
        .nav.scrolled{background:#ffffff;box-shadow:0 6px 24px rgba(15,15,15,0.08);top:0;padding-top:6px;padding-bottom:6px}
        .nav-inner{width:95%;max-width:var(--max-width);display:flex;align-items:center;justify-content:space-between;pointer-events:all;padding:0 8px}
        .brand{font-weight:800;color:white;letter-spacing:0.4px;transition:color 240ms ease}
        .nav.scrolled .brand{color:var(--accent-1)}
        .nav-links{display:flex;gap:14px;align-items:center}
        .nav a{color:white;text-decoration:none;padding:8px 16px;border-radius:999px;font-weight:600;border:1px solid rgba(255,255,255,0.15);background:transparent;transition:color 240ms ease,border-color 240ms ease,background 240ms ease}
        .nav a.cta{background:white;color:var(--accent-1);box-shadow:0 6px 18px rgba(91,45,247,0.15);border:0}
        .nav.scrolled a{color:var(--accent-1);border-color:rgba(91,45,247,0.12);background:transparent}
        .nav.scrolled a.cta{background:var(--accent-1);color:#fff;box-shadow:none;border:0}
        .hero{padding:96px 20px 60px;color:white;text-align:left;background:var(--bg-gradient);margin-bottom:40px}
        .hero .inner{max-width:var(--max-width);margin:0 auto;display:grid;grid-template-columns:1fr 400px;gap:36px;align-items:start}
        @media (max-width:980px){.hero .inner{grid-template-columns:1fr}.hero{text-align:center}}
        .hero h1{font-size:44px;margin:0 0 8px;line-height:1.03;font-weight:800}
        .hero p.lead{margin:0 0 18px;font-weight:600;font-size:18px;opacity:0.97}
        .hero .meta{display:flex;gap:16px;font-weight:700;opacity:0.95;font-size:14px;align-items:center;flex-wrap:wrap}
        .hero .pill{display:inline-block;background:rgba(255,255,255,0.12);padding:8px 14px;border-radius:999px;font-weight:700;margin-bottom:12px}
        .cta-row{display:flex;gap:12px;margin-top:24px;flex-wrap:wrap}
        .btn{padding:12px 18px;border-radius:10px;text-decoration:none;font-weight:700;display:inline-block}
        .btn-primary{background:white;color:var(--accent-1);box-shadow:0 10px 28px rgba(91,45,247,0.12);border:0}
        .btn-ghost{background:transparent;border:1px solid rgba(255,255,255,0.18);color:white}
        .snapshot-card{background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:16px;padding:24px;box-shadow:0 10px 26px rgba(0,0,0,0.08);color:white}
        .snapshot-card h3{margin-top:0;color:white}
        .snapshot-card p{margin:8px 0 12px;color:rgba(255,255,255,0.95)}
        .snapshot-card ul{padding-left:20px;margin:0;color:rgba(255,255,255,0.95);font-size:14px}
        .container{max-width:var(--max-width);margin:0 auto;padding:28px 20px}
        .about{background:white;margin-top:-40px;border-radius:16px;padding:28px;box-shadow:0 12px 36px rgba(15,15,15,0.06)}
        .process{background:#fff;border-radius:16px;box-shadow:0 10px 30px rgba(15,15,15,0.06);padding:36px 28px;margin-top:40px}
        .process h2{margin-top:0;font-size:28px;font-weight:800;color:#111827}
        .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:20px;align-items:start}
        .step{background:#faf9ff;border:1px solid rgba(91,45,247,0.08);border-radius:12px;padding:18px;text-align:center;box-shadow:0 6px 20px rgba(15,15,15,0.03)}
        .step h4{margin:8px 0 6px;font-size:16px;color:var(--accent-1);font-weight:700}
        .step p{margin:0;font-size:14px;color:#374151;line-height:1.5}
        @media (max-width:900px){.steps{grid-template-columns:repeat(2,1fr)}}
        @media (max-width:600px){.steps{grid-template-columns:1fr}}
        .who-wrap{display:grid;grid-template-columns:1fr 400px;gap:32px;align-items:start;margin-top:20px}
        @media (max-width:980px){.who-wrap{grid-template-columns:1fr}}
        .highlight-card{background:#fff;border-radius:14px;padding:22px;border:1px solid rgba(230,230,240,1);box-shadow:0 12px 30px rgba(19,22,42,0.06)}
        .highlight-card h4{margin:0 0 10px}
        .highlight-card ul{padding-left:18px;margin:0;color:var(--muted)}
        .highlight-card .cohort{margin-top:14px;font-size:13px;color:var(--muted)}
        .cta-block{margin:48px 0 0;padding:40px 20px;background:var(--cta-gradient);color:#fff;border-radius:12px}
        .cta-inner{max-width:var(--max-width);margin:0 auto;text-align:center}
        .cta-inner h2{font-size:32px;margin:0 0 12px;font-weight:800}
        .cta-inner p.lead{margin:0 0 12px;font-size:16px;opacity:0.95}
        .cta-inner p.note{margin-top:12px;font-size:13px;opacity:0.9}
        .cta-inner .apply-btn{display:inline-block;margin-top:18px;padding:12px 28px;background:#fff;border-radius:10px;color:var(--accent-1);font-weight:800;text-decoration:none;box-shadow:0 10px 30px rgba(91,45,247,0.18)}
        footer{padding:28px 20px;border-top:1px solid #f3f4f6;margin-top:36px;color:var(--muted)}
        footer .inner{max-width:var(--max-width);margin:0 auto;display:flex;justify-content:space-between;align-items:center;gap:20px}
        @media (max-width:720px){footer .inner{flex-direction:column;align-items:flex-start}}
        .muted{color:var(--muted)}
        .small{font-size:13px;color:var(--muted)}
      `}</style>
    </>
  );
}