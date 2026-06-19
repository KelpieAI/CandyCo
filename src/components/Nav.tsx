import { Link, useLocation } from 'react-router-dom'
import { LOGO_SRC } from './VideoHero'
import { NavActions } from './ui/NavActions'
import { MobileNavMenu } from './ui/MobileNavMenu'
import { NavPillGroup } from './ui/NavPillGroup'
import { NavPillLink } from './ui/NavPillLink'

interface NavProps {
  overlay?: boolean
}

export function Nav({ overlay = false }: NavProps) {
  const location = useLocation()

  function handleLogoClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (location.pathname === '/') {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`nav fixed top-0 right-0 left-0 z-[500] ${
        overlay
          ? 'nav--overlay'
          : 'nav--solid border-b-2 border-[#ff4d8f] bg-electric shadow-[0_8px_32px_rgba(255,45,120,0.35)]'
      }`}
    >
      {overlay ? (
        <nav className="nav__overlay-bar page-gutter-x relative flex flex-col items-center pt-5 pb-4 sm:pt-6">
          <div className="absolute top-5 right-[clamp(1.5rem,5vw,5rem)] flex items-center gap-1 sm:top-6">
            <NavActions overlay />
            <MobileNavMenu overlay />
          </div>

          <Link
            to="/"
            onClick={handleLogoClick}
            className="mb-4 block transition-opacity hover:opacity-85"
          >
            <img
              src={LOGO_SRC}
              alt="CandyCo London"
              className="h-[clamp(3.5rem,10vw,5.5rem)] w-auto object-contain"
            />
          </Link>

          <div className="hidden sm:flex sm:items-center sm:gap-2">
            <NavPillGroup overlay />
            <NavPillLink to="/experience" variant="range" overlay>
              Experience
            </NavPillLink>
          </div>
        </nav>
      ) : (
        <nav className="page-gutter-x flex h-[var(--nav-height)] items-center justify-between gap-3 sm:gap-6">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="shrink-0 font-bebas text-[clamp(1.75rem,4vw,2.25rem)] leading-none tracking-widest text-void transition-opacity hover:opacity-80"
          >
            CANDY<em className="text-acid not-italic">CO</em>
          </Link>

          <div className="hidden sm:flex sm:items-center sm:gap-2">
            <NavPillGroup />
            <NavPillLink to="/experience" variant="range">
              Experience
            </NavPillLink>
          </div>

          <div className="hidden sm:block">
            <NavActions />
          </div>

          <MobileNavMenu />
        </nav>
      )}
    </header>
  )
}
