// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

//For customized bootstrap css
const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}


