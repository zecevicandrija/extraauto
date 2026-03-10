import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import React from 'react';
import styles from './Oprema.module.css';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'EquipmentPage.metadata' });

    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords')
    };
}

export default function OpremaPage() {
    const t = useTranslations('EquipmentPage');

    // Total 16 images/items according to specification
    const itemsCount = 16;
    const items = Array.from({ length: itemsCount }, (_, i) => i + 1);

    return (
        <main className={styles.section}>
            {/* ─── Background Layer ─── */}
            <div className={styles.bgLayer}>
                <div className={styles.bgGrid}></div>
                <div className={styles.bgOrb}></div>
                <div className={styles.bgOrb2}></div>
            </div>

            <div className={styles.container}>
                {/* ─── Header ─── */}
                <div className={styles.headerBlock}>
                    <div className={styles.sectionLabel}>
                        <div className={styles.labelLine}></div>
                        <span className={styles.labelText}>{t('title')}</span>
                        <div className={styles.labelLine}></div>
                    </div>
                    <h1 className={styles.headline}>
                        {t('title')}<span className={styles.headlineDot}>.</span>
                    </h1>
                    <p className={styles.leadText}>
                        {t('description_1')}
                    </p>
                    <p className={styles.leadText}>
                        {t('description_2')}
                    </p>
                </div>

                {/* ─── Equipment Grid ─── */}
                <div className={styles.equipmentGrid}>
                    {items.map((num) => {
                        const itemCount = t(`items.item_${num}.count`);
                        const itemSpecs = t(`items.item_${num}.specs`);
                        const itemDesc = t(`items.item_${num}.desc`);

                        return (
                            <div key={num} className={styles.itemCard}>
                                <div className={styles.imageWrapper}>
                                    <img
                                        src={`/Assets/Oprema/oprema${num}.jpg`}
                                        alt={t(`items.item_${num}.title`)}
                                        className={styles.itemImage}
                                        loading="lazy"
                                    />
                                    <div className={styles.imageOverlay}></div>
                                    <div className={styles.cardNumber}>{num < 10 ? `0${num}` : num}</div>
                                </div>

                                <div className={styles.itemContent}>
                                    <h3 className={styles.itemTitle}>{t(`items.item_${num}.title`)}</h3>
                                    {itemDesc && <p className={styles.itemDesc}>{itemDesc}</p>}

                                    {(itemSpecs || itemCount) && (
                                        <div className={styles.itemMeta}>
                                            {itemSpecs && (
                                                <div className={styles.metaBadge}>
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1="4" y1="9" x2="20" y2="9"></line>
                                                        <line x1="4" y1="15" x2="20" y2="15"></line>
                                                        <line x1="10" y1="3" x2="8" y2="21"></line>
                                                        <line x1="16" y1="3" x2="14" y2="21"></line>
                                                    </svg>
                                                    {itemSpecs}
                                                </div>
                                            )}
                                            {itemCount && (
                                                <div className={styles.metaBadge}>
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                                    </svg>
                                                    {itemCount}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                                <div className={styles.cardGlow}></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
