import { Link } from 'react-router-dom'

interface TradeBannerProps {
  visible: boolean
  onDismiss: () => void
}

export function TradeBanner({ visible, onDismiss }: TradeBannerProps) {
  return (
    <div
      id="trade-banner"
      className="fixed top-0 right-0 left-0 z-[400] flex items-center justify-between bg-acid px-10 py-[9px] transition-transform duration-300 ease-out"
      style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}
      aria-hidden={!visible}
    >
      <p className="tb-text font-mono text-[9px] font-bold tracking-[0.16em] text-void uppercase before:content-['🤝'] flex items-center gap-[10px]">
        Are you a retailer or market trader? Open a wholesale account for trade pricing
        and bulk orders.
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
