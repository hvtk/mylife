'use client'

import { useRouter } from "next/navigation"

import { useState } from "react"

import { SaveOptionA } from "@/components/selections/buttons/SaveOptionA"

export function InfoSectionANameInputTemplate(props) {

    const router = useRouter();

    const [err, setErr] = useState(false);

    const SelectionOptionA1aUpdateData = async (e) => {
        e.preventDefault();

        const firstName = e.target[0].value;
        const secondName = e.target[1].value;
        const infix = e.target[2].value;
        const lastName = e.target[3].value;

        try {
        
            const res = await fetch("/api/selections/familyandfriends/selectionoptiona/infosection1a/update", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
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
            <form onSubmit={SelectionOptionA1aUpdateData}
                    className='row w-95'  
                >
                <div className='row h-4 mb-3 ms-3 w-80 d-flex align-items-center justify-content-end'>
                    Old data first name:'{props.firstName}'
                </div>
                <div className='row h-15' >
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
                            defaultValue={props.firstName}
                            
                        />
                    </div>
                </div>
                <div className='row h-4 mb-3 ms-2 w-85 d-flex align-items-center justify-content-end'>
                    Old data second name:'{props.secondName}'
                </div>
                <div className='row h-15'>
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
                                defaultValue={props.secondName}
                        />
                    </div>
                </div>
                <div className='row h-4 mb-3 ms-1 w-80 d-flex align-items-center justify-content-end'>
                    Old data infix:'{props.infix}'
                </div>
                <div className='row h-15'>
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
                                placeholder="van 't"
                                defaultValue={props.infix}
                        />
                    </div>
                </div>
                <div className='row h-4 mb-3 w-85 d-flex align-items-center justify-content-end'>
                    Old data last name:'{props.lastName}'
                </div>
                <div className='row h-15'>
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
                                defaultValue={props.lastName}
                        />
                    </div>
                </div>
                <div className='row'>
                        <SaveOptionA>
                            Update Name First Person
                        </SaveOptionA>
                </div>
            </form>
        </>
    )
        
}
