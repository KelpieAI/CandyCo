import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, ShoppingBag } from 'lucide-react'
import { HeroButton } from './ui/HeroButton'

const LOGO_SRC = '/products/imgi_1_image.webp'

export function VideoHero() {
  return (
    <div className="hero-video relative h-full w-full overflow-hidden bg-void">
      {/* Media layer — swap fallback for <video> when asset is ready */}
      <div className="hero-video__media absolute inset-0" aria-hidden>
        {/*
          <video
            className="hero-video__video"
            autoPlay
            muted
            loop
            playsInline
            poster="/products/imgi_1_image.webp"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        */}
        <div className="hero-video__fallback absolute inset-0 bg-void" />
        <div className="hero-video__ghost font-bebas">CANDYCO</div>
        <div className="hero-video__scrim absolute inset-0" />
      </div>

      <div className="hero-video__body relative z-10 flex h-full flex-col items-center justify-center px-6 pt-28 pb-20 text-center sm:pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-bebas max-w-4xl text-[clamp(3.5rem,12vw,7.5rem)] leading-[0.9] tracking-wide text-off"
        >
          Your local
          <br />
          <span className="text-acid">plug.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-5 max-w-md text-[11px] leading-[1.9] text-muted"
        >
          <strong className="text-off">20 years of proper sweets.</strong>
          <br />
          candyco.london — drop 001 · leicestershire
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.5 }}
          className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <HeroButton to="/shop" variant="shop" label="Shop Drop 001">
            <ShoppingBag size={22} strokeWidth={2.5} />
          </HeroButton>
          <HeroButton to="/wholesale" variant="wholesale" label="Wholesale">
            <ArrowRight size={22} strokeWidth={2.5} />
          </HeroButton>
        </motion.div>
      </div>

      <motion.div
        className="hero-video__scroll absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[9px] font-bold tracking-[0.2em] text-muted uppercase">
          Scroll to meet the range
        </span>
        <ChevronDown size={16} className="text-acid" strokeWidth={2.5} />
      </motion.div>

      {/* Hidden logo reference for SEO / preload — visible copy lives in overlay nav */}
      <img src={LOGO_SRC} alt="" className="sr-only" fetchPriority="high" />
    </div>
  )
}

export { LOGO_SRC }
