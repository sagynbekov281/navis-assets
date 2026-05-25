import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Pricing() {
  const { t } = useTranslation()
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

        
          <div className="bg-gray-100 flex flex-col" style={{ borderRadius: 30, padding: 30, opacity: 1 }}>
            <h1 className="text-4xl font-black text-gray-900 text-center mb-8">{t('pricing.title')}</h1>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{t('pricing.desc1')}</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{t('pricing.desc2')}</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{t('pricing.desc3')}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{t('pricing.desc4')}</p>
          </div>

        
          <div
            className="flex flex-col"
            style={{
              borderRadius: 30,
              padding: 30,
              opacity: 1,
              justifyContent: 'space-between',
              background: 'linear-gradient(135deg, #e83a1e 0%, #c0392b 60%, #a93226 100%)',
            }}
          >
            <h2 className="text-white font-black text-2xl mb-6">{t('pricing.planTitle')}</h2>

            <div className="mb-8">
              <div className="flex items-end gap-2">
                <span className="text-white font-black" style={{ fontSize: 52 }}>25%</span>
                <span className="text-white/70 text-sm mb-3">{t('pricing.planUnit')}</span>
              </div>
            </div>

            <div className="space-y-4 flex-1">
              {(['f1','f2','f3','f4','f5'] as const).map(key => (
                <div key={key} className="flex items-center gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center rounded-full bg-white/20" style={{ width: 24, height: 24 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white text-sm">{t(`pricing.${key}`)}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contacts"
              className="mt-8 block bg-white text-gray-900 font-bold text-center py-4 rounded-2xl text-sm hover:bg-gray-100 transition-colors "
            >
              {t('pricing.planBtn')}
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
