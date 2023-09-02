// 'use client'

// import { useState } from "react"

export function FormSignIn() {
    return(
        <>
            <div className='bg-warning h-75 w-75 d-flex flex-column align-items-center justify-content-center '>
                <form className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='fs-3 mb-3'>
                        PLEASE SIGN IN
                    </div>
                    <label for="emailadress"
                        className='form-label'
                        > 
                            Enter your emailadress:
                    <input
                        type="email"
                        name="email"
                        className='form-control'
                        id="inputForm"
                        placeholder="Type your emailadress"
                    />
                    </label >
                    <label for="password"
                        className='form-label'
                        > 
                            Enter your password:
                    <input
                        type="password"
                        name="password"
                        className='form-control'
                        id="inputForm"
                        placeholder="Type your password"
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
                            href="/signUp">
                                SignUp
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </>
    )
}