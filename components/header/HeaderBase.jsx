'use client'

import Link from "next/link"
import { signOut } from "next-auth/react"
import { signIn } from "next-auth/react"

export function HeaderBase() {

    return(
        <>
            <div>
                <Link href="/auth/signUp"
                    className='fs-5 me-2'
                    >
                    SignUp
                </Link>
            </div>
            <div>
                <button onClick={() => signIn({ callbackUrl: 'http://localhost:3000/auth/signIn'})}>
                    SignIn
                </button>
            </div>
            <div>
                <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/'})}>
                    SignOut
                </button>
            </div>
        </>
    )
}