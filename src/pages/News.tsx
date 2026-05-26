import { Link } from 'react-router-dom'
import { getNewsArticles } from '../data'
import BigBit from '../assets/bigBit.png'
import { useTranslation } from 'react-i18next'
import icon from '../assets/iconАгдд.svg'
import { HiArrowUpRight } from 'react-icons/hi2'

export default function News() {
  const { t } = useTranslation()
  const newsArticles = getNewsArticles()
  const extraArticles = [
    { ...newsArticles[1], id: 2 },
    { ...newsArticles[2], id: 3 },
    { ...newsArticles[3], id: 4 },
  ]
  const [first, second, third, ...rest] = newsArticles
  const rightArticles = [...rest, ...extraArticles]

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#fff', minHeight: '100vh' }}>

      <style>{`
        .news-title {
          text-align: center;
          font-size: 2.2rem;
          font-weight: 600;
          color: #111;
          margin: 0 0 24px;
        }
        @media (min-width: 851px) {
          .news-title { display: none; }
        }

        @media (max-width: 850px) {
          .news-outer-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .news-big-img {
            width: 100% !important;
            height: 220px !important;
          }
          .news-podrobnee {
            display: flex !important;
          }
        }
        .news-podrobnee {
          display: none;
        }

        /* Круглые иконки */
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

        /* Кнопка "Подробнее" */
        .btn-news-podrobnee {
          transition: border-color 0.2s, color 0.2s, background 0.2s, box-shadow 0.2s, transform 0.15s;
        }
        .btn-news-podrobnee:hover {
          border-color: transparent !important;
          color: #fff !important;
          background: linear-gradient(51.24deg, #D4151C 22.63%, #D35400 82.84%) !important;
          box-shadow: 0 4px 16px rgba(212, 21, 28, 0.3) !important;
          transform: translateY(-1px) !important;
        }
      `}</style>

      <section style={{ padding: '32px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          <h1 className="news-title">{t('news.title')}</h1>

          <div className="news-outer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, alignItems: 'start' }}>

            {/* Левая колонка */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>

              <Link to={`/news/${first.id}`} style={{ textDecoration: 'none' }}>
                <div style={{ borderRadius: 20, overflow: 'hidden', background: '#fff' }}>
                  <img
                    className="news-big-img"
                    src={BigBit}
                    alt={first.title}
                    style={{ width: 560, height: 407, objectFit: 'cover', display: 'block', borderRadius: 20 }}
                  />
                  <div style={{ padding: '16px 20px 20px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}>
                    <div>
                      <h3 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 800, color: '#111', lineHeight: 1.35 }}>{first.title}</h3>
                      <p style={{ color: '#9ca3af', fontSize: 12, margin: 0 }}>{first.date}</p>
                    </div>
                    <div className="arrow-circle" style={{ width: 42, height: 42, borderRadius: 999, border: '1px solid #ffbaac', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                      <img src={icon} alt="arrow" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                  </div>
                </div>
              </Link>

              {[second, third].filter(Boolean).map(article => (
                <Link key={article.id} to={`/news/${article.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#fff', borderRadius: 16, display: 'flex', gap: 14, alignItems: 'center', padding: '10px 1px', boxSizing: 'border-box' }}>
                    <img src={article.image} alt={article.title} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 12, flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <h3 style={{ margin: '0 0 6px', fontSize: 13, fontWeight: 700, color: '#111', lineHeight: 1.4 }}>{article.title}</h3>
                      <p style={{ color: '#9ca3af', fontSize: 11, margin: 0 }}>{article.date}</p>
                    </div>
                    <div className="arrow-circle" style={{ width: 36, height: 36, borderRadius: 999, border: '1px solid #ffbaac', display: 'grid', placeItems: 'center', flexShrink: 0, marginLeft: 8 }}>
                      <img src={icon} alt="arrow" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Правая колонка */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {rightArticles.map((article, index) => (
                <Link key={index} to={`/news/${article.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#fff', borderRadius: 16, display: 'flex', gap: 14, alignItems: 'center', padding: '16.5px 1px', boxSizing: 'border-box' }}>
                    <img src={article.image} alt={article.title} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 12, flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <h3 style={{ margin: '0 0 6px', fontSize: 13, fontWeight: 700, color: '#111', lineHeight: 1.4 }}>{article.title}</h3>
                      <p style={{ color: '#9ca3af', fontSize: 11, margin: 0 }}>{article.date}</p>
                    </div>
                    <div className="arrow-circle" style={{ width: 36, height: 36, borderRadius: 999, border: '1px solid #ffbaac', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                      <img src={icon} alt="arrow" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>

          <div className="news-podrobnee" style={{ justifyContent: 'center', marginTop: 32 }}>
            <Link to={`/news/${first.id}`} className="btn-news-podrobnee" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '1px solid black', color: 'black', fontWeight: 700,
              padding: '12px 28px', borderRadius: 12, fontSize: 14,
              textDecoration: 'none', background: '#fff'
            }}>
              {t('news.more')} <HiArrowUpRight size={16} />
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}