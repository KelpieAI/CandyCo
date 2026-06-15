import { motion } from 'framer-motion'
import { Candy } from 'lucide-react'

const TICKER_TEXT =
  'YOUR LOCAL PLUG · EST. 20 YEARS · FREE DELIVERY OVER £50 · FIZZY · SOUR · GUMMY · CANDYCO LONDON · WHOLESALE ACCOUNTS WELCOME · DROP 001 LIVE NOW'

export function ShopTicker() {
  const segment = (
    <>
      <Candy size={12} className="inline-block align-middle" strokeWidth={2.5} />
      {' '}
      {TICKER_TEXT}
      {' · '}
    </>
  )

  return (
    <div className="w-full shrink-0 overflow-hidden bg-acid py-2 whitespace-nowrap">
      <span className="animate-tick inline-block text-[10px] font-bold tracking-[0.14em] text-void uppercase">
        &nbsp;&nbsp;{segment}{segment}&nbsp;&nbsp;
      </span>
    </div>
  )
}

interface ShopHeroProps {
  productCount: number
}

export function ShopHero({ productCount }: ShopHeroProps) {
  return (
    <section className="relative mb-16 pt-4 pb-8">
      <motion.p
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-4 flex items-center gap-2 text-[9px] font-bold tracking-[0.22em] text-muted uppercase"
      >
        <span className="text-acid">&gt;</span>
        candyco.london — drop 001 · leicestershire
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.6 }}
        className="font-bebas max-w-4xl text-[clamp(64px,12vw,140px)] leading-[0.88] tracking-wide text-off"
      >
        Shop
        <br />
        the <span className="text-acid">range.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.5 }}
        className="mt-6 max-w-md text-[11px] leading-[1.9] text-muted"
      >
        <strong className="text-off">1kg tubs.</strong> Fizzy classics and sour hits.
        <br />
        {productCount} lines in Drop 001 — all in stock.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.5 }}
        className="mt-10 flex flex-wrap gap-2"
      >
        {['All', 'Classic', 'Sour'].map((label, i) => (
          <button
            key={label}
            type="button"
            className={`cursor-none px-4 py-2 text-[9px] font-bold tracking-[0.16em] uppercase transition-colors ${
              i === 0
                ? 'bg-acid text-void'
                : 'border border-[#2a2a2a] text-muted hover:border-[#444] hover:text-off'
            }`}
          >
            {label}
          </button>
        ))}
      </motion.div>
    </section>
  )
}
