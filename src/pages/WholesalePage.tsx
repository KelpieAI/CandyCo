import { ArrowRight } from 'lucide-react'
import { useState, type Dispatch, type FormEvent, type SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import { Cursor } from '../components/Cursor'
import { FormDivider, WholesaleField, WholesaleSelect } from '../components/WholesaleField'
import { Nav } from '../components/Nav'
import { WholesaleSuccessOverlay } from '../components/wholesale/WholesaleSuccessOverlay'
import { WholesaleTicker } from '../components/wholesale/WholesaleTicker'
import { initialWholesaleForm, VOLUME_OPTIONS, type WholesaleFormData } from '../types/wholesale'

const CREDENTIALS = [
  {
    emoji: '📦',
    title: '1kg minimum per line',
    body: 'Every product starts at 1kg. Volume pricing kicks in from there.',
  },
  {
    emoji: '🚚',
    title: 'Nationwide delivery',
    body: 'Dispatched from Leicestershire. Anywhere in the UK, reliably.',
  },
  {
    emoji: '🔄',
    title: 'Repeat order accounts',
    body: 'Trade account setup, regular restocks on your schedule, priority stock.',
  },
  {
    emoji: '📞',
    title: 'Response within 24 hours',
    body: 'The team gets back to you within a working day. No automated nonsense.',
  },
]

const STATS = [
  { value: '20', suffix: '+', label: 'Years trading' },
  { value: '50', suffix: '+', label: 'Product lines' },
  { value: '1', suffix: 'kg', label: 'Min drop size' },
]

function setField<K extends keyof WholesaleFormData>(
  setter: Dispatch<SetStateAction<WholesaleFormData>>,
  key: K,
  value: string,
) {
  setter((prev) => ({ ...prev, [key]: value }))
}

export function WholesalePage() {
  const [form, setForm] = useState<WholesaleFormData>(initialWholesaleForm)
  const [showSuccess, setShowSuccess] = useState(false)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setShowSuccess(true)
  }

  function handleBack() {
    setShowSuccess(false)
    setForm(initialWholesaleForm)
  }

  return (
    <div className="min-h-screen bg-[#080808] text-[#ede9e1]">
      <Cursor />
      <Nav />
      <WholesaleTicker />

      <div className="wholesale-layout">
        <aside className="wholesale-panel wholesale-panel--left">
          <div aria-hidden="true" className="wholesale-ghost-bulk">
            BULK
          </div>

          <div className="wholesale-panel__inner">
            <nav className="wholesale-breadcrumb">
              <Link to="/">← Experience</Link>
              <span> / Trade Accounts · Leicestershire</span>
            </nav>

            <div className="wholesale-eyebrow">Wholesale</div>

            <h1 className="wholesale-title">
              BULK ORDERS<span className="text-[#c8f535]">.</span>
            </h1>

            <p className="wholesale-deck">Bulk tubs. Repeat orders. No bullshit.</p>

            <div className="wholesale-credentials">
              {CREDENTIALS.map((item) => (
                <div key={item.title} className="wholesale-credential">
                  <span className="wholesale-credential__icon">{item.emoji}</span>
                  <div>
                    <p className="wholesale-credential__title">{item.title}</p>
                    <p className="wholesale-credential__body">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="wholesale-stats">
              {STATS.map((stat) => (
                <div key={stat.label} className="wholesale-stat">
                  <p className="wholesale-stat__num">
                    {stat.value}
                    <span className="wholesale-stat__suffix">{stat.suffix}</span>
                  </p>
                  <p className="wholesale-stat__label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <section className="wholesale-panel">
          <header className="wholesale-form-header">
            <h2 className="wholesale-form-title">Trade Enquiry</h2>
            <p className="wholesale-form-sub">
              All fields marked <span className="text-[#ff2d78]">●</span> are required
            </p>
          </header>

          <form onSubmit={handleSubmit}>
            <FormDivider label="Business Details" />
            <div className="wholesale-form-grid">
              <WholesaleField
                label="Business Name"
                icon="🏢"
                value={form.businessName}
                onChange={(v) => setField(setForm, 'businessName', v)}
                required
              />
              <WholesaleField
                label="Contact Name"
                icon="👤"
                value={form.contactName}
                onChange={(v) => setField(setForm, 'contactName', v)}
                required
              />
              <WholesaleField
                label="Email"
                icon="✉️"
                type="email"
                value={form.email}
                onChange={(v) => setField(setForm, 'email', v)}
                required
              />
              <WholesaleField
                label="Phone"
                icon="📱"
                type="tel"
                value={form.phone}
                onChange={(v) => setField(setForm, 'phone', v)}
                placeholder="Optional"
              />
            </div>

            <FormDivider label="Order Details" />
            <div className="wholesale-form-grid">
              <WholesaleField
                label="Location"
                icon="📍"
                value={form.location}
                onChange={(v) => setField(setForm, 'location', v)}
                placeholder="City or postcode"
                required
              />
              <WholesaleSelect
                label="Est. Monthly Volume"
                icon="📦"
                value={form.volume}
                onChange={(v) => setField(setForm, 'volume', v)}
                options={VOLUME_OPTIONS}
              />
              <WholesaleField
                label="Message"
                icon="💬"
                value={form.message}
                onChange={(v) => setField(setForm, 'message', v)}
                placeholder="Tell us what you're after — product lines, volumes, delivery schedule, anything else..."
                multiline
                required
                className="wholesale-form-grid__full"
              />
            </div>

            <div className="wholesale-submit-row">
              <button type="submit" className="wholesale-submit-btn group">
                Submit Enquiry
                <ArrowRight
                  size={16}
                  strokeWidth={2.5}
                  className="transition-transform duration-150 group-hover:translate-x-1"
                />
              </button>
              <div className="wholesale-submit-note">
                <span>⚡</span>
                <p className="wholesale-submit-note__text">We reply within 24hrs</p>
              </div>
            </div>
          </form>
        </section>
      </div>

      <WholesaleSuccessOverlay visible={showSuccess} onBack={handleBack} />
    </div>
  )
}
