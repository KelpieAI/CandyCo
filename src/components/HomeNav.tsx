import type { CSSProperties, MouseEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { lerp, lerpHex } from '../utils/lerp'

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/products', label: 'Range' },
  { to: '/wholesale', label: 'Wholesale' },
] as const

const BANNER_HEIGHT = 36
const NAV_HEIGHT = 60

interface HomeNavProps {
  bannerVisible: boolean
  navT: number
}

export function HomeNav({ bannerVisible, navT }: HomeNavProps) {
  const location = useLocation()
  const t = navT

  const bgR = Math.round(lerp(8, 255, t))
  const bgG = Math.round(lerp(8, 45, t))
  const bgB = Math.round(lerp(8, 120, t))
  const bgAlpha = lerp(0.95, 1, t)

  const navStyle: CSSProperties = {
    top: bannerVisible ? BANNER_HEIGHT : 0,
    height: NAV_HEIGHT,
    background: `rgba(${bgR},${bgG},${bgB},${bgAlpha})`,
    borderBottom: `1px solid rgba(30,30,30,${lerp(1, 0, t)})`,
    backdropFilter: `blur(${lerp(12, 0, t)}px)`,
    WebkitBackdropFilter: `blur(${lerp(12, 0, t)}px)`,
  }

  const logoBase = lerpHex('#ede9e1', '#080808', t)
  const logoEm = lerpHex('#c8f535', '#080808', t)
  const linkColor = lerpHex('#555555', '#080808', t)
  const activeLinkColor = lerpHex('#c8f535', '#080808', t)
  const liveDotColor = lerpHex('#ff2d78', '#080808', t)
  const mutedTextColor = lerpHex('#555555', '#080808', t)
  const underlineColor = t > 0.5 ? '#080808' : '#c8f535'

  function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
    if (location.pathname === '/') {
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header
      id="nav"
      className="fixed right-0 left-0 z-[300] flex items-center justify-between px-10"
      style={navStyle}
    >
      <Link
        to="/"
        onClick={handleLogoClick}
        className="logo shrink-0 font-bebas text-[20px] tracking-[0.1em] no-underline"
        style={{ color: logoBase }}
      >
        CANDY<em className="not-italic" style={{ color: logoEm }}>CO</em>
      </Link>

      <ul className="nav-links absolute left-1/2 hidden -translate-x-1/2 list-none md:flex">
        {NAV_LINKS.map(({ to, label }) => {
          const active = location.pathname === to
          return (
            <li key={to}>
              <Link
                to={to}
                className={`nav-link group relative flex h-[60px] items-center overflow-hidden px-[22px] font-mono text-[9px] font-bold tracking-[0.14em] uppercase no-underline ${
                  active ? 'active' : ''
                }`}
                style={{ color: active ? activeLinkColor : linkColor }}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-full origin-left transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                  style={{ backgroundColor: underlineColor }}
                />
              </Link>
            </li>
          )
        })}
      </ul>

      <div className="nav-right ml-auto flex items-center gap-[14px]">
        <div className="live hidden items-center gap-1.5 sm:flex">
          <span
            id="liveDot"
            className="dot h-[5px] w-[5px] shrink-0 rounded-full animate-nav-pulse"
            style={{ backgroundColor: liveDotColor }}
          />
          <span
            id="liveText"
            className="font-mono text-[9px] font-bold tracking-[0.14em] uppercase"
            style={{ color: mutedTextColor }}
          >
            Drop 001 · Live
          </span>
        </div>

        <button
          type="button"
          id="navSign"
          aria-label="Sign in (coming soon)"
          title="Sign in — coming soon"
          className="nav-sign cursor-none border-none bg-transparent font-mono text-[9px] font-bold tracking-[0.12em] uppercase"
          style={{ color: mutedTextColor }}
        >
          Sign In
        </button>
      </div>
    </header>
  )
}
