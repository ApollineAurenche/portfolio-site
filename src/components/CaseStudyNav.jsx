import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'

export const caseStudyLinks = [
  { label: 'PayFit Copilot', route: '/work/copilot', tag: 'GTM · AI · 3 Markets' },
  { label: 'Onboarding Redesign', route: '/work/onboarding', tag: 'Positioning · Change Management' },
  { label: 'Product Newsletter', route: '/work/newsletter', tag: 'Content Strategy · Customer Marketing' },
  { label: 'SNCF × BlaBlaCar', route: '/work/sncf', tag: 'Partnership · Product Integration' },
]

export default function CaseStudyNav() {
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
        <Link to="/" className="text-base font-bold text-stone-900 tracking-tight">
          Apolline Aurenche - Portfolio
        </Link>
        <div className="flex items-center gap-6 sm:gap-8 text-sm text-stone-500">
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

          <Link to="/#about" className="hidden sm:inline hover:text-stone-900 transition-colors">About</Link>

          <a
            href="mailto:apollineaurenche@gmail.com"
            className="bg-stone-900 text-white px-4 py-2 rounded-full hover:bg-stone-700 transition-colors text-sm"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  )
}
