import { Link } from 'react-router-dom'

const outcomes = [
  { metric: '80%', label: 'Adoption post-launch across 3 markets within 3 months' },
  { metric: '23%', label: 'CS ticket deflection rate post-launch' },
  { metric: '82%', label: 'Users report accomplishing tasks more easily' },
  { metric: '72%', label: 'Users report daily time savings' },
]

const phases = [
  {
    phase: 'Beta',
    market: 'France',
    target: 'New customers only',
    duration: 'Month 1',
    goal: 'Validate',
    strategy: 'Test with a low-risk segment - new customers only, no change management complexity. Iterate on messaging, in-app guidance, and sales enablement in real time.',
  },
  {
    phase: 'France Launch',
    market: 'France',
    target: 'All customers',
    duration: 'Month 2',
    goal: 'Scale FR',
    strategy: 'Progressive batch rollout to the full French base - gradually increasing the percentage of users exposed to manage product load and monitor reactions in real time. First time existing customers encountered the feature, so change management was key: clear in-app guidance, proactive communication, and close support team alignment.',
  },
  {
    phase: 'Global Scale',
    market: 'UK, Spain',
    target: 'All customers',
    duration: 'Month 3',
    goal: 'Scale Global',
    strategy: 'Progressive batch rollout per market - applying France learnings, localizing messaging and legal guidance, and managing change for existing customers discovering AI for the first time.',
  },
]

const valueProps = [
  { label: 'Always available', detail: 'Instant answers 24/7, directly in-app. Copilot responds or routes to CS on the same tab with a pre-filled ticket.' },
  { label: 'Always accurate', detail: 'Built on your data + local payroll laws (EU certified)' },
  { label: 'Saves time', detail: 'Users accomplish tasks 2× faster (backed by data)' },
]

const gtmPlan = [
  {
    phase: 'Pre-launch',
    color: 'bg-green-50 text-green-700 border-green-100',
    dot: 'bg-green-400',
    items: [
      { tactic: 'Strategic Readiness', deliverable: 'Positioning / messaging', responsible: 'PMM' },
      { tactic: 'Strategic Readiness', deliverable: 'Pricing / packaging', responsible: 'PMM' },
      { tactic: 'Strategic Readiness', deliverable: 'Feature naming / branding', responsible: 'Brand' },
      { tactic: 'Strategic Readiness', deliverable: 'GTM kick-off meeting', responsible: 'PMM' },
      { tactic: 'Assets Creation', deliverable: 'Product visual design', responsible: 'Design' },
      { tactic: 'Assets Creation', deliverable: 'Content creation / update', responsible: 'Content' },
      { tactic: 'Enablement', deliverable: 'Sales materials', responsible: 'PMM + Sales' },
      { tactic: 'Enablement', deliverable: 'Sales & CS training', responsible: 'PMM' },
    ],
  },
  {
    phase: 'Launch - Beta / RP',
    color: 'bg-purple-50 text-purple-700 border-purple-100',
    dot: 'bg-purple-400',
    items: [
      { tactic: 'Customer Communication', deliverable: 'Help Center article', responsible: 'PMM + PM' },
      { tactic: 'Customer Communication', deliverable: 'In-app message', responsible: 'PMM + PM' },
      { tactic: 'Internal Communication', deliverable: 'Internal launch announcement', responsible: 'PMM' },
    ],
  },
  {
    phase: 'Launch - GA',
    color: 'bg-blue-50 text-blue-700 border-blue-100',
    dot: 'bg-blue-400',
    items: [
      { tactic: 'Customer Communication', deliverable: 'Product newsletter', responsible: 'PMM' },
      { tactic: 'Customer Communication', deliverable: 'Customer announcement', responsible: 'PMM' },
      { tactic: 'Awareness', deliverable: 'Website update', responsible: 'PMM' },
      { tactic: 'Awareness', deliverable: 'Social media / influencers', responsible: 'Social' },
      { tactic: 'Awareness', deliverable: 'PR & agency', responsible: 'PR Com & Events' },
      { tactic: 'Awareness', deliverable: 'Live event / webinar', responsible: 'PR Com & Events' },
      { tactic: 'Lead Generation', deliverable: 'Paid ads', responsible: 'Growth' },
      { tactic: 'Lead Generation', deliverable: 'Nurturing email', responsible: 'Growth' },
    ],
  },
  {
    phase: 'Post-Launch',
    color: 'bg-stone-100 text-stone-600 border-stone-200',
    dot: 'bg-stone-400',
    items: [
      { tactic: 'Awareness', deliverable: 'KeyNote', responsible: 'PMM' },
      { tactic: 'Analysis', deliverable: 'Lookback session', responsible: 'PMM' },
      { tactic: 'Analysis', deliverable: 'Campaign performance dashboard', responsible: 'Campaign Mktg' },
      { tactic: 'Analysis', deliverable: 'Product performance dashboard', responsible: 'PM' },
      { tactic: 'Internal Communication', deliverable: 'Internal performance announcement', responsible: 'PMM + PM' },
    ],
  },
]

