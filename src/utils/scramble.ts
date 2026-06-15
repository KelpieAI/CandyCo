const CHARS = 'X#@!Z2%&?$ABCDEFGH*'

export function scramble(
  onUpdate: (text: string) => void,
  finalText: string,
  duration = 500,
): () => void {
  const steps = 10
  const interval = duration / steps
  let step = 0

  const iv = setInterval(() => {
    step++
    const revealed = Math.floor((step / steps) * finalText.length)
    let out = ''

    for (let i = 0; i < finalText.length; i++) {
      if (finalText[i] === ' ') {
        out += ' '
        continue
      }
      if (i < revealed) {
        out += finalText[i]
      } else {
        out += CHARS[Math.floor(Math.random() * CHARS.length)]
      }
    }

    onUpdate(out)

    if (step >= steps) {
      clearInterval(iv)
      onUpdate(finalText)
    }
  }, interval)

  return () => clearInterval(iv)
}
