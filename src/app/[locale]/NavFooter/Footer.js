import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '../../../i18n/routing';
import styles from './Footer.module.css';

const Footer = () => {
  const t = useTranslations('Footer');
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
            <h3 className={styles.companyName}>{t('company_name')}</h3>
            <p className={styles.companyDesc}>
              {t('company_desc')}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeading}>{t('quick_links')}</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/" className={styles.footerLink}>{t('link_home')}</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/o-nama" className={styles.footerLink}>{t('link_about')}</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/usluge" className={styles.footerLink}>{t('link_services')}</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/kontakt" className={styles.footerLink}>{t('link_contact')}</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeading}>{t('our_services')}</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <Link href="/usluge#niskogradnja" className={styles.footerLink}>{t('service_1')}</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/usluge#logistika" className={styles.footerLink}>{t('service_2')}</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/usluge#stabilizacija" className={styles.footerLink}>{t('service_3')}</Link>
              </li>
              <li className={styles.linkItem}>
                <Link href="/usluge#asfalt" className={styles.footerLink}>{t('service_4')}</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className={styles.contactCol}>
            <h4 className={styles.colHeading}>{t('contact_info')}</h4>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <span className={styles.cLabel}>{t('address_label')}</span>
                  <span className={styles.cValue}>{t('address_value')}</span>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <span className={styles.cLabel}>{t('phone_label')}</span>
                  <span className={styles.cValue}>{t('phone_value')}</span>
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
                  <span className={styles.cLabel}>{t('email_label')}</span>
                  <span className={styles.cValue}>{t('email_value')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Bottom Bar (Copyright & Credits) ─── */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            {t('copyright', { year: currentYear })}
          </div>
          <div className={styles.creditBlock}>
            {t('design_by')}{' '}
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
