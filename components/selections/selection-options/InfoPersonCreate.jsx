'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export function InfoPersonCreate() {
    
    const router = useRouter()
    const [data, setData] = useState({
        firstName: '',
        lastName: ''
    })

    const InfoPersonCreation = async (e) => {
        e.preventDefault()
        const response = await fetch('/api/selections/familyandfriends/create-infoperson', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data})
        })

        if(response.ok) {
            alert('The info person is created succesfully!')
            setData({
                firstName: '',
                lastName: ''
            })
            router.push('/selectionFamilyAndFriends')
        } else {
            alert('Something went wrong when creating info person!')
        }

        // const infoPerson = await response.json();
        // router.push('/selectionFamilyAndFriends/selectionOptionA');
    }
    
    return (
        <form className='dropdown-menu p-4'
              onSubmit={InfoPersonCreation}  
            >
            <div className='mb-3'>
                <label htmlFor="dropdownFormFirstName"
                       className='form-label'
                    >
                        First Name
                </label> 
                <input type="text"
                       name="dropdownFormFirstName"
                       className='form-control' 
                       id="dropdownFormFirstName"
                       placeholder="Henk"
                       required
                       value={data.firstName}
                       onChange={(e) => {setData({...data, firstName: e.target.value})}}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="dropdownFormLastName"
                       className='form-label'
                    >
                        Last Name
                </label> 
                <input type="text"
                       name="dropdownFormLastName"
                       className='form-control' 
                       id="dropdownFormLastName"
                       placeholder="van t Kruijs"
                       required
                       value={data.lastName}
                       onChange={(e) => {setData({...data, lastName: e.target.value})}}
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