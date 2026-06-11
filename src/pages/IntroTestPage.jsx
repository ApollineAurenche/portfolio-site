import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const SLATE = {
  bg:     '#FAFCFD',
  light:  '#D9E4EA',
  mid:    '#9CB8C7',
  accent: '#567A8C',
  dark:   '#2B3A44',
}

export default function IntroTestPage() {
  const [phase, setPhase] = useState('intro') // 'intro' | 'leaving' | 'hero'

  useEffect(() => {
    // After 1.8s, start fading out intro
    const t1 = setTimeout(() => setPhase('leaving'), 1800)
    // After 2.4s, show hero
    const t2 = setTimeout(() => setPhase('hero'), 2400)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <div style={{ backgroundColor: SLATE.bg, minHeight: '100vh' }}>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(0); opacity: 1; }
          to   { transform: translateY(-100%); opacity: 0; }
        }
        @keyframes revealName {
          0%   { clip-path: inset(0 100% 0 0); }
          100% { clip-path: inset(0 0% 0 0); }
        }
        .intro-name {
          animation: revealName 1s cubic-bezier(0.77,0,0.175,1) 0.3s both;
        }
        .intro-sub {
          animation: fadeIn 0.6s ease 1s both;
        }
        .intro-leave {
          animation: slideUp 0.6s cubic-bezier(0.77,0,0.175,1) both;
        }
        .hero-line1 { animation: fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
        .hero-line2 { animation: fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s both; }
        .hero-tag   { animation: fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s both; }
        .hero-desc  { animation: fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.55s both; }
        .hero-metrics { animation: fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.7s both; }
        .hero-photo { animation: fadeIn 1s ease 0.5s both; }
        .hero-scroll { animation: fadeIn 1s ease 1.2s both; }
        .scroll-line {
          animation: fadeIn 1s ease 1.4s both;
        }
        .about-grid {
          display: flex;
          justify-content: center;
        }
        .about-info {
          width: 100%;
          max-width: 720px;
        }
      `}</style>

      {/* ── INTRO OVERLAY ── */}
      {phase !== 'hero' && (
        <div
          className={phase === 'leaving' ? 'intro-leave' : ''}
          style={{
            position: 'fixed', inset: 0, zIndex: 100,
            backgroundColor: SLATE.dark,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
          }}
        >
          <div style={{ overflow: 'hidden' }}>
            <h1
              className="intro-name"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 7rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}
            >
              Apolline Aurenche
            </h1>
          </div>
          <p
            className="intro-sub"
            style={{ color: SLATE.mid, fontSize: '0.875rem', letterSpacing: '0.15em', marginTop: '1rem', textTransform: 'uppercase' }}
          >
            Senior Product Marketing Manager
          </p>
        </div>
      )}

      {/* ── HERO ── */}
      {phase === 'hero' && (
        <>
          {/* Minimal nav */}
          <nav style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
            padding: '1.25rem 2rem',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            backgroundColor: 'rgba(250,252,253,0.85)',
            backdropFilter: 'blur(8px)',
            borderBottom: `1px solid ${SLATE.light}`,
          }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: SLATE.dark, textTransform: 'uppercase' }}>
              Apolline Aurenche
            </span>
            <div style={{ display: 'flex', gap: '2rem', fontSize: '0.8rem', color: SLATE.accent }}>
              <a href="#work" style={{ color: SLATE.accent, textDecoration: 'none' }}>Work</a>
              <a href="#about" style={{ color: SLATE.accent, textDecoration: 'none' }}>About</a>
              <button style={{ color: SLATE.dark, fontWeight: 600, fontSize: '0.8rem', background: 'none', border: 'none', cursor: 'pointer' }}>
                Get in touch
              </button>
            </div>
          </nav>

          {/* Hero — first screen */}
          <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 2rem',
            paddingTop: '5rem',
            maxWidth: '1100px',
            margin: '0 auto',
            position: 'relative',
          }}>

            {/* Tag */}
            <div className="hero-tag" style={{ marginBottom: '2rem' }}>
              <span style={{
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em',
                color: SLATE.accent, textTransform: 'uppercase',
                border: `1px solid ${SLATE.light}`, padding: '0.4rem 1rem', borderRadius: '999px',
              }}>
                Senior Product Marketing Manager
              </span>
            </div>

            {/* Background photo — large, behind headline */}
            <div className="hero-photo" style={{
              position: 'absolute',
              top: '50%', right: 'clamp(-2rem, 2vw, 4rem)',
              transform: 'translateY(-50%)',
              width: 'clamp(14rem, 28vw, 26rem)',
              height: 'clamp(14rem, 28vw, 26rem)',
              borderRadius: '50%',
              overflow: 'hidden',
              zIndex: 0,
              opacity: 0.9,
            }}>
              <img
                src="/apolline.jpeg"
                alt="Apolline Aurenche"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>

            {/* Main headline — very large */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h1 style={{ margin: 0, lineHeight: 0.95, letterSpacing: '-0.04em' }}>
                <span className="hero-line1" style={{
                  display: 'block',
                  fontSize: 'clamp(3.5rem, 9vw, 9rem)',
                  fontWeight: 800,
                  color: SLATE.dark,
                }}>
                  I turn products
                </span>
                <span className="hero-line2" style={{
                  display: 'block',
                  fontSize: 'clamp(3.5rem, 9vw, 9rem)',
                  fontWeight: 800,
                  color: SLATE.accent,
                }}>
                  into traction.
                </span>
              </h1>
            </div>

            {/* Metrics + CTA to case studies */}
            <div className="hero-metrics" style={{
              display: 'flex', alignItems: 'center', gap: '3rem',
              marginTop: '3.5rem', flexWrap: 'wrap',
              position: 'relative', zIndex: 1,
            }}>
              <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
                {[
                  { metric: '80%', label: 'AI product adoption' },
                  { metric: '+15pts', label: 'conversion on a key partnership' },
                  { metric: '<3h', label: 'time-to-value (was 2 days)' },
                ].map(m => (
                  <div key={m.metric}>
                    <div style={{ fontSize: '2.25rem', fontWeight: 800, color: SLATE.dark, lineHeight: 1 }}>{m.metric}</div>
                    <div style={{ fontSize: '0.7rem', color: SLATE.mid, marginTop: '0.35rem', maxWidth: '120px', lineHeight: 1.4 }}>{m.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <a href="#work" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                  fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em',
                  color: SLATE.accent, textTransform: 'uppercase',
                  textDecoration: 'none', borderBottom: `1px solid ${SLATE.accent}`,
                  paddingBottom: '0.2rem',
                }}>
                  See my work
                  <span aria-hidden="true">→</span>
                </a>

                <a href="#about" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                  fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em',
                  color: SLATE.mid, textTransform: 'uppercase',
                  textDecoration: 'none', borderBottom: `1px solid ${SLATE.light}`,
                  paddingBottom: '0.2rem',
                }}>
                  More about me
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero-scroll" style={{
              position: 'absolute', bottom: '2.5rem', left: '0',
              display: 'flex', alignItems: 'center', gap: '0.75rem',
            }}>
              <div style={{
                width: '1px', height: '48px',
                background: `linear-gradient(to bottom, transparent, ${SLATE.accent})`,
              }} />
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: SLATE.mid, textTransform: 'uppercase' }}>
                Scroll
              </span>
            </div>

          </section>

          {/* ── WHO I AM section ── */}
          <section id="about" style={{
            minHeight: '100vh',
            display: 'flex', alignItems: 'center',
            padding: '6rem 2rem',
            maxWidth: '1100px', margin: '0 auto',
            borderTop: `1px solid ${SLATE.light}`,
          }}>
            <div className="about-grid" style={{ position: 'relative', width: '100%' }}>

              {/* Info */}
              <div className="about-info" style={{
                position: 'relative',
                backgroundColor: SLATE.bg,
                borderRadius: '20px',
                border: `1px solid ${SLATE.light}`,
                padding: '2.5rem',
              }}>
                <span style={{
                  fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em',
                  color: SLATE.accent, textTransform: 'uppercase', display: 'block', marginBottom: '1.25rem',
                }}>
                  Who I am
                </span>
                <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)', fontWeight: 800, color: SLATE.dark, lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 1.5rem' }}>
                  I turn products into <span style={{ color: SLATE.accent }}>stories</span>, and stories into <span style={{ color: SLATE.mid }}>traction</span>.
                </h2>
                <p style={{ fontSize: '1rem', color: SLATE.accent, lineHeight: 1.75, maxWidth: '480px', margin: '0 0 2.5rem' }}>
                  I connect the magic of a product with what people actually need - through launches, narratives, and enablement that make adoption happen across teams and markets.
                </p>

                {/* Info grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem 2.5rem' }}>
                  {[
                    { label: 'Location', value: 'SF Bay Area' },
                    { label: 'Remote', value: 'Worldwide' },
                    { label: 'Experience', value: '7 years · 3 unicorns\nMobility · Healthcare · Fintech' },
                    { label: 'Languages', value: 'French (native)\nEnglish (fluent)' },
                    { label: 'Availability', value: 'Currently available for work' },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: SLATE.mid, textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                        {label}
                      </div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 500, color: SLATE.dark, whiteSpace: 'pre-line' }}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Back link */}
          <div style={{ textAlign: 'center', padding: '2rem', borderTop: `1px solid ${SLATE.light}` }}>
            <Link to="/" style={{ fontSize: '0.75rem', color: SLATE.mid, textDecoration: 'none' }}>
              ← Back to portfolio
            </Link>
          </div>
        </>
      )}

    </div>
  )
}
