import { Link } from 'react-router-dom'
import CaseStudyNav from '../components/CaseStudyNav.jsx'

const outcomes = [
  { metric: '<3h', label: 'Time-to-value for Starter clients (was 2 days)' },
  { metric: '+15%', label: 'Activation rate (signup to first payroll)' },
  { metric: '+28%', label: 'Closing rate on deals pitched with new deck vs old' },
]

const journeyBefore = [
  { step: '1', moment: 'Signup', detail: 'Manual access creation - delay before being able to access the app, no action possible before setup' },
  { step: '2', moment: 'Setup', detail: 'Large volume of info to collect and share from the client side' },
  { step: '3', moment: 'Account verification', detail: 'Manual verification and integration of all information by CS teams to configure the account - another delay' },
  { step: '4', moment: 'First payroll', detail: '~2 days after signup for Starters, often with multiple back-and-forths' },
]
const beforeOngoing = 'All actions and follow-ups are manual, error-prone and time-consuming. Limited client visibility on progress at each stage.'

const journeyAfter = [
  { step: '1', moment: 'Signup', detail: 'Automatic account creation - instant access + first key features available before setup (hiring simulation, HR document generation...)' },
  { step: '2', moment: 'Setup', detail: '90% of setup data auto-retrieved from reliable sources, 100% in-app step-by-step workflow, self-serve with built-in guardrails' },
  { step: '3', moment: 'Account verification', detail: 'Automatic - full visibility on control actions performed and corrections in progress or to be resolved' },
  { step: '4', moment: 'First payroll', detail: 'Under 3 hours after setup' },
]
const afterOngoing = 'Actions and touchpoints automated - increased reliability, significant time savings for both clients and CS teams.'

const enablementActions = [
  {
    category: 'Pitch deck',
    color: 'bg-teal-50 text-teal-700 border-teal-100',
    actions: [
      { what: 'Reworked demo call deck - 3 segments', detail: 'Starters (100% self-serve), Classics VSB/SB, Classics MB/MM - same structure, tailored messaging per target' },
      { what: 'New commercial slides (2 slides)', detail: 'Overview of journey stages with product visuals, then who-does-what clarification at each step' },
    ],
  },
  {
    category: 'Documentation',
    color: 'bg-purple-50 text-purple-700 border-purple-100',
    actions: [
      { what: 'Internal Notion knowledge base', detail: 'Centralized hub: new service levels, closing & pricing rules, product journey, competitor mapping, pitch decks, assets' },
      { what: '360 Learning course', detail: 'Gamified path with quizzes to retain the essentials - score tracking per rep to monitor adoption and refine actions' },
    ],
  },
  {
    category: 'Training',
    color: 'bg-blue-50 text-blue-700 border-blue-100',
    actions: [
      { what: 'Training sessions & Q&As', detail: 'Multiple formats (group sessions, async videos, live Q&A) co-built with sales champions who validated the content and drove internal adoption' },
    ],
  },
  {
    category: 'Feedback loop',
    color: 'bg-stone-100 text-stone-600 border-stone-200',
    actions: [
      { what: 'Dedicated Slack channel', detail: 'Answered field questions, reshared key content, collected objections and verbatims - kept the enablement material alive and relevant over time, and iterated on assets in real time based on what came up in deals' },
    ],
  },
]

