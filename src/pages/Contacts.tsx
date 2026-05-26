import { useState, useRef, useEffect } from 'react'
// Типы для CustomSelect и CustomCheckbox
type SelectOption = { value: string; label: string }
type CustomSelectProps = {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}
type CustomCheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
}
type FormState = {
  firstName: string;
  lastName: string;
  country: string;
  email: string;
  phone: string;
  recoveryType: string;
  walletType: string;
  walletVolume: string;
  agree: boolean;
}
import { useTranslation } from 'react-i18next'
import tt from '../assets/tt2.png'
import tg from '../assets/tg2.png'
import wats from '../assets/wats2.png'
import inst from '../assets/inst2.png'

// ── Кастомный Select ──────────────────────────────────────────────
function CustomSelect({ options, value, onChange, placeholder }: CustomSelectProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const selected = options.find(o => o.value === value)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} style={{ position: 'relative', userSelect: 'none' }}>
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', padding: '12px 16px', borderRadius: 12,
          border: `1px solid ${open ? '#e8192c' : '#e5e7eb'}`,
          boxShadow: open ? '0 0 0 3px rgba(232,25,44,0.1)' : 'none',
          fontSize: 13, color: selected ? '#111' : '#9ca3af',
          background: '#fff', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          transition: 'border-color 0.18s, box-shadow 0.18s',
          boxSizing: 'border-box',
        }}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0,
          background: '#fff', borderRadius: 12, border: '1px solid #f0f0f0',
          boxShadow: '0 8px 24px rgba(0,0,0,0.10)', zIndex: 100,
          overflow: 'hidden',
        }}>
          {options.map(opt => (
            <div
              key={opt.value}
              onClick={() => { onChange(opt.value); setOpen(false) }}
              style={{
                padding: '11px 16px', fontSize: 13, cursor: 'pointer',
                color: opt.value === value ? '#e8192c' : '#111',
                background: opt.value === value ? 'rgba(232,25,44,0.06)' : '#fff',
                fontWeight: opt.value === value ? 600 : 400,
                transition: 'background 0.12s',
              }}
              onMouseEnter={e => { if (opt.value !== value) e.currentTarget.style.background = '#f9fafb' }}
              onMouseLeave={e => { e.currentTarget.style.background = opt.value === value ? 'rgba(232,25,44,0.06)' : '#fff' }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Кастомный Checkbox ────────────────────────────────────────────
function CustomCheckbox({ checked, onChange }: CustomCheckboxProps) {
  return (
    <div
      onClick={() => onChange(!checked)}
      style={{
        width: 18, height: 18, borderRadius: 5, flexShrink: 0, cursor: 'pointer',
        border: `2px solid ${checked ? '#e8192c' : '#d1d5db'}`,
        background: checked ? '#e8192c' : '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'border-color 0.18s, background 0.18s',
        marginTop: 2,
      }}
    >
      {checked && (
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
          <polyline points="2 6 5 9 10 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  )
}

// ── Главный компонент ─────────────────────────────────────────────
export default function Contacts() {
  const { t } = useTranslation()
  const [form, setForm] = useState<FormState>({
    firstName: '', lastName: '', country: '', email: '', phone: '',
    recoveryType: '', walletType: '', walletVolume: '', agree: false
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (form.agree) setSent(true)
  }

  const inputCls = "form-input w-full px-4 py-3 rounded-xl border border-gray-200 text-sm"

  return (
    <div className="bg-white min-h-screen">

      <style>{`
        @media (max-width: 850px) {
          .contacts-grid { grid-template-columns: 1fr !important; }
          .form-row-2 { grid-template-columns: 1fr !important; }
        }
        .form-input {
          outline: none;
          transition: border-color 0.18s, box-shadow 0.18s;
        }
        .form-input:focus {
          border-color: #e8192c !important;
          box-shadow: 0 0 0 3px rgba(232,25,44,0.1) !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="contacts-grid grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

          {/* Левая — контактная инфо */}
          <div
            className="rounded-3xl p-8 flex flex-col justify-between"
            style={{ background: 'linear-gradient(135deg, #e83a1e 0%, #c0392b 50%, #a93226 100%)', minHeight: 580 }}
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
                  <p className="text-white/85 text-sm leading-snug">{t('contacts.address2')}</p>
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
            <p className="text-white/60 text-xs leading-relaxed mt-8">{t('contacts.infoText')}</p>
          </div>

          {/* Правая — форма */}
          <div className="rounded-3xl border border-gray-200 p-8" style={{ minHeight: 580, backgroundColor: 'rgba(245, 247, 250, 1)' }}>
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
                    <input type="text" placeholder={t('contacts.firstName')} value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">{t('contacts.lastName')}</label>
                    <input type="text" placeholder={t('contacts.lastName')} value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} className={inputCls} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1.5">{t('contacts.country')}</label>
                  <CustomSelect
                    value={form.country}
                    onChange={val => setForm(p => ({ ...p, country: val }))}
                    placeholder={t('contacts.countryPlaceholder')}
                    options={[
                      { value: 'kg', label: t('contacts.countryKg') },
                      { value: 'ru', label: t('contacts.countryRu') },
                      { value: 'kz', label: t('contacts.countryKz') },
                      { value: 'uz', label: t('contacts.countryUz') },
                      { value: 'other', label: t('contacts.countryOther') },
                    ]}
                  />
                </div>

                <div className="form-row-2 grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">{t('contacts.email')}</label>
                    <input type="email" placeholder={t('contacts.emailPlaceholder')} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">{t('contacts.phone')}</label>
                    <input type="tel" placeholder="+996 502 800 202" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className={inputCls} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1.5">{t('contacts.recoveryType')}</label>
                  <CustomSelect
                    value={form.recoveryType}
                    onChange={val => setForm(p => ({ ...p, recoveryType: val }))}
                    placeholder={t('contacts.recoveryPlaceholder')}
                    options={[
                      { value: 'password', label: t('contacts.recoveryPassword') },
                      { value: 'seed', label: t('contacts.recoverySeed') },
                      { value: 'key', label: t('contacts.recoveryKey') },
                      { value: 'other', label: t('contacts.recoveryOther') },
                    ]}
                  />
                </div>

                <div className="form-row-2 grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">{t('contacts.walletType')}</label>
                    <CustomSelect
                      value={form.walletType}
                      onChange={val => setForm(p => ({ ...p, walletType: val }))}
                      placeholder={t('contacts.walletTypePlaceholder')}
                      options={[
                        { value: 'bitcoin', label: 'Bitcoin' },
                        { value: 'ethereum', label: 'Ethereum' },
                        { value: 'solana', label: 'Solana' },
                        { value: 'litecoin', label: 'Litecoin' },
                        { value: 'other', label: t('contacts.countryOther') },
                      ]}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1.5">{t('contacts.walletVolume')}</label>
                    <input type="text" placeholder={t('contacts.walletVolumePlaceholder')} value={form.walletVolume} onChange={e => setForm({ ...form, walletVolume: e.target.value })} className={inputCls} />
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-1">
                  <CustomCheckbox checked={form.agree} onChange={v => setForm(p => ({ ...p, agree: v }))} />
                  <label className="text-xs text-gray-400 leading-snug cursor-pointer" onClick={() => setForm(p => ({ ...p, agree: !p.agree }))}>
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