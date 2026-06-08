import { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import CopilotPage from './pages/CopilotPage.jsx'
import SNCFPage from './pages/SNCFPage.jsx'
import NewsletterPage from './pages/NewsletterPage.jsx'
import PreviewPage from './pages/PreviewPage.jsx'
import OnboardingPage from './pages/OnboardingPage.jsx'

// ─── DATA ────────────────────────────────────────────────────────────────────

const skills = [
  {
    number: '01',
    title: 'Translate complexity',
    description: 'I find the insight that unlocks simplicity and create internal alignment around that. Complex product - customer problem - clear narrative - measurable traction.',
    how: ['Customer research', 'Competitive intel', 'Journey mapping', 'Outcome-driven narratives', 'Message testing'],
  },
  {
    number: '02',
    title: 'Build from scratch',
    description: 'I thrive in 0-to-1 situations. I move fast, test early to sharpen strategy with market feedback, and adapt priorities in real time rather than waiting for perfect conditions.',
    how: ['Segmentation', 'Willingness-to-pay research', 'Value-based pricing', 'A/B testing', 'Beta launch'],
  },
  {
    number: '03',
    title: 'Scale what works',
    description: 'Once something clicks, I zoom out - turning one-off wins into repeatable systems that others can pick up, adapt, and run with across teams and markets.',
    how: ['Playbooks & templates', 'Post-mortem & assessment', 'Feedback loops', 'Team enablement', 'Adoption tracking'],
  },
  {
    number: '04',
    title: 'Own it end-to-end',
    description: 'From the first customer interview to post-launch performance loops - I understand how each phase feeds the next and partner across product, sales, CS, legal, and marketing.',
    how: ['Research', 'Strategy', 'Enablement', 'Launch', 'Post-launch'],
  },
]

const drives = [
  {
    label: 'Being the connective tissue',
    detail: 'I enjoy bridge work - creating shared language, alignment, and momentum across teams (CS, sales, marketing, legal, product) that would otherwise work in parallel.',
  },
  {
    label: 'Operating as strategist & executor',
    detail: 'Thinking through a P&L one day, editing a product video the next, I need both. And I enjoy testing new tools or approaches - I\'m most productive when I\'m learning by doing.',
  },
  {
    label: 'Ownership in fast-moving environments',
    detail: 'Agile teams, short feedback loops, real autonomy, visibility - that\'s where I move fastest and do my best work.',
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
      'PayFit shipped its first AI agent in 2024, ahead of the market. I joined from day one - building positioning and messaging from scratch across 3 countries, then iterating as the product evolved. The core challenge: building trust around AI at a time when it was less mainstream and users were less familiar with it.',
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
    tag: ['PLG', 'Lifecycle', 'Customer Journey'],
    company: 'PayFit',
    title: 'Onboarding Redesign',
    comingSoon: false,
    subtitle: 'Time-to-value from 15 days to 2 hours',
    whyThisProject:
      'Three years of progressive changes (product, pricing, services, lifecycle) to reconcile around a single story that customers, Sales, and CS trust and tell the same way. One of the most cross-functional projects I\'ve owned, and demanding in terms of internal change management.',
    artifactLabel: 'Sales enablement doc',
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
    subtitle: '+20% open rate · +8% click-through rate',
    whyThisProject:
      'Most product newsletters are feature lists nobody reads. Working closely with the marketing team, we rebuilt this one from scratch - new editorial angle, new format, and a new face: mine, presenting product updates directly to customers through video every send. +20% open rate and +8% CTR later, customers were actually reading.',
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
      'SNCF is France\'s #1 mobility operator. We scaled the partnership step by step until SNCF became BlaBlaCar\'s top passenger acquisition partner. One of the projects I\'m most proud of - I still see it live today, 6 years later, every time I book a trip.',
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
  { label: 'Onboarding & Lifecycle', route: '/work/onboarding', tag: 'PLG · Lifecycle · Customer Journey' },
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

function Hero({ onContact }) {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 mb-6">

          {/* Text */}
          <div className="flex-1 max-w-2xl">
            <span className="inline-block text-xs font-bold tracking-widest text-teal-600 uppercase mb-5">
              Senior Product Marketing Manager
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-snug tracking-tight mb-6">
              <span className="text-stone-900">I turn products into stories</span><br />
              <span className="text-teal-600">and stories into traction.</span>
            </h1>
            <div className="max-w-xl space-y-3 mb-10">
              <p className="text-lg text-stone-800 font-medium leading-relaxed">
                7 years, 3 unicorns, 3 sectors - always the same obsession: connect the magic of a product with what people actually need.
              </p>
              <p className="text-sm text-stone-500 leading-relaxed">
                I listen to customers, turn that into a shared language internally, and build the launches, narratives, and content that make adoption happen - across teams, markets, and business models.
              </p>
              <p className="text-sm text-teal-700 font-medium">
                80% AI product adoption | +15pts conversion on a top partnership | time-to-value cut from 15 days to 2 hours for an onboarding path. Explore the projects below.
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

        <div className="flex flex-wrap gap-3 mt-2 mb-8">
          {[
            'SF Bay Area',
            'Remote worldwide',
            'Available July 2026',
            'FR (native) · EN (fluent)',
          ].map((tag) => (
            <span key={tag} className="px-4 py-2 bg-stone-100 text-stone-600 rounded-full text-sm">{tag}</span>
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

        {/* How I work */}
        <div className="mb-12">
          <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">What I bring</span>
          <h2 className="text-3xl font-bold text-stone-900 mt-3">How I work</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
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

        {/* What drives me */}
        <div className="mb-10">
          <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">What drives me</span>
          <h2 className="text-3xl font-bold text-stone-900 mt-3">What I'm looking for</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {drives.map((d) => (
            <div key={d.label} className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-base font-semibold text-stone-900 mb-2">{d.label}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{d.detail}</p>
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
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-2xl font-bold text-stone-900">{cs.title}</h3>
              {cs.comingSoon && (
                <span className="text-xs text-stone-400 bg-stone-100 px-2.5 py-1 rounded-full flex-shrink-0">Under construction</span>
              )}
            </div>
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
              <p className="text-stone-600 text-sm leading-relaxed italic mb-4">{cs.whyThisProject}</p>
              {cs.artifactLabel && (
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-xs font-bold tracking-widest text-stone-400 uppercase">Artifact</span>
                  <span className="text-xs bg-teal-50 text-teal-700 border border-teal-100 px-2.5 py-1 rounded-full font-medium">{cs.artifactLabel}</span>
                </div>
              )}
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
                      <span className="text-xs text-stone-400 italic">Case study to come</span>
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
            Four projects across AI launch, lifecycle, customer communication, and partnerships - each showing a different dimension of full-stack PMM work.
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
            <span className="text-xs text-stone-400 bg-stone-100 px-2.5 py-0.5 rounded-full">More coming soon</span>
          </div>
          <h2 className="text-3xl font-bold text-stone-900">From the people I build with</h2>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid gap-6">
          {referrals.map((r, i) => (
            <div
              key={r.name}
              className="rounded-2xl p-8 flex flex-col gap-6 border bg-stone-50 border-stone-200 max-w-2xl"
            >
              <p className="text-stone-700 text-base leading-relaxed">"{r.quote}"</p>
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
      </Routes>
    </BrowserRouter>
  )
}
