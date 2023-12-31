import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['sv_se', 'en_us'];
export const localePrefix = 'as-needed';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });