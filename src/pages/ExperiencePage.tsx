import { useCallback, useRef, useState } from 'react'
import { ColourWash } from '../components/ColourWash'
import { CtaScene } from '../components/CtaScene'
import { CustomCursor } from '../components/CustomCursor'
import { GhostBackground } from '../components/GhostBackground'
import { IntroScene } from '../components/IntroScene'
import { Nav } from '../components/Nav'
import { ProductStage } from '../components/ProductStage'
import { ProductStrip } from '../components/ProductStrip'
import { ProgressBar } from '../components/ProgressBar'
import { ScatterScene } from '../components/ScatterScene'
import { SectionCounter } from '../components/SectionCounter'
import { TickerBar } from '../components/TickerBar'
import { useScrollExperience } from '../hooks/useScrollExperience'

export function ExperiencePage() {
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
      <CustomCursor />
      <ProgressBar progress={scrollState.scrollYProgress} />
      <Nav />
      <SectionCounter activeScene={scrollState.activeScene} />

      <div ref={trackRef} className="relative h-[1200vh]">
        <div className="sticky top-0 h-screen overflow-hidden bg-void">
          <ColourWash background={scrollState.colourWashBackground} />
          <GhostBackground transform={ghostTransform} stroke={scrollState.ghostStroke} />

          <IntroScene
            opacity={scrollState.introOpacity}
            translateY={scrollState.introTranslateY}
          />

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
