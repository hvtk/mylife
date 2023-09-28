'use client'

import Link from "next/link"
import { signOut } from "next-auth/react"

export function HeaderSignOut() {

    return(
        <>
            <div>
                <Link href="/homepage"
                      className='fs-5 me-3'
                      onClick={() => signOut()}
                    > 
                        SignOut
                </Link>
            </div>

        </>
    )
}