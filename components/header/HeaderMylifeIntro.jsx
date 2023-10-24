import Link from "next/link"

export function HeaderMylifeIntro() {

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
                <Link href="/auth/signIn"
                    className='fs-5 me-2'
                    >
                    SignUp
                </Link>
            </div>
            
        </>
    )
}