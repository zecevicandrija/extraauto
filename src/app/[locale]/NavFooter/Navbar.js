"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Usluge', href: '/usluge' },
    { name: 'Oprema', href: '/oprema' },
    { name: 'Extra Agrar', href: '/extra-agrar' },
    { name: 'Reference', href: '/reference' },
    { name: 'Politika Kvaliteta', href: '/politika-kvaliteta' },
    { name: 'Sertifikati', href: '/sertifikati' },
    { name: 'Galerija', href: '/galerija' },
  ];

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        {/* ─── Utility Bar ─── */}
        <div className={styles.utilityBar}>
          <div className={styles.container}>
            <div className={styles.utilityContent}>
              <div className={styles.utilityLeft}>
                <a href="tel:+381025720701" className={styles.utilityLink}>
                  <svg className={styles.utilityIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  +381 (0)25 720 701
                </a>
                <span className={styles.utilityDot}></span>
                <a href="mailto:office@extraautotransport.com" className={styles.utilityLink}>
                  <svg className={styles.utilityIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  office@extraautotransport.com
                </a>
              </div>
              <div className={styles.utilityRight}>
                <div className={styles.langSwitcher}>
                  <button className={`${styles.langBtn} ${styles.langActive}`}>SR</button>
                  <button className={styles.langBtn}>EN</button>
                  <button className={styles.langBtn}>DE</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Main Navigation ─── */}
        <nav className={styles.mainNav}>
          <div className={styles.container}>
            <div className={styles.navInner}>
              {/* Logo */}
              <Link href="/" className={styles.logo}>
                <Image
                  src="/Assets/logo.svg"
                  alt="Extra Auto Transport"
                  width={48}
                  height={48}
                  className={styles.logoImg}
                  priority
                />
                <div className={styles.logoTextGroup}>
                  <span className={styles.logoName}>Extra Auto</span>
                  <span className={styles.logoSub}>Transport</span>
                </div>
              </Link>

              {/* Desktop Links */}
              <ul className={styles.navLinks}>
                {navLinks.map((link, i) => (
                  <li key={i} className={styles.navItem}>
                    <Link href={link.href} className={styles.navLink}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA + Hamburger */}
              <div className={styles.navActions}>
                <Link href="/kontakt" className={styles.ctaBtn}>Kontakt</Link>
                <button
                  className={styles.hamburger}
                  onClick={() => setMobileMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* ─── Full-Screen Mobile Menu ─── */}
      <div className={`${styles.mobileOverlay} ${mobileMenuOpen ? styles.mobileOverlayOpen : ''}`}>
        {/* Close button inside overlay — always visible */}
        <button
          className={styles.closeBtn}
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className={styles.mobileInner}>
          <ul className={styles.mobileLinks}>
            {navLinks.map((link, i) => (
              <li key={i} style={{ animationDelay: `${0.05 * i}s` }} className={styles.mobileLinkItem}>
                <Link
                  href={link.href}
                  className={styles.mobileLink}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className={styles.mobileLinkNumber}>0{i + 1}</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.mobileFooter}>
            <a href="tel:+381025720701" className={styles.mobileContact}>+381 (0)25 720 701</a>
            <a href="mailto:office@extraautotransport.com" className={styles.mobileContact}>office@extraautotransport.com</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
