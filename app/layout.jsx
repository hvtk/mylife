import '../styles/globals.css'

// Customized bootstrap css
import '../styles/customBootstrapHomepage.scss'


import { AuthProvider } from '@/components/account/AuthProvider'
import StyledJsxStyleRegistry from './registry'

export const metadata = {
    title: "MyLife",
    description: "All info about my life on one place",
}

export default function RootLayout({children}) {  
    return (
        
        <html lang="en">
            <body>
                <StyledJsxStyleRegistry>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </StyledJsxStyleRegistry>
            </body>
        </html>

    )
}