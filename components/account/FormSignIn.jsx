'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

export function FormSignIn() {

    const router = useRouter();
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const signInUser = async (e) => {
        e.preventDefault();
        signIn('credentials', {
            ...data,
            redirect:false,
        })
        router.push("/homepage");
    };

    return(
        <>
            <div className='bg-warning h-75 w-75 d-flex flex-column align-items-center justify-content-center '>
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
                        <input
                            type="email"
                            name="email"
                            className='form-control'
                            id="inputForm"
                            placeholder="Type your emailadress"
                            onChange={(e) => {setData({...data, email: e.target.value })}}
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
                            onChange={(e) => {setData({...data, password: e.target.value })}}
                        />
                    </label >
                    <button type="submit"
                            className='btn btn-primary w-100'
                            >
                                Confirm SignIn
                    </button>
                    <div className="mt-3">
                        <p>
                            Don't you have an account?
                            <a className='text-primaryblue-600'
                            href="/auth/signUp">
                                SignUp
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </>
    )
}