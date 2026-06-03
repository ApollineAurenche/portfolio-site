import { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import CopilotPage from './pages/CopilotPage.jsx'
import SNCFPage from './pages/SNCFPage.jsx'
import NewsletterPage from './pages/NewsletterPage.jsx'

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
      "I ensure positioning builds a competitive moat and aligns the entire organization around a shared language (product, sales, CS, finance, legal, marketing).",
    evidence: 'Copilot · Premium Services · Kanoon partnership',
  },
  {
    number: '03',
    title: 'Rapid Market Mastery',
    description:
      "I've built GTM strategy across different sectors, navigating cultural differences - each time starting from zero domain knowledge. I get up to speed fast, go deep, and adapt to how buyers actually think.",
    evidence: 'BlaBlaCar · Doctolib · PayFit - 3 verticals, 7 years',
  },
  {
    number: '04',
    title: 'Operator + Strategist',
    description:
      "I combine strategy with hands-on execution. I enjoy picking up new tools and developing new skills, which makes me comfortable across a wide range of stacks (CRM, data, design, AI, market research, project management).",
    evidence: 'HubSpot · Braze · Figma · Amplitude · SQL · AI tools',
  },
  {
    number: '05',
    title: 'Owns the Full Product Lifecycle',
    description:
      "Discovery → Positioning → Sales Enablement → Launch → Post-Launch. I understand how each phase feeds the next and measure end-to-end outcomes.",
    evidence: 'Copilot · Premium Services · Onboarding redesign',
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
      'PayFit shipped its first AI agent in 2024, ahead of the market. I joined from day one - defining the initial positioning and launch plan, then iterating on every element as the product evolved. The core challenge: building trust around AI at a time when it was less mainstream and users were less familiar with it.',
    outcomes: [
      { metric: '80%', label: 'Adoption post-launch\n(3 markets)' },
      { metric: '23%', label: 'CS ticket deflection post-launch' },
      { metric: '82%', label: 'Users report accomplishing tasks more easily' },
    ],
  },
  {
    id: 'premium',
    tag: ['Monetization', 'Pricing', 'Sales Enablement'],
    company: 'PayFit',
    title: 'Premium Services',
    subtitle: '€0 → €1.1M ARR in 6 months',
    whyThisProject:
      'A fast, iterative project in a small team - building a new revenue stream from zero. Identifying the opportunity, defining every element from scratch (name, pricing, packaging, positioning), testing with a small group of sales and CS, and shipping full enablement.',
    outcomes: [
      { metric: '€1.1M', label: 'ARR generated in 6 months from zero' },
      { metric: '+12%', label: 'Closing rate on targeted deals' },
      { metric: '2 tiers', label: 'Month-to-month, no commitment pricing model' },
    ],
  },
  {
    id: 'onboarding',
    tag: ['PLG', 'Lifecycle', 'Customer Journey'],
    company: 'PayFit',
    title: 'Onboarding & Lifecycle Redesign',
    subtitle: 'Time-to-value from 15 days to 2 hours',
    whyThisProject:
      '3 years as dedicated PMM for PayFit\'s PLG transformation, from the first journey mapping session to the final metrics. Few projects are this cross-functional: impacting so many internal teams while shaping the very first experience and impression a customer has with the product.',
    outcomes: [
      { metric: '~2h', label: 'Time-to-value for Starter clients (was 15 days)' },
      { metric: '+15%', label: 'Activation rate (signup to first payroll)' },
      { metric: '+1.5pt', label: 'Customer satisfaction score' },
    ],
  },
  {
    id: 'newsletter',
    route: '/work/newsletter',
    tag: ['Content Strategy', 'Customer Marketing', 'Product Adoption'],
    company: 'PayFit',
    title: 'Product Newsletter Redesign',
    subtitle: '×2 open rate · +20% click-through rate',
    whyThisProject:
      'Optimizing our customer marketing strategy to make the product newsletter a real engagement lever for product adoption. Working closely with the marketing team, we rebuilt it from scratch - and I became the face of PayFit\'s product communication, presenting new features directly to customers through video.',
    outcomes: [
      { metric: '×2', label: 'Open rate after full redesign' },
      { metric: '+20%', label: 'Click-through rate improvement' },
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
      'SNCF is France\'s #1 mobility operator - 5M+ daily users and the reference point for any long-distance travel decision. Scaling this partnership meant turning a basic integration into a systematic acquisition channel. One of the projects I\'m most proud of - I still use both platforms and still see this integration live, 6 years after shipping it.',
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
        <Link to="/" className="font-semibold text-stone-900 tracking-tight hover:text-teal-600 transition-colors"></Link>
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

function Hero({ onContact }) {
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
            <div className="max-w-2xl space-y-4">
              <p className="text-xl md:text-2xl text-stone-900 font-medium leading-relaxed">
                Glad you're here!
              </p>
              <p className="text-lg md:text-xl text-stone-500 font-light leading-relaxed">
                This portfolio reflects 7 years of PMM work - and how I think about building products people actually adopt.
              </p>
              <p className="text-lg md:text-xl text-stone-500 font-light leading-relaxed">
                I own the entire go-to-market journey: from understanding what customers actually need, through positioning, pricing and lifecycle, to adoption and growth. I move fast in new markets and execute hands-on.
              </p>
            </div>
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
          {[
            'SF Bay Area',
            'Remote worldwide',
            'Available July 2026',
            'FR (native) · EN (fluent)',
          ].map((tag) => (
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
    <section id="about" className="py-20 px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-medium tracking-widest text-teal-600 uppercase">What I bring</span>
          <h2 className="text-4xl font-bold text-stone-900 mt-3">My core strengths</h2>
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
      {/* Card header - always visible */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-8 md:p-10"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold text-teal-600 tracking-widest">0{index + 1}</span>
              {cs.tag.map((t) => (
                <span key={t} className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">{t}</span>
              ))}
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

        {/* Outcomes - always visible */}
        <div className="flex flex-wrap gap-4 mt-6">
          {cs.outcomes.map((o) => (
            <div key={o.metric} className="text-left">
              <div className="text-2xl font-bold text-teal-600">{o.metric}</div>
              <div className="text-xs text-stone-400 max-w-[140px] leading-tight whitespace-pre-line">{o.label}</div>
            </div>
          ))}
        </div>
      </button>

      {/* Expanded detail */}
      {open && (
        <div className="px-8 md:px-10 pb-10 border-t border-stone-100">
          {cs.whyThisProject && (
            <div className="pt-8 pb-6 border-b border-stone-100 mb-6">
              <h4 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-2">Why this project</h4>
              <p className="text-stone-600 text-sm leading-relaxed italic">{cs.whyThisProject}</p>
            </div>
          )}
          {(cs.problem || cs.insight || cs.positioning || cs.artifact) && (
            <div className="grid md:grid-cols-2 gap-8 pt-2">
              <div className="space-y-6">
                {cs.problem && (
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-2">Business Problem</h4>
                    <p className="text-stone-600 text-sm leading-relaxed">{cs.problem}</p>
                  </div>
                )}
                {cs.insight && (
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-2">Strategic Insight</h4>
                    <p className="text-stone-600 text-sm leading-relaxed">{cs.insight}</p>
                  </div>
                )}
                {cs.positioning && (
                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-2">Positioning</h4>
                    <p className="text-stone-900 text-sm font-medium italic">{cs.positioning}</p>
                  </div>
                )}
              </div>
              {cs.artifact && (
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
              )}
            </div>
          )}
          {!cs.problem && !cs.artifact && cs.route && (
            <div className="pt-4">
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
            </div>
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
          <p className="text-stone-400 mt-3 max-w-xl">
            Five projects across AI launch, monetization, lifecycle, customer communication, and partnerships - each showing a different dimension of full-stack PMM work.
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
    {
      company: 'PayFit',
      description: 'European HR & Payroll SaaS (Series E, unicorn, 20k+ SMB customers)',
      badge: 'B2B',
      title: 'Senior Global Product Marketing Manager',
      period: '2022 – 2025',
      location: 'Paris',
    },
    {
      company: 'Doctolib',
      description: 'European leading digital health platform (Series F, €6B+ valuation, 90M+ patients)',
      badge: 'B2B2C',
      title: 'Global Campaign Manager',
      period: '2020 – 2022',
      location: 'Paris',
    },
    {
      company: 'BlaBlaCar',
      description: 'European #1 long-distance ridesharing marketplace (100M+ members, late-stage scale-up)',
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
              className="flex flex-col md:flex-row md:items-start justify-between py-5 border-b border-stone-200 last:border-0"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <span className="font-bold text-lg text-stone-900">{r.company}</span>
                  <span className="text-sm font-medium text-stone-500">{r.title}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-xs text-stone-400">{r.description}</p>
                  <span className="flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-teal-50 text-teal-600 border border-teal-100">{r.badge}</span>
                </div>
              </div>
              <div className="flex gap-4 mt-1 md:mt-0 md:ml-8 text-sm text-stone-400 flex-shrink-0">
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
    name: 'Sophie Martin',
    role: 'Head of Product',
    company: 'PayFit',
    relation: 'Direct manager · 3 years',
    avatar: null,
    quote:
      'Apolline has a rare ability to translate complex product realities into sharp, compelling narratives. She owns her projects end to end - from the initial insight to the post-launch measurement - and never loses sight of the business impact. Working with her raised the bar for our entire PMM team.',
  },
  {
    name: 'Thomas Lefebvre',
    role: 'VP Sales',
    company: 'PayFit',
    relation: 'Cross-functional partner · 2 years',
    avatar: null,
    quote:
      "What sets Apolline apart is how quickly she earns trust across teams. She didn't just hand over a playbook - she worked side by side with the sales team until the positioning actually landed in deals. The Premium Services launch is a good example: the ramp was unusually fast because the enablement was genuinely good.",
  },
  {
    name: 'Julie Roux',
    role: 'Senior PMM',
    company: 'BlaBlaCar',
    relation: 'PMM peer · 2 years',
    avatar: null,
    quote:
      'Apolline combines strategic thinking with real hands-on execution. On the SNCF partnership, she managed the commercial relationship, the product integration specs, and the marketing plan simultaneously - and kept everything coherent. She is also genuinely fun to work with.',
  },
]

function Referrals() {
  const [current, setCurrent] = useState(0)
  const total = referrals.length
  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  return (
    <section className="py-20 bg-white border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs font-medium tracking-widest text-teal-600 uppercase">Referrals</span>
            <h2 className="text-3xl font-bold text-stone-900 mt-2">What people say</h2>
          </div>
          {/* Arrows + counter */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-teal-400 hover:text-teal-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-sm text-stone-300 font-medium tabular-nums w-8 text-center">
              {current + 1}/{total}
            </span>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:border-teal-400 hover:text-teal-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(calc(-${current * 72}% - ${current * 1.5}rem + 6%))` }}
        >
          {referrals.map((r, i) => (
            <div
              key={r.name}
              onClick={() => setCurrent(i)}
              className={`flex-shrink-0 w-[72%] mr-6 cursor-pointer transition-all duration-500 ${
                i === current ? 'opacity-100 scale-100' : 'opacity-60 scale-[0.96] blur-[1px]'
              }`}
            >
              <div className={`rounded-2xl p-8 flex flex-col gap-6 h-full border transition-colors duration-500 ${
                i === current ? 'bg-stone-50 border-stone-200' : 'bg-stone-50 border-stone-100'
              }`}>
                <p className="text-stone-700 text-base leading-relaxed flex-1">"{r.quote}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-stone-200">
                  <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 text-sm font-semibold">{r.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-stone-900">{r.name}</div>
                    <div className="text-xs text-stone-400">{r.role} · {r.company}</div>
                    <div className="text-xs text-stone-300 mt-0.5">{r.relation}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center gap-2 justify-center mt-8">
        {referrals.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? 'w-5 h-2 bg-teal-600' : 'w-2 h-2 bg-stone-200 hover:bg-stone-300'}`}
          />
        ))}
      </div>
    </section>
  )
}

function Footer({ onContact }) {
  return (
    <footer className="py-20 px-6 border-t border-stone-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-bold text-stone-900">Let's work together.</h3>
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
        <p className="text-sm text-stone-400">Designed and built by Apolline Aurenche using Claude, GitHub & Vercel.</p>
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

// ─── HOME ────────────────────────────────────────────────────────────────────

function Home() {
  const [contactOpen, setContactOpen] = useState(false)
  return (
    <div className="bg-white text-stone-900 min-h-screen">
      <Nav onContact={() => setContactOpen(true)} />
      <Hero onContact={() => setContactOpen(true)} />
      <About />
      <Work />
      <Experience />
      <Referrals />
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
      </Routes>
    </BrowserRouter>
  )
}
