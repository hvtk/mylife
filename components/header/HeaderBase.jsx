'use client'

import { signOut } from "next-auth/react"

export function HeaderBase() {

    return(
        <>
            <div>
                <a href="/auth/signUp"
                   className='fs-5 me-2'
                  >
                    SignUp
                </a>
            </div>
            <div>
                <a href="/auth/signIn"
                   className='fs-5 me-2 text-dark'
                  >
                    SignIn
                </a>
            </div>
            <div>
                <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/'})}>
                    SignOut
                </button>
            </div>
        </>
    )
}