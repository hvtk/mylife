'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function FormSignUp() {

        const router = useRouter();

        const [err, setErr] = useState(false);

        const signUpUser = async (e) => {
            e.preventDefault();
            const name = e.target[0].value;
            const email = e.target[1].value;
            const password = e.target[2].value;

            try {
                const res = await fetch("/api/auth/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password,
                    }),
                });

                res.status === 201 && router.push("/auth/signIn");

            } catch (err) {
                setErr(true);
            }
        }


    return(
        <>
            <div className='bg-warning h-75 w-75 d-flex flex-column align-items-center justify-content-center '>
                <form className='d-flex flex-column align-items-center justify-content-center'
                      onSubmit={signUpUser}  
                    >
                    <div className='fs-3 mb-3'>
                        PLEASE SIGN UP
                    </div>
                    <label htmlFor="username"
                           className='form-label'
                        > 
                            Enter your name:
                        <input
                            type="text"
                            name="username"
                            className='form-control'
                            id="inputForm"
                            placeholder="Type your full name"
                            required   
                        />
                    </label>
                    <label htmlFor="email"
                        className='form-label'
                        > 
                            Enter your email:
                        <input
                            type="email"
                            name="email"
                            className='form-control'
                            id="inputForm"
                            placeholder="Type your email"
                            required
                        />
                    </label >
                    <label htmlFor="password"
                        className='form-label'
                        > 
                            Enter your password:
                        <input
                            type="password"
                            name="password"
                            className='form-control'
                            id="inputForm"
                            placeholder="Type your password"
                            required
                        />
                    </label >
                    <button type="submit"
                            className='btn btn-primary w-100'
                            >
                                Confirm SignUp
                    </button>
                    <div className="mt-3">
                        {/* <p>
                            Already an account?
                            <a className='text-primaryblue-600'
                            href="/auth/signIn">
                                SignIn
                            </a>
                        </p> */}
                        <Link className = 'text-primaryblue-600'
                              href="/auth/signIn"
                            >
                                Already an account?
                        </Link>  
                    </div>
                </form>
                {err && "Something went wrong!"}
            </div>
        </>
    )
}