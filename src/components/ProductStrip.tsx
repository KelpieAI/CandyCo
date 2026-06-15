import { products } from '../data/products'

interface ProductStripProps {
  opacity: number
  activeIndex: number
}

export function ProductStrip({ opacity, activeIndex }: ProductStripProps) {
  return (
    <div
      className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-5 transition-opacity duration-400"
      style={{ opacity }}
    >
      {products.map((product, i) => (
        <span
          key={product.name}
          className={`text-[8px] font-bold tracking-[0.12em] uppercase whitespace-nowrap transition-colors duration-300 ${
            i === activeIndex ? 'text-acid' : 'text-muted'
          }`}
        >
          {product.stripLabel}
        </span>
      ))}
    </div>
  )
}
