import { Link, useLocation } from 'react-router-dom'
import { NavActions } from './ui/NavActions'
import { MobileNavMenu } from './ui/MobileNavMenu'
import { NavButton } from './ui/NavButton'

export function Nav() {
  const location = useLocation()

  return (
    <header className="fixed top-0 right-0 left-0 z-[500] border-b-2 border-[#ff4d8f] bg-electric shadow-[0_8px_32px_rgba(255,45,120,0.35)]">
      <nav className="page-gutter-x flex h-[var(--nav-height)] items-center justify-between gap-3 sm:gap-6">
        <Link
          to="/"
          className="shrink-0 font-bebas text-[clamp(1.75rem,4vw,2.25rem)] leading-none tracking-widest text-void transition-opacity hover:opacity-80"
        >
          CANDY<em className="text-acid not-italic">CO</em>
        </Link>

        <div className="hidden items-center gap-2 sm:flex sm:gap-3">
          <NavButton to="/shop" variant="shop" active={location.pathname === '/shop'}>
            Shop
          </NavButton>
          <NavButton to="/products" variant="range" active={location.pathname === '/products'}>
            Range
          </NavButton>
          <NavButton to="/wholesale" variant="wholesale" active={location.pathname === '/wholesale'}>
            Wholesale
          </NavButton>
        </div>

        <div className="hidden sm:block">
          <NavActions />
        </div>

        <MobileNavMenu />
      </nav>
    </header>
  )
}
