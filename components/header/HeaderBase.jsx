'use client'

import Link from "next/link"
import { useEffect } from "react"
import { signOut } from "next-auth/react"
import { signIn } from "next-auth/react"

export function HeaderBase() {

    useEffect(() => {
        require('/node_modules/bootstrap/dist/js/bootstrap.js');
      }, []);
    
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