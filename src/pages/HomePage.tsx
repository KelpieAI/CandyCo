import { Link } from 'react-router-dom'
import { productImagePath } from '@shared/productGallery'
import { CustomCursor } from '../components/CustomCursor'
import { Nav } from '../components/Nav'
import { ProductImage } from '../components/ProductImage'
import { ScrollExperience } from '../components/ScrollExperience'
import { TradeBanner, TRADE_BANNER_HEIGHT, useTradeBanner } from '../components/TradeBanner'

/** Transparent removebg assets — avoids multiply blend on dark strip cells */
const miniProducts = [
  {
    image: productImagePath('imgi_13_img_3SKGJAZD0F9BCAFTAXX57K4SBB.png'),
    alt: 'Cola Bottles',
    price: '£6',
  },
  {
    image: productImagePath('imgi_15_img_17J92W6ZBJ8W5RYH5WSS4F2HYQ.png'),
    alt: 'Strawberries',
    price: '£6',
  },
  {
    image: productImagePath('imgi_10_img_070JV3S3D99HJ9H2WFKYV47B8J.png'),
    alt: 'Blue Raspberry',
    price: '£6',
  },
  {
    image: productImagePath('imgi_14_img_5TQWDVF5TX88NA7J0FJJNFGQK9.png'),
    alt: 'Fizzy Rings',
    price: '£6',
  },
  {
    image: productImagePath('imgi_16_img_0YC962MEVA9BNTMK76EHEPKZ90.png'),
    alt: 'Sour Belts',
    price: '£4+',
  },
]

export function HomePage() {
  const { visible: bannerVisible, dismiss: handleDismiss, height: bannerH } =
    useTradeBanner()

  // Nav height from CSS var: 72px mobile, 80px desktop. Use 80px for calculation.
  const navH = 80
  const heroOffset = bannerH + navH

  return (
    <div style={{ background: '#080808', minHeight: '100vh' }}>
      <CustomCursor />

      <TradeBanner visible={bannerVisible} onDismiss={handleDismiss} />
      <Nav topOffset={bannerVisible ? TRADE_BANNER_HEIGHT : 0} />

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
              {miniProducts.map((p) => (
                <div
                  key={p.alt}
                  style={{
                    flex: 1,
                    background: '#111',
                    border: '1px solid #1e1e1e',
                    padding: '12px 8px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '64px',
                      marginBottom: '4px',
                    }}
                  >
                    <ProductImage
                      src={p.image}
                      alt={p.alt}
                      style={{ maxHeight: '64px', maxWidth: '100%', width: 'auto' }}
                    />
                  </div>
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

      <ScrollExperience />
    </div>
  )
}
