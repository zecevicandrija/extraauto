import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    locales: ['sr', 'en', 'de'],
    defaultLocale: 'sr',
    localeDetection: false,
    pathnames: {
        '/': '/',
        '/usluge': {
            sr: '/usluge',
            en: '/services',
            de: '/dienstleistungen'
        },
        '/oprema': {
            sr: '/oprema',
            en: '/equipment',
            de: '/ausruestung'
        },
        '/extra-agrar': {
            sr: '/extra-agrar',
            en: '/extra-agrar',
            de: '/extra-agrar'
        },
        '/reference': {
            sr: '/reference',
            en: '/references',
            de: '/referenzen'
        },
        '/politika-kvaliteta': {
            sr: '/politika-kvaliteta',
            en: '/quality-policy',
            de: '/qualitaetspolitik'
        },
        '/sertifikati': {
            sr: '/sertifikati',
            en: '/certificates',
            de: '/zertifikate'
        },
        '/galerija': {
            sr: '/galerija',
            en: '/gallery',
            de: '/galerie'
        },
        '/kontakt': {
            sr: '/kontakt',
            en: '/contact',
            de: '/kontakt'
        }
    }
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
