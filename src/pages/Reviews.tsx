import sign from '../assets/sign.jpg'
import { useTranslation } from 'react-i18next'
import { getReviews } from '../data'

export default function Reviews() {
  const { t } = useTranslation()
  const reviewsData = getReviews()

  return (
    <div className="bg-white">

      <style>{`
        @media (max-width: 850px) {
          .reviews-list {
            display: none !important;
          }
          .reviews-mobile {
            display: block !important;
          }
        }

        .reviews-mobile {
          display: none;
        }
        .reviews-scroll-container {
          height: 80vh;
          overflow-y: auto;
          padding: 0 16px 40px;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        .reviews-scroll-container::-webkit-scrollbar {
          width: 4px;
        }
        .reviews-scroll-container::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .reviews-scroll-container::-webkit-scrollbar-thumb {
          background: #e8192c;
          border-radius: 4px;
        }
        .review-card-mobile {
          background: #f9fafb;
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
      `}</style>

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900">{t('reviews.title')}</h1>
        </div>
      </section>

      {/* Desktop */}
      <section className="pb-30 bg-white">
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: 60, paddingRight: 24 }}>
          <div className="reviews-list flex flex-wrap" style={{ gap: 20 }}>
            {reviewsData.slice(0, 8).map(review => (
              <div
                key={review.id}
                className="bg-gray-50 flex flex-col justify-between"
                style={{ width: 278, height: 362, borderRadius: 12, padding: 20 }}
              >
                <div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} style={{ color: i < review.rating ? '#f59e0b' : '#d1d5db', fontSize: 18 }}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-800 text-sm leading-relaxed">{review.text}</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={sign} alt={review.name} className="flex-shrink-0 rounded-full object-cover" style={{ width: 32, height: 32 }} />
                  <div>
                    <div className="text-gray-900 text-xs font-semibold leading-tight">{review.name}</div>
                    <div className="text-gray-400 text-xs leading-tight">{review.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="reviews-mobile pb-16 bg-white">
        
        <div style={{ padding: '0 16px 40px' }}>
          {reviewsData.map(review => (
            <div key={review.id} className="review-card-mobile">
              <div style={{ display: 'flex', gap: 4 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: i < review.rating ? '#f59e0b' : '#d1d5db', fontSize: 18 }}>★</span>
                ))}
              </div>
              <p style={{ margin: 0, fontSize: 13, color: '#1f2937', lineHeight: 1.6 }}>{review.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <img src={sign} alt={review.name} style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#111', lineHeight: 1.3 }}>{review.name}</div>
                  <div style={{ fontSize: 11, color: '#9ca3af', lineHeight: 1.3 }}>{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
