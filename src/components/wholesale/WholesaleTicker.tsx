const TICKER =
  'CANDYCO LONDON · WHOLESALE ACCOUNTS WELCOME · BULK TUBS · REPEAT ORDERS · PREFERRED PRICING · MIDLANDS TO NATIONWIDE · EST. 2004 · CANDYCO LONDON'

export function WholesaleTicker() {
  return (
    <div className="wholesale-ticker">
      <span className="wholesale-ticker__inner">
        &nbsp;&nbsp;{TICKER}&nbsp;·&nbsp;{TICKER}&nbsp;&nbsp;
      </span>
    </div>
  )
}
