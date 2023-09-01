// 'use client'

// import { useState } from "react"

export function SignUpForm() {
    return(
        <>
            <div className='d-flex flex-column justify-content-center h-75'>
                <form className='d-flex flex-column justify-content-center'>
                    <label className='d-flex flex-column align-items-center justify-content-center'> Enter your name:
                        <input
                            type="text"
                            name="username"
                        />
                    </label>
                    <label className='d-flex flex-column align-items-center justify-content-center'> Enter your email:
                        <input
                            type="text"
                            name="email"
                        />
                    </label >
                    <input type="submit" />
                </form>
            </div>
        </>
    )
}