export default function OnboardingPage() {
  return (
    <div className="bg-white min-h-screen">
      <CaseStudyNav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 border-b border-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-bold text-teal-600 tracking-widest uppercase">PayFit</span>
            <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">Positioning</span>
            <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">Sales Enablement</span>
            <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">Change Management</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight tracking-tight mb-4 whitespace-nowrap">
                Onboarding Redesign
              </h1>
              <p className="text-xl text-stone-500 font-light max-w-2xl leading-relaxed">
                Unifying multiple onboarding changes - product, services, and pricing - into one coherent, differentiating story.
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

            {/* Hero image */}
            <div className="w-full md:w-[26rem] flex-shrink-0 rounded-2xl overflow-hidden shadow-sm border border-stone-200">
              <img
                src="/images/onboarding.jpg"
                alt="PayFit onboarding flow - guided profile creation steps"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview card */}
      <section className="pt-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="border border-stone-200 rounded-2xl p-8 md:p-10">

            <div className="grid sm:grid-cols-2 gap-8 sm:gap-0 sm:divide-x divide-stone-100">
              {/* Business Problem */}
              <div className="sm:pr-8">
                <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-3">Business Problem</h2>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm text-stone-600 leading-relaxed">
                    <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                    Onboarding was high-touch and slow - customers needed significant hand-holding from CS teams to get started, creating a bottleneck that limited growth and delivered a poor first impression.
                  </li>
                  <li className="flex gap-2 text-sm text-stone-600 leading-relaxed">
                    <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                    Simultaneous product, pricing, and service changes had each been communicated separately - creating noise instead of a coherent story customers and internal teams could follow.
                  </li>
                </ul>
              </div>

              {/* Strategic Insights */}
              <div className="sm:pl-8">
                <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-3">Strategic Insights</h2>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm text-stone-600 leading-relaxed">
                    <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                    Admins don't want hand-holding - they want to run their first payroll fast and independently. Speed and reliability are the job.
                  </li>
                  <li className="flex gap-2 text-sm text-stone-600 leading-relaxed">
                    <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                    One unified promise is more powerful than a list of improvements. "Get your first payroll done in under 3 hours" cuts through everything.
                  </li>
                  <li className="flex gap-2 text-sm text-stone-600 leading-relaxed">
                    <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                    Sales and CS are the last mile of any transformation. Enablement isn't optional - it determines whether the new experience is understood and sold correctly.
                  </li>
                </ul>
              </div>
            </div>

            {/* My Role */}
            <div className="mt-8 pt-8 border-t border-stone-100">
              <h2 className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-3">My Role</h2>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-stone-600">
                <li className="flex gap-2"><span className="text-teal-500 flex-shrink-0">·</span> Research - continuous market & user research (competitive benchmarks, customer interviews, satisfaction metrics, field feedback loops) and E2E customer journey mapping to ground every decision in real data</li>
                <li className="flex gap-2"><span className="text-teal-500 flex-shrink-0">·</span> Positioning & narrative - built one unified story around the transformed experience, replacing fragmented feature-by-feature communication with a single outcome-led promise</li>
                <li className="flex gap-2"><span className="text-teal-500 flex-shrink-0">·</span> Pricing redesign - restructured the pricing model and sales discount rules to align with the new self-serve experience and generate incremental revenue</li>
                <li className="flex gap-2"><span className="text-teal-500 flex-shrink-0">·</span> Lifecycle - designed automated workflows, new email sequences, in-app guidance, and proactive messaging based on behavioral triggers and segment (3 tracks)</li>
                <li className="flex gap-2"><span className="text-teal-500 flex-shrink-0">·</span> Sales enablement - co-built with sales champions to validate the content and drive internal adoption: new pitch decks by segment, training sessions, 360 Learning gamified course, internal Notion hub, and an ongoing feedback loop via a dedicated Slack channel</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">Positioning</h2>
          <blockquote className="text-2xl font-semibold text-stone-900 leading-snug border-l-4 border-teal-500 pl-6 max-w-2xl mb-2">
            "Get your first payroll done in under 3 hours."
          </blockquote>
          <p className="text-stone-500 text-base pl-6 max-w-xl mb-10">Setting up payroll software has never been this fast & simple.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: 'Simple from day one', detail: '90% of setup data auto-retrieved from reliable sources - no manual entry, no back-and-forth. No equivalent on the market.' },
              { label: 'Reliable', detail: 'Built-in compliance, automated payslip generation and declarations, real-time updates.' },
              { label: 'Support when it matters', detail: 'Copilot 24/7, payroll experts for complex cases, training resources for every level.' },
            ].map((v) => (
              <div key={v.label} className="bg-white rounded-xl p-6 border border-stone-100">
                <div className="text-sm font-semibold text-stone-900 mb-2">{v.label}</div>
                <p className="text-sm text-stone-500 leading-relaxed">{v.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artifact - Sales Enablement Doc */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">Artifact</span>
            <h2 className="text-3xl font-bold text-stone-900 mt-2">Sales Enablement Doc</h2>
            <p className="text-stone-400 text-sm mt-2 max-w-xl">
              Co-built with sales champions across the team - they validated the content, refined the pitch, and drove internal adoption. Below: overview of all actions, then a Starter segment example.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full"><span className="font-semibold text-stone-600">Starters</span> = first payroll clients (no payroll history)</span>
              <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full"><span className="font-semibold text-stone-600">Classics</span> = clients with existing payroll history</span>
            </div>
          </div>

          {/* Enablement actions overview */}
          <div className="mb-14">
            <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-6">Enablement actions overview</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {enablementActions.map((cat) => (
                <div key={cat.category} className="rounded-2xl border border-stone-200 overflow-hidden">
                  <div className="px-5 py-3 bg-stone-50 border-b border-stone-200">
                    <span className={`text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border ${cat.color}`}>{cat.category}</span>
                  </div>
                  <div className="p-5 space-y-4">
                    {cat.actions.map((a) => (
                      <div key={a.what}>
                        <div className="text-xs font-semibold text-stone-800 mb-1">{a.what}</div>
                        <div className="text-xs text-stone-500 leading-relaxed">{a.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            {/* New experience pitch card */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
              <div className="px-8 py-6 border-b border-stone-100 flex items-start justify-between">
                <div>
                  <div className="text-xs font-bold text-teal-600 tracking-widest uppercase mb-1">PayFit Internal - Sales</div>
                  <h3 className="text-xl font-bold text-stone-900">Starter segment - quick reference card</h3>
                  <p className="text-sm text-stone-400 mt-1 max-w-xl">Your quick reference for presenting the new onboarding journey to Starters - to use alongside the two new commercial slides · Updated Q3 2024</p>
                </div>
                <span className="text-xs bg-teal-50 text-teal-700 px-3 py-1 rounded-full border border-teal-100 font-medium flex-shrink-0">Fictional content</span>
              </div>

              {/* Before / After inside the card */}
              <div className="px-8 pt-6 pb-0">
                <h4 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">What changed - Starter journey</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl border border-stone-200 overflow-hidden">
                    <div className="px-4 py-2.5 bg-stone-50 border-b border-stone-200">
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Before</span>
                      <span className="text-xs text-stone-400 ml-2">Manual · CS-dependent</span>
                    </div>
                    <div className="p-4 space-y-2.5">
                      {journeyBefore.map((item, i) => (
                        <div key={item.moment} className="flex gap-3 items-start">
                          <div className="flex flex-col items-center flex-shrink-0">
                            <div className="w-5 h-5 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-xs font-bold text-stone-400">{item.step}</div>
                            {i < journeyBefore.length - 1 && <div className="w-px h-3 bg-stone-200 mt-0.5" />}
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-stone-700">{item.moment}</div>
                            <div className="text-xs text-stone-400 leading-snug">{item.detail}</div>
                          </div>
                        </div>
                      ))}
                      <div className="mt-1 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 text-xs text-amber-700 leading-relaxed">{beforeOngoing}</div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-teal-100 overflow-hidden">
                    <div className="px-4 py-2.5 bg-teal-50 border-b border-teal-100">
                      <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">After</span>
                      <span className="text-xs text-teal-500 ml-2 opacity-70">Automated · Self-guided</span>
                    </div>
                    <div className="p-4 space-y-2.5">
                      {journeyAfter.map((item, i) => (
                        <div key={item.moment} className="flex gap-3 items-start">
                          <div className="flex flex-col items-center flex-shrink-0">
                            <div className="w-5 h-5 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-xs font-bold text-teal-600">{item.step}</div>
                            {i < journeyAfter.length - 1 && <div className="w-px h-3 bg-teal-200 mt-0.5" />}
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-stone-700">{item.moment}</div>
                            <div className="text-xs text-stone-500 leading-snug">{item.detail}</div>
                          </div>
                        </div>
                      ))}
                      <div className="mt-1 bg-teal-50 border border-teal-100 rounded-lg px-3 py-2 text-xs text-teal-700 leading-relaxed">{afterOngoing}</div>
                    </div>
                  </div>
                </div>
                {/* Support elements + pricing */}
                <div className="mt-2 mb-6 grid md:grid-cols-2 gap-3 items-stretch">
                  <div className="bg-stone-50 rounded-xl border border-stone-200 p-4 flex flex-col">
                    <h4 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-3">Support included</h4>
                    <div className="space-y-2">
                      {[
                        { icon: '🤖', label: 'PayFit Copilot', detail: 'Instant answers 24/7, directly in-app' },
                        { icon: '👩‍💼', label: 'Payroll experts', detail: 'On hand for complex cases' },
                        { icon: '📚', label: 'Help center', detail: 'Guides, tutorials, and training resources for every level' },
                      ].map((s) => (
                        <div key={s.label} className="flex gap-2 text-xs">
                          <span className="flex-shrink-0">{s.icon}</span>
                          <span><span className="font-semibold text-stone-700">{s.label}</span> - <span className="text-stone-500">{s.detail}</span></span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-stone-50 rounded-xl border border-stone-200 p-4 flex flex-col justify-start">
                    <h4 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-2">Pricing - Starters</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">Onboarding and setup support is <span className="font-semibold text-stone-800">included at no extra cost</span> for Starter clients. No add-on to sell - just lead with the value.</p>
                  </div>
                </div>
              </div>

              <div className="p-8 grid md:grid-cols-2 gap-8">
                {/* The promise */}
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">The Promise</h4>
                  <div className="bg-teal-50 rounded-xl p-5 border border-teal-100 mb-4">
                    <p className="text-base font-semibold text-stone-900 leading-snug">"Get your first payroll done in under 3 hours. Fully guided, fully automated, no expertise needed."</p>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed">Lead with the outcome, not the features. The 2-hour promise is specific and directly addresses the biggest friction point for new customers.</p>
                  <div className="mt-4 bg-stone-900 rounded-xl p-4">
                    <div className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-2">Key differentiator</div>
                    <p className="text-xs text-stone-300 leading-relaxed">90% of setup data is retrieved automatically from the most reliable sources - payslips, DSN, social organizations. No manual entry, no back-and-forth between client and CS. <span className="text-white font-medium">No other payroll software on the market does this.</span> Less risk of errors, faster implementation, and a first impression that sets the tone for the whole experience.</p>
                  </div>
                </div>

                {/* Key messages by persona */}
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">Key Messages by Persona</h4>
                  <div className="space-y-3">
                    {[
                      { persona: 'HR Manager', angle: 'focus: time saved', message: 'Set up in hours, not weeks. 90% of your data is pre-filled automatically - you just validate.' },
                      { persona: 'Finance Director', angle: 'focus: compliance & reliability', message: 'First payroll in under 3 hours, fully compliant. No risk of errors from manual entry, no delays.' },
                      { persona: 'Small Business Owner', angle: 'focus: no expertise needed', message: 'No payroll background needed. PayFit guides you through every step - and Copilot is there if you get stuck.' },
                    ].map((p) => (
                      <div key={p.persona} className="bg-stone-50 rounded-lg p-4 border border-stone-100">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="text-xs font-bold text-teal-600">{p.persona}</div>
                          <span className="text-xs text-stone-300">·</span>
                          <div className="text-xs text-stone-400 italic">{p.angle}</div>
                        </div>
                        <p className="text-xs text-stone-600 leading-relaxed italic">"{p.message}"</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Objection handling */}
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">Objection Handling</h4>
                  <div className="space-y-3">
                    {[
                      { obj: '"I\'ve never managed payroll before - can I really do this on my own?"', answer: 'Absolutely. PayFit is designed for it. Step-by-step guidance, automatic data retrieval, built-in checks - you don\'t need to know payroll to get it right.' },
                      { obj: '"What if I need help during setup?"', answer: 'Copilot answers instantly 24/7 directly in the app. And if you need a human, our payroll experts are one click away.' },
                      { obj: '"What if I make an error and it affects my employees\' pay?"', answer: 'PayFit validates at every step before you run payroll. Errors are flagged and correctable before anything is processed.' },
                    ].map((item) => (
                      <div key={item.obj} className="border-l-2 border-stone-200 pl-4">
                        <div className="text-xs font-medium text-stone-700 mb-1">{item.obj}</div>
                        <div className="text-xs text-stone-500 leading-relaxed">→ {item.answer}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Language guidelines */}
                <div>
                  <h4 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">Language Guidelines</h4>
                  <div className="space-y-3">
                    {[
                      { dont: 'It\'s easy to use', say: 'PayFit guides you at every step - you don\'t need any payroll background' },
                      { dont: 'It\'s automated', say: '90% of your setup data is retrieved automatically - you just validate' },
                      { dont: 'We have great support', say: 'Copilot is available 24/7 in the app, and payroll experts are on hand for anything complex' },
                      { dont: 'It\'s fast', say: 'From signup to first payroll in under 3 hours' },
                    ].map((g) => (
                      <div key={g.dont} className="text-xs space-y-0.5">
                        <div className="flex gap-2"><span className="text-red-400 font-semibold flex-shrink-0">✗</span><span className="text-stone-400 line-through">{g.dont}</span></div>
                        <div className="flex gap-2"><span className="text-teal-500 font-semibold flex-shrink-0">✓</span><span className="text-stone-600">{g.say}</span></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion - Key Insight + proof */}
      <section className="py-8 md:py-10 px-6 bg-stone-900">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-teal-400 uppercase">Key Insight</span>
          <p className="text-stone-100 text-base leading-relaxed mt-3">
            Enablement is change management - and change management is a long game. Co-building with sales champions and managers from the start made the content credible and drove adoption. And you can't ship enablement and move on. Keeping the Slack channel alive, showing up at team meetings, resharing what's working - that's what actually gets everyone on board over time and makes the new story stick. The result: deals pitched with the new deck closed at a <span className="font-bold text-teal-400">+28% higher rate</span> than with the old one.
          </p>
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
