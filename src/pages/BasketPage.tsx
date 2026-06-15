import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import { useEffect } from 'react'
import { PageShell } from '../components/PageShell'
import { HeroButton } from '../components/ui/HeroButton'

export function BasketPage() {
  useEffect(() => {
    document.title = 'Basket — CandyCo London'
  }, [])

  return (
    <PageShell wide ghostWord="BASKET" showBack={false} showTicker>
      <section className="relative flex min-h-[55vh] flex-col items-center justify-center py-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex h-24 w-24 items-center justify-center border border-[#1a1a1a] bg-[#0a0a0a]"
          style={{ filter: 'drop-shadow(0 0 40px rgba(200,245,53,0.15))' }}
        >
          <ShoppingBag size={40} strokeWidth={1.75} className="text-acid" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.45 }}
          className="mb-3 text-[9px] font-bold tracking-[0.22em] text-muted uppercase"
        >
          Drop 001 · Your basket
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.5 }}
          className="font-bebas max-w-xl text-[clamp(48px,10vw,96px)] leading-[0.9] tracking-wide text-off"
        >
          Nothing in the bag<span className="text-acid">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.45 }}
          className="mt-5 max-w-sm text-[11px] leading-[1.9] text-muted"
        >
          £6 tubs. Add from the shop and they&apos;ll show up here ready to checkout.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.45 }}
          className="mt-10"
        >
          <HeroButton to="/shop" variant="range" label="Shop Drop 001">
            <ShoppingBag size={22} strokeWidth={2.5} />
          </HeroButton>
        </motion.div>
      </section>
    </PageShell>
  )
}
