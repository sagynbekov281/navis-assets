import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import UnionIcon from '../assets/Union.jpg'
import SsrIcon from '../assets/flagSSR.jpg'
import engl from '../assets/useBritish.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const [languageOpen, setLanguageOpen] = useState(false)
  const [language, setLanguage] = useState(i18n.language === 'en' ? 'EN' : 'RU')

  const languageOptions = [
    { code: 'RU', label: 'Русский' },
    { code: 'EN', label: 'English' },
  ]

  const handleLanguageChange = (code: string) => {
    setLanguage(code)
    setLanguageOpen(false)
    i18n.changeLanguage(code === 'RU' ? 'ru' : 'en')
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleServicesClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (location.pathname === '/') {
      const servicesSection = document.getElementById('services')
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/')
      setTimeout(() => {
        const servicesSection = document.getElementById('services')
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
    setMenuOpen(false)
  }

  const navLinks = [
    { to: '/', label: t('navbar.services'), isServices: true },
    { to: '/pricing', label: t('navbar.pricing') },
    { to: '/reviews', label: t('navbar.reviews') },
    { to: '/about', label: t('navbar.about') },
    { to: '/contacts', label: t('navbar.contacts') },
  ]

  return (
    <>
      <style>{`
        /* ── Mobile styles ── */
        @media (max-width: 768px) {
          .navbar-desktop-links,
          .navbar-desktop-actions {
            display: none !important;
          }
          .navbar-mobile-left {
            display: flex !important;
          }
          .navbar-mobile-start {
            display: flex !important;
          }
          /* Hide original mobile burger (md:hidden button) */
          .navbar-old-burger {
            display: none !important;
          }
        }
        @media (min-width: 769px) {
          .navbar-mobile-left {
            display: none !important;
          }
          .navbar-mobile-start {
            display: none !important;
          }
          .navbar-old-burger {
            display: none !important;
          }
        }

        /* ── Mobile menu overlay ── */
        .mob-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: 9998;
        }

        /* ── Mobile menu panel (left side) ── */
        .mob-panel {
          position: fixed !important;
          top: 0;
          left: 0;
          width: 78vw;
          max-width: 320px;
          height: 100dvh;
          height: 100vh;
          background: #fff;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          padding: 0;
          overflow-y: auto;
        }

        /* Top bar inside panel: close + language */
        .mob-panel-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 20px 12px;
          border-bottom: 1px solid #f3f4f6;
        }

        .mob-close-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 20px;
          color: #111;
          padding: 4px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
        }

        /* Language switcher inside panel */
        .mob-lang-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          background: #fff;
          padding: 7px 12px;
          font-size: 13px;
          font-weight: 600;
          color: #111;
          cursor: pointer;
        }

        .mob-lang-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          right: 20px;
          width: 160px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          z-index: 10000;
          overflow: hidden;
        }

        .mob-lang-option {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          font-size: 14px;
          color: #374151;
          background: none;
          border: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
        }
        .mob-lang-option:hover {
          background: #f9fafb;
        }

        /* Nav links inside panel */
        .mob-nav-links {
          display: flex;
          flex-direction: column;
          padding: 8px 0;
          flex: 1;
        }

        .mob-nav-link,
        .mob-nav-btn {
          font-size: 18px;
          font-weight: 600;
          color: #111;
          text-decoration: none;
          padding: 16px 24px;
          border: none;
          background: none;
          text-align: left;
          cursor: pointer;
          width: 100%;
          display: block;
          border-bottom: 1px solid #f9fafb;
          transition: color 0.15s;
        }
        .mob-nav-link:hover,
        .mob-nav-btn:hover {
          color: #e83a1e;
        }
      `}</style>

      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <div className="flex items-center justify-between h-16">

            {/* ── Mobile left: burger + logo ── */}
            <div
              className="navbar-mobile-left"
              style={{ display: 'none', alignItems: 'center', gap: 12 }}
            >
              {/* Burger button */}
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Открыть меню"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 5,
                }}
              >
                <span style={{ display: 'block', width: 22, height: 2.5, background: '#374151', borderRadius: 2 }} />
                <span style={{ display: 'block', width: 22, height: 2.5, background: '#374151', borderRadius: 2 }} />
                <span style={{ display: 'block', width: 22, height: 2.5, background: '#374151', borderRadius: 2 }} />
              </button>

              {/* Logo */}
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
                <img src={UnionIcon} alt="Navis Asset" style={{ width: 40, height: 40, objectFit: 'contain' }} />
                <div style={{ lineHeight: 1.25 }}>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#111' }}>Navis</div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#111' }}>Asset</div>
                </div>
              </Link>
            </div>

            {/* ── Desktop logo ── */}
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 cursor-pointer navbar-desktop-links" style={{ textDecoration: 'none' }}>
              <div className="w-15 h-10">
                <img src={UnionIcon} alt="Union logo" className="w-full h-full object-cover" />
              </div>
              <div className="leading-tight">
                <div className="font-bold text-sm text-gray-900">Navis</div>
                <div className="font-bold text-sm text-gray-900">Asset</div>
              </div>
            </Link>

            {/* ── Desktop nav links ── */}
            <div className="navbar-desktop-links hidden md:flex items-center gap-6 h-full">
              {navLinks.map(link => {
                const isActive = !link.isServices && location.pathname === link.to
                return link.isServices ? (
                  <button
                    key={link.label}
                    onClick={handleServicesClick}
                    className="relative flex flex-col items-center justify-center h-16 text-sm font-medium transition-colors"
                    style={{ color: '#4b5563', background: 'transparent', border: 'none', cursor: 'pointer' }}
                  >
                    <span className="relative">{link.label}</span>
                  </button>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="relative flex flex-col items-center justify-center h-16 text-sm font-medium transition-colors"
                    style={{ color: isActive ? '#e83a1e' : '#4b5563' }}
                  >
                    <span className="relative">
                      {link.label}
                      {isActive && (
                        <span
                          className="absolute left-0 right-0 rounded-full"
                          style={{ background: '#e83a1e', height: 2, bottom: -4 }}
                        />
                      )}
                    </span>
                  </Link>
                )
              })}
            </div>

            {/* ── Desktop actions ── */}
            <div className="navbar-desktop-actions hidden md:flex items-center gap-4 relative">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLanguageOpen(!languageOpen)}
                  className="inline-flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition"
                  style={{ height: 44 }}
                  aria-label="Выбрать язык"
                >
                  <span className="inline-flex items-center justify-center overflow-hidden text-base" style={{ width: 28, height: 20, borderRadius: 3 }}>
                    {language === 'RU'
                      ? <img src={SsrIcon} alt="RU" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      : <img src={engl} alt="EN" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    }
                  </span>
                  <span className="uppercase tracking-[0.08em] text-[13px] text-gray-900">
                    {language === 'RU' ? 'РУС' : 'ENG'}
                  </span>
                  <span className="text-gray-400 text-sm">▾</span>
                </button>

                {languageOpen && (
                  <div className="absolute right-0 mt-2 w-44 rounded-2xl border border-gray-200 bg-white shadow-lg">
                    {languageOptions.map(option => (
                      <button
                        key={option.code}
                        type="button"
                        onClick={() => handleLanguageChange(option.code)}
                        className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-0 transition"
                      >
                        <span className="inline-flex items-center justify-center overflow-hidden text-base" style={{ width: 28, height: 20, borderRadius: 3 }}>
                          {option.code === 'RU'
                            ? <img src={SsrIcon} alt="RU" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            : <img src={engl} alt="EN" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          }
                        </span>
                        <span>{option.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contacts"
                className="bg-black text-white rounded-lg border border-black text-sm font-semibold transition-all hover:bg-gray-900 inline-flex items-center justify-center"
                style={{ height: 44, padding: '0 16px' }}
              >
                {t('navbar.start')}
              </Link>
            </div>

           
            <Link
              to="/contacts"
              className="navbar-mobile-start"
              style={{
                display: 'none',
                background: '#111',
                color: '#fff',
                borderRadius: 12,
                fontWeight: 700,
                fontSize: 14,
                padding: '10px 20px',
                textDecoration: 'none',
                alignItems: 'center',
                whiteSpace: 'nowrap',
              }}
            >
              {t('navbar.start')}
            </Link>

          
            <button
              className="navbar-old-burger md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Меню"
              style={{ display: 'none' }}
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>

          </div>
        </div>
      </nav>

      
      {menuOpen && (
        <>
      
          <div
            className="mob-overlay"
            onClick={() => setMenuOpen(false)}
          />

      
          <div className="mob-panel">

          
            <div className="mob-panel-topbar">
              <button
                className="mob-close-btn"
                onClick={() => setMenuOpen(false)}
                aria-label="Закрыть"
              >
                ✕
              </button>

              <div style={{ position: 'relative' }}>
                <button
                  className="mob-lang-btn"
                  onClick={() => setLanguageOpen(!languageOpen)}
                  type="button"
                >
                  <span style={{ width: 24, height: 18, borderRadius: 3, overflow: 'hidden', display: 'inline-flex', flexShrink: 0 }}>
                    {language === 'RU'
                      ? <img src={SsrIcon} alt="RU" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      : <img src={engl} alt="EN" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    }
                  </span>
                  <span>{language === 'RU' ? 'РУС' : 'ENG'}</span>
                  <span style={{ color: '#9ca3af', fontSize: 12 }}>▾</span>
                </button>

                {languageOpen && (
                  <div className="mob-lang-dropdown">
                    {languageOptions.map(option => (
                      <button
                        key={option.code}
                        className="mob-lang-option"
                        type="button"
                        onClick={() => handleLanguageChange(option.code)}
                      >
                        <span style={{ width: 24, height: 18, borderRadius: 3, overflow: 'hidden', display: 'inline-flex', flexShrink: 0 }}>
                          {option.code === 'RU'
                            ? <img src={SsrIcon} alt="RU" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            : <img src={engl} alt="EN" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          }
                        </span>
                        <span>{option.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="mob-nav-links">
              {navLinks.map(link =>
                link.isServices ? (
                  <button
                    key={link.label}
                    className="mob-nav-btn"
                    onClick={handleServicesClick}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="mob-nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

          </div>
        </>
      )}
    </>
  )
}
