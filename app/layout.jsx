import '../styles/globals.css'
import { Provider } from './context/Provider'

//Customized bootstrap css
import '../styles/customBootstrapHomepage.scss'


export const metadata = {
    title: "MyLife",
    description: "All info about my life on one place",
}

export default function RootLayout({ children }) {
    return (
        
        <html lang="en">
            <Provider>
                <body>
                    {children}
                </body>
            </Provider>
        </html>

    )
}