import { Link } from 'react-router-dom'

const SLATE = {
  bg: '#FAFCFD',
  light: '#D9E4EA',
  mid: '#9CB8C7',
  accent: '#567A8C',
  dark: '#2B3A44',
}

// Sample data — reuses the shape of the real caseStudies array
const projects = [
  {
    id: 'copilot',
    route: '/work/copilot',
    tag: ['GTM Strategy', 'AI Product', '3 Markets'],
    company: 'PayFit',
    title: 'Copilot Launch',
    subtitle: 'From 0 to 80% adoption across 3 markets',
    messaging: 'Your AI assistant for payroll — answers in seconds, not tickets.',
    description:
      'PayFit shipped its first AI agent in 2024, ahead of the market. I built positioning and messaging from scratch across 3 countries, then iterated as the product evolved — establishing trust around AI at a time when users were less familiar with it.',
    why: 'First-mover AI launch with no playbook to copy — had to build trust and a new mental model for users, fast.',
    artifactLabel: 'GTM launch plan',
    outcomes: [
      { metric: '80%', label: 'Adoption post-launch (3 markets)' },
      { metric: '23%', label: 'CS ticket deflection' },
      { metric: '82%', label: 'Report easier task completion' },
    ],
  },
  {
    id: 'onboarding',
    route: '/work/onboarding',
    tag: ['Positioning', 'Sales Enablement', 'Change Management'],
    company: 'PayFit',
    title: 'Onboarding Redesign',
    subtitle: 'Time-to-value from 2 days to under 3 hours',
    messaging: 'Live on PayFit and ready for your first payroll — in under 3 hours.',
    description:
      'Three years of progressive product, pricing, and lifecycle changes reconciled into a single story that customers, Sales, and CS trust and tell the same way — one of the most cross-functional projects I\'ve owned.',
    why: 'Three years of incremental changes had left the story fragmented across teams — needed one narrative everyone could trust and repeat.',
    artifactLabel: 'Sales enablement doc',
    outcomes: [
      { metric: '<3h', label: 'Time-to-value (was 2 days)' },
      { metric: '+15%', label: 'Activation rate' },
      { metric: '+1.5pt', label: 'CSAT score' },
    ],
  },
]

