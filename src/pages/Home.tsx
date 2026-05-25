import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getNewsArticles } from '../data'
import Banner2 from '../assets/banner2.png'
import ManasLogo from '../assets/manas.png'
import GazpromLogo from '../assets/gazprom.jpg'
import MfkLogo from '../assets/mmc.jpg'
import MmsLogo from '../assets/airplane.jpg'
import GlobeLogo from '../assets/avia.jpg'
import Cay from '../assets/cay.jpg'
import Security from '../assets/security.jpg'
import Error from '../assets/error.jpg'
import Smm from '../assets/smm.jpg'
import BitcoinIcon from '../assets/bitcoin.png'
import Footer from '../components/Footer'

const logoItems = [
  <img src={ManasLogo} alt="Manas" style={{ height: 76, objectFit: 'contain', display: 'block' }} />,
  <img src={GazpromLogo} alt="Gazprom" style={{ height: 76, objectFit: 'contain', display: 'block' }} />,
  <img src={MfkLogo} alt="MFK" style={{ height: 76, objectFit: 'contain', display: 'block' }} />,
  <img src={MmsLogo} alt="MMS" style={{ height: 76, objectFit: 'contain', display: 'block' }} />,
  <img src={GlobeLogo} alt="Globe" style={{ height: 76, objectFit: 'contain', display: 'block' }} />,
]

