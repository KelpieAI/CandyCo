import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CustomCursor } from '../components/CustomCursor'
import { Nav } from '../components/Nav'

const miniProducts = [
  { emoji: '🥤', price: '£6' },
  { emoji: '🍓', price: '£6' },
  { emoji: '🫐', price: '£6' },
  { emoji: '🫧', price: '£6' },
  { emoji: '🟡', price: '£4+' },
]

export function HomePage() {
  const [bannerVisible, setBannerVisible] = useState(() => {
    if (typeof window === 'undefined') return true
    return sessionStorage.getItem('candyco_banner_dismissed') !== 'true'
  })

  const handleDismiss = () => {
    setBannerVisible(false)
    sessionStorage.setItem('candyco_banner_dismissed', 'true')
  }

  // Nav height from CSS var: 72px mobile, 80px desktop. Use 80px for calculation.
  // Banner height: 36px
  const bannerH = bannerVisible ? 36 : 0
  const navH = 80
  const heroOffset = bannerH + navH

  return (
    <div style={{ background: '#080808', minHeight: '100vh' }}>
      <CustomCursor />

      {/* ── TRADE BANNER ── */}
      {bannerVisible && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 600,
            background: '#c8f535',
            height: '36px',
            padding: '0 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              color: '#080808',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            🤝 Are you a retailer or market trader? Open a wholesale account for trade
            pricing and bulk orders.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <Link
              to="/wholesale"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                background: '#080808',
                color: '#c8f535',
                padding: '6px 14px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Open Trade Account →
            </Link>
            <button
              onClick={handleDismiss}
              style={{
                fontSize: '12px',
                color: 'rgba(8,8,8,0.4)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                padding: '0 4px',
                lineHeight: 1,
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* ── NAV — offset by banner if visible ── */}
      <div style={{ paddingTop: `${bannerH}px` }}>
        <Nav />
      </div>

      {/* ── HERO ── */}
      <div
        style={{
          marginTop: `${heroOffset}px`,
          height: `calc(100vh - ${heroOffset}px)`,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          position: 'relative',
        }}
      >
        {/* Divider */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '50%',
            width: '1px',
            background: '#1e1e1e',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: '#080808',
              border: '1px solid #1e1e1e',
              padding: '8px 14px',
              fontFamily: 'var(--font-mono)',
              fontSize: '8px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              color: '#555',
              whiteSpace: 'nowrap',
            }}
          >
            or
          </div>
        </div>

        {/* ── CONSUMER LANE ── */}
        <div
          style={{
            background: '#080808',
            padding: '60px 56px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            height: '100%',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-10px',
              fontSize: '180px',
              lineHeight: 1,
              opacity: 0.05,
              pointerEvents: 'none',
              userSelect: 'none',
              filter: 'grayscale(1)',
              letterSpacing: '-10px',
              zIndex: 0,
            }}
          >
            🍬🍭🥤
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '8px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#555',
                border: '1px solid #1e1e1e',
                padding: '5px 12px',
                marginBottom: '32px',
              }}
            >
              <div
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: '#ff2d78',
                  flexShrink: 0,
                }}
              />
              For sweet lovers
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(48px, 5.5vw, 84px)',
                lineHeight: 0.9,
                letterSpacing: '0.01em',
                color: '#ede9e1',
                margin: '0 0 12px 0',
              }}
            >
              Buying
              <br />
              for <em style={{ fontStyle: 'normal', color: '#ff2d78' }}>yourself?</em>
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#555',
                lineHeight: 1.8,
                margin: '16px 0 0 0',
              }}
            >
              Browse the range. Add to basket.
              <br />
              Free delivery over £50.
            </p>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', gap: '2px', marginBottom: '24px' }}>
              {miniProducts.map((p, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    background: '#111',
                    border: '1px solid #1e1e1e',
                    padding: '12px 8px',
                    textAlign: 'center',
                  }}
                >
                  <span style={{ fontSize: '26px', display: 'block', marginBottom: '4px' }}>
                    {p.emoji}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-bebas)',
                      fontSize: '16px',
                      color: '#c8f535',
                    }}
                  >
                    {p.price}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/shop"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                background: '#ff2d78',
                color: '#fff',
                padding: '16px 28px',
                textDecoration: 'none',
              }}
            >
              Shop Drop 001 →
            </Link>
          </div>
        </div>

        {/* ── TRADE LANE ── */}
        <div
          style={{
            background: '#111111',
            padding: '60px 56px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
            height: '100%',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '-40px',
              right: '-10px',
              fontFamily: 'var(--font-bebas)',
              fontSize: '320px',
              lineHeight: 1,
              color: 'transparent',
              WebkitTextStroke: '1px rgba(200,245,53,0.05)',
              pointerEvents: 'none',
              userSelect: 'none',
              zIndex: 0,
            }}
          >
            £
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '8px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#555',
                border: '1px solid #1e1e1e',
                padding: '5px 12px',
                marginBottom: '32px',
              }}
            >
              <div
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: '#c8f535',
                  flexShrink: 0,
                }}
              />
              For retailers &amp; traders
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-bebas)',
                fontSize: 'clamp(48px, 5.5vw, 84px)',
                lineHeight: 0.9,
                letterSpacing: '0.01em',
                color: '#ede9e1',
                margin: '0 0 12px 0',
              }}
            >
              Stocking
              <br />
              your <em style={{ fontStyle: 'normal', color: '#c8f535' }}>shop?</em>
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#555',
                lineHeight: 1.8,
                margin: '16px 0 0 0',
              }}
            >
              Trade pricing. Bulk orders.
              <br />
              Repeat accounts. No fuss.
            </p>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', gap: 0, marginBottom: '32px' }}>
              {[
                { num: '20', suffix: '+', label: 'Years trading' },
                { num: '1', suffix: 'kg', label: 'Min order' },
                { num: '50', suffix: '+', label: 'Product lines' },
              ].map((s, i, arr) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    paddingRight: i < arr.length - 1 ? '20px' : 0,
                    marginRight: i < arr.length - 1 ? '20px' : 0,
                    borderRight: i < arr.length - 1 ? '1px solid #1e1e1e' : 'none',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-bebas)',
                      fontSize: '40px',
                      color: '#ede9e1',
                      lineHeight: 1,
                      marginBottom: '2px',
                    }}
                  >
                    {s.num}
                    <em style={{ fontStyle: 'normal', color: '#c8f535', fontSize: '0.65em' }}>
                      {s.suffix}
                    </em>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '7px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      color: '#555',
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/wholesale"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                background: '#c8f535',
                color: '#080808',
                padding: '16px 28px',
                textDecoration: 'none',
                marginBottom: '12px',
              }}
            >
              Open Trade Account →
            </Link>

            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '8px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: '#555',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                margin: '12px 0 0 0',
              }}
            >
              <span style={{ color: '#c8f535' }}>⚡</span>
              We respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
