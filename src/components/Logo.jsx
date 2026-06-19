// Pour utiliser le vrai logo PNG : sauvegardez votre logo sous src/assets/logo-le-lokal.png
// puis changez l'import ci-dessous de .svg en .png
import logoUrl from '../assets/logo-le-lokal.svg'

const sizeMap = {
  xs: 'h-7',
  sm: 'h-9',
  md: 'h-12',
  lg: 'h-18',
  xl: 'h-24',
  '2xl': 'h-32',
}

export default function Logo({ size = 'md', className = '' }) {
  return (
    <img
      src={logoUrl}
      alt="Le Lokal Ventoux – Conciergerie"
      className={`${sizeMap[size] ?? sizeMap.md} w-auto object-contain ${className}`}
      style={{ maxWidth: '100%' }}
    />
  )
}
