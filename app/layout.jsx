//To use bootstrap styles without customization
// import 'bootstrap/dist/css/bootstrap.min.css'

//To use bootstrap styles with customization
// export function MyApp({ Component, pageProps}) {

//     return <Component {...pageProps} />
// }

// //To use bootstrap with JS
// import { useEffect } from 'react'

// export function MyApp({ Component, pageProps }) {
//     useEffect(() => {
//         import('bootstrap/dist/js/bootstrap')
//     }, [])

//     return <Component {...pageProps} />
// }

import '../styles/globals.css'

//Customized bootstrap css
import '../styles/customBootstrapHomepage.scss'

export const metadata = {
    title: "MyLife",
    description: "All info about my life on one place",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}