export default function CopilotPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-base font-bold text-stone-900 tracking-tight">Apolline Aurenche - Portfolio</span>
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
            Launching PayFit's first AI assistant to 80% adoption across 3 markets in 3 months.
          </p>

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
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">Business Problem</h2>
            <ul className="space-y-3">
              <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                Getting support was painful - multiple clicks, redirected outside the app to a help center, a form to fill, then back in to check the response. CS was only available Mon-Fri 9-5.
              </li>
              <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                CSM team couldn't handle volume at scale - service overload was growing and the experience was inconsistent.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">Strategic Insights</h2>
            <ul className="space-y-3">
              <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                Admins want fast, reliable answers without waiting - speed and trust are the core jobs.
              </li>
              <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                First to market with a payroll-specific AI (not generic ChatGPT) - a real differentiation window.
              </li>
              <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                AI innovation is a key purchase driver for Starter companies - ICP alignment mattered.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* My Role */}
      <section className="pt-8 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">My Role</h2>
          <ul className="space-y-2 text-sm text-stone-600">
            <li className="flex gap-2"><span className="text-teal-500 flex-shrink-0">·</span> Research & insights - user interviews, customer surveys, and persona work to ground the strategy in real needs</li>
            <li className="flex gap-2"><span className="text-teal-500 flex-shrink-0">·</span> Positioning & messaging built from scratch - defined how Copilot fit PayFit's broader vision and what it meant for admins day-to-day</li>
            <li className="flex gap-2"><span className="text-teal-500 flex-shrink-0">·</span> Sales & CS enablement - built training materials and ensured every customer-facing team could articulate the value in their own language</li>
            <li className="flex gap-2"><span className="text-teal-500 flex-shrink-0">·</span> Cross-functional coordination - partnered with Product, Engineering, Legal, and Design to pressure-test messaging and align on launch storytelling</li>
            <li className="flex gap-2"><span className="text-teal-500 flex-shrink-0">·</span> Launch & localization - adapted messaging for each market, coordinated go-live across 3 countries, and ran post-launch optimization loops</li>
          </ul>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">Positioning & Messaging</h2>
            <blockquote className="text-2xl font-semibold text-stone-900 leading-snug border-l-4 border-teal-500 pl-6 max-w-2xl">
              "Your AI personal assistant - always available, always aware of your specificities."
            </blockquote>
          </div>

          {/* Value props */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {valueProps.map((v) => (
              <div key={v.label} className="bg-white rounded-xl p-6 border border-stone-100">
                <div className="text-sm font-semibold text-stone-900 mb-2">{v.label}</div>
                <p className="text-sm text-stone-500 leading-relaxed">{v.detail}</p>
              </div>
            ))}
          </div>

          {/* Messaging choices */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">Narrative choices</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                  <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                  <span><span className="font-medium text-stone-800">Outcomes, not features.</span> Every message led with what admins gained (time saved, instant answers), reinforced with concrete figures and use cases - not what the AI could technically do.</span>
                </li>
                <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                  <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                  <span><span className="font-medium text-stone-800">Partner, not replacement.</span> Deliberately avoided any phrasing that might imply Copilot replaces humans - it's an additional tool to enhance the support experience, not a substitute for the CS team.</span>
                </li>
                <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                  <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                  <span><span className="font-medium text-stone-800">Trust through specificity.</span> "Payroll-specific AI" vs. generic ChatGPT - the EU certification and local law compliance were core message pillars, not footnotes.</span>
                </li>
                <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                  <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                  <span><span className="font-medium text-stone-800">Ecosystem thinking.</span> Copilot wasn't positioned in isolation - it lived inside the broader support experience, product narrative, and sales conversation. This launch was an opportunity to reframe the entire help experience as one unified story, making it easier for customers to see the full value.</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">Audience-specific angles</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                  <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                  <span><span className="font-medium text-stone-800">Admins:</span> instant answers 24/7 without waiting for CS - time saved on recurring payroll questions.</span>
                </li>
                <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                  <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                  <span><span className="font-medium text-stone-800">Sales:</span> AI innovation as a concrete differentiator in competitive deals - particularly strong as a purchase driver for Starter companies.</span>
                </li>
                <li className="flex gap-3 text-stone-600 text-sm leading-relaxed">
                  <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                  <span><span className="font-medium text-stone-800">CS team:</span> a tool that deflects volume, not headcount - frees them for higher-value interactions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Customer quote */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-lg bg-stone-50 rounded-2xl p-8 relative">
            <span className="text-5xl text-teal-200 font-serif leading-none absolute top-4 left-6 select-none">"</span>
            <p className="text-stone-700 text-base leading-relaxed italic pt-4">
              PayFit Copilot is fantastic. I hardly contact support anymore. Being able to use it anytime is incredibly convenient.
            </p>
            <div className="mt-4 pt-4 border-t border-stone-200">
              <span className="text-sm font-semibold text-stone-900">Mélissa</span>
              <span className="text-sm text-stone-400 ml-2">Cloud-Fi</span>
            </div>
          </div>
        </div>
      </section>

      {/* Artifact - GTM Launch Plan */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">Artifact</span>
            <h2 className="text-3xl font-bold text-stone-900 mt-2">GTM Launch Plan</h2>
          </div>

          {/* Launch timeline subtitle */}
          <div className="mb-6">
            <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-1">Launch timeline</h3>
            <p className="text-stone-400 text-sm">3-phase rollout - validate before scaling, iterate in real time, localize for each market.</p>
          </div>

          {/* Phase timeline - horizontal cards with arrows */}
          <div className="flex flex-col md:flex-row items-stretch gap-0 mb-12">
            {phases.map((p, i) => (
              <div key={p.phase} className="flex flex-col md:flex-row items-stretch flex-1">
                <div className="flex-1 border border-stone-200 rounded-2xl p-6 hover:border-teal-200 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-teal-600 tracking-widest uppercase">Phase {i + 1}</span>
                    <span className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full font-medium">{p.goal}</span>
                  </div>
                  <div className="font-semibold text-stone-900 text-sm mb-1">{p.phase}</div>
                  <div className="text-xs text-stone-400 mb-3">{p.duration}</div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full">{p.market}</span>
                    <span className="text-xs bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full">{p.target}</span>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed">{p.strategy}</p>
                </div>
                {i < phases.length - 1 && (
                  <div className="hidden md:flex items-center px-2 text-stone-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Platinum tiering callout */}
          <div className="mb-8 flex items-start gap-4 bg-yellow-50 border border-yellow-200 rounded-2xl px-6 py-5">
            <span className="text-xl flex-shrink-0">🥇</span>
            <div>
              <span className="text-xs font-bold tracking-widest text-yellow-700 uppercase">Platinum launch tier</span>
              <p className="text-sm text-stone-600 leading-relaxed mt-1">
                At PayFit, every feature launch is assigned a tier based on its strategic impact and business potential. Copilot qualified as <span className="font-semibold text-stone-800">Platinum</span> - the highest tier, reserved for <span className="font-semibold text-stone-800">major innovations</span> expected to attract new customers and expand the user base. That classification directly shaped the GTM plan below.
              </p>
            </div>
          </div>

          {/* GTM Plan table */}
          <div className="bg-stone-50 rounded-2xl p-8">
            <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-3">
              Platinum Tiering - GTM Plan
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              This plan was aligned with all stakeholders during the GTM kick-off - with a full RACI across 6+ teams. What's shown here is the simplified view with the Responsible owner per deliverable.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {gtmPlan.map((col) => (
                <div key={col.phase}>
                  <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${col.color}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${col.dot}`} />
                    {col.phase}
                  </div>
                  <ul className="space-y-3">
                    {col.items.map((item) => (
                      <li key={item.deliverable} className="group">
                        <div className="text-xs font-medium text-stone-800">{item.deliverable}</div>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-xs text-stone-400">{item.tactic}</span>
                        </div>
                        <div className="text-xs text-teal-600 mt-0.5"><span className="text-teal-600 font-medium">Owner: </span>{item.responsible}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Insight */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border-l-4 border-teal-500 bg-teal-50 rounded-r-2xl px-8 py-6 flex flex-col md:flex-row md:items-start gap-4">
            <span className="text-xs font-bold tracking-widest text-teal-600 uppercase whitespace-nowrap pt-0.5 min-w-[100px]">Key Insight</span>
            <p className="text-stone-700 text-sm leading-relaxed">
              Messaging is never a one-time deliverable. The narrative evolved alongside the product - each new capability, each round of user surveys, each piece of field feedback shaped the next iteration. We didn't guess what resonated: we asked, collected verbatims, gathered figures, and documented use cases to keep messaging concrete and impactful well beyond launch.
            </p>
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
