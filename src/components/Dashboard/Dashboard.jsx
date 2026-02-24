import React from 'react';
import styles from './Dashboard.module.scss';

// Free-use images from Unsplash (no attribution required for demos)
const HERO_IMG = 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1400&auto=format&fit=crop&q=75';

const stats = [
  { label: 'Service Manuals', value: '4,200+', icon: '📖', color: '#003087' },
  { label: 'Parts Catalogues', value: '890+',  icon: '🔩', color: '#004bb5' },
  { label: 'Training Modules', value: '320+',  icon: '🎓', color: '#f5a800' },
  { label: 'Active Dealers',   value: '1,100+', icon: '🏪', color: '#005fde' },
];

const resources = [
  { icon: '📖', label: 'Service Manuals',          tag: 'Repair',       href: '#', new: false },
  { icon: '📢', label: 'Service Bulletins',         tag: 'Updates',      href: '#', new: true  },
  { icon: '🔩', label: 'Spare Parts Catalogue',     tag: 'Parts',        href: '#', new: false },
  { icon: '🎓', label: 'Training',                  tag: 'Learning',     href: '#', new: false },
  { icon: '⏱️', label: 'Time Schedules & Equipment',tag: 'Planning',     href: '#', new: false },
  { icon: '🛠️', label: 'Special Tools',             tag: 'Tooling',      href: '#', new: false },
  { icon: '🔬', label: 'Diagnostic Tools',           tag: 'Diagnosis',    href: '#', new: false },
  { icon: '💾', label: 'ECUs Re-programming',        tag: 'Electronics',  href: '#', new: true  },
  { icon: '🚨', label: 'Rescue Material',            tag: 'Safety',       href: '#', new: false },
];

const recent = [
  { title: 'T6 Series — Engine Update SB 2024-112',    type: 'Bulletin',  date: 'Feb 2025' },
  { title: 'T7 Heavy Duty — Hydraulics Service Manual', type: 'Manual',   date: 'Jan 2025' },
  { title: 'Boomer 40 — ECU Reprogramming v3.2',        type: 'ECU',      date: 'Jan 2025' },
  { title: 'Harvesting — Seasonal Maintenance Guide',   type: 'Manual',   date: 'Dec 2024' },
];

const typeColors = {
  Bulletin: { bg: '#fff3cd', text: '#856404' },
  Manual:   { bg: '#d0e8ff', text: '#003087' },
  ECU:      { bg: '#e2d9f3', text: '#5a1e9a' },
};

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>

      {/* ── Hero Banner ── */}
      <div className={styles.heroBanner}>
        <img src={HERO_IMG} alt="Tractor in field" className={styles.heroImg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>
            <span className={styles.badgePulse} />
            Technical Portal
          </span>
          <h1 className={styles.heroTitle}>
            Welcome to<br />
            <span className={styles.heroAccent}>AgroTec S.r.l.</span>
          </h1>
          <p className={styles.heroSub}>
            Your central hub for service documentation, diagnostics, and technical support.
          </p>
          <div className={styles.heroActions}>
            <a href="#" className={styles.heroBtnPrimary}>
              Browse Resources
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="#" className={styles.heroBtnOutline}>Find a Dealer</a>
          </div>
        </div>
      </div>

      {/* ── Stats Row ── */}
      <div className={styles.statsRow}>
        {stats.map(s => (
          <div key={s.label} className={styles.statCard} style={{ '--accent': s.color }}>
            <span className={styles.statIcon}>{s.icon}</span>
            <div>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Main Content Grid ── */}
      <div className={styles.contentGrid}>

        {/* Resources */}
        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <div>
              <span className={styles.eyebrow}>Quick Access</span>
              <h2 className={styles.sectionTitle}>Technical Resources</h2>
            </div>
            <a href="#" className={styles.viewAll}>View all →</a>
          </div>

          <div className={styles.resourceGrid}>
            {resources.map(r => (
              <a key={r.label} href={r.href} className={styles.resourceCard}>
                <div className={styles.rcTop}>
                  <span className={styles.rcIcon}>{r.icon}</span>
                  <div className={styles.rcRight}>
                    {r.new && <span className={styles.newBadge}>NEW</span>}
                    <span className={styles.rcTag}>{r.tag}</span>
                  </div>
                </div>
                <span className={styles.rcLabel}>{r.label}</span>
                <div className={styles.rcArrow}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Right column */}
        <aside className={styles.aside}>

          {/* Login CTA */}
          <div className={styles.loginCta}>
            <div className={styles.loginCtaTop}>
              <div className={styles.loginCtaIcon}>🔐</div>
              <div>
                <h3 className={styles.loginCtaTitle}>Sign In Required</h3>
                <p className={styles.loginCtaSub}>Access restricted content with your dealer account.</p>
              </div>
            </div>
            <a href="#" className={styles.loginCtaBtn}>Log In to Portal</a>
            <a href="#" className={styles.loginCtaRegister}>Don't have an account? Register →</a>
          </div>

          {/* Recent updates */}
          <div className={styles.recentBox}>
            <h3 className={styles.recentTitle}>Recent Updates</h3>
            <ul className={styles.recentList}>
              {recent.map(r => (
                <li key={r.title} className={styles.recentItem}>
                  <span
                    className={styles.recentType}
                    style={{ background: typeColors[r.type]?.bg, color: typeColors[r.type]?.text }}
                  >
                    {r.type}
                  </span>
                  <div className={styles.recentInfo}>
                    <span className={styles.recentName}>{r.title}</span>
                    <span className={styles.recentDate}>{r.date}</span>
                  </div>
                  <a href="#" className={styles.recentLink}>→</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Dealer finder */}
          <div className={styles.dealerBox}>
            <div className={styles.dealerIcon}>📍</div>
            <div>
              <h4 className={styles.dealerTitle}>Find a Dealer</h4>
              <p className={styles.dealerSub}>Locate your nearest authorized AgroTec service center.</p>
            </div>
            <a href="#" className={styles.dealerBtn}>Search</a>
          </div>
        </aside>
      </div>
    </div>
  );
}
