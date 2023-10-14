// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

// For customized bootstrap css
const path = require('path')

module.exports = {

    reactStrictMode: true,

    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    }

}

// export function distinguishedName() {
//     reactStrictMode= true,
//     sassOptions= {
//         includePaths: [path.join(__dirname, 'styles')]
//     }
// }




