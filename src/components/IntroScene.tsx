import { motion, type MotionValue } from 'framer-motion'
import { ArrowRight, ChevronDown, MapPin, ShoppingBag } from 'lucide-react'
import { HeroButton } from './ui/HeroButton'

interface IntroSceneProps {
  opacity: MotionValue<number>
  translateY: MotionValue<number>
}

export function IntroScene({ opacity, translateY }: IntroSceneProps) {
  return (
    <motion.div
      className="page-gutter-x page-gutter-top absolute inset-0 z-[15] flex flex-col items-start justify-start pb-10"
      style={{ opacity, y: translateY }}
    >
      <div className="mb-3 flex items-center gap-2 text-[9px] font-bold tracking-[0.22em] text-muted uppercase">
        <MapPin size={10} className="text-acid" strokeWidth={2.5} />
        candyco.london — drop 001 · leicestershire
      </div>
      <h1 className="font-bebas mb-7 text-[clamp(64px,10vw,140px)] leading-[0.9] tracking-wide text-off">
        Your
        <br />
        local
        <br />
        <span className="text-acid">plug.</span>
      </h1>
      <p className="mb-8 max-w-[340px] text-[11px] leading-[1.9] text-muted">
        <strong className="text-off">20 years of proper sweets.</strong>
        <br />
        Fizzy. Sour. Gummy. Bulk.
        <br />
        Scroll to meet the range.
      </p>

      <div className="mb-10 flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:flex-wrap">
        <HeroButton to="/shop" variant="shop" label="Shop">
          <ShoppingBag size={22} strokeWidth={2.5} />
        </HeroButton>
        <HeroButton to="/wholesale" variant="wholesale" label="Wholesale">
          <ArrowRight size={22} strokeWidth={2.5} />
        </HeroButton>
      </div>

      <motion.div
        className="mt-auto flex items-center gap-3 text-[9px] font-bold tracking-[0.2em] text-muted uppercase"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="inline-block h-9 w-px bg-gradient-to-b from-acid to-transparent" />
        <ChevronDown size={14} className="text-acid" strokeWidth={2} />
        Scroll
      </motion.div>
    </motion.div>
  )
}
