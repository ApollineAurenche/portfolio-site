import { Link } from 'react-router-dom'
import CaseStudyNav from '../components/CaseStudyNav.jsx'

const outcomes = [
  { metric: '+20%', label: 'Open rate after full redesign' },
  { metric: '+8%', label: 'Click-through rate improvement' },
  { metric: '15k+', label: 'Customers reached every send' },
]

const beforeAfter = [
  { principle: 'Format', before: 'Text only', after: 'Video + written summary' },
  { principle: 'Angle', before: 'Feature list', after: 'Customer benefit first' },
  { principle: 'Tone', before: 'Institutional', after: 'Personal, direct' },
  { principle: 'Frequency', before: 'Monthly', after: 'Every 2 months' },
  {
    principle: 'Structure',
    before: 'Multiple similar blocks in a row / long newsletter',
    after: 'Prioritized blocks (3 major updates, 2 minor ones) / Short paragraphs, clear bullet points',
  },
  {
    principle: 'Segmentation',
    before: 'Same undifferentiated message for all',
    after: 'Adapted by CCN segment when relevant (2-3 segments)',
  },
]

const editorialPrinciples = [
  {
    label: 'Benefits first, features second',
    detail: 'Every feature is translated into a concrete customer benefit before it makes it into the newsletter.',
  },
  {
    label: 'One hook, clear hierarchy',
    detail: 'A single opening hook sets the theme, followed by prioritized blocks - major updates first, minor ones after.',
  },
  {
    label: 'Human voice',
    detail: 'Video presented by a PMM, not a generic design. A face creates a different kind of engagement.',
  },
  {
    label: 'Relevant, not exhaustive',
    detail: 'Less frequency, more relevance. Every send has to earn its place in the inbox.',
  },
]

