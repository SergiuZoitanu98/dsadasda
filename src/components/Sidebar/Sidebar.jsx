import React, { useState } from 'react';
import styles from './Sidebar.module.scss';

const nav = [
  {
    section: 'Overview',
    items: [
      { icon: '🏠', label: 'Home', href: '#', active: true },
      { icon: '🗺️', label: 'Standard Navigation', href: '#' },
    ],
  },
  {
    section: 'Information',
    items: [
      { icon: 'ℹ️', label: 'General Information', href: '#' },
      { icon: '📥', label: 'User Manual (Download)', href: '#' },
      { icon: '❓', label: 'FAQ & Contact', href: '#' },
    ],
  },
  {
    section: 'Technical Support',
    items: [
      { icon: '📖', label: 'Service Manuals', href: '#' },
      { icon: '📢', label: 'Service Bulletins', href: '#' },
      { icon: '🔩', label: 'Spare Parts Catalogue', href: '#' },
      { icon: '🎓', label: 'Training', href: '#' },
      { icon: '⏱️', label: 'Time Schedules & Equipment', href: '#' },
      { icon: '🛠️', label: 'Special Tools', href: '#' },
      { icon: '🔬', label: 'Diagnostic Tools', href: '#' },
      { icon: '💾', label: 'ECUs Re-programming', href: '#' },
      { icon: '🚨', label: 'Rescue Material', href: '#', badge: 'IT' },
    ],
  },
  {
    section: 'Legal',
    items: [
      { icon: '📋', label: 'Contractual Conditions', href: '#' },
      { icon: '🍪', label: 'Cookie Policy', href: '#' },
    ],
  },
];

export default function Sidebar({ open, onClose }) {
  const [activeItem, setActiveItem] = useState('Home');

  return (
    <>
      {/* Mobile overlay */}
      {open && <div className={styles.overlay} onClick={onClose} />}

      <aside className={`${styles.sidebar} ${open ? styles.open : ''}`}>
        {/* Company link */}
        <a
          href="https://www.agrotec-srl.it"
          target="_blank"
          rel="noreferrer"
          className={styles.companyLink}
        >
          <span className={styles.companyDot} />
          <span className={styles.companyName}>AgroTec S.r.l. Website</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.extIcon}>
            <line x1="7" y1="17" x2="17" y2="7"/>
            <polyline points="7 7 17 7 17 17"/>
          </svg>
        </a>

        <nav className={styles.nav}>
          {nav.map(group => (
            <div key={group.section} className={styles.group}>
              <span className={styles.groupLabel}>{group.section}</span>
              {group.items.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`${styles.navItem} ${activeItem === item.label ? styles.navItemActive : ''}`}
                  onClick={() => { setActiveItem(item.label); if (window.innerWidth < 900) onClose(); }}
                >
                  <span className={styles.navIcon}>{item.icon}</span>
                  <span className={styles.navLabel}>{item.label}</span>
                  {item.badge && <span className={styles.badge}>{item.badge}</span>}
                  {activeItem === item.label && <span className={styles.activeBar} />}
                </a>
              ))}
            </div>
          ))}
        </nav>

        {/* Bottom user area */}
        <div className={styles.sidebarBottom}>
          <div className={styles.userCard}>
            <div className={styles.userAvatar}>G</div>
            <div className={styles.userInfo}>
              <span className={styles.userName}>Guest User</span>
              <span className={styles.userRole}>Not authenticated</span>
            </div>
            <a href="#" className={styles.loginBtn} title="Log in">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                <polyline points="10 17 15 12 10 7"/>
                <line x1="15" y1="12" x2="3" y2="12"/>
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
