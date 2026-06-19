import {
  useMotionValueEvent,
  useScroll,
  type MotionValue,
} from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { products, SCENES } from '../data/products'
import {
  computeProductAnimation,
  computeScatterAnimation,
  getScene,
  sceneProgress,
} from '../utils/easing'
import { scramble } from '../utils/scramble'

export interface ScrollExperienceState {
  activeScene: number
  colourWashBackground: string
  ghostStroke: string
  productIndex: number
  productAnimation: ReturnType<typeof computeProductAnimation>
  scrambledName: string
  productStripOpacity: number
  scatterOpacity: number
  scatterItems: ReturnType<typeof computeScatterAnimation>[]
  ctaOpacity: number
  ctaPointerEvents: boolean
  tickerOpacity: number
}

const defaultProductAnim = {
  scale: 0.1,
  opacity: 0,
  priceOpacity: 0,
  priceY: 30,
}

function sceneLocalProgress(prog: number, scene: number): number {
  return sceneProgress(scene, prog, SCENES)
}

export function useScrollExperience(trackRef: React.RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  })

  const [state, setState] = useState<ScrollExperienceState>({
    activeScene: 0,
    colourWashBackground: '#080808',
    ghostStroke: '1px rgba(200,245,53,0.06)',
    productIndex: -1,
    productAnimation: defaultProductAnim,
    scrambledName: products[0].name,
    productStripOpacity: 0,
    scatterOpacity: 0,
    scatterItems: Array(6).fill({ opacity: 0, scale: 0.3 }),
    ctaOpacity: 0,
    ctaPointerEvents: false,
    tickerOpacity: 0,
  })

  const currentProductRef = useRef(-1)
  const scrambleCleanupRef = useRef<(() => void) | null>(null)

  const swapProduct = useCallback((index: number) => {
    if (index === currentProductRef.current) return
    currentProductRef.current = index

    const p = products[index]
    scrambleCleanupRef.current?.()
    scrambleCleanupRef.current = scramble(
      (text) => setState((prev) => ({ ...prev, scrambledName: text })),
      p.name,
      420,
    )

    setState((prev) => ({
      ...prev,
      productIndex: index,
      colourWashBackground: `radial-gradient(ellipse at center, ${p.wash} 0%, #080808 70%)`,
      ghostStroke: `1px ${p.accent}18`,
    }))
  }, [])

  const updateFromProgress = useCallback(
    (prog: number) => {
      const scene = getScene(prog, SCENES)
      const sp = sceneLocalProgress(prog, scene)

      if (scene >= 0 && scene <= 4) {
        const productIndex = scene
        swapProduct(productIndex)
        setState((prev) => ({
          ...prev,
          activeScene: scene,
          scatterOpacity: 0,
          scatterItems: Array(6).fill({ opacity: 0, scale: 0.3 }),
          ctaOpacity: 0,
          ctaPointerEvents: false,
          tickerOpacity: 0,
          productStripOpacity: 1,
          productAnimation: computeProductAnimation(sp),
        }))
        return
      }

      if (scene === 5) {
        currentProductRef.current = -1
        setState({
          activeScene: scene,
          productIndex: -1,
          productAnimation: defaultProductAnim,
          productStripOpacity: 0,
          colourWashBackground:
            'radial-gradient(ellipse at center, rgba(255,45,120,0.06) 0%, #080808 70%)',
          ghostStroke: '1px rgba(255,45,120,0.08)',
          scatterOpacity: 1,
          scatterItems: Array.from({ length: 6 }, (_, i) => computeScatterAnimation(sp, i)),
          ctaOpacity: 0,
          ctaPointerEvents: false,
          tickerOpacity: 0,
          scrambledName: products[0].name,
        })
        return
      }

      const fadeIn = Math.min(sp * 3, 1)
      currentProductRef.current = -1
      setState({
        activeScene: scene,
        productIndex: -1,
        productAnimation: defaultProductAnim,
        productStripOpacity: 0,
        scatterOpacity: 0,
        scatterItems: Array(6).fill({ opacity: 0, scale: 0.3 }),
        colourWashBackground: '#080808',
        ghostStroke: '1px rgba(200,245,53,0.04)',
        ctaOpacity: fadeIn,
        ctaPointerEvents: fadeIn > 0.5,
        tickerOpacity: Math.min((sp - 0.3) * 3, 1),
        scrambledName: products[0].name,
      })
    },
    [swapProduct],
  )

  useMotionValueEvent(scrollYProgress, 'change', updateFromProgress)

  useEffect(() => {
    updateFromProgress(scrollYProgress.get())
    return () => scrambleCleanupRef.current?.()
  }, [scrollYProgress, updateFromProgress])

  return {
    scrollYProgress,
    ...state,
  }
}

export type ScrollProgress = MotionValue<number>
