import { useState } from 'react'
import { Link } from 'react-router-dom'

const skills = [
  {
    number: '01',
    label: 'Translate complexity',
    detail: 'I find the insight that unlocks simplicity. Complex product, customer problem, clear narrative, measurable traction - that\'s the chain I build every time.',
    how: ['Customer research', 'Competitive intel', 'Journey mapping', 'Outcome-driven narratives', 'Message testing'],
  },
  {
    number: '02',
    label: 'Build from scratch',
    detail: 'I thrive in 0-to-1 situations - positioning, pricing, and GTM built from nothing. I move fast, test early, and adapt priorities in real time rather than waiting for perfect conditions.',
    how: ['Segmentation', 'Willingness-to-pay research', 'Value-based pricing', 'A/B testing', 'Beta launch'],
  },
  {
    number: '03',
    label: 'Scale what works',
    detail: 'Once something clicks, I zoom out - turning one-off wins into repeatable systems that others can pick up, adapt, and run with across teams and markets.',
    how: ['Playbooks & templates', 'Post-mortem & assessment', 'Feedback loops', 'Team enablement', 'Adoption tracking'],
  },
  {
    number: '04',
    label: 'Own it end-to-end',
    detail: 'From the first customer interview to post-launch performance loops - I understand how each phase feeds the next and partner across product, sales, CS, legal, and marketing.',
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

export default function PreviewPage() {
  const [tab, setTab] = useState('new')

  return (
    <div className="bg-white min-h-screen">
      {/* Comparison bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-stone-900 text-white px-6 h-12 flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <span className="text-stone-400 text-xs uppercase tracking-widest font-bold">Preview</span>
          <div className="flex rounded-full bg-stone-700 p-0.5">
            <button
              onClick={() => setTab('new')}
              className={`px-4 py-1 rounded-full text-xs font-medium transition-colors ${tab === 'new' ? 'bg-teal-500 text-white' : 'text-stone-400 hover:text-white'}`}
            >
              New proposal
            </button>
            <button
              onClick={() => setTab('current')}
              className={`px-4 py-1 rounded-full text-xs font-medium transition-colors ${tab === 'current' ? 'bg-white text-stone-900' : 'text-stone-400 hover:text-white'}`}
            >
              Current site
            </button>
          </div>
        </div>
        <Link to="/" className="text-stone-400 hover:text-white transition-colors text-xs">
          ← Back to live site
        </Link>
      </div>

      {tab === 'current' && (
        <iframe src="/" className="w-full mt-12" style={{ height: 'calc(100vh - 48px)', border: 'none' }} title="Current site" />
      )}

      {tab === 'new' && (
        <div className="pt-12">

          {/* Nav */}
          <nav className="fixed top-12 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-stone-100">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
              <span className="text-base font-bold text-stone-900 tracking-tight">Apolline Aurenche - Portfolio</span>
              <div className="flex items-center gap-8 text-sm text-stone-500">
                <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
                <a href="#work" className="hover:text-stone-900 transition-colors">Case studies</a>
                <button className="bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors">
                  Get in touch
                </button>
              </div>
            </div>
          </nav>

          {/* ── HERO ─────────────────────────────────────────────────────── */}
          <section className="min-h-screen flex flex-col justify-center px-6 pt-16 border-b border-stone-100">
            <div className="max-w-5xl mx-auto w-full">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">

                <div className="flex-1 max-w-2xl">
                  <span className="inline-block text-xs font-bold tracking-widest text-teal-600 uppercase mb-5">
                    Senior Product Marketing Manager
                  </span>

                  <h1 className="text-4xl md:text-5xl font-bold leading-snug tracking-tight mb-6">
                    <span className="text-stone-900">I turn products into stories</span><br />
                    <span className="text-teal-600">and stories into traction.</span>
                  </h1>

                  <div className="mb-10 max-w-xl space-y-3">
                    <p className="text-lg text-stone-800 font-medium leading-relaxed">
                      7 years, 3 unicorns, 3 sectors - always the same obsession: connect the magic of a product with what people actually need.
                    </p>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      I listen to customers, turn that into a shared language internally, and build the launches, narratives, and content that make adoption happen - across teams, markets, and business models.
                    </p>
                    <p className="text-sm text-teal-700 font-medium">
                      80% AI product adoption - €1.1M ARR from zero - +15pts conversion on a top partnership. Explore the projects that drove these results below.
                    </p>
                  </div>

                  {/* Meta tags */}
                  <div className="flex flex-wrap gap-3 mb-10">
                    {['SF Bay Area', 'Remote worldwide', 'Available July 2026', 'FR (native) · EN (fluent)'].map((t) => (
                      <span key={t} className="px-4 py-2 bg-stone-100 text-stone-600 rounded-full text-sm">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    <a href="#about" className="bg-teal-600 text-white px-8 py-4 rounded-full font-medium hover:bg-teal-700 transition-colors">
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

                {/* Photo */}
                <div className="flex-shrink-0 flex justify-center md:justify-end">
                  <div className="relative">
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-stone-100">
                      <img src="/apolline.jpeg" alt="Apolline Aurenche" className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="absolute -inset-1.5 rounded-full border-2 border-teal-200 -z-10" />
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ── ABOUT ────────────────────────────────────────────────────── */}
          <section id="about" className="py-20 px-6 bg-stone-50">
            <div className="max-w-5xl mx-auto">

              {/* How I work */}
              <div className="mb-12">
                <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">What I bring</span>
                <h2 className="text-3xl font-bold text-stone-900 mt-3">How I work</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
                {skills.map((item) => (
                  <div key={item.number} className="bg-white rounded-2xl p-6 border border-stone-100 hover:border-teal-200 hover:shadow-md transition-all duration-300 flex flex-col">
                    <span className="text-xs font-bold text-teal-600 tracking-widest mb-3">{item.number}</span>
                    <h3 className="text-base font-semibold text-stone-900 mb-3 leading-snug">{item.label}</h3>
                    <p className="text-sm text-stone-500 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              {/* What drives me */}
              <div className="mb-10">
                <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">What drives me</span>
                <h2 className="text-3xl font-bold text-stone-900 mt-3">What I'm looking for</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {drives.map((item) => (
                  <div key={item.label} className="border-l-4 border-teal-500 pl-6">
                    <h3 className="text-base font-semibold text-stone-900 mb-2">{item.label}</h3>
                    <p className="text-sm text-stone-500 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

            </div>
          </section>

        </div>
      )}
    </div>
  )
}
