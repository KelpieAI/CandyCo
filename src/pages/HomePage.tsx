import type { CSSProperties } from 'react'
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
        className="home-hero"
        style={
          {
            marginTop: `${heroOffset}px`,
            '--home-hero-offset': `${heroOffset}px`,
          } as CSSProperties
        }
      >
        {/* Divider */}
        <div className="home-hero__divider" aria-hidden>
          <div className="home-hero__divider-pill">or</div>
        </div>

        {/* ── CONSUMER LANE ── */}
        <div className="home-hero__lane home-hero__lane--consumer">
          <div aria-hidden="true" className="home-hero__ghost home-hero__ghost--consumer">
            🍬🍭🥤
          </div>

          <div className="home-hero__block">
            <div className="home-hero__tag">
              <div className="home-hero__tag-pip home-hero__tag-pip--consumer" />
              For sweet lovers
            </div>

            <h2 className="home-hero__headline">
              Buying
              <br />
              for <em className="home-hero__em home-hero__em--consumer">yourself?</em>
            </h2>

            <p className="home-hero__sub">
              Browse the range. Add to basket.
              <br />
              Free delivery over £50.
            </p>
          </div>

          <div className="home-hero__block">
            <div className="home-hero__strip">
              {miniProducts.map((p) => (
                <div key={p.alt} className="home-hero__strip-item">
                  <div className="home-hero__strip-img">
                    <ProductImage src={p.image} alt={p.alt} />
                  </div>
                  <span className="home-hero__price">{p.price}</span>
                </div>
              ))}
            </div>

            <Link to="/shop" className="home-hero__cta home-hero__cta--consumer">
              Shop Drop 001 →
            </Link>
          </div>
        </div>

        {/* ── TRADE LANE ── */}
        <div className="home-hero__lane home-hero__lane--trade">
          <div aria-hidden="true" className="home-hero__ghost home-hero__ghost--trade">
            £
          </div>

          <div className="home-hero__block">
            <div className="home-hero__tag">
              <div className="home-hero__tag-pip home-hero__tag-pip--trade" />
              For retailers &amp; traders
            </div>

            <h2 className="home-hero__headline">
              Stocking
              <br />
              your <em className="home-hero__em home-hero__em--trade">shop?</em>
            </h2>

            <p className="home-hero__sub">
              Trade pricing. Bulk orders.
              <br />
              Repeat accounts. No fuss.
            </p>
          </div>

          <div className="home-hero__block">
            <div className="home-hero__stats">
              {[
                { num: '20', suffix: '+', label: 'Years trading' },
                { num: '1', suffix: 'kg', label: 'Min order' },
                { num: '50', suffix: '+', label: 'Product lines' },
              ].map((s) => (
                <div key={s.label} className="home-hero__stat">
                  <div className="home-hero__stat-num">
                    {s.num}
                    <em>{s.suffix}</em>
                  </div>
                  <div className="home-hero__stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <Link to="/wholesale" className="home-hero__cta home-hero__cta--trade">
              Open Trade Account →
            </Link>

            <p className="home-hero__note">
              <span>⚡</span>
              We respond within 24 hours
            </p>
          </div>
        </div>
      </div>

      <ScrollExperience />
    </div>
  )
}
