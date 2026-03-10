import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.about}>
            {/* ─── Background ─── */}
            <div className={styles.bgLayer}>
                <div className={styles.bgGrid}></div>
                <div className={styles.bgGradient}></div>
                <div className={styles.bgLine}></div>
                <div className={styles.bgLine2}></div>
                <div className={styles.bgOrb}></div>
                <div className={styles.bgOrb2}></div>
            </div>

            <div className={styles.container}>

                {/* ─── Section Label ─── */}
                <div className={styles.sectionLabel}>
                    <div className={styles.labelLine}></div>
                    <span className={styles.labelText}>O Nama</span>
                </div>

                {/* ─── Headline Block ─── */}
                <div className={styles.headlineBlock}>
                    <div className={styles.headlineLeft}>
                        <h2 className={styles.headline}>
                            Extra Auto<br />
                            Transport<span className={styles.headlineDot}>.</span>
                        </h2>
                        <div className={styles.yearBadge}>
                            <span className={styles.yearDot}></span>
                            <span className={styles.yearText}>Osnovano 2007. godine</span>
                        </div>
                    </div>

                    <div className={styles.headlineDivider}></div>

                    <div className={styles.headlineRight}>
                        <p className={styles.leadText}>
                            „Extra Auto Transport" je domaća kompanija koja je osnovana 2007. godine. Raspolažemo savremenom mehanizacijom, sopstvenim servisom, visokostručnom i kvalitetnom radnom snagom.
                        </p>
                        <p className={styles.leadHighlight}>
                            Firme iz naše grupacije zapošljavaju više od 250 ljudi.
                        </p>
                        <p className={styles.leadBottom}>
                            Kvalitetnim radom, poštovanjem ugovorenih rokova i svojom poslovnošću, „Extra Auto Transport" se za kratko vreme svrstava u vodeće firme u Vojvodini i Srbiji kada su u pitanju radovi niskogradnje, putne privrede, vodoprivrede i mostogradnje.
                        </p>
                    </div>
                </div>

                {/* ─── Stats Strip ─── */}
                <div className={styles.statsStrip}>
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                                <circle cx="12" cy="12" r="2"></circle>
                                <path d="M6 12h.01M18 12h.01"></path>
                            </svg>
                        </div>
                        <div className={styles.statNumber}>200+</div>
                        <div className={styles.statLabel}>Radnih i Voznih Jedinica</div>
                        <div className={styles.statAccentLine}></div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 20h20"></path>
                                <path d="M5 20V8l7-5 7 5v12"></path>
                                <path d="M10 14h4v6h-4z"></path>
                            </svg>
                        </div>
                        <div className={styles.statNumber}>Asfaltna Baza</div>
                        <div className={styles.statLabel}>Kula</div>
                        <div className={styles.statAccentLine}></div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                <path d="M2 17l10 5 10-5"></path>
                                <path d="M2 12l10 5 10-5"></path>
                            </svg>
                        </div>
                        <div className={styles.statNumber}>Kamenolom</div>
                        <div className={styles.statLabel}>Ub, Čučuge</div>
                        <div className={styles.statAccentLine}></div>
                    </div>
                </div>

                {/* ─── Subsidiary Companies ─── */}
                <div className={styles.subsidiaryHeader}>
                    <div className={styles.labelLine}></div>
                    <span className={styles.subsidiaryTitle}>Ćerke Firme</span>
                </div>

                <div className={styles.subsidiaryGrid}>
                    <div className={styles.subsidiaryConnector}></div>

                    {/* Extra Agrar */}
                    <div className={styles.subCard}>
                        <div className={styles.subCardGlow}></div>
                        <div className={styles.subCardTop}>
                            <img src="/Assets/extraagrar-logo.svg" alt="Extra Agrar" className={styles.subLogo} />
                            <div className={styles.subArrow}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </div>
                        </div>
                        <h3 className={styles.subName}>Extra Agrar</h3>
                        <p className={styles.subDesc}>
                            Ćerka firma Extra Agrar osnovana je početkom 2011. godine i za kratko vreme je postala pouzdan partner svojim kupcima i dobavljačima.
                        </p>
                        <div className={styles.subAccentLine}></div>
                    </div>

                    {/* ZGOP */}
                    <div className={styles.subCard}>
                        <div className={styles.subCardGlow}></div>
                        <div className={styles.subCardTop}>
                            <img src="/Assets/zgop-logo.svg" alt="ZGOP" className={styles.subLogo} />
                            <div className={styles.subArrow}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </div>
                        </div>
                        <h3 className={styles.subName}>ZGOP</h3>
                        <p className={styles.subDesc}>
                            ZGOP posluje u okviru Extra Auto Transport sistema i zadužena je za izgradnju i remont pruga.
                        </p>
                        <div className={styles.subAccentLine}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
