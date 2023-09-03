import Link from "next/link"

export function HeaderBase() {
    return(
        <>
            <button className='border border-dark border-1 rounded-1 me-1'
                    type="submit"
                    name="signUp"
                >
                <Link href="/signUp">
                    SignUp
                </Link>
            </button>
            <button className='border border-dark border-1 rounded-1'
                    type="submit"
                    name="signIn"
                >
                <Link href="/signUp">
                    SignIn
                </Link>
            </button>
            
        </>
    )
}