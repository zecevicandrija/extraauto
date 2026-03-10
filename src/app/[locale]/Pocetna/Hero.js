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
                    <div className={styles.headlineContent}>
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

                {/* ─── Hero Graphic (Right Side) ─── */}
                <div className={styles.heroGraphicWrapper}>
                    <svg viewBox="0 0 110.6 101.2" className={styles.heroGraphic} preserveAspectRatio="xMidYMax meet" style={{ overflow: 'visible' }}>
                        <defs>
                            <clipPath id="triangleClip">
                                <polygon points="55.3,0 82.9,47.9 110.6,95.8 55.3,95.8 0,95.8 27.6,47.9" />
                            </clipPath>
                        </defs>
                        <g clipPath="url(#triangleClip)">
                            <foreignObject x="-10" y="0" width="130" height="110">
                                <video
                                    src="/Assets/video1.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </foreignObject>
                            <rect x="0" y="0" width="110.6" height="101.2" fill="rgba(8, 8, 8, 0.45)" />
                            
                            {/* ─── Paths (Road) inside the triangle ─── */}
                            <path fill="#BC292E" d="M40.3,95.8C43.1,71.5,57.9,50,79.1,41.3l3.8,6.6l1,1.7c-14,10.7-20.6,28.3-21.1,46.2h-5.2H40.3z" opacity="0.9" />
                            <path fill="#FFFFFF" d="M34.7,101.2c2.2-28.5,21-54.5,47-62.2l4.6,6.7C66.6,56.7,57.7,79.2,57.8,101L34.7,101.2z" />
                            <path fill="none" stroke="#E4333A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4,10" d="M46.6,97.1c1-14.8,10.7-41.8,34.1-52.9" />
                        </g>
                        {/* ─── Outline for the Triangle ─── */}
                        <polygon points="55.3,0 82.9,47.9 110.6,95.8 55.3,95.8 0,95.8 27.6,47.9" fill="none" stroke="#FFFFFF" strokeWidth="0.6" strokeOpacity="0.8" />
                    </svg>
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
