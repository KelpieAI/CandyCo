import type { ReactNode } from 'react'

interface FormFieldProps {
  icon: ReactNode
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
  required?: boolean
  placeholder?: string
  multiline?: boolean
  rows?: number
}

export function FormField({
  icon,
  label,
  value,
  onChange,
  type = 'text',
  required,
  placeholder,
  multiline = false,
  rows = 5,
}: FormFieldProps) {
  const fieldClass =
    'w-full border border-[#2a2a2a] bg-[#0a0a0a] py-4 pr-5 pl-14 text-[13px] leading-relaxed text-off placeholder:text-muted/60 outline-none transition-all hover:border-electric/25 focus:border-electric focus:bg-[#0d0d0d] focus:ring-2 focus:ring-electric/20'

  return (
    <div className="group relative">
      <label className="mb-3 flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] text-muted uppercase transition-colors group-focus-within:text-electric">
        {icon}
        {label}
        {required && <span className="text-electric">*</span>}
      </label>

      <div className="relative">
        <span
          className={`pointer-events-none absolute left-5 text-muted transition-colors group-focus-within:text-electric ${
            multiline ? 'top-5' : 'top-1/2 -translate-y-1/2'
          }`}
        >
          {icon}
        </span>

        {multiline ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            rows={rows}
            placeholder={placeholder}
            className={`${fieldClass} resize-none`}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            placeholder={placeholder}
            className={fieldClass}
          />
        )}
      </div>
    </div>
  )
}
