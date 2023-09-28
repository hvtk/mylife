'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function FormSignUp() {

        const router = useRouter()
        const [data, setData] = useState({
            name: '',
            email: '',
            password: ''
        })

        const signUpUser = async (e) => {
            e.preventDefault()
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({data})
            });

            const userInfo = await response.json();
            router.push('/auth/signIn');
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
                        value={data.name}
                        onChange={(e) => {setData({...data, name: e.target.value })}}
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
                        value={data.email}
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
                        required
                        value={data.password}
                        onChange={(e) => {setData({...data, password: e.target.value })}}
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
                            href="/auth/signIn">
                                SignIn
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </>
    )
}