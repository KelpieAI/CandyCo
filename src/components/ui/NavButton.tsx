import { Link } from 'react-router-dom'

type NavButtonVariant = 'shop' | 'wholesale' | 'range'

interface NavButtonProps {
  to: string
  variant: NavButtonVariant
  active?: boolean
  children: string
}

const base =
  'inline-flex min-h-[44px] min-w-[88px] cursor-none items-center justify-center px-5 py-2.5 font-bebas text-[clamp(18px,2.5vw,22px)] tracking-wide uppercase transition-all focus-visible:ring-2 focus-visible:ring-void focus-visible:outline-none sm:min-h-[48px] sm:min-w-[110px] sm:px-7'

const variants: Record<NavButtonVariant, string> = {
  shop: 'bg-acid text-void shadow-[0_4px_0_#9acd00] hover:translate-y-0.5 hover:shadow-[0_2px_0_#9acd00] active:translate-y-1 active:shadow-none',
  range:
    'border-2 border-void bg-void text-acid shadow-[0_4px_0_#000] hover:translate-y-0.5 hover:bg-acid hover:text-void hover:shadow-[0_2px_0_#9acd00] active:translate-y-1 active:shadow-none',
  wholesale:
    'border-2 border-void bg-void text-off shadow-[0_4px_0_#000] hover:translate-y-0.5 hover:bg-off hover:text-void hover:shadow-[0_2px_0_#000] active:translate-y-1 active:shadow-none',
}

const activeRing: Record<NavButtonVariant, string> = {
  shop: 'ring-2 ring-void ring-offset-2 ring-offset-electric',
  range: 'ring-2 ring-void ring-offset-2 ring-offset-electric',
  wholesale: 'ring-2 ring-acid ring-offset-2 ring-offset-electric',
}

export function NavButton({ to, variant, active, children }: NavButtonProps) {
  return (
    <Link
      to={to}
      className={`${base} ${variants[variant]} ${active ? activeRing[variant] : ''}`}
    >
      {children}
    </Link>
  )
}
