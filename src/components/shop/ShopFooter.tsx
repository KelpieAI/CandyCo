import { motion } from 'framer-motion'
import { ArrowRight, Clock, MapPin, Sparkles, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ShopFooterStrip() {
  const items = [
    { icon: Truck, label: 'Free delivery over £50' },
    { icon: MapPin, label: 'Leicestershire based' },
    { icon: Clock, label: '20 years in trade' },
    { icon: Sparkles, label: 'Drop 001 live now' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16 mb-24 grid gap-px border border-[#1a1a1a] bg-[#1a1a1a] sm:grid-cols-2 lg:grid-cols-4"
    >
      {items.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex items-center gap-3 bg-void px-5 py-5 text-[9px] font-bold tracking-[0.14em] text-muted uppercase"
        >
          <Icon size={14} className="shrink-0 text-acid" strokeWidth={2.5} />
          {label}
        </div>
      ))}
    </motion.div>
  )
}

export function WholesaleBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-24"
    >
      <Link
        to="/wholesale"
        className="group relative block cursor-none overflow-hidden border border-[#1a1a1a] bg-[#0a0a0a] p-8 sm:p-10"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-electric opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(255,45,120,0.08)_0%,transparent_60%)] transition-opacity duration-500 group-hover:opacity-0"
        />

        <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 text-[9px] font-bold tracking-[0.22em] text-electric uppercase transition-colors duration-500 group-hover:text-void/70">
              Trade accounts
            </p>
            <h2 className="font-bebas text-[clamp(32px,5vw,48px)] leading-none tracking-wide text-off transition-colors duration-500 group-hover:text-void">
              Buying in bulk?
            </h2>
            <p className="mt-3 max-w-sm text-[11px] leading-relaxed text-muted transition-colors duration-500 group-hover:text-void/80">
              Wholesale tubs, repeat orders, and Leicestershire supply. Accounts welcome.
            </p>
          </div>

          <span className="inline-flex shrink-0 items-center gap-2 text-[10px] font-bold tracking-[0.14em] text-electric uppercase transition-colors duration-500 group-hover:text-void">
            Open wholesale
            <ArrowRight
              size={14}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