// ─── Schematic "below the fold" preview — a stripped-down hint of the artifact's content ──────
function SchematicPreview({ variant = 'doc', accent = SLATE.accent }) {
  if (variant === 'deck') {
    return (
      <div className="flex gap-3 w-full justify-center">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-20 md:w-24 aspect-[4/3] rounded-lg flex flex-col gap-1.5 p-2.5"
            style={{ backgroundColor: '#FFFFFF', border: `1px solid ${SLATE.light}` }}
          >
            <div
              className={`h-2 rounded-full ${i === 1 ? 'animate-pulse' : ''}`}
              style={{ width: '70%', backgroundColor: i === 1 ? accent : SLATE.light, opacity: i === 1 ? 0.6 : 1 }}
            />
            <div className="h-1.5 rounded-full" style={{ width: '90%', backgroundColor: SLATE.light }} />
            <div className="h-1.5 rounded-full" style={{ width: '60%', backgroundColor: SLATE.light }} />
            <div className="flex-1" />
            <div className="h-3 w-3 rounded" style={{ backgroundColor: SLATE.light }} />
          </div>
        ))}
      </div>
    )
  }

  if (variant === 'dashboard') {
    return (
      <div className="grid grid-cols-3 gap-2.5 w-full max-w-sm">
        <div className="col-span-3 flex gap-2.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex-1 rounded-lg p-2.5" style={{ backgroundColor: '#FFFFFF', border: `1px solid ${SLATE.light}` }}>
              <div className={`h-2.5 w-1/2 rounded-full ${i === 0 ? 'animate-pulse' : ''}`} style={{ backgroundColor: i === 0 ? accent : SLATE.light, opacity: i === 0 ? 0.6 : 1 }} />
              <div className="h-1.5 w-2/3 rounded-full mt-1.5" style={{ backgroundColor: SLATE.light }} />
            </div>
          ))}
        </div>
        <div className="col-span-2 rounded-lg p-2.5 flex items-end gap-1" style={{ backgroundColor: '#FFFFFF', border: `1px solid ${SLATE.light}`, height: '64px' }}>
          {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t ${i === 5 ? 'animate-pulse' : ''}`}
              style={{ height: `${h}%`, backgroundColor: i === 5 ? accent : SLATE.light }}
            />
          ))}
        </div>
        <div className="col-span-1 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FFFFFF', border: `1px solid ${SLATE.light}`, height: '64px' }}>
          <div className="w-9 h-9 rounded-full animate-pulse" style={{
            background: `conic-gradient(${accent} 0% 80%, ${SLATE.light} 80% 100%)`,
          }} />
        </div>
      </div>
    )
  }

  // default: "doc" — a folded one-pager hint
  return (
    <div className="w-full max-w-xs rounded-lg p-4 flex flex-col gap-2" style={{ backgroundColor: '#FFFFFF', border: `1px solid ${SLATE.light}` }}>
      <div className="h-2.5 w-2/5 rounded-full" style={{ backgroundColor: SLATE.dark, opacity: 0.7 }} />
      <div className="h-1.5 w-full rounded-full" style={{ backgroundColor: SLATE.light }} />
      <div className="h-1.5 w-5/6 rounded-full" style={{ backgroundColor: SLATE.light }} />
      <div className="flex gap-1.5 mt-1">
        <span className="text-[9px] px-2 py-0.5 rounded-full font-medium animate-pulse" style={{ backgroundColor: `${accent}1A`, color: accent }}>01</span>
        <span className="text-[9px] px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: SLATE.light, color: SLATE.accent }}>02</span>
        <span className="text-[9px] px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: SLATE.light, color: SLATE.accent }}>03</span>
      </div>
      <div className="h-1.5 w-full rounded-full mt-1" style={{ backgroundColor: SLATE.light }} />
    </div>
  )
}

// ─── "Landing page" mockup — project name, messaging line, schematic artifact preview ─────────
function ArtifactMockup({ p, variant = 'doc', accent = SLATE.accent }) {
  return (
    <div className="w-full h-full flex flex-col" style={{ backgroundColor: SLATE.bg }}>
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b flex-shrink-0" style={{ borderColor: SLATE.light }}>
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: SLATE.light }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: SLATE.light }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: SLATE.light }} />
        <div className="ml-3 text-[10px] px-2.5 py-1 rounded-full" style={{ backgroundColor: SLATE.light, color: SLATE.accent }}>
          {p.company.toLowerCase()}.com/{p.id}
        </div>
      </div>

      {/* "hero" of the fake landing page */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8 gap-3">
        <h4 className="text-2xl md:text-4xl font-bold tracking-tight" style={{ color: accent }}>
          {p.title}
        </h4>
        <p className="text-xs md:text-sm max-w-xs" style={{ color: SLATE.dark, opacity: 0.7 }}>
          {p.messaging}
        </p>

        {/* schematic preview of the artifact, below the fold */}
        <div className="mt-4 w-full flex items-center justify-center">
          <SchematicPreview variant={variant} accent={accent} />
        </div>
      </div>
    </div>
  )
}

// ─── PROPOSAL 1 — "Featured project" overlay (inspired by reference screenshot) ──────────────
function FeaturedOverlay({ p, mockup, reverse = false }) {
  return (
    <div className="relative">
      {/* Big visual / artifact card */}
      <div
        className="rounded-3xl overflow-hidden h-[420px] md:h-[480px]"
        style={{ backgroundColor: '#FFFFFF', border: `1px solid ${SLATE.light}` }}
      >
        <ArtifactMockup p={p} variant={mockup} accent={SLATE.accent} />
      </div>

      {/* Overlapping description panel */}
      <div
        className={`relative md:absolute md:top-10 ${reverse ? 'md:left-8' : 'md:right-8'} mt-6 md:mt-0 md:w-[60%] lg:w-[55%] rounded-2xl p-7 md:p-9`}
        style={{ backgroundColor: SLATE.dark }}
      >
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: SLATE.mid }}>
          Featured Project
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-1">{p.title}</h3>
        <p className="text-sm font-medium mb-4" style={{ color: SLATE.light }}>{p.company} · {p.subtitle}</p>
        <p className="text-sm leading-relaxed" style={{ color: SLATE.mid }}>{p.description}</p>

        <div className="flex flex-wrap gap-2 mt-6">
          {p.tag.map((t) => (
            <span key={t} className="text-xs px-3 py-1 rounded-full border" style={{ borderColor: SLATE.accent, color: SLATE.light }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom row: outcomes + link */}
      <div className="flex flex-wrap items-center justify-between gap-4 mt-8 md:mt-6 px-1">
        <div className="flex flex-wrap gap-8">
          {p.outcomes.map((o) => (
            <div key={o.metric}>
              <div className="text-xl font-bold" style={{ color: SLATE.accent }}>{o.metric}</div>
              <div className="text-xs mt-0.5 max-w-[140px] leading-tight" style={{ color: SLATE.mid }}>{o.label}</div>
            </div>
          ))}
        </div>
        {p.route && (
          <Link
            to={p.route}
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline flex-shrink-0"
            style={{ color: SLATE.accent }}
          >
            View case study
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}

// ─── PROPOSAL 2 — "Editorial split" alternative ──────────────────────────────────────────────
function EditorialSplit({ p, index, mockup }) {
  const flip = index % 2 === 1
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
      <div className={flip ? 'md:order-2' : ''}>
        <span className="text-7xl md:text-8xl font-black leading-none select-none" style={{ color: SLATE.light }}>
          0{index + 1}
        </span>
        <p className="text-xs font-bold tracking-widest uppercase mt-2" style={{ color: SLATE.accent }}>
          {p.company}
        </p>
        <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-3" style={{ color: SLATE.dark }}>{p.title}</h3>
        <p className="text-sm font-semibold mb-4" style={{ color: SLATE.accent }}>{p.subtitle}</p>
        <p className="text-sm leading-relaxed mb-6" style={{ color: '#5a6a76' }}>{p.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {p.tag.map((t) => (
            <span key={t} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: SLATE.light, color: SLATE.dark }}>
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-6 mb-6 pt-5 border-t" style={{ borderColor: SLATE.light }}>
          {p.outcomes.map((o) => (
            <div key={o.metric}>
              <div className="text-xl font-bold" style={{ color: SLATE.dark }}>{o.metric}</div>
              <div className="text-xs mt-0.5 max-w-[120px] leading-tight" style={{ color: SLATE.accent }}>{o.label}</div>
            </div>
          ))}
        </div>

        {p.route && (
          <Link
            to={p.route}
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
            style={{ color: SLATE.accent }}
          >
            View case study
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>

      <div className={flip ? 'md:order-1' : ''}>
        <div className="relative">
          <div
            className="rounded-2xl overflow-hidden h-[320px] md:h-[380px]"
            style={{ backgroundColor: '#FFFFFF', border: `1px solid ${SLATE.light}` }}
          >
            <ArtifactMockup p={p} variant={mockup} accent={SLATE.accent} />
          </div>
          <span
            className="absolute -bottom-4 -right-4 text-xs font-medium px-3 py-1.5 rounded-full"
            style={{ backgroundColor: SLATE.dark, color: '#FFFFFF' }}
          >
            {p.artifactLabel}
          </span>
        </div>
      </div>
    </div>
  )
}

// ─── PROPOSAL 3 — Card grid with hover "why this project" reveal ────────────────────────────
function ProjectCard({ p }) {
  return (
    <div
      className="group relative rounded-2xl p-7 md:p-8 overflow-hidden flex flex-col"
      style={{ backgroundColor: '#FFFFFF', border: `1px solid ${SLATE.light}`, minHeight: '300px' }}
    >
      {/* top row: folder icon + link */}
      <div className="flex items-center justify-between mb-6">
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke={SLATE.accent} strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
        </svg>
        {p.route && (
          <Link to={p.route} aria-label="View case study" style={{ color: SLATE.mid }}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5h5m0 0v5m0-5L10 14M5 5h4M5 5v14h14v-4" />
            </svg>
          </Link>
        )}
      </div>

      {/* title + description */}
      <h3 className="text-xl font-bold mb-2" style={{ color: SLATE.dark }}>{p.title}</h3>
      <p className="text-sm leading-relaxed mb-6" style={{ color: '#5a6a76' }}>{p.subtitle}</p>

      {/* tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {p.tag.map((t) => (
          <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-md" style={{ backgroundColor: SLATE.bg, color: SLATE.accent, border: `1px solid ${SLATE.light}` }}>
            {t}
          </span>
        ))}
      </div>

      {/* hover overlay — "why this project" */}
      <div
        className="absolute inset-0 flex flex-col justify-center p-7 md:p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
        style={{ backgroundColor: SLATE.dark }}
      >
        <span className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: SLATE.mid }}>
          Why this project
        </span>
        <p className="text-sm md:text-base leading-relaxed text-white">
          {p.why}
        </p>
        {p.route && (
          <Link
            to={p.route}
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline mt-6 self-start"
            style={{ color: SLATE.mid }}
          >
            View case study
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}

export default function WorkTestPage() {
  return (
    <div style={{ backgroundColor: SLATE.bg, minHeight: '100vh' }}>
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">

        <div className="mb-4">
          <Link to="/" className="text-sm" style={{ color: SLATE.accent }}>← Back to portfolio</Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: SLATE.dark }}>
          Work section — layout tests
        </h1>
        <p className="text-sm mb-16 max-w-xl" style={{ color: SLATE.accent }}>
          Two alternative ways to showcase case studies, with a stylized "artifact" preview standing in for a real screenshot.
        </p>

        {/* ── Proposal 1 ── */}
        <div className="mb-6">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: SLATE.accent }}>Proposal 1</span>
          <h2 className="text-2xl font-bold mt-1" style={{ color: SLATE.dark }}>Featured project overlay</h2>
          <p className="text-sm mt-1" style={{ color: SLATE.mid }}>
            Inspired by the reference: a large artifact preview with an overlapping dark panel carrying the title, positioning and tags.
          </p>
        </div>
        <div className="space-y-24 mb-28">
          <FeaturedOverlay p={projects[0]} mockup="dashboard" />
          <FeaturedOverlay p={projects[1]} mockup="doc" reverse />
        </div>

        {/* ── Proposal 2 ── */}
        <div className="mb-6">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: SLATE.accent }}>Proposal 2</span>
          <h2 className="text-2xl font-bold mt-1" style={{ color: SLATE.dark }}>Editorial split</h2>
          <p className="text-sm mt-1" style={{ color: SLATE.mid }}>
            A lighter, magazine-style layout: big number + story on one side, artifact preview with a floating label on the other. Alternates left/right per project.
          </p>
        </div>
        <div className="space-y-24 mb-28">
          <EditorialSplit p={projects[0]} index={0} mockup="deck" />
          <EditorialSplit p={projects[1]} index={1} mockup="doc" />
        </div>

        {/* ── Proposal 3 ── */}
        <div className="mb-6">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: SLATE.accent }}>Proposal 3</span>
          <h2 className="text-2xl font-bold mt-1" style={{ color: SLATE.dark }}>Card grid with hover reveal</h2>
          <p className="text-sm mt-1" style={{ color: SLATE.mid }}>
            Compact cards in the spirit of the reference grid. Hover a card to reveal why the project mattered.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>

      </div>
    </div>
  )
}
