export function easeOutBack(t: number): number {
  const c1 = 1.70158
  const c3 = c1 + 1
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2)
}

export function getScrollProgress(scrollY: number, trackHeight: number, viewportHeight: number): number {
  const max = trackHeight - viewportHeight
  if (max <= 0) return 0
  return Math.min(Math.max(scrollY / max, 0), 1)
}

export function getScene(prog: number, scenes: { start: number; end: number }[]): number {
  for (let i = 0; i < scenes.length; i++) {
    if (prog >= scenes[i].start && prog < scenes[i].end) return i
  }
  return scenes.length - 1
}

export function sceneProgress(scene: number, prog: number, scenes: { start: number; end: number }[]): number {
  const s = scenes[scene]
  return Math.min(Math.max((prog - s.start) / (s.end - s.start), 0), 1)
}

export type ProductAnimation = {
  scale: number
  opacity: number
  priceOpacity: number
  priceY: number
}

export function computeProductAnimation(sp: number): ProductAnimation {
  if (sp < 0.2) {
    const t = sp / 0.2
    return {
      scale: easeOutBack(t),
      opacity: Math.min(t * 3, 1),
      priceOpacity: 0,
      priceY: 30,
    }
  }

  if (sp < 0.7) {
    const t2 = (sp - 0.2) / 0.5
    const priceReveal = Math.min(t2 * 2, 1)
    return {
      scale: 1,
      opacity: 1,
      priceOpacity: priceReveal,
      priceY: (1 - priceReveal) * 30,
    }
  }

  const t = (sp - 0.7) / 0.3
  return {
    scale: 1 - t * 0.7,
    opacity: 1 - t,
    priceOpacity: 1 - t,
    priceY: t * -20,
  }
}

export type ScatterItemAnimation = {
  opacity: number
  scale: number
}

export function computeScatterAnimation(sp: number, index: number): ScatterItemAnimation {
  const delay = index * 0.08
  const t = Math.max(sp - delay, 0) / (1 - delay)
  const clamped = Math.min(t * 1.5, 1)
  return {
    opacity: clamped,
    scale: 0.3 + clamped * 0.7,
  }
}
