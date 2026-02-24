import React from 'react';
import styles from './Footer.module.scss';

const cols = [
  {
    title: 'Platform',
    links: [
      { label: 'Home',                    href: '#' },
      { label: 'Standard Navigation',     href: '#' },
      { label: 'Contractual Conditions',  href: '#' },
      { label: 'Cookie Policy',           href: '#' },
    ],
  },
  {
    title: 'Information',
    links: [
      { label: 'General Information', href: '#' },
      { label: 'User Manual',         href: '#' },
      { label: 'FAQ & Contact',        href: '#' },
    ],
  },
  {
    title: 'Technical Support',
    links: [
      { label: 'Service Manuals',           href: '#' },
      { label: 'Service Bulletins',         href: '#' },
      { label: 'Spare Parts Catalogue',     href: '#' },
      { label: 'Training',                  href: '#' },
      { label: 'Diagnostic Tools',          href: '#' },
      { label: 'ECUs Re-programming',       href: '#' },
      { label: 'Rescue Material',           href: '#' },
    ],
  },
  {
    title: 'AgroTec S.r.l.',
    links: [
      { label: 'Company Website',  href: 'https://www.agrotec-srl.it', external: true },
      { label: 'Find a Dealer',    href: '#' },
      { label: 'Privacy Policy',   href: '#' },
      { label: 'Terms of Use',     href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.brandRow}>
            <svg viewBox="0 0 40 40" fill="none" className={styles.brandSvg}>
              <rect width="40" height="40" rx="8" fill="rgba(255,255,255,0.12)"/>
              <circle cx="28" cy="10" r="7" fill="#f5a800" opacity="0.9"/>
              <text x="7" y="26" fontFamily="'Barlow Condensed',sans-serif" fontWeight="800" fontSize="14" fill="white">AT</text>
            </svg>
            <div>
              <div className={styles.brandName}>AgroTec S.r.l.</div>
              <div className={styles.brandTagline}>Technical Information Portal</div>
            </div>
          </div>
          <p className={styles.brandDesc}>
            Your official hub for service manuals, spare parts, diagnostics and technical training for agricultural machinery.
          </p>
        </div>

        {cols.map(col => (
          <div key={col.title} className={styles.col}>
            <h4 className={styles.colTitle}>{col.title}</h4>
            {col.links.map(l => (
              <a
                key={l.label}
                href={l.href}
                className={styles.colLink}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noreferrer' : undefined}
              >
                {l.label}{l.external && <span className={styles.ext}> ↗</span>}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <span>© {new Date().getFullYear()} AgroTec S.r.l. — All rights reserved.</span>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
