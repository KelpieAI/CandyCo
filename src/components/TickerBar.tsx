import { Candy } from 'lucide-react'

const TICKER_TEXT =
  'YOUR LOCAL PLUG · EST. 20 YEARS · FREE DELIVERY OVER £50 · FIZZY · SOUR · GUMMY · CANDYCO LONDON · WHOLESALE ACCOUNTS WELCOME · DROP 001 LIVE NOW'

interface TickerBarProps {
  opacity: number
}

export function TickerBar({ opacity }: TickerBarProps) {
  const segment = (
    <>
      <Candy size={12} className="inline-block align-middle" strokeWidth={2.5} />
      {' '}
      {TICKER_TEXT}
      {' · '}
    </>
  )

  return (
    <div
      className="absolute right-0 bottom-0 left-0 z-30 overflow-hidden bg-acid py-[7px] whitespace-nowrap transition-opacity duration-400"
      style={{ opacity }}
    >
      <span className="animate-tick inline-block text-[10px] font-bold tracking-[0.14em] text-void uppercase">
        &nbsp;&nbsp;{segment}{segment}&nbsp;&nbsp;
      </span>
    </div>
  )
}
