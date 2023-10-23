'use client'

import Link from "next/link"
// import { signOut, signIn, useSession } from "next-auth/react"
// import { useRouter } from "next/router"

export function HeaderBase() {

    // const router = useRouter()
    // const isActive = (pathname) => Boolean = (pathname) => router.pathname === pathname;
    // const { session, status} = useSession()

    // let usingWebsite = (
    //     <div>
    //         <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/homepage'})}>
    //             SignOut
    //         </button>
    //     </div>
    // )

    // let 

    // const [ session ] = useSession();

    return(
        <>
            <div>
                <Link href="/auth/signUp"
                    className='fs-5 me-2'
                    >
                    SignUp
                </Link>
            </div>
            {/* {!session && ( */}
                <div>
                    {/* <Link href="/auth/signIn"
                        className='fs-5 me-2'
                        >
                        SignIn
                    </Link> */}
                    <button onClick={() => signIn({ callbackUrl: 'http://localhost:3000/auth/signIn'})}>
                        SignIn
                    </button>
                </div>
            {/* )} */}
            {/* {session && ( */}
                <div>
                    <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/homepage'})}>
                        SignOut
                    </button>
                </div>
            {/* )}     */}
        </>
    )
}