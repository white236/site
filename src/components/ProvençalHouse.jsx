import { useRef } from 'react'

let _counter = 0

export default function ProvençalHouse({ className = '' }) {
  const idRef = useRef(null)
  if (idRef.current === null) idRef.current = `ph-${++_counter}`
  const g = idRef.current

  return (
    <svg
      viewBox="0 0 240 185"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${g}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E4E8FF" />
          <stop offset="100%" stopColor="#FAF7F0" />
        </linearGradient>
        <linearGradient id={`${g}-wall`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0E8D6" />
          <stop offset="100%" stopColor="#E0D4BC" />
        </linearGradient>
        <linearGradient id={`${g}-roof`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D47050" />
          <stop offset="100%" stopColor="#B84830" />
        </linearGradient>
        <linearGradient id={`${g}-door`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B89060" />
          <stop offset="100%" stopColor="#9A7448" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect x="0" y="0" width="240" height="185" fill={`url(#${g}-sky)`} />

      {/* Ventoux silhouette */}
      <path
        d="M0 115 L45 106 L85 96 L112 82 L124 66 L133 52 L142 66 L160 80 L192 92 L222 100 L240 104 L240 185 L0 185 Z"
        fill="#D4CCBE"
        opacity="0.55"
      />
      {/* Snow cap */}
      <path
        d="M129 63 L133 52 L137 63 L134 67 L133 57 L132 67 Z"
        fill="white"
        fillOpacity="0.88"
      />

      {/* Ground */}
      <rect x="0" y="155" width="240" height="30" fill="#B4C88A" opacity="0.38" />

      {/* House shadow on ground */}
      <ellipse cx="120" cy="158" rx="50" ry="5" fill="#8E9B72" opacity="0.12" />

      {/* House wall */}
      <path d="M67 155 L67 90 L173 90 L173 155 Z" fill={`url(#${g}-wall)`} />
      {/* Wall side shadow */}
      <path d="M158 90 L173 90 L173 155 L158 155 Z" fill="#C8B89A" opacity="0.18" />

      {/* Stone course lines */}
      <line x1="67" y1="103" x2="173" y2="103" stroke="#C4AE90" strokeWidth="0.5" opacity="0.5" />
      <line x1="67" y1="116" x2="173" y2="116" stroke="#C4AE90" strokeWidth="0.5" opacity="0.5" />
      <line x1="67" y1="129" x2="173" y2="129" stroke="#C4AE90" strokeWidth="0.5" opacity="0.5" />
      <line x1="67" y1="142" x2="173" y2="142" stroke="#C4AE90" strokeWidth="0.5" opacity="0.5" />
      {/* Vertical mortar breaks (staggered) */}
      <line x1="100" y1="103" x2="100" y2="116" stroke="#C4AE90" strokeWidth="0.4" opacity="0.3" />
      <line x1="140" y1="103" x2="140" y2="116" stroke="#C4AE90" strokeWidth="0.4" opacity="0.3" />
      <line x1="85" y1="116" x2="85" y2="129" stroke="#C4AE90" strokeWidth="0.4" opacity="0.3" />
      <line x1="125" y1="116" x2="125" y2="129" stroke="#C4AE90" strokeWidth="0.4" opacity="0.3" />
      <line x1="155" y1="116" x2="155" y2="129" stroke="#C4AE90" strokeWidth="0.4" opacity="0.3" />
      <line x1="108" y1="129" x2="108" y2="142" stroke="#C4AE90" strokeWidth="0.4" opacity="0.3" />
      <line x1="148" y1="129" x2="148" y2="142" stroke="#C4AE90" strokeWidth="0.4" opacity="0.3" />

      {/* Roof */}
      <path d="M57 94 L120 52 L183 94 Z" fill={`url(#${g}-roof)`} />
      {/* Roof tiles suggestion */}
      <path d="M57 94 L183 94" stroke="#A03820" strokeWidth="1" strokeOpacity="0.4" />
      <path d="M72 87 L168 87" stroke="#A03820" strokeWidth="0.7" strokeOpacity="0.25" />
      <path d="M84 80 L156 80" stroke="#A03820" strokeWidth="0.6" strokeOpacity="0.2" />
      <path d="M95 73 L145 73" stroke="#A03820" strokeWidth="0.5" strokeOpacity="0.15" />
      {/* Roof edge line */}
      <path d="M57 94 L120 52 L183 94" stroke="#8A2810" strokeWidth="1" strokeOpacity="0.3" fill="none" />

      {/* Chimney */}
      <rect x="149" y="63" width="11" height="22" fill="#C86040" />
      <rect x="147" y="60" width="15" height="5" rx="1" fill="#A84020" />
      {/* Smoke wisps */}
      <path d="M154 60 Q152 54 155 50 Q158 46 156 42" stroke="#D8D0C4" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.45" />
      <path d="M158 60 Q157 53 160 49" stroke="#D8D0C4" strokeWidth="0.9" strokeLinecap="round" fill="none" opacity="0.3" />

      {/* Left window */}
      <rect x="82" y="101" width="24" height="20" rx="2" fill="#D8E4F0" />
      <rect x="82" y="101" width="24" height="20" rx="2" stroke="#B8A888" strokeWidth="0.8" />
      <line x1="94" y1="101" x2="94" y2="121" stroke="#A89878" strokeWidth="0.7" opacity="0.7" />
      <line x1="82" y1="111" x2="106" y2="111" stroke="#A89878" strokeWidth="0.7" opacity="0.7" />
      {/* Left window shutters */}
      <rect x="74" y="100" width="8" height="22" rx="1.5" fill="#7D8CFF" opacity="0.88" />
      <line x1="77" y1="103" x2="82" y2="103" stroke="#5060DD" strokeWidth="0.6" opacity="0.4" />
      <line x1="77" y1="107" x2="82" y2="107" stroke="#5060DD" strokeWidth="0.6" opacity="0.4" />
      <line x1="77" y1="111" x2="82" y2="111" stroke="#5060DD" strokeWidth="0.6" opacity="0.4" />
      <line x1="77" y1="115" x2="82" y2="115" stroke="#5060DD" strokeWidth="0.6" opacity="0.4" />
      <line x1="77" y1="119" x2="82" y2="119" stroke="#5060DD" strokeWidth="0.6" opacity="0.4" />
      <rect x="106" y="100" width="8" height="22" rx="1.5" fill="#7D8CFF" opacity="0.88" />
      <line x1="106" y1="103" x2="114" y2="103" stroke="#5060DD" strokeWidth="0.6" opacity="0.4" />
      <line x1="106" y1="107" x2="114" y2="107" stroke="#5060DD" strokeWidth="0.6" opacity="0.4" />
      <line x1="106" y1="111" x2="114" y2="111" stroke="#5060DD" strokeWidth="0.6" opacity="0.4" />
      <line x1="106" y1="115" x2="114" y2="115" stroke="#5060DD" strokeWidth="0.6" opacity="0.4" />
      <line x1="106" y1="119" x2="114" y2="119" stroke="#5060DD" strokeWidth="0.6" opacity="0.4" />

      {/* Right window */}
      <rect x="134" y="101" width="24" height="20" rx="2" fill="#D8E4F0" />
      <rect x="134" y="101" width="24" height="20" rx="2" stroke="#B8A888" strokeWidth="0.8" />
      <line x1="146" y1="101" x2="146" y2="121" stroke="#A89878" strokeWidth="0.7" opacity="0.7" />
      <line x1="134" y1="111" x2="158" y2="111" stroke="#A89878" strokeWidth="0.7" opacity="0.7" />
      {/* Right window shutters */}
      <rect x="126" y="100" width="8" height="22" rx="1.5" fill="#7D8CFF" opacity="0.88" />
      <line x1="129" y1="103" x2="134" y2="103" stroke="#5060DD" strokeWidth="0.6" opacity="0.4" />
      <line x1="129" y1="107" x2="134" y2="107" stroke="#5060DD" strokeWidth="0.6" opacity="0.4" />
      <line x1="129" y1="111" x2="134" y2="111" stroke="#5060DD" strokeWidth="0.6" opacity="0.4" />
      <line x1="129" y1="115" x2="134" y2="115" stroke="#5060DD" strokeWidth="0.6" opacity="0.4" />
      <line x1="129" y1="119" x2="134" y2="119" stroke="#5060DD" strokeWidth="0.6" opacity="0.4" />
      <rect x="158" y="100" width="8" height="22" rx="1.5" fill="#7D8CFF" opacity="0.88" />
      <line x1="158" y1="103" x2="166" y2="103" stroke="#5060DD" strokeWidth="0.6" opacity="0.4" />
      <line x1="158" y1="107" x2="166" y2="107" stroke="#5060DD" strokeWidth="0.6" opacity="0.4" />
      <line x1="158" y1="111" x2="166" y2="111" stroke="#5060DD" strokeWidth="0.6" opacity="0.4" />
      <line x1="158" y1="115" x2="166" y2="115" stroke="#5060DD" strokeWidth="0.6" opacity="0.4" />
      <line x1="158" y1="119" x2="166" y2="119" stroke="#5060DD" strokeWidth="0.6" opacity="0.4" />

      {/* Arched door */}
      <path
        d="M108 155 L108 132 A12 12 0 0 1 132 132 L132 155 Z"
        fill={`url(#${g}-door)`}
      />
      {/* Door frame */}
      <path
        d="M108 155 L108 132 A12 12 0 0 1 132 132 L132 155"
        stroke="#7A5432"
        strokeWidth="1"
        strokeOpacity="0.4"
        fill="none"
      />
      {/* Door panel lines */}
      <line x1="120" y1="132" x2="120" y2="155" stroke="#7A5432" strokeWidth="0.7" opacity="0.35" />
      <line x1="108" y1="143" x2="132" y2="143" stroke="#7A5432" strokeWidth="0.7" opacity="0.35" />
      {/* Door knob */}
      <circle cx="127.5" cy="143" r="1.8" fill="#D4A868" />
      <circle cx="127.5" cy="143" r="0.8" fill="#B88840" />

      {/* Rose flowers — left side */}
      <circle cx="75" cy="97" r="3.5" fill="#D9A7A0" opacity="0.82" />
      <circle cx="68" cy="102" r="2.8" fill="#D9A7A0" opacity="0.68" />
      <circle cx="72" cy="93" r="2.2" fill="#C08880" opacity="0.72" />
      <circle cx="79" cy="105" r="2" fill="#D9A7A0" opacity="0.55" />
      <circle cx="65" cy="96" r="2" fill="#E4B8B0" opacity="0.6" />
      {/* Rose stem/leaves */}
      <line x1="71" y1="108" x2="71" y2="100" stroke="#8E9B72" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
      <ellipse cx="68" cy="106" rx="3" ry="1.5" fill="#8E9B72" opacity="0.4" transform="rotate(-20 68 106)" />

      {/* Rose flowers — right side */}
      <circle cx="165" cy="97" r="3.5" fill="#D9A7A0" opacity="0.82" />
      <circle cx="172" cy="102" r="2.8" fill="#D9A7A0" opacity="0.68" />
      <circle cx="168" cy="93" r="2.2" fill="#C08880" opacity="0.72" />
      <circle cx="161" cy="105" r="2" fill="#D9A7A0" opacity="0.55" />
      <circle cx="175" cy="96" r="2" fill="#E4B8B0" opacity="0.6" />
      <line x1="169" y1="108" x2="169" y2="100" stroke="#8E9B72" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
      <ellipse cx="172" cy="106" rx="3" ry="1.5" fill="#8E9B72" opacity="0.4" transform="rotate(20 172 106)" />

      {/* Left lavender cluster */}
      <g transform="translate(24, 132)">
        <line x1="6"  y1="24" x2="6"  y2="7"  stroke="#8E9B72" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="12" y1="24" x2="12" y2="5"  stroke="#8E9B72" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="18" y1="24" x2="18" y2="7"  stroke="#8E9B72" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="24" y1="24" x2="24" y2="6"  stroke="#8E9B72" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="30" y1="24" x2="30" y2="8"  stroke="#8E9B72" strokeWidth="1.3" strokeLinecap="round" />
        <ellipse cx="6"  cy="5"  rx="2.3" ry="3.8" fill="#7D8CFF" opacity="0.82" />
        <ellipse cx="12" cy="3"  rx="2.3" ry="3.8" fill="#A8B0FF" opacity="0.85" />
        <ellipse cx="18" cy="5"  rx="2.3" ry="3.8" fill="#7D8CFF" opacity="0.78" />
        <ellipse cx="24" cy="4"  rx="2.3" ry="3.8" fill="#A8B0FF" opacity="0.82" />
        <ellipse cx="30" cy="6"  rx="2.3" ry="3.8" fill="#7D8CFF" opacity="0.75" />
      </g>

      {/* Right lavender cluster */}
      <g transform="translate(180, 132)">
        <line x1="6"  y1="24" x2="6"  y2="7"  stroke="#8E9B72" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="12" y1="24" x2="12" y2="5"  stroke="#8E9B72" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="18" y1="24" x2="18" y2="7"  stroke="#8E9B72" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="24" y1="24" x2="24" y2="6"  stroke="#8E9B72" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="30" y1="24" x2="30" y2="8"  stroke="#8E9B72" strokeWidth="1.3" strokeLinecap="round" />
        <ellipse cx="6"  cy="5"  rx="2.3" ry="3.8" fill="#A8B0FF" opacity="0.82" />
        <ellipse cx="12" cy="3"  rx="2.3" ry="3.8" fill="#7D8CFF" opacity="0.85" />
        <ellipse cx="18" cy="5"  rx="2.3" ry="3.8" fill="#A8B0FF" opacity="0.78" />
        <ellipse cx="24" cy="4"  rx="2.3" ry="3.8" fill="#7D8CFF" opacity="0.82" />
        <ellipse cx="30" cy="6"  rx="2.3" ry="3.8" fill="#A8B0FF" opacity="0.75" />
      </g>
    </svg>
  )
}
