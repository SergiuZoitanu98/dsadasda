import React, { useState, useRef, useEffect } from 'react';
import styles from './LanguageSelector.module.scss';

const languages = [
  { code: 'en', label: 'English' }, { code: 'it', label: 'Italiano' },
  { code: 'de', label: 'Deutsch' }, { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' }, { code: 'pt', label: 'Português' },
  { code: 'nl', label: 'Nederlands' }, { code: 'pl', label: 'Polski' },
  { code: 'cs', label: 'Čeština' }, { code: 'ro', label: 'Română' },
  { code: 'hu', label: 'Magyar' }, { code: 'sv', label: 'Svenska' },
  { code: 'da', label: 'Dansk' }, { code: 'no', label: 'Norsk' },
  { code: 'fi', label: 'Suomi' }, { code: 'el', label: 'Ελληνικά' },
  { code: 'bg', label: 'Български' }, { code: 'hr', label: 'Hrvatski' },
  { code: 'sk', label: 'Slovenčina' }, { code: 'sl', label: 'Slovenščina' },
  { code: 'et', label: 'Eesti' }, { code: 'lv', label: 'Latviešu' },
  { code: 'lt', label: 'Lietuvių' },
];

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({ code: 'it', label: 'Italiano' });
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className={styles.selector} ref={ref}>
      <button className={styles.trigger} onClick={() => setOpen(p => !p)}>
        <span className={styles.flag}>🌐</span>
        <span className={styles.code}>{selected.code.toUpperCase()}</span>
        <svg className={`${styles.arrow} ${open ? styles.open : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      {open && (
        <div className={styles.dropdown}>
          <div className={styles.grid}>
            {languages.map(l => (
              <button
                key={l.code}
                className={`${styles.item} ${selected.code === l.code ? styles.active : ''}`}
                onClick={() => { setSelected(l); setOpen(false); }}
              >
                <span className={styles.itemCode}>{l.code.toUpperCase()}</span>
                <span className={styles.itemLabel}>{l.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
