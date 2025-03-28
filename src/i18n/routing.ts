import { defineRouting } from 'next-intl/routing';
import { pathnames, locales, defaultLocale } from '@/configs/config';

export const routing = defineRouting({
  locales: locales,
  defaultLocale: defaultLocale,
  pathnames: pathnames,
});
