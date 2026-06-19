export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

function parseHex(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ]
}

export function lerpHex(from: string, to: string, t: number): string {
  const a = parseHex(from)
  const b = parseHex(to)
  return `rgb(${a.map((c, i) => Math.round(lerp(c, b[i], t))).join(',')})`
}
