import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';
import styles from './ExtraAgrar.module.css';
import {
  Wheat,
  Sprout,
  Tractor,
  Warehouse,
  HandCoins,
  FileSignature,
  ShieldCheck,
  TrendingUp,
  MapPin
} from 'lucide-react';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ExtraAgrarPage.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: '/extra-agrar'
    }
  };
}

const agrarIcons = {
  1: Wheat,
  2: Sprout,
  3: Tractor,
  4: Warehouse,
  5: HandCoins,
  6: FileSignature,
};

export default function ExtraAgrarPage() {
  const t = useTranslations('ExtraAgrarPage');

  const itemsCount = 6;
  const items = Array.from({ length: itemsCount }, (_, i) => i + 1);

  return (
    <main className={styles.section}>
      <div className={styles.bgLayer}>
        <div className={styles.bgGrid}></div>
        <div className={styles.bgOrb}></div>
        <div className={styles.bgOrb2}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.heroBlock}>
          <div className={styles.logoWrapper}>
            <Image
              src="/Assets/extraagrar-logo.svg"
              alt="Extra Agrar Logo"
              width={200}
              height={80}
              priority
            />
          </div>
          <h1 className={styles.headline}>
            {t('title')}<span className={styles.headlineDot}>.</span>
          </h1>
          <div className={styles.infoCardsRow}>
            <div className={styles.infoCardMini}>
              <div className={styles.miniIcon}>
                <ShieldCheck size={24} />
              </div>
              <p>{t('description_1')}</p>
            </div>
            <div className={styles.infoCardMini}>
              <div className={styles.miniIcon}>
                <TrendingUp size={24} />
              </div>
              <p>{t('description_2')}</p>
            </div>
            <div className={styles.infoCardMini}>
              <div className={styles.miniIcon}>
                <MapPin size={24} />
              </div>
              <p>{t('description_3')}</p>
            </div>
          </div>
        </div>

        <div className={styles.imagesRow}>
          <div className={styles.imgWrapper}>
            <Image
              src="/Assets/agrar11.jpg"
              alt="Extra Agrar Skladište 1"
              fill
              className={styles.img}
            />
          </div>
          <div className={styles.imgWrapper}>
            <Image
              src="/Assets/agrar22.jpg"
              alt="Extra Agrar Skladište 2"
              fill
              className={styles.img}
            />
          </div>
        </div>

        <div className={styles.servicesGrid}>
          {items.map((num) => {
            const IconComponent = agrarIcons[num];
            return (
              <div key={num} className={styles.serviceCard}>
                <div className={styles.cardGlow}></div>
                <div className={styles.cardNumber}>0{num}</div>

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
    </main>
  );
}
