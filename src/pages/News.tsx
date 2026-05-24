import { Link } from 'react-router-dom'
import { getNewsArticles } from '../data'
import BigBit from '../assets/bigBit.png'
import { useTranslation } from 'react-i18next'

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
      `}</style>

      <section style={{ padding: '32px 24px 80px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          <h1 className="news-title">{t('news.title')}</h1>

          <style>{`
            @media (min-width: 851px) {
              .news-title { display: none; }
            }
          `}</style>

          <div className="news-outer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, alignItems: 'start' }}>

            {/* Left column */}
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
                    <div style={{ width: 42, height: 42, borderRadius: 999, border: '1px solid #ffbaac', display: 'grid', placeItems: 'center', color: '#e8192c', fontSize: 18, flexShrink: 0 }}>↗</div>
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
                    <div style={{ width: 36, height: 36, borderRadius: 999, border: '1px solid #ffbaac', display: 'grid', placeItems: 'center', color: '#e8192c', fontSize: 15, flexShrink: 0, marginLeft: 8 }}>↗</div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Right column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {rightArticles.map((article, index) => (
                <Link key={index} to={`/news/${article.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#fff', borderRadius: 16, display: 'flex', gap: 14, alignItems: 'center', padding: '16.5px 1px', boxSizing: 'border-box' }}>
                    <img src={article.image} alt={article.title} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 12, flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <h3 style={{ margin: '0 0 6px', fontSize: 13, fontWeight: 700, color: '#111', lineHeight: 1.4 }}>{article.title}</h3>
                      <p style={{ color: '#9ca3af', fontSize: 11, margin: 0 }}>{article.date}</p>
                    </div>
                    <div style={{ width: 36, height: 36, borderRadius: 999, border: '1px solid #ffbaac', display: 'grid', placeItems: 'center', color: '#e8192c', fontSize: 15, flexShrink: 0 }}>↗</div>
                  </div>
                </Link>
              ))}
            </div>

          </div>

          <div className="news-podrobnee" style={{ justifyContent: 'center', marginTop: 32 }}>
            <Link to="/news" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '1px solid black', color: 'black', fontWeight: 700,
              padding: '12px 28px', borderRadius: 12, fontSize: 14,
              textDecoration: 'none', background: '#fff'
            }}>
              {t('news.more')} <span style={{ fontSize: 16 }}>↗</span>
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}
