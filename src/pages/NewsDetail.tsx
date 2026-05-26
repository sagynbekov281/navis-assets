import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getNewsArticles } from '../data'
import icon from '../assets/iconАгдд.svg'

export default function NewsDetail() {
  const { id } = useParams()
  const { t } = useTranslation()
  const newsArticles = getNewsArticles()
  const article = newsArticles.find(a => a.id === Number(id))
  const related = newsArticles.filter(a => a.id !== Number(id)).slice(0, 4)

  if (!article) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-2xl font-black text-gray-900">{t('news.notFound')}</h1>
        <Link to="/news" className="mt-4 inline-block text-primary font-medium">{t('news.backToNews')}</Link>
      </div>
    )
  }

  return (
    <div>

      <style>{`
        @media (max-width: 850px) {
          .news-detail-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .news-related-item { padding: 12px !important; }
          .news-related-img { width: 80px !important; height: 80px !important; }
          .news-related-title { font-size: 14px !important; font-weight: 700 !important; }
          .news-related-date { font-size: 12px !important; }
          .news-related-arrow { display: flex !important; }
        }
        .news-related-arrow { display: none; }

        /* ── Кнопка назад ── */
        .btn-back {
          width: 42px;
          height: 42px;
          border-radius: 999px;
          background: rgba(245, 247, 250, 1);
          display: grid;
          place-items: center;
          color: #111;
          font-size: 18px;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.15s;
          flex-shrink: 0;
        }
        .btn-back:hover {
          background: linear-gradient(51.24deg, #D4151C 22.63%, #D35400 82.84%);
          border-color: transparent;
          color: #fff;
          transform: scale(1.1);
        }

        /* ── Круглые иконки в сайдбаре ── */
        .arrow-circle {
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.15s;
        }
        .arrow-circle:hover {
          background: linear-gradient(51.24deg, #D4151C 22.63%, #D35400 82.84%) !important;
          border-color: transparent !important;
          box-shadow: 0 0 12px 3px rgba(232, 25, 44, 0.55), 0 0 24px 6px rgba(255, 90, 46, 0.35) !important;
          transform: scale(1.15);
        }
        .arrow-circle:hover img {
          filter: brightness(0) invert(1);
        }
        .arrow-circle img {
          transition: filter 0.2s;
          width: 55%;
          height: 55%;
          object-fit: contain;
        }
      `}</style>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Кнопка назад */}
          <Link to="/news" className="btn-back">←</Link>

          <div className="news-detail-grid grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8">

            {/* Основной контент */}
            <div className="lg:col-span-2">
              <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-4">
                {article.title}
              </h1>
              <p className="text-gray-400 text-sm mb-6">{article.date}</p>
              <img src={article.image} alt={article.title} className="w-full h-72 object-cover rounded-2xl mb-8" />
              <div className="prose prose-sm max-w-none">
                {article.content.split('\n\n').map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-4">{para.trim()}</p>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <h3 className="font-black text-gray-900 mb-4" style={{ fontSize: 18 }}>{t('news.readAlso')}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {related.map(rel => (
                  <Link key={rel.id} to={`/news/${rel.id}`} style={{ textDecoration: 'none' }}>
                    <div className="news-related-item" style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '10px 4px', borderBottom: '1px solid #f3f4f6' }}>
                      <img className="news-related-img" src={rel.image} alt={rel.title} style={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 12, flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <p className="news-related-date" style={{ fontSize: 11, color: '#9ca3af', margin: '0 0 4px' }}>{rel.date}</p>
                        <h4 className="news-related-title" style={{ fontSize: 13, fontWeight: 700, color: '#111', lineHeight: 1.4, margin: 0 }}>
                          {rel.title}
                        </h4>
                      </div>
                      <div className="news-related-arrow arrow-circle" style={{ width: 36, height: 36, borderRadius: 999, border: '1px solid #ffbaac', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <img src={icon} alt="arrow" style={{ width: '100%', height: '100%', objectFit: 'contain' }}  />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}