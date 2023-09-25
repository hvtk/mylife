import Link from "next/link"
import { signOut } from "next-auth/react"

export function HeaderBase() {

    return(
        <>
            <div>
                <Link href="/signUp"
                    className='fs-5 me-2'
                    >
                    SignUp
                </Link>
            </div>
            <div>
                <Link href="/signIn"
                    className='fs-5'
                    >
                    SignIn
                </Link>
            </div>
            <div>
                <Link href="/homepage"
                      className='fs-5'
                    >
                        <button onClick={() => signOut()}
                              > 
                                 SignOut
                        </button>

                </Link>
            </div>

        </>
    )
}