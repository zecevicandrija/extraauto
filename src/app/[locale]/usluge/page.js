import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import React from 'react';
import styles from './Usluge.module.css';
import { 
  Building2, 
  Factory, 
  Mountain, 
  Layers, 
  Recycle, 
  Route, 
  Trees, 
  Pickaxe, 
  Truck, 
  Package, 
  Warehouse 
} from 'lucide-react';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ServicesPage.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: '/'
    }
  };
}

const serviceIcons = {
  1: Building2,
  2: Factory,
  3: Mountain,
  4: Layers,
  5: Recycle,
  6: Route,
  7: Trees,
  8: Pickaxe,
  9: Truck,
  10: Package,
  11: Warehouse,
};

export default function UslugePage() {
  const t = useTranslations('ServicesPage');

  // Total 11 items according to specification
  const itemsCount = 11;
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
            {t('description')}
          </p>
        </div>

        {/* ─── Content Layout ─── */}
        <div className={styles.contentLayout}>
          {/* ─── Services Grid ─── */}
          <div className={styles.servicesSection}>
            <div className={styles.servicesGrid}>
              {items.map((num) => {
                const IconComponent = serviceIcons[num];
                return (
                  <div key={num} className={styles.serviceCard}>
                    <div className={styles.cardGlow}></div>
                    <div className={styles.cardNumber}>{num < 10 ? `0${num}` : num}</div>
                    
                    <div className={styles.iconWrapper}>
                      <IconComponent size={32} strokeWidth={1.5} />
                    </div>
                    
                    <h3 className={styles.cardTitle}>{t(`item_${num}`)}</h3>
                    <div className={styles.cardLine}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
