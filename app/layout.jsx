import '../styles/globals.css'

// Customized bootstrap css
import '../styles/customBootstrapHomepage.scss'

import { ProviderMylife } from './lib/ProviderMylife'

export const metadata = {
    title: "MyLife",
    description: "All info about my life on one place",
}

export default function RootLayout({children}) {  
    return (
        
        <html lang="en">
            <ProviderMylife>
                
                <body>
                    {children}
                </body>
                
            </ProviderMylife>
        </html>

    )
}