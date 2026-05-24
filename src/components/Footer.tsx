import { Link } from 'react-router-dom'
import NavisLogo from '../assets/Union.jpg' 
import tt from '../assets/tt.jpg'
import tg from '../assets/teleg.jpg'
import wats from '../assets/whats.jpg'
import inst from '../assets/inst.jpg'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
   <footer style={{ padding: '100px 0 0' }}>

      <style>{`
        @media (max-width: 850px) {
          footer {
            padding: 150px 0 0 !important;
          }
          footer > div {
            padding: 32px 20px 10px !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 80 !important;
            margin-bottom: 0 !important;
          }
          .footer-brand {
            margin-bottom: 28px !important;
          }
          .footer-links-wrap {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
            margin-bottom: 32px !important;
          }
          .footer-social {
            margin-bottom: 32px !important;
          }
          .footer-social-title {
            margin-left: 0 !important;
          }
          .footer-social-icons {
            margin-left: 0 !important;
          }
          .footer-bottom {
            justify-content: center !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .footer-bottom p:last-child {
            font-size: 16px !important;
            font-weight: 900 !important;
          }
        }
      `}</style>

      <div style={{ background: 'rgba(245, 247, 250, 1)', padding: '60px 0 10px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 32, marginBottom: 48, alignItems: 'start' }}>

            <div className="footer-brand">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <img src={NavisLogo} alt="Navis Asset" style={{ width: 48, height: 48, objectFit: 'contain', mixBlendMode: 'multiply' }} />
                <div style={{ fontWeight: 900, fontSize: 17, lineHeight: 1.2 }}>
                  Navis<br />Asset
                </div>
              </div>
              <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.8, marginBottom: 24, maxWidth: 260 }}>
                {t('footer.desc')}
              </p>
              <a
                href="mailto:navisasset@mail.com"
                style={{
                  display: 'inline-block',
                  color: '#e8192c',
                  fontSize: 24,
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                NAVISASSET@MAIL.COM
              </a>
            </div>

            <div className="footer-links-wrap" style={{ display: 'contents' }}>

              <div>
                <div style={{ fontWeight: 700, marginBottom: 20, fontSize: 17, color: '#111' }}>
                  {t('footer.mainTitle')}
                </div>
                <div style={{ display: 'grid', gap: 14 }}>
                  {[
                    ['/about', t('footer.link_about')],
                    ['/contacts', t('footer.link_contacts')],
                    ['/partners', t('footer.link_partners')],
                    ['/about', t('footer.link_why')],
                  ].map(([to, label]) => (
                    <Link key={label} to={to} style={{ color: '#4b5563', fontSize: 16, textDecoration: 'none' }}>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontWeight: 700, marginBottom: 20, fontSize: 17, color: '#111' }}>
                  {t('footer.usersTitle')}
                </div>
                <div style={{ display: 'grid', gap: 14 }}>
                  {[
                    ['/services', t('footer.link_services')],
                    ['/reviews', t('footer.link_reviews')],
                    ['/pricing', t('footer.link_pricing')],
                    ['/news', t('footer.link_news')],
                  ].map(([to, label]) => (
                    <Link key={label} to={to} style={{ color: '#4b5563', fontSize: 14, textDecoration: 'none' }}>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* Соцсети */}
            <div className="footer-social">
              <div className="footer-social-title" style={{ fontWeight: 700, marginBottom: 20, fontSize: 17, color: '#111', marginLeft: 90 }}>
                {t('footer.socialTitle')}
              </div>
              <div className="footer-social-icons" style={{ display: 'flex', gap: 10, marginLeft: 90 }}>
                {[
                  { img: wats, href: '#', alt: 'WhatsApp' },
                  { img: tg,   href: '#', alt: 'Telegram' },
                  { img: inst, href: '#', alt: 'Instagram' },
                  { img: tt,   href: '#', alt: 'TikTok' },
                ].map(s => (
                  <a key={s.alt} href={s.href} style={{
                    width: 44, height: 44, borderRadius: 12,
                    overflow: 'hidden',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none',
                  }}>
                    <img src={s.img} alt={s.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

        <div style={{ width: '100%', height: '2px', background: 'rgba(216, 216, 216, 1)' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="footer-bottom" style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <p style={{ color: '#9ca3af', fontSize: 13, margin: 0 }}>{t('footer.copyright')}</p>
            <p style={{ color: 'black', fontSize: 13, margin: 0 }}>
              Made with ♥ by <span style={{ color: '#ff5a2e', fontWeight: 700, borderBottom: '2px solid #ff5a2e', paddingBottom: 2 }}>NavisDevs</span>
            </p>
          </div>
        </div>

      </div>
    
    </footer>
  )
}
