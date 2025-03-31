import { Pathnames } from 'next-intl/routing';

export const defaultLocale = 'en' as const;
export const locales = ['en', 'vi'] as const;

export const pathnames = {
  '/': {
    en: '/',
    vi: '/',
  },
} satisfies Pathnames<typeof locales>;

export const localePrefix = 'always';
export type AppPathnames = keyof typeof pathnames;
export type AppLocales = (typeof locales)[number];
