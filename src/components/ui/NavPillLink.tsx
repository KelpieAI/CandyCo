import { Link, useLocation } from 'react-router-dom'

export type NavPillVariant = 'home' | 'shop' | 'range' | 'wholesale'

interface NavPillLinkProps {
  to: string
  variant: NavPillVariant
  overlay?: boolean
  children: string
  onNavigate?: () => void
}

export function NavPillLink({
  to,
  variant,
  overlay = false,
  children,
  onNavigate,
}: NavPillLinkProps) {
  const location = useLocation()
  const active =
    variant === 'home' ? location.pathname === '/' : location.pathname === to

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (variant === 'home' && location.pathname === '/') {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    onNavigate?.()
  }

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={[
        'nav-pill',
        `nav-pill--${variant}`,
        overlay ? 'nav-pill--overlay' : 'nav-pill--solid',
        active ? 'nav-pill--active' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Link>
  )
}

export const NAV_PILL_ITEMS = [
  { to: '/', variant: 'home' as const, label: 'Home' },
  { to: '/shop', variant: 'shop' as const, label: 'Shop' },
  { to: '/products', variant: 'range' as const, label: 'Range' },
  { to: '/wholesale', variant: 'wholesale' as const, label: 'Wholesale' },
]
