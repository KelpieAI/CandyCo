import { scatterItems } from '../data/products'
import type { ScatterItemAnimation } from '../utils/easing'
import { ProductImage } from './ProductImage'

interface ScatterSceneProps {
  opacity: number
  items: ScatterItemAnimation[]
}

export function ScatterScene({ opacity, items }: ScatterSceneProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10" style={{ opacity }}>
      {scatterItems.map((item, i) => {
        const anim = items[i] ?? { opacity: 0, scale: 0.3 }
        return (
          <div
            key={item.name}
            className="absolute w-[clamp(72px,10vw,120px)] text-center transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            style={{
              left: item.left,
              top: item.top,
              opacity: anim.opacity,
              transform: `translate(-50%, -50%) scale(${anim.scale})`,
            }}
          >
            <div className="mx-auto flex h-16 items-center justify-center">
              <ProductImage src={item.image} alt={item.name} className="max-h-14 w-auto" />
            </div>
            <span className="mt-1 block text-[9px] font-bold tracking-[0.1em] text-muted uppercase">
              {item.name}
            </span>
            <span className="font-bebas mt-1 block text-xl text-acid">{item.price}</span>
          </div>
        )
      })}
    </div>
  )
}
