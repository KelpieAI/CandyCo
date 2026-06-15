import { SCENE_COUNT } from '../data/products'

interface SectionCounterProps {
  activeScene: number
}

export function SectionCounter({ activeScene }: SectionCounterProps) {
  return (
    <div className="inset-gutter-right fixed top-1/2 z-[500] flex -translate-y-1/2 flex-col gap-2.5">
      {Array.from({ length: SCENE_COUNT }, (_, i) => (
        <div
          key={i}
          className={`h-1 w-1 rounded-full transition-all duration-300 ${
            i === activeScene ? 'scale-[1.8] bg-acid' : 'bg-off/20'
          }`}
        />
      ))}
    </div>
  )
}
