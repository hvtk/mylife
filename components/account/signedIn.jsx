'use client'

import { useSession, signIn, signOut} from "next-auth/react"

export function Component() {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                Signed in as {session.user.email} 
                <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/homepage'})}>
                    SignOut
                </button>
            </>
        )
    }
    return (
        <>
            Not signed 
            <button onClick={() => signIn({ callbackUrl: 'http://localhost:3000/homepage'})}>
                SignIn
            </button>
        </>
    )
}