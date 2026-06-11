import { Link } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'

const skills = [
  { number: '01', title: 'Translate complexity', description: 'I find the insight that unlocks simplicity and create internal alignment around that. Complex product - customer problem - clear narrative - measurable traction.', how: ['Customer research', 'Competitive intel', 'Journey mapping', 'Outcome-driven narratives', 'Message testing'] },
  { number: '02', title: 'Build from scratch', description: 'I thrive in 0-to-1 situations. I move fast, test early to sharpen strategy with market feedback, and adapt priorities in real time rather than waiting for perfect conditions.', how: ['Segmentation', 'Willingness-to-pay research', 'Value-based pricing', 'A/B testing', 'Beta launch'] },
  { number: '03', title: 'Scale what works', description: 'Once something clicks, I zoom out - turning one-off wins into repeatable systems that others can pick up, adapt, and run with across teams and markets.', how: ['Playbooks & templates', 'Post-mortem & assessment', 'Feedback loops', 'Team enablement', 'Adoption tracking'] },
  { number: '04', title: 'Own it end-to-end', description: 'From the first customer interview to post-launch performance loops - I understand how each phase feeds the next and partner across product, sales, CS, legal, and marketing.', how: ['Research', 'Strategy', 'Enablement', 'Launch', 'Post-launch'] },
]

const drives = [
  { label: 'Being the connective tissue', detail: 'I enjoy bridge work - creating shared language, alignment, and momentum across teams (CS, sales, marketing, legal, product) that would otherwise work in parallel.' },
  { label: 'Operating as strategist & executor', detail: "Thinking through a P&L one day, editing a product video the next, I need both. And I enjoy testing new tools or approaches - I'm most productive when I'm learning by doing." },
  { label: 'Ownership in fast-moving environments', detail: "Agile teams, short feedback loops, real autonomy, visibility - that's where I move fastest and do my best work." },
]

const PALETTES = [
  {
    id: 'blue',
    label: 'Onirique · tech',
    swatches: ['#F8FAFF','#D9E1F7','#A8B9E8','#4D6EC7','#1F2C57'],
    bg: '#F8FAFF', bgAlt: '#FFFFFF',
    numA: '#D9E1F7', numB: '#A8B9E8',
    accent: '#4D6EC7', dark: '#1F2C57', mid: '#5a6a8a',
    tagBorder: '#A8B9E8', lightBg: '#D9E1F7', dot: '#D9E1F7',
  },
  {
    id: 'slate',
    label: 'Cool · minimal · pro',
    swatches: ['#FAFCFD','#D9E4EA','#9CB8C7','#567A8C','#2B3A44'],
    bg: '#FAFCFD', bgAlt: '#FFFFFF',
    numA: '#D9E4EA', numB: '#9CB8C7',
    accent: '#567A8C', dark: '#2B3A44', mid: '#567A8C',
    tagBorder: '#9CB8C7', lightBg: '#D9E4EA', dot: '#D9E4EA',
  },
]

