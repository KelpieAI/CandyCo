import { products } from '../data/products'
import type { ProductAnimation } from '../utils/easing'
import { ProductImage } from './ProductImage'

interface ProductStageProps {
  productIndex: number
  animation: ProductAnimation
  scrambledName: string
}

export function ProductStage({ productIndex, animation, scrambledName }: ProductStageProps) {
  const product = productIndex >= 0 ? products[productIndex] : products[0]
  const { scale, opacity, priceOpacity, priceY } = animation

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <div
        className="text-center will-change-[transform,opacity]"
        style={{
          transform: `scale(${scale})`,
          opacity,
        }}
      >
        <div
          className="mx-auto flex h-[clamp(140px,18vw,260px)] w-[clamp(200px,28vw,360px)] items-center justify-center"
          style={{ filter: `drop-shadow(0 0 80px ${product.accent}55)` }}
        >
          <ProductImage
            src={product.image}
            alt={product.name}
            className="max-h-full w-auto"
          />
        </div>
        <span className="font-bebas mt-3 block min-h-[1.1em] text-[clamp(36px,6vw,80px)] leading-none tracking-wide text-off">
          {scrambledName}
        </span>
        <span className="mt-2 block text-[10px] font-bold tracking-[0.2em] text-muted uppercase">
          {product.sub}
        </span>
        <span
          className="font-bebas mt-1 block text-[clamp(48px,9vw,120px)] leading-none"
          style={{
            color: product.accent,
            opacity: priceOpacity,
            transform: `translateY(${priceY}px)`,
          }}
        >
          {product.price}
        </span>
      </div>
    </div>
  )
}
