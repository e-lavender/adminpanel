/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  i18n: {
    defaultLocale: 'en',
    localeDetection: false,
    locales: ['en', 'ru'],
  },
};

export default nextConfig;