function HScrollSection({ p, uid }) {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [translateX, setTranslateX] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return
    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      const totalScroll = section.offsetHeight - window.innerHeight
      const scrolled = -rect.top
      const progress = Math.min(Math.max(scrolled / totalScroll, 0), 1)
      const maxTranslate = track.scrollWidth - window.innerWidth
      setTranslateX(-(progress * maxTranslate))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const bgColors  = [p.bg, p.bgAlt, p.bg, p.bgAlt]
  const numColors = [p.numA, p.numB, p.numA, p.numB]

  return (
    <div ref={sectionRef} style={{ height: `${skills.length * 100}vh` }}>
      <div className="sticky top-12 h-screen overflow-hidden flex items-center">
        <div ref={trackRef}
          style={{ transform: `translateX(${translateX}px)`, transition: 'transform 0.05s linear', willChange: 'transform' }}
          className="flex">
          {skills.map((d, i) => (
            <div key={d.number}
              className="flex-shrink-0 w-screen h-screen flex items-center justify-center px-16 relative overflow-hidden"
              style={{ backgroundColor: bgColors[i] }}>
              <span className="absolute font-black select-none leading-none"
                style={{ fontSize: '30vw', left: '-2vw', top: '50%', transform: 'translateY(-50%)', zIndex: 0, color: numColors[i] }}>
                {d.number}
              </span>
              <div className="relative max-w-lg" style={{ zIndex: 1 }}>
                <span className="inline-block text-xs font-bold tracking-widest uppercase mb-6 px-4 py-1.5 rounded-full border"
                  style={{ color: p.accent, backgroundColor: '#FFFFFF', borderColor: p.accent }}>
                  {d.number} — What I bring
                </span>
                <h3 className="text-5xl font-bold mb-6 leading-tight" style={{ color: p.dark }}>{d.title}</h3>
                <p className="text-lg leading-relaxed mb-8" style={{ color: p.mid }}>{d.description}</p>
                <div className="flex flex-wrap gap-2">
                  {d.how.map((h) => (
                    <span key={h} className="text-xs px-3 py-1 rounded-full border"
                      style={{ color: p.accent, backgroundColor: '#FFFFFF', borderColor: p.tagBorder }}>{h}</span>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                {skills.map((_, j) => (
                  <div key={j} className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: j === i ? p.accent : p.dot }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function FullAbout({ p, uid }) {
  return (
    <div id={uid} style={{ backgroundColor: p.bg }}>
      {/* Palette label */}
      <div className="px-6 py-3 flex items-center gap-3 border-b" style={{ borderColor: p.lightBg }}>
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: p.accent }}>{p.label}</span>
        <div className="flex gap-1.5 ml-2">
          {p.swatches.map(c => (
            <div key={c} className="w-4 h-4 rounded-full border border-white shadow-sm" style={{ backgroundColor: c }} title={c} />
          ))}
        </div>
      </div>

      {/* How I work */}
      <div className="pt-16 pb-4 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: p.accent }}>What I bring</span>
          <h2 className="text-3xl font-bold mt-3" style={{ color: p.dark }}>How I work</h2>
        </div>
      </div>
      <HScrollSection p={p} uid={uid} />

      {/* What drives me */}
      <div className="py-20 px-6" style={{ backgroundColor: p.bg }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: p.accent }}>What drives me</span>
            <h2 className="text-3xl font-bold mt-3" style={{ color: p.dark }}>What I'm looking for</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {drives.map((d) => (
              <div key={d.label} style={{ borderLeft: `4px solid ${p.accent}`, paddingLeft: '1.5rem' }}>
                <h3 className="text-base font-semibold mb-2" style={{ color: p.dark }}>{d.label}</h3>
                <p className="text-sm leading-relaxed" style={{ color: p.mid }}>{d.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AboutTestPage() {
  return (
    <div>
      {/* Nav */}
      <div className="sticky top-0 z-50 bg-white border-b border-stone-100 px-6 py-3 flex items-center gap-6">
        <Link to="/" className="text-xs text-stone-400 hover:text-stone-700 transition-colors">← Back to portfolio</Link>
        <span className="text-xs font-bold text-stone-900 tracking-widest uppercase">About — palette comparison</span>
        <div className="flex gap-4 ml-auto text-xs text-stone-400">
          <a href="#blue" className="hover:text-stone-700 transition-colors">↓ Onirique · tech</a>
          <a href="#slate" className="hover:text-stone-700 transition-colors">↓ Cool · minimal · pro</a>
        </div>
      </div>

      {PALETTES.map((p, i) => (
        <div key={p.id}>
          <FullAbout p={p} uid={p.id} />
          {i < PALETTES.length - 1 && <div style={{ height: '4px', backgroundColor: p.accent }} />}
        </div>
      ))}
    </div>
  )
}
