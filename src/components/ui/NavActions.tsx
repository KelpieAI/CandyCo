import { ShoppingBag, UserRound } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const actionBase =
  'inline-flex cursor-none items-center justify-center transition-all focus-visible:ring-2 focus-visible:ring-void focus-visible:outline-none'

export function NavActions() {
  const location = useLocation()
  const basketActive = location.pathname === '/basket'

  return (
    <div className="flex shrink-0 items-center gap-2">
      <Link
        to="/basket"
        aria-label="Basket"
        aria-current={basketActive ? 'page' : undefined}
        className={`${actionBase} min-h-[44px] min-w-[44px] bg-transparent text-acid hover:translate-y-0.5 hover:bg-acid hover:text-void active:translate-y-1 sm:min-h-[48px] sm:min-w-[48px] ${
          basketActive ? 'bg-acid text-void' : ''
        }`}
      >
        <ShoppingBag size={20} strokeWidth={2.5} />
      </Link>

      <button
        type="button"
        aria-label="Sign in (coming soon)"
        title="Sign in — coming soon"
        className={`${actionBase} min-h-[44px] gap-2 bg-transparent px-3.5 font-bebas text-[clamp(16px,2vw,18px)] tracking-wide text-void uppercase hover:translate-y-0.5 hover:bg-void hover:text-off active:translate-y-1 sm:min-h-[48px] sm:px-5`}
      >
        <UserRound size={16} strokeWidth={2.5} className="hidden sm:inline-flex" />
        Sign in
      </button>
    </div>
  )
}
