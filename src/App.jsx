import { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import CopilotPage from './pages/CopilotPage.jsx'

// ─── DATA ────────────────────────────────────────────────────────────────────

const differentiators = [
  {
    number: '01',
    title: 'Translates Complexity Into Clarity',
    description:
      'I find the insights that unlock simplicity and create market traction. Complex product (AI, healthcare, payroll) → Customer problem → Clear narrative → Market traction.',
    evidence: '80% Copilot adoption · €1.1M ARR · 60% month-1 acquisition',
  },
  {
    number: '02',
    title: 'Bridges PMM ↔ Revenue',
    description:
      "I ensure PMM work builds a competitive moat. I don't let positioning live in a deck — I operationalize it across product, legal, marketing, finance, sales, and CS through a shared language.",
    evidence: 'Copilot · Premium Services · Kanoon partnership',
  },
  {
    number: '03',
    title: 'Rapid Market Mastery',
    description:
      "I have a proven system for fast market entry and deep understanding. Mobility → Healthcare → Payroll. I understand European and North American buyer psychology — French nuance ≠ English pragmatism.",
    evidence: 'BlaBlaCar · Doctolib · PayFit — 3 verticals, 7 years',
  },
  {
    number: '04',
    title: 'Operator + Strategist',
    description:
      "I combine strategy with hands-on execution. I write positioning docs and build them in-product. I analyze data in SQL/Looker/Amplitude, then operationalize insights into playbooks.",
    evidence: 'HubSpot · Braze · Figma · Amplitude · SQL · AI tools',
  },
  {
    number: '05',
    title: 'Owns the Full Product Lifecycle',
    description:
      "Discovery → Positioning → Sales Enablement → Launch → Post-Launch. I understand how each phase feeds the next and measure end-to-end outcomes. Not a specialist — a full-stack PMM.",
    evidence: 'Copilot · Premium Services · Onboarding redesign',
  },
]

const caseStudies = [
  {
    id: 'copilot',
    route: '/work/copilot',
    tag: 'GTM Strategy · AI Product · 3 Markets',
    company: 'PayFit',
    title: 'Copilot Launch',
    subtitle: 'From 0 to 80% adoption across 3 markets',
    problem:
      'Admins lacked time and needed instant answers 24/7. The CSM team could not handle volume — service overload was growing.',
    insight:
      "We were first to market with a payroll-specific AI (not generic ChatGPT). Innovation is a key purchase driver for Starter companies. Admins want fast, reliable answers — without waiting.",
    positioning: '"Your AI personal assistant — always available, always aware of your specificities."',
    outcomes: [
      { metric: '80%', label: 'Adoption post-launch (3 markets, 3 months)' },
      { metric: '23%', label: 'CS ticket deflection rate' },
      { metric: '82%', label: 'Users report accomplishing tasks more easily' },
      { metric: '72%', label: 'Users report daily time savings' },
    ],
    artifact: 'GTM Launch Plan',
    artifactDetail:
      'Phased 3-market rollout: Beta (France, new customers) → Full France launch → Global scale. Each phase iterated on messaging, in-app guidance, and sales enablement in real time.',
  },
  {
    id: 'premium',
    tag: 'Monetization · Pricing · Sales Enablement',
    company: 'PayFit',
    title: 'Premium Services',
    subtitle: '€0 → €1.1M ARR in 6 months',
    problem:
      'New prospects with complex needs hesitated to sign. Existing customers needed proactive payroll guidance and were at churn risk.',
    insight:
      'Customers and prospects are willing to pay for expert support. Opening a new monetization stream with zero margin degradation drives both sales velocity (higher close rate) and retention (lower churn). Month-to-month flexibility is a differentiator.',
    positioning: '"Expert support, tailored to your needs."',
    outcomes: [
      { metric: '€1.1M', label: 'ARR generated in 6 months from zero' },
      { metric: '+12%', label: 'Closing rate on targeted deals' },
      { metric: '2 tiers', label: 'Month-to-month, no commitment pricing model' },
    ],
    artifact: 'Sales & Retention Playbook',
    artifactDetail:
      'Full playbook covering: trigger criteria, positioning language, pitch scripts, objection handling, and a closing framework — built with and tested by sales teams from day one.',
  },
  {
    id: 'onboarding',
    tag: 'PLG · Lifecycle · Customer Journey',
    company: 'PayFit',
    title: 'Onboarding & Lifecycle Redesign',
    subtitle: 'Time-to-value from 15 days to 2 hours',
    problem:
      'Time-to-value was too long; activation was bottlenecked in onboarding; CS margin was unsustainable (too much human time per client at scale).',
    insight:
      'The onboarding phase is stressful — customers want to spend as little time as possible on it and need a reliable integration. Competitors do everything manually for the client, creating long, expensive, error-prone onboardings. Opportunity to build a real competitive advantage.',
    positioning: '"Getting started with payroll has never been this simple."',
    outcomes: [
      { metric: '~2h', label: 'Time-to-value for Starter clients (was 15 days)' },
      { metric: '+15%', label: 'Activation rate (signup to first payroll)' },
      { metric: '-57%', label: 'Onboarding-related errors' },
      { metric: '+1.5pt', label: 'Customer satisfaction score' },
    ],
    artifact: 'Customer Journey Map',
    artifactDetail:
      'End-to-end journey mapping across 3 segments (Starter, VSB/SB, Mid-market), identifying friction using quantitative + qualitative triangulation. Before/after across Signature → Setup → First Payroll.',
  },
]

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

const caseStudyLinks = [
  { label: 'PayFit Copilot', route: '/work/copilot', tag: 'GTM · AI · 3 Markets' },
  // Add more as pages are built:
  // { label: 'Premium Services', route: '/work/premium-services', tag: 'Monetization · Pricing' },
  // { label: 'Onboarding & Lifecycle', route: '/work/onboarding', tag: 'PLG · Lifecycle' },
]

function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold text-stone-900 tracking-tight hover:text-teal-600 transition-colors">AA</Link>
        <div className="flex items-center gap-8 text-sm text-stone-500">
          <a href="#about" className="hover:text-stone-900 transition-colors">About</a>

          {/* Case studies dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((o) => !o)}
              className="flex items-center gap-1 hover:text-stone-900 transition-colors"
            >
              Case studies
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl border border-stone-100 shadow-lg overflow-hidden">
                {caseStudyLinks.map((cs) => (
                  <Link
                    key={cs.route}
                    to={cs.route}
                    className="flex flex-col px-4 py-3 hover:bg-stone-50 transition-colors border-b border-stone-50 last:border-0"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="text-stone-900 font-medium text-sm">{cs.label}</span>
                    <span className="text-stone-400 text-xs mt-0.5">{cs.tag}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href="mailto:apollineaurenche@gmail.com"
            className="bg-stone-900 text-white px-4 py-2 rounded-full hover:bg-stone-700 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 mb-6">

          {/* Text */}
          <div className="flex-1">
            <span className="inline-block text-xs font-medium tracking-widest text-teal-600 uppercase mb-4">
              Senior Product Marketing Manager
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-stone-900 leading-tight tracking-tight mb-8">
              Apolline<br />Aurenche
            </h1>
            <p className="text-xl md:text-2xl text-stone-500 font-light max-w-2xl leading-relaxed">
              I own the entire go-to-market journey — from understanding what customers actually
              need, through positioning and pricing, to adoption and growth. I move fast in new
              markets and execute hands-on.
            </p>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-stone-100">
                <img
                  src="/apolline.jpeg"
                  alt="Apolline Aurenche"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Subtle teal accent ring */}
              <div className="absolute -inset-1.5 rounded-full border-2 border-teal-200 -z-10" />
            </div>
          </div>

        </div>

        <div className="flex flex-wrap gap-3 mt-10 mb-16">
          {['San Francisco, CA', '7 years experience', 'FR · EN', 'AI-powered workflows'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-stone-100 text-stone-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#work"
            className="bg-teal-600 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-700 transition-colors"
          >
            See my work
          </a>
          <a
            href="https://www.linkedin.com/in/apolline-aurenche"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-stone-900 transition-colors text-sm underline underline-offset-4"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-32 px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-medium tracking-widest text-teal-600 uppercase">What I bring</span>
          <h2 className="text-4xl font-bold text-stone-900 mt-3">5 things that make me different</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((d) => (
            <div
              key={d.number}
              className="bg-white rounded-2xl p-8 border border-stone-100 hover:border-teal-200 hover:shadow-md transition-all duration-300 group"
            >
              <span className="text-xs font-bold text-teal-600 tracking-widest">{d.number}</span>
              <h3 className="text-lg font-semibold text-stone-900 mt-3 mb-3 leading-snug group-hover:text-teal-700 transition-colors">
                {d.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">{d.description}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

function CaseStudyCard({ cs, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-stone-200 rounded-2xl overflow-hidden hover:border-teal-200 transition-all duration-300">
      {/* Card header — always visible */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-8 md:p-10"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold text-teal-600 tracking-widest">0{index + 1}</span>
              <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">{cs.tag}</span>
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-1">{cs.title}</h3>
            <p className="text-stone-400 text-sm">{cs.company}</p>
          </div>
          <div className="flex-shrink-0 mt-1">
            <div
              className={`w-8 h-8 rounded-full border-2 border-stone-200 flex items-center justify-center transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
            >
              <svg className="w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Outcomes — always visible */}
        <div className="flex flex-wrap gap-4 mt-6">
          {cs.outcomes.map((o) => (
            <div key={o.metric} className="text-left">
              <div className="text-2xl font-bold text-teal-600">{o.metric}</div>
              <div className="text-xs text-stone-400 max-w-[140px] leading-tight">{o.label}</div>
            </div>
          ))}
        </div>
      </button>

      {/* Expanded detail */}
      {open && (
        <div className="px-8 md:px-10 pb-10 border-t border-stone-100">
          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-2">Business Problem</h4>
                <p className="text-stone-600 text-sm leading-relaxed">{cs.problem}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-2">Strategic Insight</h4>
                <p className="text-stone-600 text-sm leading-relaxed">{cs.insight}</p>
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-2">Positioning</h4>
                <p className="text-stone-900 text-sm font-medium italic">{cs.positioning}</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-3">
                  Artifact · {cs.artifact}
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed">{cs.artifactDetail}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200">
                {cs.route ? (
                  <Link
                    to={cs.route}
                    className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View full case study
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : (
                  <span className="text-xs text-stone-400">Full artifact available on request</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Work() {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-medium tracking-widest text-teal-600 uppercase">Case studies</span>
          <h2 className="text-4xl font-bold text-stone-900 mt-3">Selected work</h2>
          <p className="text-stone-400 mt-3 max-w-xl">
            Three projects across AI launch, monetization, and lifecycle — each showing a different dimension of full-stack PMM work.
          </p>
        </div>

        <div className="space-y-4">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={cs.id} cs={cs} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  const roles = [
    { company: 'PayFit', title: 'Senior Product Marketing Manager', period: '2022 – 2025', location: 'Paris → SF' },
    { company: 'Doctolib', title: 'Product Marketing Manager', period: '2020 – 2022', location: 'Paris' },
    { company: 'BlaBlaCar', title: 'Product Marketing Manager', period: '2019 – 2020', location: 'Paris' },
  ]

  return (
    <section className="py-32 px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-medium tracking-widest text-teal-600 uppercase">Background</span>
          <h2 className="text-4xl font-bold text-stone-900 mt-3">Experience</h2>
        </div>

        <div className="space-y-1">
          {roles.map((r, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-stone-200 last:border-0 group"
            >
              <div>
                <span className="font-semibold text-stone-900 group-hover:text-teal-600 transition-colors">{r.company}</span>
                <span className="text-stone-400 mx-3">·</span>
                <span className="text-stone-600">{r.title}</span>
              </div>
              <div className="flex gap-4 mt-1 md:mt-0 text-sm text-stone-400">
                <span>{r.period}</span>
                <span>{r.location}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-12 border-t border-stone-200">
          <p className="text-stone-400 text-sm">
            <span className="text-stone-600 font-medium">Education:</span> Neoma Business School — Master in Management, Major in Marketing (2019)
          </p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-stone-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-bold text-stone-900 mb-2">Let's work together.</h3>
          <p className="text-stone-400 text-sm">Open to Sr PMM / PMM Associate roles — SF Bay Area or remote.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a
            href="mailto:apollineaurenche@gmail.com"
            className="text-teal-600 hover:text-teal-700 transition-colors font-medium"
          >
            apollineaurenche@gmail.com →
          </a>
          <a
            href="https://www.linkedin.com/in/apolline-aurenche"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-stone-600 transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-16 pt-6 border-t border-stone-100">
        <p className="text-xs text-stone-300">© 2025 Apolline Aurenche</p>
      </div>
    </footer>
  )
}

// ─── HOME ────────────────────────────────────────────────────────────────────

function Home() {
  return (
    <div className="bg-white text-stone-900 min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Footer />
    </div>
  )
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/copilot" element={<CopilotPage />} />
      </Routes>
    </BrowserRouter>
  )
}
