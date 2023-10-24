'use client'

import Link from "next/link"

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
                    <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/'})}>
                        SignOut
                    </button>
                </div>
            {/* )}     */}
        </>
    )
}