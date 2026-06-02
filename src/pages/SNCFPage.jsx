import { Link } from 'react-router-dom'

const outcomes = [
  { metric: '+15pts', label: 'Conversion rate (visitor → booking) in 5 months' },
  { metric: '#1', label: "BlaBlaCar's top passenger acquisition partner by volume" },
  { metric: '10%+', label: 'Of BlaBlaCar Bus sales driven through the partnership' },
]

const phases = [
  {
    goal: 'Optimize',
    duration: 'Months 1-3',
    title: 'Integration Optimization',
    strategy: 'A basic integration already existed: 3 carpool placements in the train flow, triggered only when no train was available. We redesigned the logic and matching criteria - expanded radius (5% → 15%), removed auto-acceptance requirement, injected top carpool cities into search, and broadened triggers beyond the no-train scenario.',
    actions: ['Matching criteria redesign', 'CVR as north star metric', 'Trigger logic broadened', 'Placement performance analysis'],
  },
  {
    goal: 'Scale',
    duration: 'Months 4-6',
    title: 'Dedicated Tab',
    strategy: 'Strong Phase 1 performance unlocked a commercial negotiation. Result: a dedicated Bus & Carpool tab within SNCF search - surfacing all relevant offers at the same level as train results, regardless of train availability.',
    actions: ['Commercial negotiation with SNCF', 'Tab positioning & UX specs', 'Offer ranking definition', 'Launch performance tracking'],
  },
  {
    goal: 'Expand',
    duration: 'Months 7+',
    title: 'Multimodal Exploration',
    strategy: 'Work on end-to-end multimodal journeys: combined offers bookable in a single flow via API integration between BlaBlaCar and Oui.SNCF. Combinations explored: Train + Carpool, Car + Train, Train + Car + Carpool.',
    actions: ['API specs with product & engineering', 'Cross-platform booking flow design', 'Multimodal pricing logic', 'Joint roadmap with SNCF product team'],
  },
]

export default function SNCFPage() {
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
            <span className="text-xs font-bold text-teal-600 tracking-widest uppercase">BlaBlaCar</span>
            <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">Partnership</span>
            <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">Product Integration</span>
            <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">B2C</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight tracking-tight mb-4">
            SNCF × BlaBlaCar
          </h1>
          <p className="text-xl text-stone-500 font-light max-w-2xl leading-relaxed">
            Scaling SNCF partnership - from a basic integration to BlaBlaCar's top passenger acquisition channel.
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
                Grow the passenger base and reduce CAC by scaling a high-potential existing integration - turning SNCF into a systematic acquisition channel.
              </li>
              <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                Validate a multimodality thesis: could bus, train and carpool be complementary rather than competing?
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">Strategic Insights</h2>
            <ul className="space-y-3">
              <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                SNCF users are already high-intent travelers - strategic opportunity to intercept them at the right moment with a relevant carpool or bus offer.
              </li>
              <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                Carpool and bus also cover routes and last-mile gaps the train doesn't serve.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* My Role + Positioning */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">My Role</h2>
            <ul className="space-y-2 text-sm text-stone-600">
              <li className="flex gap-2"><span className="text-teal-500">·</span> Budget management and performance tracking</li>
              <li className="flex gap-2"><span className="text-teal-500">·</span> Partnership governance - preparation and follow-up of negotiations with the Business Development team</li>
              <li className="flex gap-2"><span className="text-teal-500">·</span> Product roadmap co-definition with internal and SNCF product teams</li>
              <li className="flex gap-2"><span className="text-teal-500">·</span> Marketing plan ownership - defining moments to cover, routes to prioritize and content to push (banners, landing pages, redirections), then tracking implementation and performance with SNCF</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">Positioning</h2>
            <blockquote className="text-2xl font-semibold text-stone-900 leading-snug border-l-4 border-teal-500 pl-6">
              "The right journey, the right moment, the right mode of transport."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Artifact */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">Artifact</span>
            <h2 className="text-3xl font-bold text-stone-900 mt-2">Product Integration Framework</h2>
            <p className="text-stone-400 text-sm mt-2 max-w-xl">
              From optimizing an existing 3-placement integration to a dedicated tab - each phase unlocked the next.
            </p>
          </div>

          {/* Unified phase + actions table */}
          <div className="grid md:grid-cols-3 gap-4">
            {phases.map((p, i) => (
              <div key={p.title} className="border border-stone-200 rounded-2xl p-6 hover:border-teal-200 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-teal-600 tracking-widest uppercase">Phase {i + 1}</span>
                  <span className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full font-medium">{p.goal}</span>
                </div>
                <div className="mb-1">
                  <div className="font-semibold text-stone-900 text-sm">{p.title}</div>
                  <div className="text-xs text-stone-400 mb-3">{p.duration}</div>
                </div>
                <p className="text-stone-500 text-xs leading-relaxed mb-4 pb-4 border-b border-stone-100">{p.strategy}</p>
                <ul className="space-y-1.5">
                  {p.actions.map((a) => (
                    <li key={a} className="flex gap-2 text-xs text-stone-500">
                      <span className="text-teal-500 flex-shrink-0">·</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Marketing Plan */}
          <div className="mt-12 bg-stone-50 rounded-2xl p-8">
            <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-2">Marketing Plan</h3>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              An annual budget was negotiated with SNCF. Planning was done upfront - defining the moments to cover, the routes to prioritize, and the content to push - then implementation and performance tracking were run jointly with SNCF teams.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  label: 'Seasonality',
                  detail: 'Spend concentrated on French travel peaks - Christmas, summer departures, school holidays - where demand was highest and train alternatives weakest.',
                },
                {
                  label: 'Route selection',
                  detail: 'Priority on O-D pairs with limited train frequency or high prices - where carpool and bus offered a real competitive alternative.',
                },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-5 border border-stone-100">
                  <div className="text-sm font-semibold text-stone-900 mb-2">{item.label}</div>
                  <p className="text-xs text-stone-500 leading-relaxed">{item.detail}</p>
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
