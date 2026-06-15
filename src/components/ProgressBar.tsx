import { motion, useTransform, type MotionValue } from 'framer-motion'

interface ProgressBarProps {
  progress: MotionValue<number>
}

export function ProgressBar({ progress }: ProgressBarProps) {
  const width = useTransform(progress, (value) => `${value * 100}%`)

  return (
    <motion.div
      className="fixed top-0 left-0 z-[999] h-0.5 bg-acid"
      style={{ width }}
    />
  )
}
