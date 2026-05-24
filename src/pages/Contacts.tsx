import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import tt from '../assets/tt2.png'
import tg from '../assets/tg2.png'
import wats from '../assets/wats2.png'
import inst from '../assets/inst2.png'


export default function Contacts() {
  const { t } = useTranslation()
  const [form, setForm] = useState({
    firstName: '', lastName: '', country: '', email: '', phone: '',
    recoveryType: '', walletType: '', walletVolume: '', agree: false
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (form.agree) setSent(true)
  }

  return (
    <div className="bg-white min-h-screen ">

      <style>{`
        @media (max-width: 850px) { 
          .contacts-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ">
        <div className="contacts-grid grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

        
          <div
            className="rounded-3xl p-8 flex flex-col justify-between"
            style={{
              background: 'linear-gradient(135deg, #e83a1e 0%, #c0392b 50%, #a93226 100%)',
              minHeight: 580,
            }}
          >
            <h2 className="text-white font-black text-2xl md:text-3xl leading-snug">
              {t('contacts.title')}
            </h2>

            <div>
              <div className="mb-8" />

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="white" fillOpacity="0.85"/>
                    </svg>
                  </div>
                  <p className="text-white/85 text-sm leading-snug">
                    {t('contacts.address2')}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" fill="white" fillOpacity="0.85"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/85 text-sm">+996 (502)-800-202</p>
                    <p className="text-white/85 text-sm">+996 (502)-800-202</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="white" fillOpacity="0.85"/>
                    </svg>
                  </div>
                  <p className="text-white/85 text-sm">navisasset@mail.com</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-white font-bold text-sm mb-3">{t('contacts.socialTitle')}</p>
                <div className="flex gap-3">
                  <div className="w-11 h-11 rounded-xl overflow-hidden hover:opacity-80 transition cursor-pointer">
                    <img src={wats} alt="WhatsApp" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-11 h-11 rounded-xl overflow-hidden hover:opacity-80 transition cursor-pointer">
                    <img src={tg} alt="Telegram" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-11 h-11 rounded-xl overflow-hidden hover:opacity-80 transition cursor-pointer">
                    <img src={inst} alt="Instagram" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-11 h-11 rounded-xl overflow-hidden hover:opacity-80 transition cursor-pointer">
                    <img src={tt} alt="TikTok" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-white/60 text-xs leading-relaxed mt-8">
              {t('contacts.infoText')}
            </p>
          </div>

       
          <div className="rounded-3xl border border-gray-200 p-8 " style={{ minHeight: 580, backgroundColor: 'rgba(245, 247, 250, 1)' }}>

            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-black text-gray-900">{t('contacts.successTitle')}</h3>
                <p className="text-gray-500 mt-2 text-sm">{t('contacts.successDesc')}</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-white px-6 py-3 rounded-xl font-semibold text-sm"
                  style={{ background: 'linear-gradient(135deg, #e83a1e, #c0392b)' }}
                >
                  {t('contacts.newRequest')}
                </button>
              </div>
            ) : (
              <div className="space-y-5">

            
                <div className="form-row-2 grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">{t('contacts.firstName')}</label>
                    <input
                      type="text"
                      placeholder={t('contacts.firstName')}
                      value={form.firstName}
                      onChange={e => setForm({ ...form, firstName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-red-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">{t('contacts.lastName')}</label>
                    <input
                      type="text"
                      placeholder={t('contacts.lastName')}
                      value={form.lastName}
                      onChange={e => setForm({ ...form, lastName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-red-400"
                    />
                  </div>
                </div>

             
                <div>
                  <label className="block text-xs text-gray-500 mb-1.5">{t('contacts.country')}</label>
                  <div className="relative">
                    <select
                      value={form.country}
                      onChange={e => setForm({ ...form, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-400 appearance-none focus:outline-none focus:border-red-400 bg-white"
                    >
                      <option value="">{t('contacts.countryPlaceholder')}</option>
                      <option>{t('contacts.countryKg')}</option>
                      <option>{t('contacts.countryRu')}</option>
                      <option>{t('contacts.countryKz')}</option>
                      <option>{t('contacts.countryUz')}</option>
                      <option>{t('contacts.countryOther')}</option>
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">▾</div>
                  </div>
                </div>

             
                <div className="form-row-2 grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">{t('contacts.email')}</label>
                    <input
                      type="email"
                      placeholder={t('contacts.emailPlaceholder')}
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-red-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">{t('contacts.phone')}</label>
                    <input
                      type="tel"
                      placeholder="+996 502 800 202"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-red-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1.5">{t('contacts.recoveryType')}</label>
                  <div className="relative">
                    <select
                      value={form.recoveryType}
                      onChange={e => setForm({ ...form, recoveryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-400 appearance-none focus:outline-none focus:border-red-400 bg-white"
                    >
                      <option value="">{t('contacts.recoveryPlaceholder')}</option>
                      <option>{t('contacts.recoveryPassword')}</option>
                      <option>{t('contacts.recoverySeed')}</option>
                      <option>{t('contacts.recoveryKey')}</option>
                      <option>{t('contacts.recoveryOther')}</option>
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">▾</div>
                  </div>
                </div>

        
                <div className="form-row-2 grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">{t('contacts.walletType')}</label>
                    <div className="relative">
                      <select
                        value={form.walletType}
                        onChange={e => setForm({ ...form, walletType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-400 appearance-none focus:outline-none focus:border-red-400 bg-white"
                      >
                        <option value="">{t('contacts.walletTypePlaceholder')}</option>
                        <option>Bitcoin</option>
                        <option>Ethereum</option>
                        <option>Solana</option>
                        <option>Litecoin</option>
                        <option>{t('contacts.countryOther')}</option>
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">▾</div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">{t('contacts.walletVolume')}</label>
                    <input
                      type="text"
                      placeholder={t('contacts.walletVolumePlaceholder')}
                      value={form.walletVolume}
                      onChange={e => setForm({ ...form, walletVolume: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-red-400"
                    />
                  </div>
                </div>

             
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={form.agree}
                    onChange={e => setForm({ ...form, agree: e.target.checked })}
                    className="mt-0.5 w-4 h-4 accent-red-500 flex-shrink-0 cursor-pointer"
                  />
                  <label htmlFor="agree" className="text-xs text-gray-400 leading-snug cursor-pointer">
                    {t('contacts.agree')}{' '}
                    <span className="text-red-500 underline cursor-pointer">{t('contacts.agreeLink')}</span>
                  </label>
                </div>

           
                <button
                  onClick={handleSubmit}
                  className="w-full text-white font-bold py-4 rounded-xl text-sm transition-opacity hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #e83a1e, #c0392b)' }}
                >
                  {t('contacts.submit')}
                </button>

              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
