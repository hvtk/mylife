export function HeaderBase() {

    return(
        <>
            <div>
                <a href="/auth/signUp"
                   className='fs-5 me-2 text-dark'
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
        </>
    )
}