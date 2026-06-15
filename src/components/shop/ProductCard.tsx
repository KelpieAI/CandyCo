import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import type { Product } from '@shared/products'
import { ProductImage } from '../ProductImage'

interface ProductCardProps {
  product: Product
  index: number
  featured?: boolean
}

export function ProductCard({ product, index, featured = false }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden border border-[#1a1a1a] bg-[#0a0a0a] ${
        featured ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, ${product.wash} 0%, transparent 65%)`,
        }}
      />

      <span className="absolute top-4 right-4 text-[9px] font-bold tracking-[0.2em] text-off/15 uppercase">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div
        className="absolute top-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
        style={{ backgroundColor: product.accent }}
      />

      <div className={`relative flex h-full flex-col ${featured ? 'p-8 sm:p-10' : 'p-6'}`}>
        <div
          className={`mx-auto mb-auto flex items-center justify-center transition-transform duration-500 group-hover:scale-105 ${
            featured ? 'h-[clamp(160px,22vw,280px)] w-full' : 'h-[clamp(100px,14vw,160px)] w-full'
          }`}
          style={{ filter: `drop-shadow(0 0 40px ${product.accent}44)` }}
        >
          <ProductImage
            src={product.image}
            alt={product.name}
            className={featured ? 'max-h-full' : 'max-h-full'}
          />
        </div>

        <div className="mt-6">
          <p
            className="mb-2 text-[9px] font-bold tracking-[0.18em] uppercase"
            style={{ color: product.accent }}
          >
            {product.sub}
          </p>
          <h2
            className={`font-bebas leading-[0.95] tracking-wide text-off ${
              featured ? 'text-[clamp(36px,5vw,56px)]' : 'text-[clamp(24px,3vw,32px)]'
            }`}
          >
            {product.name}
          </h2>

          <div className="mt-5 flex items-end justify-between gap-4">
            <p
              className={`font-bebas leading-none ${
                featured ? 'text-[clamp(56px,8vw,80px)]' : 'text-[clamp(40px,5vw,52px)]'
              }`}
              style={{ color: product.accent }}
            >
              {product.price}
            </p>
            <span className="pb-1 text-[9px] font-bold tracking-[0.12em] text-muted uppercase">
              per tub
            </span>
          </div>

          <motion.button
            type="button"
            whileTap={{ scale: 0.97 }}
            className="mt-6 flex w-full cursor-none items-center justify-center gap-2 border border-[#2a2a2a] bg-void/60 py-3.5 text-[10px] font-bold tracking-[0.14em] text-off uppercase backdrop-blur-sm transition-colors group-hover:border-transparent group-hover:text-void"
            style={
              {
                '--accent': product.accent,
              } as React.CSSProperties
            }
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = product.accent
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(8, 8, 8, 0.6)'
            }}
          >
            <Plus size={14} strokeWidth={2.5} />
            Add to cart
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}
