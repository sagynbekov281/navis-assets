import bos from '../assets/boss.png'
import whiteHous from '../assets/whiteHous.png'
import team  from '../assets/teamate.png'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()
  return (
    <div className="bg-white">

      <style>{`
        @media (max-width: 850px) {
          .about-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto !important;
            gap: 10px !important;
          }
          .about-founder { grid-column: 1 !important; grid-row: 1 !important; }
          .about-45 { grid-column: 2 !important; grid-row: 1 !important; }
          .about-100 { grid-column: 1 / 3 !important; grid-row: 2 !important; }
          .about-building { grid-column: 1 / 3 !important; grid-row: 3 !important; min-height: 200px !important; }
          .about-team { grid-column: 1 / 3 !important; grid-row: 4 !important; min-height: 200px !important; }
          .about-10 { grid-column: 1 !important; grid-row: 5 !important; min-height: 160px !important; }
          .about-guarantee { grid-column: 2 !important; grid-row: 5 !important; height: 160px !important; }
        }
      `}</style>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-black text-gray-900 text-center mb-8">{t('about.title')}</h1>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{t('about.content')}</p>
        </div>
      </section>

      <section className="pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="about-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
              gridTemplateRows: 'auto auto auto',
              gap: 12,
            }}
          >
            <div className="about-founder bg-gray-100 rounded-2xl p-4 flex items-center gap-3" style={{ gridColumn: '1', gridRow: '1' }}>
              <img src={bos} alt="Тилек Бегалиев" className="w-14 h-14 rounded-full object-cover flex-shrink-0" />
              <div>
                <div className="text-xs text-gray-400 mb-0.5">{t('about.founder')}</div>
                <div className="font-bold text-gray-900 text-sm leading-tight">Тилек</div>
                <div className="font-bold text-gray-900 text-sm leading-tight">Бегалиев</div>
              </div>
            </div>

            <div className="about-45 gradient-hero text-white rounded-2xl p-6 flex flex-col items-start justify-center" style={{ gridColumn: '2', gridRow: '1' }}>
              <div className="text-4xl font-black">45+</div>
              <div className="text-white/80 text-sm mt-1">{t('about.clients')}</div>
            </div>

            <div className="about-building rounded-2xl overflow-hidden" style={{ gridColumn: '3 / 5', gridRow: '1 / 3' }}>
              <img src={whiteHous} alt="Здание" className="w-full h-full object-cover" style={{ minHeight: 260 }} />
            </div>

            <div className="about-100 bg-gray-100 rounded-2xl p-5 flex items-center gap-4" style={{ gridColumn: '1 / 3', gridRow: '2' }}>
              <div className="text-4xl font-black text-gray-900">100%</div>
              <div className="text-gray-500 text-sm">{t('about.quality')}</div>
            </div>

            <div className="about-team rounded-2xl overflow-hidden" style={{ gridColumn: '1 / 3', gridRow: '3', minHeight: 260 }}>
              <img src={team} alt="Команда" className="w-full h-full object-cover" />
            </div>

            <div className="about-10 text-white rounded-2xl p-5 flex flex-col justify-between" style={{ gridColumn: '3', gridRow: '3', minHeight: 260, backgroundColor: '#000000' }}>
              <div className="text-4xl font-black">10+</div>
              <div className="text-gray-400 text-sm leading-snug mt-auto" style={{ whiteSpace: 'pre-line' }}>
                {t('about.staff')}
              </div>
            </div>

            <div className="about-guarantee bg-gray-100 rounded-2xl p-5 flex flex-col justify-between" style={{ gridColumn: '4', gridRow: '3', minHeight: 260 }}>
              <div className="text-2xl font-black text-gray-900">{t('about.guarantee')}</div>
              <div className="text-gray-400 text-sm leading-snug mt-auto" style={{ whiteSpace: 'pre-line' }}>
                {t('about.guaranteeDesc')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-black text-gray-900 leading-snug" style={{ whiteSpace: 'pre-line' }}>
                {t('about.section2Title')}
              </h2>
            </div>
            <div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t('about.section2Text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-black text-gray-900 leading-snug">
                {t('about.foundersTitle')}
              </h2>
            </div>
            <div>
              <p className="text-gray-500 text-sm leading-relaxed mt-4" style={{ whiteSpace: 'pre-line' }}>
                {t('about.foundersText')}
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
