import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import CaseStudyNav from '../components/CaseStudyNav.jsx'

// Reading progress bar - fills as the user scrolls through the page
function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement
      const scrollTop = h.scrollTop || document.body.scrollTop
      const scrollHeight = (h.scrollHeight || document.body.scrollHeight) - h.clientHeight
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent">
      <div
        className="h-full bg-teal-500 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

// Wraps a section so it fades + slides up into view on scroll
function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  )
}

const outcomes = [
  { metric: '80%', label: 'Adoption post-launch across 3 markets within 3 months' },
  { metric: '23%', label: 'CS ticket deflection rate post-launch' },
  { metric: '82%', label: 'Users report accomplishing tasks more easily' },
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

const narrativeChoices = [
  { title: 'Outcomes, not features', body: 'Every message led with what admins gained (time saved, instant answers), reinforced with concrete figures and use cases - not what the AI could technically do.' },
  { title: 'Partner, not replacement', body: "Deliberately avoided any phrasing that might imply Copilot replaces humans - it's an additional tool to enhance the support experience, not a substitute for the CS team." },
  { title: 'Trust through specificity', body: '"Payroll-specific AI" vs. generic ChatGPT - the EU certification and local law compliance were core message pillars.' },
  { title: 'Ecosystem thinking', body: "Copilot wasn't positioned in isolation - it lived inside the broader support experience, product narrative, and sales conversation. This launch was an opportunity to reframe the entire help experience as one unified story." },
]

const audienceAngles = [
  { audience: 'Admins', initial: 'A', angle: 'Instant answers 24/7 without waiting for CS - time saved on recurring payroll questions.' },
  { audience: 'Sales', initial: 'S', angle: 'AI innovation as a concrete differentiator in competitive deals - particularly strong as a purchase driver for Starter companies.' },
  { audience: 'CS team', initial: 'CS', angle: 'A tool that deflects volume, not headcount - frees them for higher-value interactions.' },
]

export default function CopilotPage() {
  return (
    <div className="bg-white min-h-screen">
      <ReadingProgress />
      <CaseStudyNav />

      {/* Hero */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-20 px-6 border-b border-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-bold text-teal-600 tracking-widest uppercase">PayFit</span>
            <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">GTM Strategy</span>
            <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">AI Product</span>
            <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">3 Markets</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight tracking-tight mb-4 whitespace-nowrap">
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

            <div className="w-full md:w-[26rem] flex-shrink-0 -mb-6">
              <img
                src="/images/copilot.avif"
                alt="PayFit Copilot AI assistant"
                className="w-full h-auto object-contain"
                style={{ maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview card */}
      <section className="pt-12 md:pt-20 px-6">
        <Reveal className="max-w-5xl mx-auto">
          <div className="border border-stone-200 rounded-2xl p-8 md:p-10">

            <div className="grid sm:grid-cols-2 gap-8 sm:gap-0 sm:divide-x divide-stone-100">
              {/* Business Problem */}
              <div className="sm:pr-8">
                <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-3">Business Problem</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm text-stone-600 leading-relaxed">
                    <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                    Getting support was painful - multiple clicks, redirected outside the app to a help center, a form to fill, then back in to check the response. CS was only available Mon-Fri 9-5.
                  </li>
                  <li className="flex gap-2 text-sm text-stone-600 leading-relaxed">
                    <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                    CSM team couldn't handle volume at scale - service overload was growing and the experience was inconsistent.
                  </li>
                </ul>
              </div>

              {/* Strategic Insights */}
              <div className="sm:pl-8">
                <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-3">Strategic Insights</h3>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm text-stone-600 leading-relaxed">
                    <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                    Admins want fast, reliable answers without waiting - speed and trust are the core jobs.
                  </li>
                  <li className="flex gap-2 text-sm text-stone-600 leading-relaxed">
                    <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                    First to market with a payroll-specific AI (not generic ChatGPT) - a real differentiation window.
                  </li>
                  <li className="flex gap-2 text-sm text-stone-600 leading-relaxed">
                    <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                    AI innovation is a key purchase driver for Starter companies - ICP alignment mattered.
                  </li>
                </ul>
              </div>
            </div>

            {/* My Role */}
            <div className="mt-8 pt-8 border-t border-stone-100">
              <h3 className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-3">My Role</h3>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-stone-600">
                <li className="flex gap-2"><span className="text-teal-500 flex-shrink-0">·</span> Research & insights - user interviews, customer surveys, and persona work to ground the strategy in real needs</li>
                <li className="flex gap-2"><span className="text-teal-500 flex-shrink-0">·</span> Positioning & messaging built from scratch - defined how Copilot fit PayFit's broader vision and what it meant for admins day-to-day</li>
                <li className="flex gap-2"><span className="text-teal-500 flex-shrink-0">·</span> GTM strategy - designed and validated the phased, per-country rollout plan with stakeholders across 6+ teams</li>
                <li className="flex gap-2"><span className="text-teal-500 flex-shrink-0">·</span> Sales & CS enablement - built training materials and ensured every customer-facing team could articulate the value in their own language</li>
                <li className="flex gap-2"><span className="text-teal-500 flex-shrink-0">·</span> Cross-functional coordination - partnered with Product, Engineering, Legal, and Design to pressure-test messaging and align on launch storytelling</li>
                <li className="flex gap-2"><span className="text-teal-500 flex-shrink-0">·</span> Launch & localization - adapted messaging for each market, coordinated go-live across 3 countries, and ran post-launch optimization loops</li>
              </ul>
            </div>

          </div>
        </Reveal>
      </section>

      {/* ARTIFACT - Complete GTM Plan */}
      <section className="pt-12 md:pt-20 pb-2 px-6">
        <Reveal className="max-w-5xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">Artifact</span>
          <h2 className="text-3xl font-bold text-stone-900 mt-2">Complete GTM Plan</h2>
          <p className="text-stone-500 text-sm mt-2 max-w-2xl">From positioning to launch execution and messaging guidelines.</p>
        </Reveal>
      </section>

      {/* 1. Positioning & Value Prop */}
      <section className="py-10 md:py-16 px-6 bg-teal-50/50">
        <Reveal className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-6 h-6 rounded-full bg-teal-500 text-white text-xs font-bold flex items-center justify-center">1</span>
            <h3 className="text-xs font-bold tracking-widest text-teal-700 uppercase">Positioning & Value Prop</h3>
          </div>
          <blockquote className="text-3xl md:text-4xl font-semibold text-stone-900 leading-snug mb-3">
            "Never be without an answer."
          </blockquote>
          <p className="text-base text-stone-500 max-w-2xl mb-10">Get instant, personalized answers 24/7 with your personal AI assistant.</p>

          <div className="grid sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x divide-teal-100">
            {valueProps.map((v, i) => (
              <div key={v.label} className={i === 0 ? 'sm:pr-8' : i === valueProps.length - 1 ? 'sm:pl-8' : 'sm:px-8'}>
                <div className="text-xs font-bold text-teal-600 mb-2">0{i + 1}</div>
                <div className="text-sm font-semibold text-stone-900 mb-2">{v.label}</div>
                <p className="text-sm text-stone-500 leading-relaxed">{v.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 2. Launch Timeline */}
      <section className="py-10 md:py-16 px-6">
        <Reveal className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center">2</span>
            <h3 className="text-xs font-bold tracking-widest text-green-700 uppercase">Launch Timeline</h3>
          </div>
          <p className="text-stone-400 text-sm mb-6 ml-8">3-phase rollout - validate before scaling, iterate in real time, localize for each market.</p>

          {/* Phase timeline - horizontal cards with arrows */}
          <div className="flex flex-col md:flex-row items-stretch gap-0">
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
        </Reveal>
      </section>

      {/* 3. Launch Actions & RACI */}
      <section className="py-10 md:py-16 px-6 bg-stone-50">
        <Reveal className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-6 h-6 rounded-full bg-purple-500 text-white text-xs font-bold flex items-center justify-center">3</span>
            <h3 className="text-xs font-bold tracking-widest text-purple-700 uppercase">Launch Actions & RACI</h3>
          </div>
          <p className="text-stone-500 text-sm leading-relaxed mb-8 max-w-2xl ml-8">
            Full plan validated with all stakeholders during the GTM kick-off - with a full RACI across 6+ teams. What's shown here is the simplified view with the Responsible owner per deliverable.
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
        </Reveal>
      </section>

      {/* 4. Messaging Guidelines */}
      <section className="py-10 md:py-16 px-6">
        <Reveal className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center">4</span>
            <h3 className="text-xs font-bold tracking-widest text-blue-700 uppercase">Messaging Guidelines</h3>
          </div>
          <p className="text-stone-400 text-sm mb-8 ml-8">The narrative choices behind the positioning, and how it lands for each audience.</p>

          {/* Narrative choices - card grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {narrativeChoices.map((n, i) => {
              const colors = ['border-teal-100 bg-teal-50/40', 'border-green-100 bg-green-50/40', 'border-purple-100 bg-purple-50/40', 'border-blue-100 bg-blue-50/40'];
              const dots = ['bg-teal-400', 'bg-green-400', 'bg-purple-400', 'bg-blue-400'];
              return (
                <div key={n.title} className={`border rounded-xl p-5 transition-colors ${colors[i % colors.length]}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${dots[i % dots.length]}`} />
                    <div className="text-sm font-semibold text-stone-900">{n.title}</div>
                  </div>
                  <p className="text-sm text-stone-500 leading-relaxed">{n.body}</p>
                </div>
              );
            })}
          </div>

          {/* Audience angles - persona row */}
          <div className="grid sm:grid-cols-3 gap-4">
            {audienceAngles.map((a, i) => {
              const badges = ['bg-teal-100 text-teal-700', 'bg-green-100 text-green-700', 'bg-purple-100 text-purple-700'];
              return (
                <div key={a.audience} className="bg-stone-50 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 ${badges[i % badges.length]}`}>{a.initial}</span>
                    <span className="text-sm font-semibold text-stone-900">{a.audience}</span>
                  </div>
                  <p className="text-sm text-stone-500 leading-relaxed">{a.angle}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* Conclusion - Key Insight + Verbatim, linked */}
      <section className="py-8 md:py-10 px-6 bg-stone-900">
        <Reveal className="max-w-5xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-teal-400 uppercase">Key Insight</span>
          <p className="text-stone-100 text-base leading-relaxed mt-3">
            Messaging is never a one-time deliverable. The narrative evolved alongside the product - each new capability, each round of user surveys, each piece of field feedback shaped the next iteration. A post-launch survey let us reinforce the value proposition with real evidence - and the proof shows up two ways:
          </p>

          <div className="mt-6 pt-6 border-t border-stone-700 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-stone-300 text-base leading-relaxed max-w-sm">
                <span className="font-bold text-teal-400">82% of current users</span> said Copilot made it easier to get things done - turning a positioning claim into proof, and feeding the next round of messaging.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-4">
              <span className="text-5xl text-teal-500 font-serif leading-none flex-shrink-0">"</span>
              <div>
                <p className="text-stone-300 text-base leading-relaxed italic max-w-xl">
                  PayFit Copilot is fantastic. I hardly contact support anymore. Being able to use it anytime is incredibly convenient.
                </p>
                <div className="mt-3">
                  <span className="text-sm font-semibold text-white">Mélissa</span>
                  <span className="text-sm text-stone-500 ml-2">Cloud-Fi</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer nav */}
      <section className="py-10 md:py-16 px-6 border-t border-stone-100">
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
