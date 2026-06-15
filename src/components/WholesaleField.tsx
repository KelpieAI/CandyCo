import type { ReactNode } from 'react'

interface WholesaleFieldProps {
  label: string
  icon: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  type?: 'text' | 'email' | 'tel'
  placeholder?: string
  multiline?: boolean
  className?: string
  children?: ReactNode
}

export function WholesaleField({
  label,
  icon,
  value,
  onChange,
  required,
  type = 'text',
  placeholder,
  multiline = false,
  className = '',
  children,
}: WholesaleFieldProps) {
  return (
    <div className={`wholesale-field ${className}`.trim()}>
      <label className="wholesale-field__label">
        {icon} {label}
        {required && <span className="wholesale-field__required"> ●</span>}
      </label>

      {children ?? (
        <>
          {multiline ? (
            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              required={required}
              placeholder={placeholder}
              className="wholesale-field__input wholesale-field__input--area"
            />
          ) : (
            <input
              type={type}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              required={required}
              placeholder={placeholder}
              className="wholesale-field__input"
            />
          )}
        </>
      )}
    </div>
  )
}

interface WholesaleSelectProps {
  label: string
  icon: string
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
  className?: string
}

export function WholesaleSelect({
  label,
  icon,
  value,
  onChange,
  options,
  className = '',
}: WholesaleSelectProps) {
  return (
    <WholesaleField label={label} icon={icon} value={value} onChange={onChange} className={className}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="wholesale-field__input wholesale-field__select"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </WholesaleField>
  )
}

interface FormDividerProps {
  label: string
}

export function FormDivider({ label }: FormDividerProps) {
  return <div className="wholesale-form-divider">{label}</div>
}
