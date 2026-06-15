import { ArrowLeft } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ShopTicker } from './shop/ShopHero'
import { CustomCursor } from './CustomCursor'
import { Nav } from './Nav'

interface PageShellProps {
  children: ReactNode
  showBack?: boolean
  wide?: boolean
  ghostWord?: string
  showTicker?: boolean
}

export function PageShell({
  children,
  showBack = true,
  wide = false,
  ghostWord,
  showTicker = false,
}: PageShellProps) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-void text-off">
      {ghostWord && (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
        >
          <div
            className="font-bebas origin-center text-[clamp(120px,22vw,320px)] leading-[0.8] tracking-[-0.03em] whitespace-nowrap text-transparent select-none"
            style={{ WebkitTextStroke: '1px rgba(200,245,53,0.05)' }}
          >
            {ghostWord}
          </div>
        </div>
      )}

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(200,245,53,0.06) 0%, transparent 55%)',
        }}
      />

      <CustomCursor />
      <Nav />

      {showBack && (
        <Link
          to="/"
          className="inset-gutter-left fixed z-[500] flex cursor-none items-center gap-2 text-[9px] font-bold tracking-[0.16em] text-muted uppercase transition-colors hover:text-acid"
          style={{ top: 'calc(var(--nav-height) + 0.75rem)' }}
        >
          <ArrowLeft size={12} strokeWidth={2.5} />
          Experience
        </Link>
      )}

      <main
        className={`page-gutter-x page-gutter-top relative z-10 mx-auto flex-1 pb-16 ${
          wide ? 'max-w-7xl' : 'max-w-5xl'
        }`}
      >
        {children}
      </main>

      {showTicker && <ShopTicker />}
    </div>
  )
}
