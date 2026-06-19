import logoUrl from '../assets/logo-le-lokal.svg'

const sizeMap = {
  xs: 'h-8',
  sm: 'h-10',
  md: 'h-14',
  lg: 'h-20',
  xl: 'h-28',
  '2xl': 'h-36',
}

export default function Logo({ size = 'md', className = '' }) {
  return (
    <img
      src={logoUrl}
      alt="Le Lokal Ventoux – Conciergerie"
      className={`${sizeMap[size] ?? sizeMap.md} w-auto object-contain ${className}`}
    />
  )
}
