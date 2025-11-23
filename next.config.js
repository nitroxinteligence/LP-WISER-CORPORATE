/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ckwjxuxatlqnuxbfltul.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'ckwjxuxatlqnuxbfltul.supabase.co',
        port: '',
        pathname: '/storage/v1/object/sign/**',
      },
    ],
    // Otimizações de performance
    deviceSizes: [390, 428, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 5184000, // 60 dias

    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compressão e otimização
  compress: true,
  swcMinify: true,
  poweredByHeader: false,

  // Otimizar imports de pacotes grandes
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'lucide-react',
      '@radix-ui/react-accordion',
      'recharts',
    ],
  },
}

module.exports = nextConfig
