/** @type {import('next').NextConfig} */

// For customized bootstrap css
const path = require('path')

const nextConfig = {

  reactStrictMode: true,
  
  sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
  },

}

module.exports = nextConfig




