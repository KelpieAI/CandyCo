import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'

export const TRADE_BANNER_HEIGHT = 36

const STORAGE_KEY = 'candyco_banner_dismissed'

function readBannerVisible(): boolean {
  if (typeof window === 'undefined') return true
  return sessionStorage.getItem(STORAGE_KEY) !== 'true'
}

export function useTradeBanner() {
  const [visible, setVisible] = useState(readBannerVisible)

  const dismiss = useCallback(() => {
    setVisible(false)
    sessionStorage.setItem(STORAGE_KEY, 'true')
  }, [])

  return {
    visible,
    dismiss,
    height: visible ? TRADE_BANNER_HEIGHT : 0,
  }
}

interface TradeBannerProps {
  visible: boolean
  onDismiss: () => void
}

export function TradeBanner({ visible, onDismiss }: TradeBannerProps) {
  if (!visible) return null

  return (
    <div
      id="trade-banner"
      className="fixed top-0 right-0 left-0 z-[400] flex h-9 items-center justify-between bg-acid px-10"
      aria-hidden={!visible}
    >
      <p className="tb-text font-mono text-[9px] font-bold tracking-[0.16em] text-void uppercase before:content-['🤝'] flex min-w-0 items-center gap-[10px]">
        <span className="truncate">
          Are you a retailer or market trader? Open a wholesale account for trade pricing
          and bulk orders.
        </span>
      </p>

      <div className="tb-actions flex shrink-0 items-center gap-2">
        <Link
          to="/wholesale"
          className="tb-cta bg-void px-[14px] py-[6px] font-mono text-[9px] font-bold tracking-[0.14em] text-acid uppercase whitespace-nowrap transition-colors hover:bg-[#111111]"
        >
          Open Trade Account →
        </Link>
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss banner"
          className="tb-dismiss border-none bg-transparent px-1 font-mono text-[12px] text-[rgba(8,8,8,0.4)] transition-colors hover:text-[rgba(8,8,8,0.7)]"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
