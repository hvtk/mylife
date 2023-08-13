export const metadata = {
    title: "MyLife",
    description: "All info about my life on one place"
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