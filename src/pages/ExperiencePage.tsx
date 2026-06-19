import { useCallback, useEffect, useRef, useState } from 'react'
import { ColourWash } from '../components/ColourWash'
import { CtaScene } from '../components/CtaScene'
import { CustomCursor } from '../components/CustomCursor'
import { GhostBackground } from '../components/GhostBackground'
import { Hero } from '../components/Hero'
import { HomeNav } from '../components/HomeNav'
import { ProductStage } from '../components/ProductStage'
import { ProductStrip } from '../components/ProductStrip'
import { ProgressBar } from '../components/ProgressBar'
import { ScatterScene } from '../components/ScatterScene'
import { SectionCounter } from '../components/SectionCounter'
import { TickerBar } from '../components/TickerBar'
import { TradeBanner } from '../components/TradeBanner'
import { useScrollExperience } from '../hooks/useScrollExperience'

const BANNER_HEIGHT = 36
const NAV_HEIGHT = 60

function readBannerVisible(): boolean {
  if (typeof window === 'undefined') return true
  return sessionStorage.getItem('candyco_banner_dismissed') !== 'true'
}

export function ExperiencePage() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [ghostTransform, setGhostTransform] = useState('translate(0px, 0px)')
  const [bannerVisible, setBannerVisible] = useState(readBannerVisible)
  const [navT, setNavT] = useState(0)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const xRatio = e.clientX / window.innerWidth - 0.5
    const yRatio = e.clientY / window.innerHeight - 0.5
    setGhostTransform(`translate(${xRatio * 24}px, ${yRatio * 14}px)`)
  }, [])

  const handleDismissBanner = useCallback(() => {
    setBannerVisible(false)
    sessionStorage.setItem('candyco_banner_dismissed', 'true')
  }, [])

  useEffect(() => {
    let rafId = 0

    const updateNavT = () => {
      const bannerH = bannerVisible ? BANNER_HEIGHT : 0
      const heroH = window.innerHeight - bannerH - NAV_HEIGHT
      const fadeStart = heroH
      const t = Math.min(Math.max((window.scrollY - fadeStart) / 240, 0), 1)
      setNavT(t)
    }

    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(updateNavT)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    updateNavT()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [bannerVisible])

  const scrollState = useScrollExperience(trackRef)

  return (
    <div onMouseMove={handleMouseMove}>
      <CustomCursor />
      <ProgressBar progress={scrollState.scrollYProgress} />
      <TradeBanner visible={bannerVisible} onDismiss={handleDismissBanner} />
      <HomeNav bannerVisible={bannerVisible} navT={navT} />
      <SectionCounter activeScene={scrollState.activeScene} />

      <Hero bannerVisible={bannerVisible} />

      <div ref={trackRef} className="relative h-[1200vh]">
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
