// 'use client'

// import { useState } from "react"

export function FormSignUp() {
    return(
        <>
            <div className='bg-warning h-75 w-75 d-flex flex-column align-items-center justify-content-center '>
                <form className='d-flex flex-column align-items-center justify-content-center'>
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
                    />
                    </label >
                    <button type="submit"
                            className='btn btn-primary w-100'
                            >
                                Confirm SignUp
                    </button>
                    <div className="mt-3">
                        <p>
                            Already an account?
                            <a className='text-primaryblue-600'
                            href="/signIn">
                                SignIn
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </>
    )
}