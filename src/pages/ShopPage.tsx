import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Product } from '@shared/products'
import { api } from '../api/client'
import { PageShell } from '../components/PageShell'
import { ProductCard } from '../components/shop/ProductCard'
import { ShopFooterStrip, WholesaleBanner } from '../components/shop/ShopFooter'
import { ShopHero } from '../components/shop/ShopHero'

export function ShopPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    api
      .getDrop()
      .then(({ products: items, drop }) => {
        setProducts(items)
        document.title = `Shop ${drop.name} — CandyCo London`
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const [featured, ...rest] = products

  return (
    <PageShell wide ghostWord="DROP 001" showTicker>
      <ShopHero productCount={products.length} />

      {loading && (
        <div className="flex min-h-[40vh] flex-col items-center justify-center gap-3">
          <Loader2 size={24} className="animate-spin text-acid" />
          <p className="text-[10px] font-bold tracking-[0.18em] text-muted uppercase">
            Loading drop…
          </p>
        </div>
      )}

      {error && (
        <div className="border border-electric/30 bg-electric/5 px-6 py-5">
          <p className="text-[9px] font-bold tracking-[0.18em] text-electric uppercase">
            Connection error
          </p>
          <p className="mt-2 text-[11px] text-muted">
            {error}. Make sure the API is running —{' '}
            <code className="text-acid">npm run dev</code>
          </p>
        </div>
      )}

      {!loading && !error && products.length > 0 && (
        <>
          {/* Featured + grid layout */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {featured && (
              <ProductCard product={featured} index={0} featured />
            )}
            {rest.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i + 1} />
            ))}
          </div>

          {/* Quick-add strip — mirrors experience product strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-[#1a1a1a] pt-8"
          >
            {products.map((p, i) => (
              <span
                key={p.id}
                className={`text-[8px] font-bold tracking-[0.12em] uppercase transition-colors ${
                  i === 0 ? 'text-acid' : 'text-muted'
                }`}
              >
                {p.stripLabel}
              </span>
            ))}
          </motion.div>
        </>
      )}

      <ShopFooterStrip />
      <WholesaleBanner />
    </PageShell>
  )
}
