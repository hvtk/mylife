'use client'

import { SessionProvider } from "next-auth/react"

export function ProviderMylife({ children, session }) {
    return (
        <SessionProvider session={session}>
           {children}
        </SessionProvider>
    )
}