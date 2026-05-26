import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// ── Кастомный Select ──────────────────────────────────────────────
interface SelectOption { label: string; value: string }
interface CustomSelectProps {
  options: SelectOption[]
  value: string
  onChange: (val: string) => void
  placeholder: string
}

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
              onMouseEnter={e => { if (opt.value !== value) (e.currentTarget as HTMLDivElement).style.background = '#f9fafb' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = opt.value === value ? 'rgba(232,25,44,0.06)' : '#fff' }}
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
function CustomCheckbox({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
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
const RequestPage: React.FC = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    firstName: '', lastName: '', country: '',
    email: '', phone: '', recoveryType: '',
    walletType: '', walletVolume: '', agreement: false,
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 16px', borderRadius: 12,
    border: '1px solid #e5e7eb', fontSize: 13, color: '#111',
    outline: 'none', boxSizing: 'border-box', background: '#fff',
    transition: 'border-color 0.18s, box-shadow 0.18s',
  };
  const labelStyle: React.CSSProperties = {
    fontSize: 12, fontWeight: 600, color: '#111', marginBottom: 6, display: 'block',
  };

  const features = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8192c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="3" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><circle cx="12" cy="14" r="1" fill="#e8192c" />
        </svg>
      ),
      title: t('request.feat1Title'), desc: t('request.feat1Desc'),
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8192c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: t('request.feat2Title'), desc: t('request.feat2Desc'),
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8192c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
      title: t('request.feat3Title'), desc: t('request.feat3Desc'),
    },
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#fff', minHeight: '100vh', padding: '60px 24px' }}>
      <h1 className="text-4xl font-black text-gray-900 text-center mb-8">{t('request.title')}</h1>

      <style>{`
        @media (max-width: 850px) {
          .request-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .form-row-2 { grid-template-columns: 1fr !important; }
        }
        .form-input:focus {
          border-color: #e8192c !important;
          box-shadow: 0 0 0 3px rgba(232,25,44,0.1) !important;
        }
      `}</style>

      <div className="request-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'stretch' }}>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {features.map((f, i) => (
            <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', flex: 1, padding: '28px 0', borderBottom: i < 2 ? '1px solid #f3f4f6' : 'none' }}>
              <div style={{ width: 58, height: 58, borderRadius: 16, background: '#fff5f0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid #ffd6c8' }}>
                {f.icon}
              </div>
              <div>
                <h3 style={{ margin: '0 0 12px', fontSize: 20, fontWeight: 800, color: '#111', lineHeight: 1.3 }}>{f.title}</h3>
                <p style={{ margin: 0, fontSize: 15, color: '#6b7280', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(245,247,250,1)', borderRadius: 24, border: '1px solid #f0f0f0', padding: '32px', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <h3 style={{ fontSize: 20, fontWeight: 900, color: '#111', margin: '0 0 8px' }}>{t('request.successTitle')}</h3>
              <p style={{ color: '#9ca3af', fontSize: 13, margin: '0 0 24px' }}>{t('request.successDesc')}</p>
              <button onClick={() => setSent(false)} style={{ background: 'linear-gradient(135deg,#e8192c,#ff5a2e)', color: '#fff', border: 'none', borderRadius: 12, padding: '12px 28px', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>
                {t('request.newRequest')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

              <div className="form-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={labelStyle}>{t('request.firstName')}</label>
                  <input type="text" name="firstName" placeholder={t('request.firstName')} value={form.firstName} onChange={handleChange} style={inputStyle} className="form-input" required />
                </div>
                <div>
                  <label style={labelStyle}>{t('request.lastName')}</label>
                  <input type="text" name="lastName" placeholder={t('request.lastName')} value={form.lastName} onChange={handleChange} style={inputStyle} className="form-input" required />
                </div>
              </div>

              <div>
                <label style={labelStyle}>{t('request.country')}</label>
                <CustomSelect
                  value={form.country}
                  onChange={val => setForm(p => ({ ...p, country: val }))}
                  placeholder={t('request.countryPlaceholder')}
                  options={[
                    { value: 'Russia', label: t('request.countryRu') },
                    { value: 'Kazakhstan', label: t('request.countryKz') },
                    { value: 'Kyrgyzstan', label: t('request.countryKg') },
                    { value: 'Other', label: t('request.countryOther') },
                  ]}
                />
              </div>

              <div className="form-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={labelStyle}>{t('request.email')}</label>
                  <input type="email" name="email" placeholder={t('request.emailPlaceholder')} value={form.email} onChange={handleChange} style={inputStyle} className="form-input" required />
                </div>
                <div>
                  <label style={labelStyle}>{t('request.phone')}</label>
                  <input type="tel" name="phone" placeholder="+996 502 800 202" value={form.phone} onChange={handleChange} style={inputStyle} className="form-input" required />
                </div>
              </div>

              <div>
                <label style={labelStyle}>{t('request.recoveryType')}</label>
                <CustomSelect
                  value={form.recoveryType}
                  onChange={val => setForm(p => ({ ...p, recoveryType: val }))}
                  placeholder={t('request.recoveryPlaceholder')}
                  options={[
                    { value: 'Password', label: t('request.recoveryPassword') },
                    { value: 'Access', label: t('request.recoveryAccess') },
                  ]}
                />
              </div>

              <div className="form-row-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={labelStyle}>{t('request.walletType')}</label>
                  <CustomSelect
                    value={form.walletType}
                    onChange={val => setForm(p => ({ ...p, walletType: val }))}
                    placeholder={t('request.walletTypePlaceholder')}
                    options={[
                      { value: 'Bitcoin', label: 'Bitcoin' },
                      { value: 'Ethereum', label: 'Ethereum' },
                      { value: 'Other', label: t('request.countryOther') },
                    ]}
                  />
                </div>
                <div>
                  <label style={labelStyle}>{t('request.walletVolume')}</label>
                  <input type="text" name="walletVolume" placeholder={t('request.walletVolumePlaceholder')} value={form.walletVolume} onChange={handleChange} style={inputStyle} className="form-input" required />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <CustomCheckbox checked={form.agreement} onChange={v => setForm(p => ({ ...p, agreement: v }))} />
                <label style={{ fontSize: 13, color: '#9ca3af', lineHeight: 1.5, cursor: 'pointer' }} onClick={() => setForm(p => ({ ...p, agreement: !p.agreement }))}>
                  {t('request.agree')}{' '}
                  <span style={{ color: '#e8192c', textDecoration: 'underline', cursor: 'pointer' }}>{t('request.agreeLink')}</span>
                </label>
              </div>

              <button
                type="submit"
                style={{ width: '100%', padding: '14px', borderRadius: 12, border: 'none', background: 'linear-gradient(135deg,#e8192c,#ff5a2e)', color: '#fff', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}
              >
                {t('request.submit')}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default RequestPage;