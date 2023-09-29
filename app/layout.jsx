import '../styles/globals.css'

// Customized bootstrap css
import '../styles/customBootstrapHomepage.scss'

import ImportBsJS from './scripts/importBsJS'

import { Provider } from './context/Provider'

export const metadata = {
    title: "MyLife",
    description: "All info about my life on one place",
}

export default function RootLayout({ children }) {  
    return (
        
        <html lang="en">
            <Provider>
                <body>
                    <ImportBsJS/>
                    {children}
                </body>
            </Provider>
        </html>

    )
}