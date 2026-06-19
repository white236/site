export default function LavenderSprig({ className = '', variant = 'sway' }) {
  const animClass =
    variant === 'alt' ? 'lavender-sway-alt'
    : variant === 'slow' ? 'lavender-sway-slow'
    : 'lavender-sway'

  return (
    <svg
      viewBox="0 0 40 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${animClass} ${className}`}
      aria-hidden="true"
    >
      {/* Main stem */}
      <line x1="20" y1="80" x2="20" y2="20" stroke="#8FA06B" strokeWidth="2" strokeLinecap="round" />
      {/* Side stems */}
      <line x1="20" y1="60" x2="11" y2="50" stroke="#8FA06B" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="60" x2="29" y2="50" stroke="#8FA06B" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="46" x2="12" y2="37" stroke="#8FA06B" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="46" x2="28" y2="37" stroke="#8FA06B" strokeWidth="1.5" strokeLinecap="round" />
      {/* Top flower buds */}
      <ellipse cx="20" cy="18" rx="3.5" ry="5.5" fill="#9BAFF2" opacity="0.9" />
      <ellipse cx="20" cy="11" rx="3" ry="4.5" fill="#7B9DE4" opacity="0.9" />
      <ellipse cx="20" cy="5"  rx="2.5" ry="3.5" fill="#8B9FE8" opacity="0.9" />
      {/* Side flower buds */}
      <ellipse cx="11" cy="47" rx="2.5" ry="4"   fill="#9BAFF2" opacity="0.8" />
      <ellipse cx="29" cy="47" rx="2.5" ry="4"   fill="#9BAFF2" opacity="0.8" />
      <ellipse cx="12" cy="35" rx="2.5" ry="3.5" fill="#7B9DE4" opacity="0.8" />
      <ellipse cx="28" cy="35" rx="2.5" ry="3.5" fill="#7B9DE4" opacity="0.8" />
    </svg>
  )
}
