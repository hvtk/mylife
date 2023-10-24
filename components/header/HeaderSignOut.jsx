'use client'

import { signOut } from "next-auth/react"

export function HeaderSignOut() {

    return(
        <>
            <div>
                <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/'})}>
                    SignOut
                </button>
            </div>

        </>
    )
}