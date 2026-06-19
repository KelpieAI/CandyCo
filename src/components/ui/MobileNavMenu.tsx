import { AnimatePresence, motion } from 'framer-motion'
import { ShoppingBag, UserRound } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const MOBILE_LINKS = [
  { to: '/', label: 'Home', accent: '#ede9e1' },
  { to: '/shop', label: 'Shop', accent: '#c8f535' },
  { to: '/products', label: 'Range', accent: '#c8f535' },
  { to: '/wholesale', label: 'Wholesale', accent: '#ede9e1' },
] as const

const panelVariants = {
  closed: {
    y: '-100%',
    transition: { duration: 0.38, ease: [0.76, 0, 0.24, 1] as const },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  closed: { opacity: 0, x: -28, filter: 'blur(4px)' },
  open: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
}

function HamburgerIcon({ open, overlay = false }: { open: boolean; overlay?: boolean }) {
  const barColor = overlay ? 'bg-off' : 'bg-void'

  return (
    <span className="relative flex h-5 w-6 flex-col items-center justify-center">
      <motion.span
        className={`absolute block h-[2px] w-6 origin-center ${barColor}`}
        animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -7 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className={`absolute block h-[2px] w-6 origin-center ${barColor}`}
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className={`absolute block h-[2px] w-6 origin-center ${barColor}`}
        animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 7 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
    </span>
  )
}

export function MobileNavMenu({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <>
      <button
        type="button"
        className="inline-flex cursor-none items-center justify-center p-2 sm:hidden"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <HamburgerIcon open={open} overlay={overlay} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-[480] bg-void/60 backdrop-blur-sm sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed top-[var(--nav-height)] right-0 left-0 z-[490] max-h-[calc(100dvh-var(--nav-height))] overflow-y-auto border-t border-electric/30 bg-void sm:hidden"
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="page-gutter-x flex flex-col py-8 pb-10">
                <motion.p
                  variants={itemVariants}
                  className="mb-6 text-[9px] font-bold tracking-[0.22em] text-muted uppercase"
                >
                  Menu · Drop 001 live
                </motion.p>

                <ul className="flex flex-col gap-1">
                  {MOBILE_LINKS.map((link, index) => {
                    const active =
                      link.to === '/'
                        ? location.pathname === '/'
                        : location.pathname === link.to

                    function handleLinkClick(event: React.MouseEvent<HTMLAnchorElement>) {
                      if (link.to === '/' && location.pathname === '/') {
                        event.preventDefault()
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }
                      setOpen(false)
                    }

                    return (
                      <motion.li key={link.to} variants={itemVariants}>
                        <Link
                          to={link.to}
                          onClick={handleLinkClick}
                          className={`group flex items-center justify-between border-b border-[#1a1a1a] py-5 transition-colors ${
                            active ? 'text-acid' : 'text-off hover:text-acid'
                          }`}
                        >
                          <span className="flex items-baseline gap-4">
                            <span className="text-[10px] font-bold tracking-[0.16em] text-muted uppercase">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <span className="font-bebas text-[clamp(2.5rem,10vw,3.5rem)] leading-none tracking-wide uppercase">
                              {link.label}
                            </span>
                          </span>
                          <span
                            className="h-px w-8 transition-all duration-300 group-hover:w-12"
                            style={{ backgroundColor: active ? link.accent : '#333' }}
                          />
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>

                <motion.div
                  variants={itemVariants}
                  className="mt-10 grid grid-cols-2 gap-3"
                >
                  <Link
                    to="/basket"
                    onClick={() => setOpen(false)}
                    className={`flex min-h-[56px] cursor-none items-center justify-center gap-2.5 border border-[#1a1a1a] bg-[#0a0a0a] font-bebas text-xl tracking-wide uppercase transition-colors ${
                      location.pathname === '/basket'
                        ? 'border-acid/40 text-acid'
                        : 'text-off hover:border-acid/30 hover:text-acid'
                    }`}
                  >
                    <ShoppingBag size={18} strokeWidth={2.5} />
                    Basket
                  </Link>

                  <button
                    type="button"
                    aria-label="Sign in (coming soon)"
                    title="Sign in — coming soon"
                    className="flex min-h-[56px] cursor-none items-center justify-center gap-2.5 border border-[#1a1a1a] bg-[#0a0a0a] font-bebas text-xl tracking-wide text-off uppercase transition-colors hover:border-electric/40 hover:text-electric"
                  >
                    <UserRound size={18} strokeWidth={2.5} />
                    Sign in
                  </button>
                </motion.div>

                <motion.p
                  variants={itemVariants}
                  className="mt-8 text-center text-[9px] font-bold tracking-[0.18em] text-muted uppercase"
                >
                  Free delivery over £50 · Leicestershire
                </motion.p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
