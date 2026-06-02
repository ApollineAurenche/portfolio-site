import { Link } from 'react-router-dom'

const outcomes = [
  { metric: '80%', label: 'Adoption post-launch across 3 markets within 3 months' },
  { metric: '23%', label: 'CS ticket deflection rate post-launch' },
  { metric: '82%', label: 'Users report accomplishing tasks more easily' },
  { metric: '72%', label: 'Users report daily time savings' },
]

const phases = [
  {
    phase: 'Phase 1 — Beta',
    market: 'France',
    target: 'New customers (onboarding cohort)',
    duration: 'Month 1 · Weeks 1–4',
    strategy:
      'Validate product and GTM elements with a low-risk segment. Test Copilot with new customers — no change management complexity. Iterate on messaging, in-app guidance, and sales enablement in real time.',
    goal: 'Validate',
  },
  {
    phase: 'Phase 2 — France Launch',
    market: 'France',
    target: 'All customers',
    duration: 'Month 2 · Weeks 4–8',
    strategy:
      'Phased rollout to the full base. Evaluate how users and the support team respond to AI-powered support and the new support flow. Minimize risks and costs through real-time adaptations.',
    goal: 'Scale FR',
  },
  {
    phase: 'Phase 3 — Global Scale',
    market: 'US, UK, other markets',
    target: 'All customers',
    duration: 'Months 3–6 · Weeks 8+',
    strategy:
      'Apply learnings from France. Test localization: legal guidance, language nuance. Scale with confidence across geographies.',
    goal: 'Scale Global',
  },
]

const valueProps = [
  {
    label: 'Always available',
    detail: 'Instant answers 24/7 — no waiting for support',
  },
  {
    label: 'Always accurate',
    detail: 'Built on your data + local payroll laws (EU certified)',
  },
  {
    label: 'Saves time',
    detail: 'Users accomplish tasks 2× faster (backed by data)',
  },
]

export default function CopilotPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold text-stone-900 tracking-tight hover:text-teal-600 transition-colors">
            AA
          </Link>
          <Link
            to="/#work"
            className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All case studies
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 border-b border-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-bold text-teal-600 tracking-widest uppercase">PayFit</span>
            <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">GTM Strategy</span>
            <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">AI Product</span>
            <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">3 Markets</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight tracking-tight mb-4">
            PayFit Copilot Launch
          </h1>
          <p className="text-xl text-stone-500 font-light max-w-2xl leading-relaxed">
            Launching PayFit's first AI assistant — from zero to 80% adoption across 3 markets in 3 months.
          </p>

          {/* Outcome pills */}
          <div className="flex flex-wrap gap-6 mt-10">
            {outcomes.map((o) => (
              <div key={o.metric}>
                <div className="text-3xl font-bold text-teal-600">{o.metric}</div>
                <div className="text-xs text-stone-400 max-w-[160px] leading-snug mt-1">{o.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">Business Problem</h2>
            <ul className="space-y-3">
              <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                Admins lack time and need instant answers 24/7 — the product wasn't meeting that expectation.
              </li>
              <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                CSM team couldn't handle the volume of support requests at scale — service overload was growing.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">Strategic Insights</h2>
            <ul className="space-y-3">
              <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                Admins want fast, reliable answers without waiting — speed and trust are the core jobs.
              </li>
              <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                We were first to market with a payroll-specific AI (not generic ChatGPT) at that time — a real differentiation window.
              </li>
              <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                Innovation (AI) is a key purchase driver mainly for Starter companies — ICP alignment mattered.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div>
              <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">Target Personas</h2>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex gap-2"><span className="text-teal-500">·</span> CEOs & HR managers — Starter companies (priority)</li>
                <li className="flex gap-2"><span className="text-teal-500">·</span> DRH & HR ops teams — Mid-market</li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">Positioning</h2>
              <blockquote className="text-2xl font-semibold text-stone-900 leading-snug border-l-4 border-teal-500 pl-6">
                "Your AI personal assistant — always available, always aware of your specificities."
              </blockquote>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-12">
            {valueProps.map((v) => (
              <div key={v.label} className="bg-white rounded-xl p-6 border border-stone-100">
                <div className="text-sm font-semibold text-stone-900 mb-2">{v.label}</div>
                <p className="text-sm text-stone-500 leading-relaxed">{v.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artifact — GTM Launch Plan */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">Artifact</span>
            <h2 className="text-3xl font-bold text-stone-900 mt-2">GTM Launch Plan</h2>
            <p className="text-stone-400 text-sm mt-2 max-w-xl">
              3-phase phased rollout designed to validate GTM elements before scaling — minimizing risk while maximizing speed to market.
            </p>
          </div>

          {/* Phase timeline */}
          <div className="space-y-4">
            {phases.map((p, i) => (
              <div
                key={p.phase}
                className="border border-stone-200 rounded-2xl p-8 hover:border-teal-200 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Phase label */}
                  <div className="flex-shrink-0 w-32">
                    <div className="text-xs font-bold text-teal-600 tracking-widest uppercase mb-1">Phase {i + 1}</div>
                    <div className="inline-block text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full font-medium">
                      {p.goal}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-4 mb-3">
                      <span className="font-semibold text-stone-900">{p.phase}</span>
                      <span className="text-stone-400 text-sm">{p.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="text-xs bg-stone-100 text-stone-600 px-3 py-1 rounded-full">Market: {p.market}</span>
                      <span className="text-xs bg-stone-100 text-stone-600 px-3 py-1 rounded-full">Target: {p.target}</span>
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed">{p.strategy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GTM elements iterated */}
          <div className="mt-12 bg-stone-50 rounded-2xl p-8">
            <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-6">
              GTM Elements Iterated Across Phases
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Messaging', items: ['Positioning statement', 'Value prop by persona', 'Feature naming', 'Localization by market'] },
                { title: 'In-app guidance', items: ['Onboarding flow copy', 'Tooltips & empty states', 'AI response framing', 'Error messaging'] },
                { title: 'Sales enablement', items: ['Discovery guide', 'Objection handling', 'Demo script', 'Competitive battlecard'] },
              ].map((col) => (
                <div key={col.title}>
                  <div className="text-sm font-semibold text-stone-700 mb-3">{col.title}</div>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-stone-500">
                        <span className="text-teal-400 mt-0.5 flex-shrink-0">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <section className="py-16 px-6 border-t border-stone-100">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            to="/#work"
            className="flex items-center gap-2 text-stone-400 hover:text-stone-900 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all case studies
          </Link>
          <a
            href="mailto:apollineaurenche@gmail.com"
            className="bg-teal-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  )
}
