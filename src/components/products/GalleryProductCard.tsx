import { motion } from 'framer-motion'
import type { GalleryProduct } from '@shared/productGallery'
import { ProductImage } from '../ProductImage'

const ACCENTS = ['#c8f535', '#ff2d78', '#1a1aff', '#ffe600', '#ff4d8f']

interface GalleryProductCardProps {
  product: GalleryProduct
  index: number
}

export function GalleryProductCard({ product, index }: GalleryProductCardProps) {
  const accent = ACCENTS[index % ACCENTS.length]
  const wash = `${accent}0a`

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ delay: (index % 8) * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden border border-[#1a1a1a] bg-[#0a0a0a]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 40% 15%, ${wash} 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute top-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
        style={{ backgroundColor: accent }}
      />

      <div className="relative flex flex-col p-5 sm:p-6">
        <div
          className="mx-auto flex h-[clamp(120px,16vw,180px)] w-full items-center justify-center"
          style={{ filter: `drop-shadow(0 0 32px ${accent}33)` }}
        >
          <ProductImage src={product.src} alt={product.title} className="max-h-full w-auto" />
        </div>

        <div className="mt-5 border-t border-[#1a1a1a] pt-4">
          <p className="text-[9px] font-bold tracking-[0.16em] uppercase" style={{ color: accent }}>
            1kg tub
          </p>
          <h2 className="font-bebas mt-1 text-[clamp(22px,3vw,28px)] leading-none tracking-wide text-off">
            {product.title}
          </h2>
          <p className="font-bebas mt-2 text-[clamp(32px,4vw,40px)] leading-none" style={{ color: accent }}>
            {product.price}
          </p>
        </div>
      </div>
    </motion.article>
  )
}
