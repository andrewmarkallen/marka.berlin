/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'via.placeholder.com']
  },
  output: 'standalone'
}

export default nextConfig
