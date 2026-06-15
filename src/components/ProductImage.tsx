import type { CSSProperties } from 'react'
import { isTransparentProductSrc } from '@shared/productGallery'

interface ProductImageProps {
  src: string
  alt: string
  className?: string
  style?: CSSProperties
}

export function ProductImage({ src, alt, className = '', style }: ProductImageProps) {
  const transparent = isTransparentProductSrc(src)

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`block max-w-full object-contain object-center ${className}`}
      style={
        transparent
          ? style
          : {
              mixBlendMode: 'multiply',
              filter: 'contrast(1.05) brightness(1.08)',
              ...style,
            }
      }
    />
  )
}
