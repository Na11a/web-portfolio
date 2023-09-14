/** @type {import('next').NextConfig} */

module.exports = {
    compiler: {
      // Enables the styled-components SWC transform
      styledComponents: true
    },
    typescript: {
      ignoreBuildErrors: true
    },
    skipTypescriptChecking: true,
    async redirects() {
      return [
        {
          source: '/',
          destination: '/portfolio',
          permanent: true,
        },
        {
          source: '/examples/coins-tracker',
          destination: '/examples/coins-tracker/dashboard',
          permanent: true,
        },
        {
          source: '/examples',
          destination: '/examples/tetris',
          permanent: true,
        }
      ]
    },
  }