function NewsletterTemplate() {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm max-w-2xl mx-auto font-sans">
      {/* Email client top bar */}
      <div className="bg-stone-100 px-5 py-3 border-b border-stone-200">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-stone-400 font-medium">From:</span>
          <span className="text-xs text-stone-600">Apolline @ PayFit &lt;product@payfit.com&gt;</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-xs text-stone-400 font-medium shrink-0">Subject:</span>
          <span className="text-xs font-semibold text-stone-800">PayFit updates · Time-off in 1 click, new HR dashboard, automated exports</span>
        </div>
      </div>

      {/* Email body */}
      <div className="px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <span className="font-bold text-stone-900 text-base tracking-tight">PayFit</span>
          <span className="text-xs text-stone-400">June 2024</span>
        </div>

        {/* Banner - 3 feature previews */}
        <div className="grid grid-cols-3 gap-2 mb-6 rounded-xl overflow-hidden">
          <div className="bg-teal-50 border border-teal-100 rounded-lg p-3 text-center">
            <div className="text-lg mb-1">🗓️</div>
            <div className="text-xs font-semibold text-teal-800 leading-snug">Time-off in 1 click</div>
          </div>
          <div className="bg-violet-50 border border-violet-100 rounded-lg p-3 text-center">
            <div className="text-lg mb-1">📊</div>
            <div className="text-xs font-semibold text-violet-800 leading-snug">New HR dashboard</div>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-3 text-center">
            <div className="text-lg mb-1">⚡</div>
            <div className="text-xs font-semibold text-amber-800 leading-snug">Automated exports</div>
          </div>
        </div>

        {/* Hook */}
        <p className="text-sm text-stone-600 leading-relaxed mb-5 pb-5 border-b border-stone-100">
          This month, we focused on what eats up your time every day. Three updates to help you manage time-off faster, get clearer visibility on your teams, and automate the repetitive end-of-month tasks.
        </p>

        {/* Video */}
        <div className="mb-6">
          <div className="aspect-video bg-stone-100 rounded-xl overflow-hidden relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-stone-100" />
            <div className="relative flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white rounded-full shadow flex items-center justify-center">
                <svg className="w-5 h-5 text-teal-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-xs text-stone-500 font-medium">Watch the recap - 2 min</span>
            </div>
          </div>
        </div>

        {/* Major updates */}
        <div className="mb-5">
          <div className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-3">3 major updates</div>
          <div className="space-y-4">
            {[
              {
                emoji: '🗓️',
                title: 'Time-off in 1 click',
                problem: 'Submitting time-off took too many steps - employees were dropping off halfway through.',
                solution: 'A new 1-click flow directly from the schedule, with real-time manager approval.',
                cta: 'Try it now',
              },
              {
                emoji: '📊',
                title: 'New HR dashboard',
                problem: 'Getting a clear overview of your team meant exporting data manually every time.',
                solution: 'A centralized dashboard with headcount, absences, and alerts - all in real time.',
                cta: 'See my dashboard',
              },
              {
                emoji: '⚡',
                title: 'Automated exports',
                problem: 'Manual end-of-month exports were taking hours of repetitive work.',
                solution: 'Set up your exports once - they run automatically on the date you choose.',
                cta: 'Set up my exports',
              },
            ].map((item) => (
              <div key={item.title} className="border border-stone-100 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span>{item.emoji}</span>
                  <span className="text-sm font-semibold text-stone-900">{item.title}</span>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed mb-1">
                  <span className="font-medium text-stone-500">Before:</span> {item.problem}
                </p>
                <p className="text-xs text-stone-600 leading-relaxed mb-3">
                  <span className="font-medium">Now:</span> {item.solution}
                </p>
                <span className="inline-block text-xs bg-teal-600 text-white px-3 py-1.5 rounded-full font-medium">
                  {item.cta} →
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Minor updates */}
        <div>
          <div className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-3">Don't miss</div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-stone-50 rounded-xl p-4 border border-stone-100">
              <div className="text-sm mb-1.5">💡</div>
              <div className="text-xs font-semibold text-stone-800 mb-1">Tip of the month</div>
              <p className="text-xs text-stone-500 leading-relaxed">Did you know you can duplicate a contract in 2 clicks? Handy for recurring fixed-term contracts.</p>
            </div>
            <div className="bg-stone-50 rounded-xl p-4 border border-stone-100">
              <div className="text-sm mb-1.5">🎤</div>
              <div className="text-xs font-semibold text-stone-800 mb-1">Webinar - June 18</div>
              <p className="text-xs text-stone-500 leading-relaxed">Master the new working time modulation rules. Free registration.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function NewsletterPage() {
  return (
    <div className="bg-white min-h-screen">
      <CaseStudyNav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 border-b border-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-bold text-teal-600 tracking-widest uppercase">PayFit</span>
            <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">Content Strategy</span>
            <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">Customer Marketing</span>
            <span className="text-xs text-stone-400 bg-stone-100 px-3 py-1 rounded-full">Product Adoption</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight tracking-tight mb-4 max-w-xl">
                Product Newsletter Redesign
              </h1>
              <p className="text-xl text-stone-500 font-light max-w-2xl leading-relaxed">
                Turning a low-engagement newsletter into a real product adoption lever - and becoming the face of PayFit's product communication.
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

            <div className="w-full md:w-[26rem] flex-shrink-0 aspect-video rounded-2xl overflow-hidden shadow-sm bg-stone-100">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/DNudFgrgjR8"
                title="[Top 3 produit] Septembre"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
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
                    The newsletter wasn't working as a product adoption lever - low engagement, no clear editorial direction.
                  </li>
                  <li className="flex gap-2 text-sm text-stone-600 leading-relaxed">
                    <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                    Yet it remained one of the most direct, low-cost channels to reach customers - too valuable to leave underperforming.
                  </li>
                </ul>
              </div>

              {/* Strategic Insights */}
              <div className="sm:pl-8">
                <h2 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-3">Strategic Insights</h2>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm text-stone-600 leading-relaxed">
                    <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                    Customers want to know what the product does for them, concretely.
                  </li>
                  <li className="flex gap-2 text-sm text-stone-600 leading-relaxed">
                    <span className="text-teal-500 mt-0.5 flex-shrink-0">→</span>
                    Video format with a human face creates a different kind of engagement - more personal, more trusted, more memorable.
                  </li>
                </ul>
              </div>
            </div>

            {/* My Role */}
            <div className="mt-8 pt-8 border-t border-stone-100">
              <h2 className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-3">My Role</h2>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-stone-600">
                <li className="flex gap-2"><span className="text-teal-500 flex-shrink-0">·</span> Editorial strategy - defined the editorial angle, content selection criteria, and send cadence</li>
                <li className="flex gap-2"><span className="text-teal-500 flex-shrink-0">·</span> Cross-functional bridge - collected key topics from the PM team and filtered them through a PMM lens before handing off to content marketing</li>
                <li className="flex gap-2"><span className="text-teal-500 flex-shrink-0">·</span> Content production - recorded the video segments, built product demos from our test account</li>
                <li className="flex gap-2"><span className="text-teal-500 flex-shrink-0">·</span> Became the face of PayFit's product communication - presenting new features directly to 15k+ customers every send</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Artifact */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">Artifact</span>
            <h2 className="text-3xl font-bold text-stone-900 mt-2">Editorial Framework</h2>
            <p className="text-stone-400 text-sm mt-2 max-w-xl">
              Every element was rethought - from format to tone to structure. Here's what changed, and what the new template looks like in practice.
            </p>

          </div>

          {/* Editorial Angle */}
          <div className="mb-16">
            <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-4">Editorial Angle</h3>
            <blockquote className="text-2xl font-semibold text-stone-900 leading-snug border-l-4 border-teal-500 pl-6 max-w-2xl mb-8">
              "The product update that really updates how you work."
            </blockquote>
            <div className="grid md:grid-cols-4 gap-4">
              {editorialPrinciples.map((p) => (
                <div key={p.label} className="bg-stone-50 rounded-xl p-6 border border-stone-100">
                  <div className="text-sm font-semibold text-stone-900 mb-2">{p.label}</div>
                  <p className="text-sm text-stone-500 leading-relaxed">{p.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Before / After table */}
          <div className="bg-stone-50 rounded-2xl overflow-hidden mb-16">
            <div className="grid grid-cols-3 bg-stone-100 px-6 py-3">
              <span className="text-xs font-bold tracking-widest text-stone-400 uppercase">Principle</span>
              <span className="text-xs font-bold tracking-widest text-stone-400 uppercase">Before</span>
              <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">After</span>
            </div>
            {beforeAfter.map((row, i) => (
              <div
                key={row.principle}
                className={`grid grid-cols-3 px-6 py-4 gap-4 ${i < beforeAfter.length - 1 ? 'border-b border-stone-200' : ''}`}
              >
                <span className="text-sm font-medium text-stone-900">{row.principle}</span>
                <span className="text-sm text-stone-400 leading-relaxed">{row.before}</span>
                <span className="text-sm text-stone-700 leading-relaxed">{row.after}</span>
              </div>
            ))}
          </div>

          {/* Newsletter template mockup */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase">Newsletter Template</h3>
              <span className="text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">Fictional content for illustration</span>
            </div>
            <NewsletterTemplate />
          </div>
        </div>
      </section>

      {/* Conclusion - Key Insight + proof */}
      <section className="py-8 md:py-10 px-6 bg-stone-900">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-teal-400 uppercase">Key Insight</span>
          <p className="text-stone-100 text-base leading-relaxed mt-3">
            Having the PMM own the voice of the product newsletter makes strategic sense: we hold the global view of the product, its users, and the market. It ensures every send communicates the exact value of the solution - features translated into clear benefits for each persona - while staying aligned with growth objectives. Execution without that strategic lens risks becoming noise.
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
