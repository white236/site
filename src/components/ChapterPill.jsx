export default function ChapterPill({ chapters, current, goTo }) {
  const prev = current > 0 ? current - 1 : null
  const next = current < chapters.length - 1 ? current + 1 : null
  const ch = chapters[current]

  return (
    <>
      {/* ── Desktop pill ── */}
      <div className="hidden lg:flex flex-col items-center fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] select-none">

        {/* Progress dots */}
        <div className="flex items-center gap-[7px] mb-3">
          {chapters.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={chapters[i].label}
              className={`rounded-full transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                i === current
                  ? 'w-7 h-[7px] bg-brand-orange shadow-[0_0_8px_rgba(125,140,255,0.6)]'
                  : i < current
                  ? 'w-[7px] h-[7px] bg-brand-orange/40 hover:bg-brand-orange/70'
                  : 'w-[7px] h-[7px] bg-white/20 hover:bg-white/45'
              }`}
            />
          ))}
        </div>

        {/* Pill body */}
        <div className="flex items-center gap-1 bg-noir/92 backdrop-blur-xl rounded-full px-1.5 py-1.5 shadow-[0_8px_40px_rgba(44,58,32,0.45),0_0_0_1px_rgba(255,255,255,0.08)] border border-white/[0.06]">

          {/* Prev */}
          <button
            onClick={() => prev !== null && goTo(prev)}
            disabled={prev === null}
            className="w-11 h-11 rounded-full flex items-center justify-center text-white/45 disabled:opacity-20 hover:text-white hover:bg-white/10 transition-all duration-200 active:scale-90"
            aria-label="Chapitre précédent"
          >
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Chapter label */}
          <div key={current} className="chapter-num-in px-4 text-center" style={{ minWidth: 172 }}>
            <div className="text-brand-orange font-heading font-black text-[9px] tracking-[0.22em] uppercase mb-[3px]">
              {ch.number} · {String(chapters.length).padStart(2, '0')}
            </div>
            <div className="text-white font-heading font-bold text-[13.5px] leading-tight">
              {ch.label}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={() => next !== null && goTo(next)}
            disabled={next === null}
            className="w-11 h-11 rounded-full flex items-center justify-center bg-brand-orange text-white disabled:bg-white/10 disabled:text-white/25 hover:bg-brand-orange-dark transition-all duration-200 active:scale-90 shadow-[0_4px_16px_rgba(125,140,255,0.45)]"
            aria-label="Chapitre suivant"
          >
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile bottom bar ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] select-none">
        {/* Chapter progress line */}
        <div className="h-[3px] bg-white/[0.12]" style={{ backgroundColor: 'rgba(44,58,32,0.12)' }}>
          <div
            className="h-full bg-brand-orange transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ width: `${(current / Math.max(chapters.length - 1, 1)) * 100}%` }}
          />
        </div>

        <div
          className="flex items-center px-3 py-2 gap-2"
          style={{ background: 'rgba(44,58,32,0.93)', backdropFilter: 'blur(16px)' }}
        >
          {/* Prev */}
          <button
            onClick={() => prev !== null && goTo(prev)}
            disabled={prev === null}
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white/50 disabled:opacity-20 hover:text-white hover:bg-white/10 transition-all active:scale-90 flex-shrink-0"
            aria-label="Chapitre précédent"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Chapter info */}
          <button
            key={current}
            onClick={() => goTo(current)}
            className="chapter-num-in flex-1 text-center min-w-0 py-0.5"
          >
            <div className="text-brand-orange font-heading font-black text-[10px] tracking-[0.2em] uppercase mb-0.5">
              {ch.number} · {String(chapters.length).padStart(2, '0')}
            </div>
            <div className="text-white font-heading font-bold text-[14px] leading-tight truncate">
              {ch.label}
            </div>
          </button>

          {/* Next */}
          <button
            onClick={() => next !== null && goTo(next)}
            disabled={next === null}
            className="w-12 h-12 rounded-2xl flex items-center justify-center bg-brand-orange text-white disabled:bg-white/10 disabled:text-white/25 hover:bg-brand-orange-dark transition-all active:scale-90 flex-shrink-0 shadow-[0_4px_16px_rgba(125,140,255,0.45)]"
            aria-label="Chapitre suivant"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
