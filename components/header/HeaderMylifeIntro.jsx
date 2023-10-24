import Link from "next/link"

export function HeaderMylifeIntro() {

    return(
        <>
            <div>
                <Link href="/auth/signUp"
                    className='fs-5 me-3 text-dark'
                    >
                    SignUp
                </Link>
            </div>
            <div>
                <Link href="/auth/signIn"
                    className='fs-5 me-2 text-dark'
                    >
                    SignIn
                </Link>
            </div>
            
        </>
    )
}