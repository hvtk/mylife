import Link from "next/link"

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
        </>
    )
}