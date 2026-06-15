interface ColourWashProps {
  background: string
}

export function ColourWash({ background }: ColourWashProps) {
  return (
    <div
      className="absolute inset-0 z-0 transition-[background] duration-[600ms] ease-in-out"
      style={{ background }}
    />
  )
}
