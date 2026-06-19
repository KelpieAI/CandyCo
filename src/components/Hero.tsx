import { Link } from 'react-router-dom'

interface MiniProduct {
  emoji: string
  price: string
}

const miniProducts: MiniProduct[] = [
  { emoji: '🥤', price: '£6' },
  { emoji: '🍓', price: '£6' },
  { emoji: '🫐', price: '£6' },
  { emoji: '🫧', price: '£6' },
  { emoji: '🟡', price: '£4+' },
]

const TRADE_STATS = [
  { value: '20', suffix: '+', label: 'Years trading' },
  { value: '1', suffix: 'kg', label: 'Min order' },
  { value: '50', suffix: '+', label: 'Product lines' },
] as const

interface HeroProps {
  bannerVisible: boolean
}

export function Hero({ bannerVisible }: HeroProps) {
  return (
    <section
      className="hero relative grid grid-cols-2"
      style={{
        marginTop: bannerVisible ? '96px' : '60px',
        height: bannerVisible ? 'calc(100vh - 96px)' : 'calc(100vh - 60px)',
      }}
    >
      {/* Consumer lane */}
      <div className="lane-consumer relative flex flex-col justify-between overflow-hidden bg-void px-[56px] py-[60px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-10px] bottom-[-20px] text-[200px] leading-none opacity-[0.05] grayscale select-none"
          style={{ letterSpacing: '-10px' }}
        >
          🍬🍭🥤
        </div>

        <div>
          <div className="lane-tag mb-8 inline-flex items-center gap-2 self-start border border-[#1e1e1e] px-3 py-[5px] font-mono text-[8px] font-bold tracking-[0.2em] text-muted uppercase">
            <div className="tag-pip h-[5px] w-[5px] rounded-full bg-electric" />
            For sweet lovers
          </div>

          <h2 className="lane-headline font-bebas mb-3 text-[clamp(48px,5.5vw,84px)] leading-[0.9] tracking-[0.01em] text-off">
            Buying
            <br />
            for <em className="text-electric not-italic">yourself?</em>
          </h2>

          <p className="lane-sub font-mono text-[10px] leading-[1.8] font-bold tracking-[0.12em] text-muted uppercase">
            Browse the range. Add to basket.
            <br />
            Free delivery over £50.
          </p>
        </div>

        <div>
          <div className="consumer-strip mb-8 flex gap-[2px]">
            {miniProducts.map((p) => (
              <div
                key={p.emoji}
                className="cp flex-1 cursor-none border border-[#1e1e1e] bg-[#111111] px-2 py-3 text-center transition-colors hover:border-[rgba(200,245,53,0.3)] hover:bg-[#161616]"
              >
                <span className="cp-emoji mb-1 block text-[26px]">{p.emoji}</span>
                <div className="cp-price font-bebas text-[16px] text-acid">{p.price}</div>
              </div>
            ))}
          </div>

          <Link
            to="/shop"
            className="lane-cta cta-consumer group inline-flex cursor-none items-center gap-[10px] self-start bg-electric px-7 py-4 font-mono text-[10px] font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-[#cc0055]"
          >
            Shop Drop 001
            <span className="cta-arrow transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="divider pointer-events-none absolute top-0 bottom-0 left-1/2 z-10 w-px bg-[#1e1e1e]">
        <div className="divider-pill absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#1e1e1e] bg-void px-[14px] py-2 font-mono text-[8px] font-bold tracking-[0.16em] text-muted uppercase whitespace-nowrap">
          or
        </div>
      </div>

      {/* Trade lane */}
      <div className="lane-trade relative flex flex-col justify-between overflow-hidden bg-[#111111] px-[56px] py-[60px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-10px] bottom-[-40px] font-bebas text-[340px] leading-none select-none"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1px rgba(200,245,53,0.05)',
          }}
        >
          £
        </div>

        <div>
          <div className="lane-tag mb-8 inline-flex items-center gap-2 self-start border border-[#1e1e1e] px-3 py-[5px] font-mono text-[8px] font-bold tracking-[0.2em] text-muted uppercase">
            <div className="tag-pip h-[5px] w-[5px] rounded-full bg-acid" />
            For retailers
          </div>

          <h2 className="lane-headline font-bebas mb-3 text-[clamp(48px,5.5vw,84px)] leading-[0.9] tracking-[0.01em] text-off">
            Stocking
            <br />
            your <em className="text-acid not-italic">shop?</em>
          </h2>

          <p className="lane-sub font-mono text-[10px] leading-[1.8] font-bold tracking-[0.12em] text-muted uppercase">
            Trade pricing. Bulk orders.
            <br />
            Repeat accounts. No fuss.
          </p>
        </div>

        <div>
          <div className="trade-stats mb-8 flex">
            {TRADE_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`tstat flex-1 ${i < TRADE_STATS.length - 1 ? 'mr-5 border-r border-[#1e1e1e] pr-5' : ''}`}
              >
                <div className="tstat-num font-bebas mb-[2px] text-[40px] leading-none text-off">
                  {stat.value}
                  <em className="text-[0.65em] text-acid not-italic">{stat.suffix}</em>
                </div>
                <div className="tstat-label font-mono text-[7px] font-bold tracking-[0.14em] text-muted uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/wholesale"
            className="lane-cta cta-trade group inline-flex cursor-none items-center gap-[10px] self-start bg-acid px-7 py-4 font-mono text-[10px] font-bold tracking-[0.14em] text-void uppercase transition-colors hover:bg-[#b0d820]"
          >
            Open Trade Account
            <span className="cta-arrow transition-transform group-hover:translate-x-1">→</span>
          </Link>

          <p className="trade-note mt-3 flex items-center gap-2 font-mono text-[8px] font-bold tracking-[0.14em] text-muted uppercase before:text-acid before:content-['⚡']">
            We respond within 24 hours
          </p>
        </div>
      </div>
    </section>
  )
}
