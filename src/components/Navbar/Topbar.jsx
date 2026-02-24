import React, { useState, useEffect } from 'react';
import styles from './Topbar.module.scss';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

export default function Topbar({ onMenuClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.topbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.left}>
        {/* Hamburger for mobile */}
        <button className={styles.menuBtn} onClick={onMenuClick} aria-label="Toggle sidebar">
          <span /><span /><span />
        </button>

        {/* Logo */}
        <a href="#" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="8" fill="#003087"/>
              <circle cx="28" cy="10" r="7" fill="#f5a800" opacity="0.9"/>
              <text x="7" y="26" fontFamily="'Barlow Condensed',sans-serif" fontWeight="800" fontSize="14" fill="white">AT</text>
            </svg>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>AgroTec</span>
            <span className={styles.logoSub}>S.r.l. — Technical Portal</span>
          </div>
        </a>
      </div>

      <div className={styles.center}>
        {/* Search bar */}
        <div className={styles.search}>
          <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search manuals, bulletins, parts…"
          />
          <kbd className={styles.searchKbd}>⌘K</kbd>
        </div>
      </div>

      <div className={styles.right}>
        <LanguageSelector />
        <div className={styles.divider} />
        <a href="#" className={styles.btnOutline}>Log In</a>
        <a href="#" className={styles.btnPrimary}>Register</a>
      </div>
    </header>
  );
}
