"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '../../../i18n/routing';
import styles from './HomeContact.module.css';

const HomeContact = () => {
    const t = useTranslations('HomeContact');
    return (
        <section className={styles.contactSection}>
            {/* ─── Background Layer ─── */}
            <div className={styles.bgLayer}>
                <div className={styles.bgGrid}></div>
                <div className={styles.bgGradient}></div>
                <div className={styles.bgOrb}></div>
            </div>

            <div className={styles.container}>
                {/* ─── Section Header ─── */}
                <div className={styles.headerBlock}>
                    <div className={styles.sectionLabel}>
                        <div className={`${styles.labelLine} ${styles.right}`}></div>
                        <span className={styles.labelText}>{t('section_label')}</span>
                        <div className={styles.labelLine}></div>
                    </div>
                    <h2 className={styles.headline}>
                        {t('headline')}<span className={styles.headlineDot}>.</span>
                    </h2>
                    <p className={styles.leadText}>
                        {t('lead_text')}
                    </p>
                </div>

                <div className={styles.splitLayout}>
                    {/* ─── Left Column: Info ─── */}
                    <div className={styles.infoColumn}>
                        <img src="/Assets/logo.svg" alt="Extra Auto Transport" className={styles.companyLogo} />

                        <h3 className={styles.companyName}>{t('company_name')}</h3>

                        <div className={styles.contactList}>
                            <div className={styles.contactItem}>
                                <div className={styles.iconBox}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div className={styles.itemContent}>
                                    <span className={styles.itemLabel}>{t('address_label')}</span>
                                    <span className={styles.itemValue}>{t('address_value')}</span>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconBox}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div className={styles.itemContent}>
                                    <span className={styles.itemLabel}>{t('phone_label')}</span>
                                    <span className={styles.itemValue}>{t('phone_value')}</span>
                                </div>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconBox}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div className={styles.itemContent}>
                                    <span className={styles.itemLabel}>{t('email_label')}</span>
                                    <span className={styles.itemValue}>{t('email_value')}</span>
                                </div>
                            </div>
                        </div>

                        <Link href="/kontakt" className={styles.btnPrimary}>
                            {t('all_contacts_btn')}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Link>
                    </div>

                    {/* ─── Right Column: Form ─── */}
                    <div className={styles.formColumn}>
                        <div className={styles.formCard}>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className={styles.formGrid}>
                                    <div className={styles.inputGroup}>
                                        <input type="text" className={styles.inputField} placeholder=" " required id="contactName" />
                                        <label htmlFor="contactName" className={styles.inputLabel}>{t('form_name')}</label>
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <input type="email" className={styles.inputField} placeholder=" " required id="contactEmail" />
                                        <label htmlFor="contactEmail" className={styles.inputLabel}>{t('form_email')}</label>
                                    </div>
                                    <div className={`${styles.inputGroup} ${styles.full}`}>
                                        <input type="tel" className={styles.inputField} placeholder=" " id="contactPhone" />
                                        <label htmlFor="contactPhone" className={styles.inputLabel}>{t('form_phone')}</label>
                                    </div>
                                    <div className={`${styles.inputGroup} ${styles.full}`}>
                                        <textarea className={styles.inputField} placeholder=" " required id="contactMessage"></textarea>
                                        <label htmlFor="contactMessage" className={styles.inputLabel}>{t('form_message')}</label>
                                    </div>
                                </div>

                                <button type="submit" className={styles.submitBtn}>
                                    <div className={styles.btnBg}></div>
                                    <span className={styles.btnText}>{t('form_submit')}</span>
                                    <div className={styles.btnIcon}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="22" y1="2" x2="11" y2="13"></line>
                                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                        </svg>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeContact;
