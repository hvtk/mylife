'use client'

import { useRouter } from "next/navigation"

import { useState } from "react"

import { ConsumerEmail } from "@/components/selections/selectionOptions/selectionOptionA/create/input-fields/ConsumerEmail"
import { SaveOptionA } from "@/components/selections/buttons/SaveOptionA"

export function SelectionOptionA1dCreate() {
        
        const router = useRouter();

        const [err, setErr] = useState(false);

        const SelectionOptionA1dCreation = async (e) => {
            e.preventDefault();
            const consumerEmail = e.target[0].value;
            const firstName = e.target[1].value;
            const secondName = e.target[2].value;
            const infix = e.target[3].value;
            const lastName = e.target[4].value;

            try {
            
                const res = await fetch("/api/selections/familyandfriends/selectionoptiona/infosection1d/create", {
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
        <>
            <form onSubmit={SelectionOptionA1dCreation}
                  className='row w-95'  
                >
                <ConsumerEmail />
                <div className='row mb-3'>
                    <label htmlFor="FirstName"
                        className='col-sm-4 col-form-label'
                        >
                            First Name
                    </label> 
                    <div className="col-sm-8">
                        <input type="text"
                            name="FirstName"
                            className='form-control' 
                            id="FirstName"
                            placeholder="Henk"
                        />
                    </div>
                </div>
                <div className='row mb-3'>
                    <label htmlFor="SecondName"
                        className='col-sm-4 col-form-label'
                        >
                            Second Name
                    </label> 
                    <div className='col-sm-8'>
                        <input type="text"
                            name="SecondName"
                            className='form-control' 
                            id="SecondName"
                            placeholder="Diederik"
                        />
                    </div>
                </div>
                <div className='row mb-3'>
                    <label htmlFor="Infix"
                        className='col-sm-4 col-form-label'
                        >
                            Infix
                    </label> 
                    <div className="col-sm-8">
                        <input type="text"
                            name="Infix"
                            className='form-control' 
                            id="Infix"
                            placeholder="van ´t"
                        />
                    </div>
                </div>
                <div className='row mb-3'>
                    <label htmlFor="LastName"
                        className='col-sm-4 col-form-label'
                        >
                            Last Name
                    </label> 
                    <div className='col-sm-8'>
                        <input type="text"
                            name="LastName"
                            className='form-control' 
                            id="LastName"
                            placeholder="Kruijs"
                        />
                    </div>
                </div>
                <div className='row'>
                    <SaveOptionA>
                        Save Name Fourth Person
                    </SaveOptionA>
                </div>
            </form>
        </>
    )
}