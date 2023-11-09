import '../styles/globals.css'

// Customized bootstrap css
import '../styles/customBootstrapHomepage.scss'

import { AuthProvider } from '@/components/account/AuthProvider'

export const metadata = {
    title: "MyLife",
    description: "All info about my life on one place",
}

export default async function RootLayout({children}) {  

    return (
        
        <html lang="en">
            <body>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>

    )
}