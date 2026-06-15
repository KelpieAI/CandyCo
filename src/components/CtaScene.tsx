import { motion } from 'framer-motion'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import { HeroButton } from './ui/HeroButton'

interface CtaSceneProps {
  opacity: number
  pointerEvents: boolean
}

export function CtaScene({ opacity, pointerEvents }: CtaSceneProps) {
  return (
    <motion.div
      className="page-gutter-x absolute inset-0 z-20 flex flex-col items-center justify-center pb-10 text-center"
      style={{ opacity, pointerEvents: pointerEvents ? 'auto' : 'none' }}
    >
      <div className="mb-4 text-[9px] font-bold tracking-[0.25em] text-acid uppercase">
        Drop 001 — In Stock Now
      </div>
      <h2 className="font-bebas mb-9 text-[clamp(48px,9vw,120px)] leading-[0.9] tracking-wide text-off">
        That&apos;s
        <br />
        the <span className="text-electric">range.</span>
      </h2>
      <div className="flex w-full max-w-xl flex-col items-center justify-center gap-3 sm:flex-row">
        <HeroButton to="/shop" variant="shop" label="Shop Drop 001">
          <ShoppingBag size={22} strokeWidth={2.5} />
        </HeroButton>
        <HeroButton to="/wholesale" variant="wholesale" label="Wholesale">
          <ArrowRight size={22} strokeWidth={2.5} />
        </HeroButton>
      </div>
      <div className="mt-7 text-[9px] font-bold tracking-[0.18em] text-muted uppercase">
        20 years · Leicestershire · Free delivery over £50
      </div>
    </motion.div>
  )
}
