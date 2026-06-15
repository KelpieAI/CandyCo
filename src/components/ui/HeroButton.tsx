import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type HeroButtonVariant = 'shop' | 'wholesale' | 'range'

interface HeroButtonProps {
  to: string
  variant: HeroButtonVariant
  label: string
  children?: ReactNode
}

export function HeroButton({ to, variant, label, children }: HeroButtonProps) {
  if (variant === 'range') {
    return (
      <Link to={to} className="hero-btn hero-btn--range group cursor-none">
        <span className="hero-btn__orbit" aria-hidden />
        <span className="hero-btn__orbit hero-btn__orbit--delay" aria-hidden />
        <span className="hero-btn__shimmer" aria-hidden />
        <span className="hero-btn__inner">
          {children}
          <span className="hero-btn__label hero-btn__label--range">{label}</span>
        </span>
      </Link>
    )
  }

  if (variant === 'shop') {
    return (
      <Link to={to} className="hero-btn hero-btn--shop group cursor-none">
        <span className="hero-btn__bg" aria-hidden />
        <span className="hero-btn__scanlines" aria-hidden />
        <span className="hero-btn__inner">
          {children}
          <span className="hero-btn__label hero-btn__label--shop" data-text={label}>
            {label}
          </span>
        </span>
      </Link>
    )
  }

  return (
    <Link to={to} className="hero-btn hero-btn--wholesale group cursor-none">
      <span className="hero-btn__ripple" aria-hidden />
      <span className="hero-btn__stripes" aria-hidden />
      <span className="hero-btn__inner">
        <span className="hero-btn__label hero-btn__label--wholesale" data-text={label}>
          {label}
        </span>
        {children}
      </span>
    </Link>
  )
}
