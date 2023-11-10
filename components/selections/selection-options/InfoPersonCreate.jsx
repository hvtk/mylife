'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export function InfoPersonCreate() {
        
        const router = useRouter();

        const [err, setErr] = useState(false);

        const InfoPersonCreation = async (e) => {
            e.preventDefault();
            const consumerEmail = e.target[0].value;
            const firstName = e.target[1].value;
            const lastName = e.target[2].value;

            try {
            
                const res = await fetch("/api/selections/familyandfriends/create-infoperson", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        consumerEmail,
                        firstName,
                        lastName
                    }),
                });

                res.status === 201 && router.push("/selectionFamilyAndFriends")
        
            } catch (err) {
                setErr(true);
            }
        }

    return (
        <form className='dropdown-menu p-4'
              onSubmit={InfoPersonCreation}  
            >
            <div className='mb-3'>
                <label htmlFor="dropdownFormConsumerEmail"
                       className='form-label'
                    >
                        Consumer Email
                </label> 
                <input type="text"
                       name="dropdownFormConsumerEmail"
                       className='form-control' 
                       id="dropdownFormConsumerEmail"
                       placeholder="Consumer (email address)"
                       required
                />
            </div>
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