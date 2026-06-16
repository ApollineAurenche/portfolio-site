import { useState, useEffect, useRef, useCallback } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import CopilotPage from './pages/CopilotPage.jsx'
import SNCFPage from './pages/SNCFPage.jsx'
import NewsletterPage from './pages/NewsletterPage.jsx'
import PreviewPage from './pages/PreviewPage.jsx'
import AboutTestPage from './pages/AboutTestPage.jsx'
import IntroTestPage from './pages/IntroTestPage.jsx'
import WorkTestPage from './pages/WorkTestPage.jsx'
import OnboardingPage from './pages/OnboardingPage.jsx'

// ─── DATA ────────────────────────────────────────────────────────────────────

const skills = [
  {
    number: '01',
    title: 'Turning complexity into clear narratives',
    description: 'I find the insight that unlocks simplicity and create internal alignment around that. Complex product - customer problem - clear narrative - measurable traction.',
    how: ['Customer research', 'Competitive intel', 'Journey mapping', 'Outcome-driven narratives', 'Message testing'],
  },
  {
    number: '02',
    title: 'Launching 0-to-1 products',
    description: 'I thrive in 0-to-1 situations - testing early to sharpen strategy with market feedback, and adapting priorities in real time rather than waiting for perfect conditions.',
    how: ['Segmentation', 'Willingness-to-pay research', 'Value-based pricing', 'A/B testing', 'Beta launch'],
  },
  {
    number: '03',
    title: 'Scaling what works across teams',
    description: 'Once something clicks, I zoom out - turning one-off wins into repeatable systems that others can pick up, adapt, and run with across teams and markets.',
    how: ['Playbooks & templates', 'Post-mortem & assessment', 'Feedback loops', 'Team enablement', 'Adoption tracking'],
  },
  {
    number: '04',
    title: 'Owning GTM end-to-end',
    description: 'I can work across your full product cycle - from research to post-launch - partnering with product, sales, CS, legal, and marketing. I move fast, with real autonomy and high ownership.',
    how: ['Research', 'Strategy', 'Enablement', 'Launch', 'Post-launch'],
  },
]

const caseStudies = [
  {
    id: 'copilot',
    route: '/work/copilot',
    tag: ['GTM Strategy', 'AI Product', '3 Markets'],
    company: 'PayFit',
    title: 'Copilot Launch',
    subtitle: 'From 0 to 80% adoption across 3 markets',
    whyThisProject:
      'PayFit shipped its first AI agent in 2024, ahead of the market. I built positioning and messaging from scratch and owned GTM for one of our most strategic launches across 3 countries.',
    artifactLabel: 'GTM launch plan',
    outcomes: [
      { metric: '80%', label: 'Adoption post-launch\n(3 markets)' },
      { metric: '23%', label: 'CS ticket deflection post-launch' },
      { metric: '82%', label: 'Users report accomplishing tasks more easily' },
    ],
  },
  {
    id: 'onboarding',
    route: '/work/onboarding',
    tag: ['Positioning', 'Change Management'],
    company: 'PayFit',
    title: 'Onboarding Redesign',
    comingSoon: false,
    subtitle: 'Time-to-value from 2 days to under 3 hours',
    whyThisProject:
      'Three years of incremental changes to reconcile around one narrative everyone could trust and repeat. One of the most cross-functional projects I\'ve worked on.',
    artifactLabel: 'Sales enablement doc',
    outcomes: [
      { metric: '+20%', label: 'Sales closing rate' },
      { metric: '+15%', label: 'Activation rate (signup to first payroll)' },
      { metric: '+1.5pt', label: 'Customer satisfaction score' },
    ],
  },
  {
    id: 'newsletter',
    route: '/work/newsletter',
    tag: ['Product Adoption', 'Content Strategy', 'Video'],
    company: 'PayFit',
    title: 'Product Newsletter Redesign',
    subtitle: '+20% open rate · +8% click-through rate',
    whyThisProject:
      'Most product newsletters are feature lists nobody reads. We rebuilt this one from scratch - new format, new face: mine, presenting updates via video every send.',
    artifactLabel: 'Editorial strategy framework',
    outcomes: [
      { metric: '+20%', label: 'Open rate after full redesign' },
      { metric: '+8%', label: 'Click-through rate improvement' },
      { metric: '15k+', label: 'Customers reached every send' },
    ],
  },
  {
    id: 'sncf',
    route: '/work/sncf',
    tag: ['Partnership', 'Product Integration', 'B2C'],
    company: 'BlaBlaCar',
    title: 'SNCF × BlaBlaCar Partnership',
    subtitle: 'BlaBlaCar\'s #1 passenger acquisition channel',
    whyThisProject:
      'SNCF is France\'s #1 mobility operator. We scaled this partnership until it became BlaBlaCar\'s top acquisition partner - one integration still live today, 6 years later.',
    artifactLabel: 'Full integration roadmap - product phasing + marketing activation',
    outcomes: [
      { metric: '+15pts', label: 'Conversion rate (visitor → booking) in 5 months' },
      { metric: '#1', label: 'BlaBlaCar\'s top passenger acquisition partner by volume' },
      { metric: '10%+', label: 'Of BlaBlaCar Bus sales driven through the partnership' },
    ],
  },
]

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

