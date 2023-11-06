'use client'

import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export function HeaderBase() {

    // const session = useSession()

    // const router = useRouter()

    // if (session.status === "loading") {
    //     return <p>Loading...</p>;
    // }

    // if (session.status === "unauthenticated") {
    //     router?.push("/")
    // }
    
    // if (session.status === "authenticated") 
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