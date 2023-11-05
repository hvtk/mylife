'use client'

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";

import { useState } from "react";

export function FormSignIn() {
 
    const router = useRouter();

    const [err, setErr] = useState(false);

    const signInUser = async (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;

        signIn("credentials", { email, password }, { callbackUrl: 'http://localhost:3000/homepage'} );

        // router.push("/homepage");

    };

    return(

        <>
            <form className='d-flex flex-column align-items-center justify-content-center'
                    onSubmit={signInUser} 
                >
                <div className='fs-3 mb-3'>
                    PLEASE SIGN IN
                </div>
                <label htmlFor="emailadress"
                    className='form-label'
                    > 
                        Enter your emailadress:
                </label>
                <input
                    type="email"
                    name="email"
                    className='form-control'
                    id="inputForm"
                    placeholder="Type your emailadress"
                    required
                />
                <label htmlFor="password"
                    className='form-label'
                    > 
                        Enter your password:
                </label>
                <input
                    type="password"
                    name="password"
                    className='form-control'
                    id="inputForm"
                    placeholder="Type your password"
                    required
                />
                <button type="submit"
                        className='btn btn-primary w-100'
                        >
                            Confirm SignIn
                </button>
                <div className="mt-3">
                    <a className = 'text-primaryblue-600'
                        href="/auth/signUp"
                        >
                            Don't you have an account?
                    </a> 
                </div>
            </form>
            {err && "Something went wrong!"}
        </>
    )
}
