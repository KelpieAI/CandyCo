import { motion } from 'framer-motion'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import { useEffect } from 'react'
import { GALLERY_PRODUCTS } from '@shared/productGallery'
import { PageShell } from '../components/PageShell'
import { GalleryProductCard } from '../components/products/GalleryProductCard'
import { HeroButton } from '../components/ui/HeroButton'

export function ProductsPage() {
  useEffect(() => {
    document.title = 'Full Range — CandyCo London'
  }, [])

  return (
    <PageShell wide ghostWord="RANGE" showTicker>
      <section className="relative mb-14 pt-4 pb-6">
        <motion.p
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-4 flex items-center gap-2 text-[9px] font-bold tracking-[0.22em] text-muted uppercase"
        >
          <span className="text-acid">&gt;</span>
          candyco.london — full product gallery
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.6 }}
          className="font-bebas max-w-4xl text-[clamp(64px,12vw,140px)] leading-[0.88] tracking-wide text-off"
        >
          The full
          <br />
          <span className="text-acid">range.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.5 }}
          className="mt-6 max-w-lg text-[11px] leading-[1.9] text-muted"
        >
          <strong className="text-off">Every tub. Every flavour.</strong>
          <br />
          {GALLERY_PRODUCTS.length} products photographed in-house — all{' '}
          <strong className="text-acid">£6</strong> per 1kg tub.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.5 }}
          className="mt-10"
        >
          <HeroButton to="/shop" variant="range" label="Shop Drop 001">
            <ShoppingBag size={22} strokeWidth={2.5} />
          </HeroButton>
        </motion.div>
      </section>

      <div className="mb-6 flex items-center justify-between gap-4 border-b border-[#1a1a1a] pb-4">
        <p className="text-[9px] font-bold tracking-[0.18em] text-muted uppercase">
          {GALLERY_PRODUCTS.length} products · £6 each
        </p>
        <p className="text-[9px] font-bold tracking-[0.18em] text-acid uppercase">Drop 001 live</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {GALLERY_PRODUCTS.map((product, index) => (
          <GalleryProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55 }}
        className="products-cta mt-20 border border-[#1a1a1a] bg-[#0a0a0a] p-8 sm:p-12 lg:p-16"
      >
        <p className="mb-3 text-[9px] font-bold tracking-[0.22em] text-muted uppercase">
          Ready to order?
        </p>
        <h2 className="font-bebas max-w-2xl text-[clamp(48px,8vw,96px)] leading-[0.9] tracking-wide text-off">
          Grab a tub for <span className="text-acid">£6.</span>
        </h2>
        <p className="mt-4 max-w-md text-[11px] leading-[1.9] text-muted">
          Free delivery over £50. Same-day dispatch from Leicestershire. Drop 001 is live now.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <HeroButton to="/shop" variant="range" label="Shop now">
            <ShoppingBag size={22} strokeWidth={2.5} />
          </HeroButton>
          <HeroButton to="/wholesale" variant="wholesale" label="Wholesale">
            <ArrowRight size={22} strokeWidth={2.5} />
          </HeroButton>
        </div>
      </motion.section>
    </PageShell>
  )
}
