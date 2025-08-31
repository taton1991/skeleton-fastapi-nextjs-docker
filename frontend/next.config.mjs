/** @type {import('next').NextConfig} */
const nextConfig = {
  // говорим Next собирать статический сайт
  output: 'export',

  // если используешь next/image — отключаем оптимизацию (иначе экспорт ругнётся)
  images: { unoptimized: true },
};
export default nextConfig;
