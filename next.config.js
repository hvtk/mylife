// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

//For customized bootstrap css
const path = require('path')

module.exports = {

    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },

    // experimental: {
    //     serverActions: true
    // },

    // // For highlighting potential problems in the application
    // reactStrictMode: true,

    // // Is an Rust-based platform for fast developer tools. It can be used for both compilation and buncling
    // swcMinify: true,

    // // 
    // env: {
    //     NEXTAUTH_SECRET: '3P7DEueFGZmo/bdXo/hmAOH5QYdACe5jmRe27F2Z9N0='
    // }
}


