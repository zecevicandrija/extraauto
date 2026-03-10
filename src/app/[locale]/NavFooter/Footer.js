import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerWrapper}>
      {/* ─── Background Layer ─── */}
      <div className={styles.bgLayer}>
        <div className={styles.bgGrid}></div>
        <div className={styles.bgOrb}></div>
      </div>

      <div className={styles.container}>
        {/* ─── Top Grid Section ─── */}
        <div className={styles.footerGrid}>

          {/* Column 1: Brand Info */}
          <div className={styles.brandCol}>
            <Link href="/">
              <img src="/Assets/logo.svg" alt="Extra Auto Transport Logo" className={styles.logo} />
            </Link>
            <h3 className={styles.companyName}>D.O.O. "Extra Auto Transport"</h3>
            <p className={styles.companyDesc}>
              Lider u Vojvodini i regiji za poslove niskogradnje, putne privrede, domaćeg i međunarodnog transporta.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeading}>Brzi Linkovi</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/" className={styles.footerLink}>Početna</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/o-nama" className={styles.footerLink}>O nama</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/usluge" className={styles.footerLink}>Usluge</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/kontakt" className={styles.footerLink}>Kontakt</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeading}>Naše Usluge</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/usluge#niskogradnja" className={styles.footerLink}>Niskogradnja</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/usluge#logistika" className={styles.footerLink}>Logistika</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/usluge#stabilizacija" className={styles.footerLink}>Stabilizacija Tla</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/usluge#asfalt" className={styles.footerLink}>Asfalt & Agregat</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className={styles.contactCol}>
            <h4 className={styles.colHeading}>Kontakt Info</h4>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <span className={styles.cLabel}>Adresa</span>
                  <span className={styles.cValue}>Maršala Tita 56, 21460 Vrbas</span>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <span className={styles.cLabel}>Telefon</span>
                  <span className={styles.cValue}>+381 (0)25 720 701</span>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <span className={styles.cLabel}>Email</span>
                  <span className={styles.cValue}>office@extraautotransport.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Bottom Bar (Copyright & Credits) ─── */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {currentYear} Extra Auto Transport. Sva prava zadržana.
          </div>
          <div className={styles.creditBlock}>
            Dizajn i razvoj:{' '}
            <a 
              href="https://zecevicdev.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.devLink}
            >
              zecevicdev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