const caseStudyLinks = [
  { label: 'PayFit Copilot', route: '/work/copilot', tag: 'GTM · AI · 3 Markets' },
  { label: 'Onboarding Redesign', route: '/work/onboarding', tag: 'Positioning · Change Management' },
  { label: 'Product Newsletter', route: '/work/newsletter', tag: 'Content Strategy · Customer Marketing' },
  { label: 'SNCF × BlaBlaCar', route: '/work/sncf', tag: 'Partnership · Product Integration' },
  // Add more as pages are built:
  // { label: 'Premium Services', route: '/work/premium-services', tag: 'Monetization · Pricing' },
  // { label: 'Onboarding & Lifecycle', route: '/work/onboarding', tag: 'PLG · Lifecycle' },
]

function Nav({ onContact }) {
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
        <span className="text-base font-bold text-stone-900 tracking-tight">Apolline Aurenche - Portfolio</span>
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

          <button
            onClick={onContact}
            className="bg-stone-900 text-white px-4 py-2 rounded-full hover:bg-stone-700 transition-colors"
          >
            Get in touch
          </button>
        </div>
      </div>
    </nav>
  )
}

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">

        {/* How I work */}
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">What I bring</span>
          <h2 className="text-3xl font-bold text-stone-900 mt-3">I can help you with</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((d) => (
            <div key={d.number} className="bg-white rounded-2xl p-6 border border-stone-100 hover:border-teal-200 hover:shadow-md transition-all duration-300 flex flex-col">
              <span className="text-xs font-bold text-teal-600 tracking-widest mb-3">{d.number}</span>
              <h3 className="text-base font-semibold text-stone-900 mb-3 leading-snug">{d.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed mb-4">{d.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {d.how.map((h) => (
                  <span key={h} className="text-xs text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full">{h}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function CaseStudyCard({ cs, index }) {
  return (
    <div
      className="group relative border border-stone-200 rounded-2xl overflow-hidden hover:border-teal-200 transition-all duration-300 p-8 md:p-9 flex flex-col"
      style={{ minHeight: '320px' }}
    >
      {/* Card face - always visible */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-bold text-teal-600 tracking-widest">0{index + 1}</span>
        {cs.tag.map((t) => (
          <span key={t} className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">{t}</span>
        ))}
      </div>
      <div className="flex items-center gap-3 mb-1">
        <h3 className="text-2xl font-bold text-stone-900">{cs.title}</h3>
        {cs.comingSoon && (
          <span className="text-xs text-stone-400 bg-stone-100 px-2.5 py-1 rounded-full flex-shrink-0">Under construction</span>
        )}
      </div>
      <p className="text-stone-400 text-sm">{cs.company}</p>

      {/* Outcomes */}
      <div className="flex flex-wrap gap-6 mt-8">
        {cs.outcomes.map((o) => (
          <div key={o.metric} className="text-left">
            <div className="text-2xl font-bold text-teal-600">{o.metric}</div>
            <div className="text-xs text-stone-400 max-w-[140px] leading-tight whitespace-pre-line mt-1">{o.label}</div>
          </div>
        ))}
      </div>

      {/* Hover overlay - "why this project" */}
      {cs.whyThisProject && (
        <div
          className="absolute inset-0 flex flex-col justify-center p-8 md:p-9 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
          style={{ backgroundColor: '#1c1917' }}
        >
          <span className="text-[11px] font-bold tracking-widest uppercase mb-3 text-teal-300">
            Why this project
          </span>
          <p className="text-sm md:text-base leading-relaxed text-white">
            {cs.whyThisProject}
          </p>
          {cs.route ? (
            <Link
              to={cs.route}
              className="inline-flex items-center gap-2 text-sm font-medium text-teal-300 hover:text-teal-200 transition-colors mt-6 self-start"
            >
              View full case study
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <span className="text-xs text-stone-400 italic mt-6">Case study to come</span>
          )}
        </div>
      )}
    </div>
  )
}

function Work() {
  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-medium tracking-widest text-teal-600 uppercase">Case studies</span>
          <h2 className="text-4xl font-bold text-stone-900 mt-3">Selected work</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
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
    {
      company: 'PayFit',
      description: 'European HR & Payroll SaaS · Series E unicorn · 20k+ SMB customers',
      badge: 'B2B',
      title: 'Senior Global Product Marketing Manager',
      period: '2022 – 2025',
      location: 'Paris',
    },
    {
      company: 'Doctolib',
      description: 'European leading digital health platform · Series F · €6B+ valuation · 90M+ patients',
      badge: 'B2B2C',
      title: 'Global Campaign Manager',
      period: '2020 – 2022',
      location: 'Paris',
    },
    {
      company: 'BlaBlaCar',
      description: 'European #1 long-distance ridesharing marketplace · 100M+ members · Late-stage scale-up',
      badge: 'B2C',
      title: 'Marketing Associate, France & Benelux',
      period: '2019 – 2020',
      location: 'Paris',
    },
  ]

  return (
    <section className="py-16 px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <span className="text-xs font-medium tracking-widest text-teal-600 uppercase">Background</span>
        </div>

        <h2 className="text-4xl font-bold text-stone-900 mb-6">Experience</h2>
        <div>
          {roles.map((r, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-start justify-between py-6 border-b border-stone-200 last:border-0"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <span className="font-bold text-lg text-stone-900">{r.company}</span>
                  <span className="text-sm font-semibold text-teal-600">{r.title}</span>
                </div>
                <div className="flex items-center gap-2 mt-1 mb-3">
                  <p className="text-xs text-stone-400">{r.description}</p>
                  <span className="flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-teal-50 text-teal-600 border border-teal-100">{r.badge}</span>
                </div>
              </div>
              <div className="flex gap-4 mt-2 md:mt-0 md:ml-8 text-sm text-stone-400 flex-shrink-0">
                <span>{r.period}</span>
                <span>{r.location}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-4xl font-bold text-stone-900 mb-6">Education</h2>
          <div className="flex flex-col md:flex-row md:items-start justify-between py-5 border-t border-stone-200">
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-bold text-lg text-stone-900">Neoma Business School</span>
                <span className="text-sm font-medium text-stone-500">Master in Management, Major in Marketing</span>
              </div>
            </div>
            <div className="flex gap-4 mt-1 md:mt-0 md:ml-8 text-sm text-stone-400 flex-shrink-0">
              <span>2015 – 2019</span>
              <span>Reims</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const referrals = [
  {
    name: 'Thibault Oberlin',
    role: 'Sr Director, Product Marketing',
    company: 'PayFit',
    relation: 'Former manager at PayFit · ex-Google PMM lead',
    featured: true,
    quote:
      "I had the pleasure of working with Apolline at PayFit for 3 years, and she is one of the strongest Product Marketing Managers I have worked with. What sets her apart is her ability to own the full product lifecycle, from business case and discovery through beta testing and go-to-market design and execution. She brings both strategic thinking and hands-on rigor at every stage. At PayFit, she led some of our most impactful launches, like the self-onboarding flow and PayFit Copilot, our AI assistant. Both projects required strong cross-functional leadership, and she exceeded expectations.",
  },
  {
    name: 'Marie Jamin',
    role: 'Head of Product',
    company: 'BPI France',
    relation: 'Marketing peer at BlaBlaCar',
    quote:
      "I worked with Apolline at BlaBlaCar. She's the kind of profile that makes a real difference. Reliable, empathetic, deeply user-focused, and always bringing both a data mindset and a sharp macro vision. Her marketing background in product-driven environments gives her a rare edge; she moves comfortably across new scopes and complex SaaS contexts. Someone you can genuinely trust on ambitious topics!",
  },
]

function Referrals() {
  return (
    <section className="py-20 bg-white border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-medium tracking-widest text-teal-600 uppercase">Referrals</span>
          </div>
          <h2 className="text-3xl font-bold text-stone-900">From the people I built with</h2>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid gap-6">
          {referrals.map((r) => (
            <div
              key={r.name}
              className="relative rounded-3xl p-8 md:p-12 bg-gradient-to-br from-teal-50 to-white border border-teal-100 overflow-hidden"
            >
              <span className="absolute -top-6 left-6 text-[7rem] md:text-[9rem] font-black text-teal-100 leading-none select-none" aria-hidden="true">
                "
              </span>
              <div className="relative md:flex md:items-start md:gap-10">
                <p className="text-stone-800 text-sm md:text-base leading-relaxed font-medium md:flex-1">
                  "{r.quote}"
                </p>
                <div className="flex items-center gap-3 mt-8 md:mt-1 md:flex-col md:items-start md:gap-2 md:w-56 md:flex-shrink-0 pt-6 md:pt-0 border-t md:border-t-0 md:border-l md:pl-8 border-teal-100">
                  <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-base font-semibold">{r.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-stone-900">{r.name}</div>
                    <div className="text-xs text-stone-500 mt-0.5">{r.role} · {r.company}</div>
                    <div className="text-xs text-teal-600 mt-0.5">{r.relation}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer({ onContact }) {
  return (
    <footer className="py-20 px-6 border-t border-stone-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-bold text-stone-900">Let's work together!</h3>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <button
            onClick={onContact}
            className="bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-700 transition-colors text-left"
          >
            Get in touch →
          </button>
          <a
            href="https://www.linkedin.com/in/apolline-aurenche"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-stone-600 transition-colors text-center"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-16 pt-6 border-t border-stone-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
        <p className="text-sm text-stone-400">Made by Apolline Aurenche</p>
        <p className="text-xs text-stone-300">© 2025 Apolline Aurenche</p>
      </div>
    </footer>
  )
}

// ─── CONTACT MODAL ───────────────────────────────────────────────────────────

function ContactModal({ onClose }) {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)
    const res = await fetch('https://formspree.io/f/xkoedbne', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
    setStatus(res.ok ? 'success' : 'error')
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">Message sent!</h3>
            <p className="text-stone-400 text-sm">I'll get back to you shortly.</p>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-bold text-stone-900 mb-1">Get in touch</h3>
            <p className="text-stone-400 text-sm mb-6">I'll get back to you within 48h.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-stone-500 uppercase tracking-wide mb-1.5">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-500 uppercase tracking-wide mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-500 uppercase tracking-wide mb-1.5">Reason for reaching out</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me briefly why you're getting in touch..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition resize-none"
                />
              </div>
              {status === 'error' && (
                <p className="text-red-500 text-xs">Something went wrong. Try again or email me directly.</p>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-teal-600 text-white py-3 rounded-xl font-medium text-sm hover:bg-teal-700 transition-colors disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending...' : 'Send message'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

// ─── INTRO HERO ──────────────────────────────────────────────────────────────

const SLATE = {
  bg:     '#FAFCFD',
  light:  '#D9E4EA',
  mid:    '#9CB8C7',
  accent: '#567A8C',
  dark:   '#2B3A44',
}

function IntroHero({ onContact }) {
  const [phase, setPhase] = useState('intro') // 'intro' | 'leaving' | 'hero'
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false)
  const workDropdownRef = useRef(null)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('leaving'), 1800)
    const t2 = setTimeout(() => setPhase('hero'), 2400)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  useEffect(() => {
    function handleClickOutside(e) {
      if (workDropdownRef.current && !workDropdownRef.current.contains(e.target)) {
        setWorkDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
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
        @media (max-width: 768px) {
          .hero-line1, .hero-line2 { font-size: clamp(2.5rem, 13vw, 4rem) !important; line-height: 1.15 !important; }
          .hero-metrics { gap: 2rem !important; }
          .hero-scroll { display: none !important; }
        }
        .about-link-info {
          margin-left: -3.5rem;
          padding-left: 5.5rem !important;
        }
        @media (max-width: 800px) {
          .about-link-grid { flex-direction: column; gap: 1.5rem; }
          .about-link-info { margin-left: 0; padding-left: 2.5rem !important; }
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
            <div style={{ display: 'flex', gap: '2rem', fontSize: '0.8rem', color: SLATE.accent, alignItems: 'center' }}>
              <div style={{ position: 'relative' }} ref={workDropdownRef}>
                <button
                  onClick={() => setWorkDropdownOpen((o) => !o)}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: SLATE.accent, background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem', padding: 0, fontFamily: 'inherit' }}
                >
                  Work
                  <svg
                    style={{ width: '0.7rem', height: '0.7rem', transition: 'transform 0.2s', transform: workDropdownOpen ? 'rotate(180deg)' : 'none' }}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {workDropdownOpen && (
                  <div style={{
                    position: 'absolute', top: '100%', left: 0, marginTop: '0.6rem', width: '16rem',
                    backgroundColor: '#FFFFFF', borderRadius: '0.75rem', border: `1px solid ${SLATE.light}`,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)', overflow: 'hidden',
                  }}>
                    <a
                      href="#work"
                      onClick={() => setWorkDropdownOpen(false)}
                      style={{ display: 'flex', flexDirection: 'column', padding: '0.75rem 1rem', borderBottom: `1px solid ${SLATE.light}`, textDecoration: 'none' }}
                    >
                      <span style={{ color: SLATE.dark, fontWeight: 600, fontSize: '0.85rem' }}>All work</span>
                    </a>
                    {caseStudyLinks.map((cs) => (
                      <Link
                        key={cs.route}
                        to={cs.route}
                        onClick={() => setWorkDropdownOpen(false)}
                        style={{ display: 'flex', flexDirection: 'column', padding: '0.75rem 1rem', borderBottom: `1px solid ${SLATE.light}`, textDecoration: 'none' }}
                      >
                        <span style={{ color: SLATE.dark, fontWeight: 600, fontSize: '0.85rem' }}>{cs.label}</span>
                        <span style={{ color: SLATE.mid, fontSize: '0.7rem', marginTop: '0.15rem' }}>{cs.tag}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <a href="#about" style={{ color: SLATE.accent, textDecoration: 'none' }}>About</a>
              <button onClick={onContact} style={{ color: SLATE.dark, fontWeight: 600, fontSize: '0.8rem', background: 'none', border: 'none', cursor: 'pointer' }}>
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
                Sr Product Marketing Manager
              </span>
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

            {/* Metrics + CTAs */}
            <div className="hero-metrics" style={{
              display: 'flex', alignItems: 'center', gap: '3rem',
              marginTop: '3.5rem', flexWrap: 'wrap',
              position: 'relative', zIndex: 1,
            }}>
              <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
                {[
                  { metric: '80%', label: 'AI product adoption' },
                  { metric: '+15pts', label: 'conversion on a key partnership' },
                  { metric: '+20%', label: 'sales closing rate' },
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

                <a href="#who-i-am" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                  fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em',
                  color: SLATE.accent, textTransform: 'uppercase',
                  textDecoration: 'none', borderBottom: `1px solid ${SLATE.accent}`,
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
          <section style={{
            minHeight: '100vh',
            display: 'flex', alignItems: 'center',
            padding: '6rem 2rem',
            maxWidth: '1100px', margin: '0 auto',
            borderTop: `1px solid ${SLATE.light}`,
          }}>
            <div className="about-link-grid" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>

              {/* Photo */}
              <div className="about-link-photo" style={{ flexShrink: 0, zIndex: 2, position: 'relative' }}>
                <div style={{
                  width: '320px', height: '320px',
                  borderRadius: '50%', overflow: 'hidden',
                  border: `4px solid ${SLATE.bg}`,
                  boxShadow: '0 20px 50px rgba(43,58,68,0.12)',
                }}>
                  <img
                    src="/apolline.jpeg"
                    alt="Apolline Aurenche"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
              </div>

              {/* Info */}
              <div id="who-i-am" className="about-link-info" style={{
                flex: 1, minWidth: '320px', maxWidth: '600px',
                backgroundColor: '#FFFFFF', border: `1px solid ${SLATE.light}`,
                borderRadius: '20px', padding: '2.5rem',
                position: 'relative', zIndex: 1,
              }}>
                <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)', fontWeight: 800, color: SLATE.dark, lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 1.5rem' }}>
                  I'm Apolline <span style={{ fontSize: '0.5em', fontWeight: 400, color: SLATE.mid, letterSpacing: 0 }}>(ah-poh-LEEN)</span> 👋
                </h2>
                <p style={{ fontSize: '1rem', color: SLATE.accent, lineHeight: 1.75, maxWidth: '600px', margin: '0 0 2.5rem' }}>
                  Senior Product Marketing & GTM Manager with 7 years of experience bringing B2B and B2C products to life at high-growth companies — from BlaBlaCar and Doctolib to PayFit.
                  <br /><br />
                  I started in marketing, moved into CRM, then transitioned into product marketing. That journey gave me a full-funnel perspective: I think about GTM through the lens of customer behavior, willingness to pay, and long-term adoption.
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
        </>
      )}
    </>
  )
}

// ─── HOME ────────────────────────────────────────────────────────────────────

function Home() {
  const [contactOpen, setContactOpen] = useState(false)
  return (
    <div className="bg-white text-stone-900 min-h-screen">
      <IntroHero onContact={() => setContactOpen(true)} />
      <About />
      <Work />
      <Referrals />
      <Experience />
      <Footer onContact={() => setContactOpen(true)} />
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </div>
  )
}

// ─── APP ─────────────────────────────────────────────────────────────────────

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/copilot" element={<CopilotPage />} />
        <Route path="/work/sncf" element={<SNCFPage />} />
        <Route path="/work/newsletter" element={<NewsletterPage />} />
        <Route path="/work/onboarding" element={<OnboardingPage />} />
        <Route path="/preview" element={<PreviewPage />} />
        <Route path="/about-test" element={<AboutTestPage />} />
        <Route path="/intro-test" element={<IntroTestPage />} />
        <Route path="/work-test" element={<WorkTestPage />} />
      </Routes>
    </BrowserRouter>
  )
}
