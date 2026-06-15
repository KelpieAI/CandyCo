interface GhostBackgroundProps {
  transform: string
  stroke: string
}

export function GhostBackground({ transform, stroke }: GhostBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center overflow-hidden">
      <div
        className="font-bebas origin-center text-[clamp(180px,28vw,420px)] leading-[0.8] tracking-[-0.03em] whitespace-nowrap text-transparent select-none will-change-transform"
        style={{
          transform: `rotate(-5deg) ${transform}`,
          WebkitTextStroke: stroke,
        }}
      >
        CANDYCO
      </div>
    </div>
  )
}
