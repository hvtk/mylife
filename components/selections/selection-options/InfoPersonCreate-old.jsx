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
            const secondName = e.target[2].value;
            const infix = e.target[3].value;
            const lastName = e.target[4].value;

            try {
            
                const res = await fetch("/api/selections/familyandfriends/create-infoperson", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        consumerEmail,
                        firstName,
                        secondName,
                        infix,
                        lastName
                    }),
                });

                res.status === 201 && router.push("/selectionFamilyAndFriends")
        
            } catch (err) {
                setErr(true);
            }
        }

    return (
        <form className='dropdown-menu p-4' style={{width: 550}}
              onSubmit={InfoPersonCreation}  
            >
            <div className='mb-3' >
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
                <label htmlFor="dropdownFormSecondName"
                       className='form-label'
                    >
                        Second Name
                </label> 
                <input type="text"
                       name="dropdownFormSecondName"
                       className='form-control' 
                       id="dropdownFormSecondName"
                       placeholder="Diederik"
                       required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="dropdownFormInfix"
                       className='form-label'
                    >
                        Infix
                </label> 
                <input type="text"
                       name="dropdownFormInfix"
                       className='form-control' 
                       id="dropdownFormInfix"
                       placeholder="van ´t"
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
                       placeholder="Kruijs"
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