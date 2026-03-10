import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '../../../i18n/routing';
import styles from './Hero.module.css';

const Hero = () => {
    const t = useTranslations('Hero');
    return (
        <section className={styles.hero}>
            {/* ─── Background ─── */}
            <div className={styles.bgLayer}>
                <div className={styles.bgGrid}></div>
                <div className={styles.bgGradient}></div>
                <div className={styles.bgLine}></div>
                <div className={styles.bgLine2}></div>
                <div className={styles.bgOrb}></div>
            </div>

            <div className={styles.container}>

                {/* ─── Eyebrow Stats Row ─── */}
                <div className={styles.statsRow}>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>140+</span>
                        <span className={styles.statLabel}>{t('stat_label_1')}</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>50</span>
                        <span className={styles.statLabel}>{t('stat_label_2')}</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>20.000t</span>
                        <span className={styles.statLabel}>{t('stat_label_3')}</span>
                    </div>
                </div>

                {/* ─── Main Headline Block ─── */}
                <div className={styles.headlineBlock}>
                    <h1 className={styles.headline}>
                        <span className={styles.line1}>{t('headline_1')}</span>
                        <span className={styles.line3}>{t('headline_2')}<span className={styles.dot}>.</span></span>
                    </h1>
                    <div className={styles.headlineRight}>
                        <p className={styles.lead}>
                            {t('lead_text')}
                        </p>
                        <div className={styles.actions}>
                            <Link href="/o-nama" className={styles.btnPrimary}>
                                {t('btn_about')}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </Link>
                            <Link href="/kontakt" className={styles.btnOutline}>{t('btn_contact')}</Link>
                        </div>
                    </div>
                </div>

                {/* ─── Services Grid ─── */}
                <div className={styles.services}>
                    <div className={styles.serviceCard}>
                        <img src="/Assets/06-270x175.jpg" alt="" className={styles.cardBgImage} />
                        <div className={styles.cardOverlay}></div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardNumber}>01</div>
                            <h3 className={styles.cardHeading}>{t('service_1_title')}</h3>
                            <p className={styles.cardDesc}>{t('service_1_desc')}</p>
                        </div>
                        <div className={styles.cardLine}></div>
                    </div>
                    <div className={styles.serviceCard}>
                        <img src="/Assets/05-3.jpg" alt="" className={styles.cardBgImage} />
                        <div className={styles.cardOverlay}></div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardNumber}>02</div>
                            <h3 className={styles.cardHeading}>{t('service_2_title')}</h3>
                            <p className={styles.cardDesc}>{t('service_2_desc')}</p>
                        </div>
                        <div className={styles.cardLine}></div>
                    </div>
                    <div className={styles.serviceCard}>
                        <img src="/Assets/7.jpg" alt="" className={styles.cardBgImage} />
                        <div className={styles.cardOverlay}></div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardNumber}>03</div>
                            <h3 className={styles.cardHeading}>{t('service_3_title')}</h3>
                            <p className={styles.cardDesc}>{t('service_3_desc')}</p>
                        </div>
                        <div className={styles.cardLine}></div>
                    </div>
                    <div className={styles.serviceCard}>
                        <img src="/Assets/10-1.jpg" alt="" className={styles.cardBgImage} />
                        <div className={styles.cardOverlay}></div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardNumber}>04</div>
                            <h3 className={styles.cardHeading}>{t('service_4_title')}</h3>
                            <p className={styles.cardDesc}>{t('service_4_desc')}</p>
                        </div>
                        <div className={styles.cardLine}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
