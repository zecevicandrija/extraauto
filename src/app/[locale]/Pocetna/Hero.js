import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
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
                        <span className={styles.statLabel}>Radnih Jedinica</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>50</span>
                        <span className={styles.statLabel}>Vozila u Floti</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>20.000t</span>
                        <span className={styles.statLabel}>Skladišnog Kapaciteta</span>
                    </div>
                </div>

                {/* ─── Main Headline Block ─── */}
                <div className={styles.headlineBlock}>
                    <h1 className={styles.headline}>
                        <span className={styles.line1}>Extra Auto</span>
                        <span className={styles.line3}>Transport<span className={styles.dot}>.</span></span>
                    </h1>
                    <div className={styles.headlineRight}>
                        <p className={styles.lead}>
                            "Extra Auto Transport" poseduje odgovarajuću mehanizaciju i vozila kojima uspešno obavlja poslove u niskogradnji i logistici — sa stručnom radnom snagom spremnom za najzahtevnije projekte.
                        </p>
                        <div className={styles.actions}>
                            <a href="/o-nama" className={styles.btnPrimary}>
                                O Kompaniji
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                            <a href="/kontakt" className={styles.btnOutline}>Kontakt</a>
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
                            <h3 className={styles.cardHeading}>Niskogradnja</h3>
                            <p className={styles.cardDesc}>Posedujemo vrhunsku mehanizaciju i stručan kadar sa kojim uspešno obavljamo sve vrste poslova iz oblasti niskogradnje i putne privrede.</p>
                        </div>
                        <div className={styles.cardLine}></div>
                    </div>
                    <div className={styles.serviceCard}>
                        <img src="/Assets/05-3.jpg" alt="" className={styles.cardBgImage} />
                        <div className={styles.cardOverlay}></div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardNumber}>02</div>
                            <h3 className={styles.cardHeading}>Logistika</h3>
                            <p className={styles.cardDesc}>Sa 50 vozila u voznom parku i sopstvenim skladišnim kapacitetom od 20.000 t pružamo sve vrste usluga: domaći i internacionalan transport.</p>
                        </div>
                        <div className={styles.cardLine}></div>
                    </div>
                    <div className={styles.serviceCard}>
                        <img src="/Assets/7.jpg" alt="" className={styles.cardBgImage} />
                        <div className={styles.cardOverlay}></div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardNumber}>03</div>
                            <h3 className={styles.cardHeading}>Stabilizacija Tla</h3>
                            <p className={styles.cardDesc}>Sa mašinom najnovije generacije Wirtgen WR serije uspešno obavljamo operacije u stabilizaciji tla i hladnoj reciklaži puteva.</p>
                        </div>
                        <div className={styles.cardLine}></div>
                    </div>
                    <div className={styles.serviceCard}>
                        <img src="/Assets/10-1.jpg" alt="" className={styles.cardBgImage} />
                        <div className={styles.cardOverlay}></div>
                        <div className={styles.cardContent}>
                            <div className={styles.cardNumber}>04</div>
                            <h3 className={styles.cardHeading}>Asfalt & Agregat</h3>
                            <p className={styles.cardDesc}>Proizvodnja i ugradnja drobljenog kamenog agregata i asfalta visokog kvaliteta za svaki zahtev u putnoj infrastrukturi.</p>
                        </div>
                        <div className={styles.cardLine}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
