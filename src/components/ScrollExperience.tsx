import { useCallback, useRef, useState } from 'react'
import { ColourWash } from './ColourWash'
import { CtaScene } from './CtaScene'
import { GhostBackground } from './GhostBackground'
import { ProductStage } from './ProductStage'
import { ProductStrip } from './ProductStrip'
import { ProgressBar } from './ProgressBar'
import { ScatterScene } from './ScatterScene'
import { SectionCounter } from './SectionCounter'
import { TickerBar } from './TickerBar'
import { useScrollExperience } from '../hooks/useScrollExperience'

export function ScrollExperience() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [ghostTransform, setGhostTransform] = useState('translate(0px, 0px)')

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const xRatio = e.clientX / window.innerWidth - 0.5
    const yRatio = e.clientY / window.innerHeight - 0.5
    setGhostTransform(`translate(${xRatio * 24}px, ${yRatio * 14}px)`)
  }, [])

  const scrollState = useScrollExperience(trackRef)

  return (
    <div onMouseMove={handleMouseMove}>
      <ProgressBar progress={scrollState.scrollYProgress} />
      <SectionCounter activeScene={scrollState.activeScene} />

      <div ref={trackRef} className="relative h-[1080vh]">
        <div className="sticky top-0 h-screen overflow-hidden bg-void">
          <ColourWash background={scrollState.colourWashBackground} />
          <GhostBackground transform={ghostTransform} stroke={scrollState.ghostStroke} />

          <ProductStage
            productIndex={scrollState.productIndex}
            animation={scrollState.productAnimation}
            scrambledName={scrollState.scrambledName}
          />

          <ScatterScene
            opacity={scrollState.scatterOpacity}
            items={scrollState.scatterItems}
          />

          <CtaScene
            opacity={scrollState.ctaOpacity}
            pointerEvents={scrollState.ctaPointerEvents}
          />

          <ProductStrip
            opacity={scrollState.productStripOpacity}
            activeIndex={scrollState.productIndex}
          />

          <TickerBar opacity={scrollState.tickerOpacity} />
        </div>
      </div>
    </div>
  )
}
