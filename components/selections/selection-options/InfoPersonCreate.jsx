'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export function InfoPersonCreate() {
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const router = useRouter()

    const handleInfoPersonCreation = async (e) => {
        if(!firstName || !lastName)
        return alert('Please fill in the fields!')
        
        e.preventDefault()
        const response = await fetch('/api/selections/familyandfriends/create-infoperson', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({firstName, lastName})
        })
    }
    return (
        <form className='dropdown-menu p-4'
              onSubmit={handleInfoPersonCreation}  
            >
            <div className='mb-3'>
                <label htmlFor="dropdownFormFirstName"
                    className='form-label'
                    >
                        First Name
                </label> 
                <input type="text"
                       className='form-label' 
                       id="dropdownFormFirstName"
                       placeholder="Henk"
                       name="firstName"
                       value={firstName}
                       onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="dropdownFormLastName"
                        className='form-label'
                    >
                        Last Name
                </label> 
                <input type="text"
                       className='form-control' 
                       id="dropdownFormLastName"
                       placeholder="van t Kruijs"
                       name="lastName"
                       value={lastName}
                       onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <button type="submit"
                    className='btn btn-primary'
                    >
                        Save Info Person 
            </button>
        </form>
    )
}