const marqueeItems = [
  ...logoItems, ...logoItems, ...logoItems, ...logoItems, ...logoItems,
  ...logoItems, ...logoItems, ...logoItems, ...logoItems, ...logoItems,
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0)
  const newsArticles = getNewsArticles()
  const [main, ...rest] = newsArticles
  const { t } = useTranslation()

  const faqs = [
    { q: t('home.faq1Q'), a: t('home.faq1A') },
    { q: t('home.faq2Q'), a: t('home.faq2A') },
    { q: t('home.faq3Q'), a: t('home.faq3A') },
    { q: t('home.faq4Q'), a: t('home.faq4A') },
    { q: t('home.faq5Q'), a: t('home.faq5A') },
  ]

  return (
    <div style={{ fontFamily: 'sans-serif', overflowX: 'hidden' }}>

      <style>{`
        .marquee-outer {
          width: 100%;
          overflow: hidden;
          padding: 18px 0;
          background: #fff;
        }
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 64px;
          animation: marquee 20s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        html { scroll-behavior: smooth; }

        /* ── Button hover effects ── */
        .btn-hero-primary {
          transition: box-shadow 0.2s, filter 0.2s, transform 0.15s !important;
        }
        .btn-hero-primary:hover {
          box-shadow: 0 0 0 4px rgba(232, 25, 44, 0.18), 0 4px 18px rgba(255, 90, 46, 0.35) !important;
          filter: brightness(1.08) !important;
          transform: translateY(-1px) !important;
        }
        .btn-hero-secondary {
          transition: border-color 0.2s, color 0.2s, background 0.2s, box-shadow 0.2s, transform 0.15s !important;
        }
        .btn-hero-secondary:hover {
          border-color: transparent !important;
          color: #fff !important;
          background: linear-gradient(51.24deg, #D4151C 22.63%, #D35400 82.84%) !important;
          box-shadow: 0 4px 16px rgba(212, 21, 28, 0.3) !important;
          transform: translateY(-1px) !important;
        }
        .btn-news-more {
          transition: border-color 0.2s, color 0.2s, background 0.2s, box-shadow 0.2s, transform 0.15s !important;
        }
        .btn-news-more:hover {
          border-color: transparent !important;
          color: #fff !important;
          background: linear-gradient(51.24deg, #D4151C 22.63%, #D35400 82.84%) !important;
          box-shadow: 0 4px 16px rgba(212, 21, 28, 0.3) !important;
          transform: translateY(-1px) !important;
        }
        .btn-cta {
          transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.15s !important;
        }
        .btn-cta:hover {
          background: linear-gradient(51.24deg, #D4151C 22.63%, #D35400 82.84%) !important;
          color: #fff !important;
          box-shadow: 0 0 0 3px rgba(255,255,255,0.35), 0 4px 16px rgba(212, 21, 28, 0.35) !important;
          transform: translateY(-1px) !important;
        }

        /* ── Круглые стрелки ── */
        .arrow-circle {
          transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.15s;
        }
        .arrow-circle:hover {
          background: linear-gradient(51.24deg, #D4151C 22.63%, #D35400 82.84%) !important;
          border-color: transparent !important;
          color: #fff !important;
          transform: scale(1.1);
        }

        @media (max-width: 850px) {

          .hero-section {
            padding: 20px 12px 32px 2px!important;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .hero-text-box {
            padding: 28px 20px 32px !important;
            min-height: auto !important;
            border-radius: 20px !important;
          }
          .hero-text-box h1 {
            font-size: 2rem !important;
            margin-bottom: 14px !important;
          }
          .hero-text-box p {
            font-size: 13px !important;
            margin-bottom: 24px !important;
          }
          .hero-buttons {
            flex-direction: column !important;
            gap: 10px !important;
          }
          .hero-buttons a {
            min-width: unset !important;
            width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
          }
          .hero-image-box {
            min-height: 200px !important;
            border-radius: 20px !important;
            box-shadow: 0 8px 24px rgba(0,0,0,0.1) !important;
          }

          .marquee-section {
            padding: 80px 0 !important;
          }
          .marquee-track {
            gap: 24px !important;
            animation-duration: 10s !important;
          }
          .marquee-track img {
            height: 60px !important;
          }
          .marquee-track > div {
            padding: 0 12px !important;
          }

          .why-section {
            padding: 56px 0 !important;
          }
          .why-choose-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .why-card {
            height: 400px !important;
          }
          .why-card-num {
            font-size: 200px !important;
            margin-bottom: -40px !important;
          }
          .why-card-title {
            font-size: 23px !important;
          }

          .services-section {
            padding: 36px 0 !important;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
            padding: 0 !important;
          }
          .service-card {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            justify-content: flex-start !important;
            gap: 0 !important;
            padding: 22px 18px 24px !important;
            border-radius: 14px !important;
            box-shadow: none !important;
          }
          .service-card:first-child {
            background: linear-gradient(135deg, #e8192c 0%, #ff5a2e 100%) !important;
            border: none !important;
          }
          .service-card > div:first-child {
            width: 44px !important;
            height: 44px !important;
            min-width: 44px !important;
            margin-bottom: 16px !important;
            flex-shrink: 0 !important;
          }
          .service-card h3 {
            font-size: 15px !important;
            margin: 0 0 10px !important;
            line-height: 1.3 !important;
          }
          .service-card p {
            font-size: 13px !important;
            margin: 0 !important;
            margin-top: auto !important;
            line-height: 1.7 !important;
          }

          .faq-section {
            padding: 56px 0 !important;
          }
          .faq-question {
            font-size: 13px !important;
            padding: 16px 14px !important;
          }
          .faq-answer {
            font-size: 13px !important;
            padding: 0 14px 16px !important;
          }

          .news-title-section {
            padding: 40px 16px 28px !important;
          }
          .news-section {
            padding: 0 12px 80px !important;
          }
          .news-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .news-main-img {
            min-height: 180px !important;
            max-height: 200px !important;
          }
          .news-main-info {
            padding: 20px 16px 16px !important;
          }
          .news-main-info h3 {
            font-size: 15px !important;
          }
          .news-side-item {
            padding: 12px 14px !important;
          }
          .news-side-img {
            width: 68px !important;
            height: 68px !important;
          }
          .news-side-title {
            font-size: 13px !important;
          }

          /* ── CTA мобильный ── */
          .cta-banner {
            height: 500px !important;
            padding: 32px 20px 0 20px !important;
            margin: 0 12px !important;
            border-radius: 16px !important;
            overflow: hidden !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .cta-content {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 40px !important;
            width: 100% !important;
            padding: 0 !important;
          }
          .cta-title-wrap {
            width: 100% !important;
            height: auto !important;
          }
          .cta-title-wrap h2 {
            font-size: 1.8rem !important;
            text-align: left !important;
            font-weight: 800 !important;
          }
          .cta-right {
            align-items: flex-start !important;
            max-width: 100% !important;
          }
          .cta-right p {
            text-align: left !important;
          }

          .cta-bitcoin {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            transform: none !important;
            display: flex !important;
            justify-content: center !important;
            width: 100% !important;
            margin-top: 28px !important;
            flex-shrink: 0 !important;
          }
          .cta-bitcoin img {
            width: 300px !important;
            height: 160px !important;
            margin-bottom: -80px !important;
            object-fit: contain !important;
          }
        }
      `}</style>

      {/* ───── Hero ───── */}
      <section className="hero-section" style={{ background: 'white', overflow: 'hidden', padding: '48px 24px 72px' }}>
        <div className="hero-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 24, alignItems: 'stretch' }}>
          <div className="hero-text-box" style={{ background: 'rgba(245, 247, 250, 1)', borderRadius: 32, padding: '58px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 520, border: '1px solid #eef1f7' }}>
            <h1 style={{ fontSize: 'clamp(2.8rem,4vw,3.4rem)', fontWeight: 900, lineHeight: 1.05, color: '#111', margin: '0 0 20px', whiteSpace: 'pre-line' }}>
              {t('home.heroTitle')}
            </h1>
            <p style={{ color: '#6b7280', fontSize: 15, lineHeight: 1.85, maxWidth: 440, margin: '0 0 36px' }}>
              {t('home.heroDesc')}
            </p>
            <div className="hero-buttons" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link
                to="/request"
                className="btn-hero-primary"
                style={{ background: 'linear-gradient(135deg, #e8192c 0%, #ff5a2e 100%)', color: '#fff', fontWeight: 700, padding: '14px 30px', borderRadius: 14, fontSize: 14, textDecoration: 'none', minWidth: 160, textAlign: 'center' }}
              >
                {t('home.heroBtn1')}
              </Link>
              <Link
                to="/about"
                className="btn-hero-secondary"
                style={{ border: '1px solid #d1d5db', color: '#111', fontWeight: 700, padding: '14px 30px', borderRadius: 14, fontSize: 14, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', minWidth: 160, justifyContent: 'center' }}
              >
                {t('home.heroBtn2')} <span style={{ fontSize: 16 }}>↗</span>
              </Link>
            </div>
          </div>
          <div className="hero-image-box" style={{ borderRadius: 40, overflow: 'hidden', minHeight: 520, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', boxShadow: '0 30px 70px rgba(0,0,0,0.12)' }}>
            <img src={Banner2} alt="Banner 2" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* ───── Marquee ───── */}
      <section className="marquee-section" style={{ padding: '130px 0 100px', background: '#fff', overflow: 'hidden' }}>
        <div className="marquee-outer">
          <div className="marquee-track">
            {marqueeItems.map((logo, index) => (
              <div key={index} style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 32px' }}>
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Why Choose Us ───── */}
      <section className="why-section" style={{ padding: '96px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 900, fontSize: 'clamp(1.7rem,3vw,2.4rem)', color: '#111', marginBottom: 48 }}>
            {t('home.whyTitle')}
          </h2>
          <div className="why-choose-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { num: '01', titleKey: 'home.why1Title', descKey: 'home.why1Desc' },
              { num: '02', titleKey: 'home.why2Title', descKey: 'home.why2Desc' },
              { num: '03', titleKey: 'home.why3Title', descKey: 'home.why3Desc' },
            ].map(item => (
              <div className="why-card" key={item.num} style={{ background: '#fff', borderRadius: 20, padding: '28px 28px 0', overflow: 'hidden', height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #eaecf0', position: 'relative' }}>
                <p style={{ color: '#9ca3af', fontSize: 12, lineHeight: 1.6, margin: 0, textAlign: 'left' }}>{t(item.descKey)}</p>
                <h3 className="why-card-title" style={{ fontWeight: 900, fontSize: 22, color: '#111', lineHeight: 1.3, margin: 0, textAlign: 'left' }}>{t(item.titleKey)}</h3>
                <div className="why-card-num" style={{ color: '#e8192c', fontSize: 160, fontWeight: 900, lineHeight: 0.75, marginBottom: -36, letterSpacing: '-4px', userSelect: 'none', textAlign: 'center', transform: 'scaleX(0.75)' }}>
                  {item.num}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── We Help If ───── */}
      <section id="services" className="services-section" style={{ padding: '96px 0', background: 'white', scrollMarginTop: '80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 900, fontSize: 'clamp(1.5rem,2.5vw,2.2rem)', color: '#111', marginBottom: 40 }}>
            {t('home.servicesTitle')}
          </h2>
          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { icon: <img src={Cay} alt="icon" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />, titleKey: 'home.s1Title', descKey: 'home.s1Desc', red: true },
              { icon: <img src={Security} alt="icon" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />, titleKey: 'home.s2Title', descKey: 'home.s2Desc' },
              { icon: <img src={Error} alt="icon" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />, titleKey: 'home.s3Title', descKey: 'home.s3Desc' },
              { icon: <img src={Smm} alt="icon" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />, titleKey: 'home.s4Title', descKey: 'home.s4Desc' },
            ].map(item => (
              <div className="service-card" key={item.titleKey} style={{ background: item.red ? 'linear-gradient(135deg, #e8192c 0%, #ff5a2e 100%)' : '#fff', borderRadius: 20, padding: '28px 28px 32px', boxShadow: item.red ? 'none' : '0 2px 8px rgba(0,0,0,0.04)', border: item.red ? 'none' : '1px solid #eaecf0' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', overflow: 'hidden', background: item.red ? 'rgba(255,255,255,0.2)' : '#f5f5f7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, flexShrink: 0 }}>
                  {item.icon}
                </div>
                <h3 style={{ margin: '0 0 12px', fontWeight: 800, fontSize: 17, lineHeight: 1.35, color: item.red ? '#fff' : '#111' }}>{t(item.titleKey)}</h3>
                <p style={{ margin: 0, color: item.red ? 'rgba(255,255,255,0.85)' : '#6b7280', fontSize: 13, lineHeight: 1.75 }}>{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="faq-section" style={{ padding: '96px 0', background: '#fff' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ textAlign: 'center', fontWeight: 900, fontSize: 'clamp(1.4rem,2.5vw,2rem)', color: '#111', marginBottom: 44 }}>
            {t('home.faqTitle')}
          </h2>
          <div style={{ display: 'grid', gap: 14 }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div key={index} style={{ borderRadius: 24, border: '1px solid #f1f5f9', background: '#fff', overflow: 'hidden' }}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="faq-question"
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 22px', background: 'transparent', border: 'none', cursor: 'pointer', fontWeight: 700, color: '#111', fontSize: 15, textAlign: 'left' }}
                  >
                    <span style={{ flex: 1, paddingRight: 12 }}>{faq.q}</span>
                    <span style={{ width: 34, height: 34, borderRadius: 999, background: isOpen ? '#ffe3d7' : '#f3f4f6', color: '#e8192c', display: 'grid', placeItems: 'center', fontSize: 18, flexShrink: 0 }}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer" style={{ padding: '0 22px 22px', color: '#6b7280', fontSize: 14, lineHeight: 1.8 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───── News Title ───── */}
      <section className="news-title-section" style={{ padding: '64px 24px 48px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.4rem)', color: '#111', margin: 0 }}>
            {t('home.newsTitle')}
          </h1>
        </div>
      </section>

      {/* ───── News Grid ───── */}
      <section className="news-section" style={{ padding: '0 24px 180px' }}>
        <div className="news-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'stretch' }}>
          <Link to="/news" style={{ textDecoration: 'none', borderRadius: 30, overflow: 'hidden', background: '#fff', border: '1px solid white', display: 'flex', flexDirection: 'column' }}>
            <img className="news-main-img" src={main.image} alt={main.title} style={{ width: '100%', flex: 1, objectFit: 'cover', display: 'block', minHeight: 0, borderRadius: '20px 20px 20px 20px' }} />
            <div className="news-main-info" style={{ padding: '50px 32px 32px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexShrink: 0 }}>
              <div>
                <h3 style={{ margin: '0 0 12px', fontSize: 20, fontWeight: 800, color: '#111', lineHeight: 1.35 }}>{main.title}</h3>
                <p style={{ color: '#9ca3af', fontSize: 13, margin: 0 }}>{main.date}</p>
              </div>
              <div className="arrow-circle" style={{ width: 48, height: 48, borderRadius: 999, border: '1px solid #ffbaac', display: 'grid', placeItems: 'center', color: '#e8192c', fontSize: 20, flexShrink: 0 }}>↗</div>
            </div>
          </Link>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {rest.map(article => (
              <Link key={article.id} to="/news" style={{ textDecoration: 'none', flex: 1 }}>
                <div className="news-side-item" style={{ background: '#fff', borderRadius: 18, display: 'flex', gap: 18, alignItems: 'center', padding: '18px 20px', border: '1px solid white', height: '100%', boxSizing: 'border-box' }}>
                  <img className="news-side-img" src={article.image} alt={article.title} style={{ width: 88, height: 88, objectFit: 'cover', borderRadius: 14, flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <h3 className="news-side-title" style={{ margin: '0 0 8px', fontSize: 15, fontWeight: 700, color: '#111', lineHeight: 1.4 }}>{article.title}</h3>
                    <p style={{ color: '#9ca3af', fontSize: 12, margin: 0 }}>{article.date}</p>
                  </div>
                  <div className="arrow-circle" style={{ width: 42, height: 42, borderRadius: 999, border: '1px solid #ffbaac', display: 'grid', placeItems: 'center', color: '#e8192c', fontSize: 18, flexShrink: 0 }}>↗</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <Link
            to="/news"
            className="btn-news-more"
            style={{ width: '166.46px', height: '50px', display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid black', color: 'black', fontWeight: 700, padding: '12px 28px', borderRadius: 12, fontSize: 14, textDecoration: 'none', background: '#fff' }}
          >
            {t('home.newsMore')} <span style={{ fontSize: 16 }}>↗</span>
          </Link>
        </div>
      </section>

      {/* ───── CTA Banner ───── */}
      <section className="cta-banner" style={{
        background: 'linear-gradient(rgba(211, 84, 0, 1), rgba(212, 12, 28, 1) 100%)',
        maxWidth: '1200px', margin: '0 auto', height: '285px',
        borderRadius: '20px', padding: '60px 0', position: 'relative', overflow: 'hidden',
      }}>
        <div className="cta-content" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 44px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, position: 'relative', zIndex: 1 }}>
          <div className="cta-title-wrap" style={{ width: '495px', height: '183px' }}>
            <h2 style={{ color: '#fff', fontWeight: 500, fontSize: 'clamp(2rem,3.5vw,3rem)', margin: 0, lineHeight: 1, whiteSpace: 'pre-line' }}>
              {t('home.ctaTitle')}
            </h2>
          </div>
          <div className="cta-right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 20, maxWidth: 246 }}>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 14, margin: 0, lineHeight: 1.7, textAlign: 'right', whiteSpace: 'pre-line' }}>
              {t('home.ctaDesc')}
            </p>
            <Link
              to="/request"
              className="btn-cta"
              style={{ background: '#fff', color: '#e8192c', fontWeight: 700, padding: '14px 32px', borderRadius: 12, fontSize: 14, textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              {t('home.ctaBtn')}
            </Link>
          </div>
        </div>

        <div className="cta-bitcoin" style={{ position: 'absolute', left: '600px', top: '134px', transform: 'translate(-50%, -24%)', opacity: 1, pointerEvents: 'none' }}>
          <img src={BitcoinIcon} alt="" style={{ width: 299.5, height: 299.5, objectFit: 'contain' }} />
        </div>
      </section>

      <Footer />

    </div>
  )
}