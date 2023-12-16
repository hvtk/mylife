'use client'

import { useState } from "react"

export function InfoSectionAName() {

    const [state, setState] = useState({
        Firstname: "",
        Secondname: "",
        Infix: "",
        Lastname: ""
    });
       
    return (
        <>
           
            <div className='row mb-3'>
                <label htmlFor="FirstName"
                       className='col-sm-4 col-form-label'
                    >
                        First Name: {""}
                </label> 
                <div className="col-sm-8">
                    <input type="text"
                           name="FirstName"
                           className='form-control' 
                           id="FirstName"
                           placeholder="Henk"
                           defaultValue={state.Firstname}
                    />
                </div>
            </div>
            <div className='row mb-3'>
                <label htmlFor="SecondName"
                       className='col-sm-4 col-form-label'
                    >
                        Second Name: {""}
                </label> 
                <div className='col-sm-8'>
                    <input type="text"
                           name="SecondName"
                           className='form-control' 
                           id="SecondName"
                           placeholder="Diederik"
                           defaultValue={state.Secondname}
                    />
                </div>
            </div>
            <div className='row mb-3'>
                <label htmlFor="Infix"
                       className='col-sm-4 col-form-label'
                    >
                        Infix: {""}
                </label> 
                <div className="col-sm-8">
                    <input type="text"
                           name="Infix"
                           className='form-control' 
                           id="Infix"
                           placeholder="van ´t"
                           defaultValue={state.Infix}
                    />
                </div>
            </div>
            <div className='row mb-3'>
                <label htmlFor="LastName"
                       className='col-sm-4 col-form-label'
                    >
                        Last Name: {""}
                </label> 
                <div className='col-sm-8'>
                    <input type="text"
                           name="LastName"
                           className='form-control' 
                           id="LastName"
                           placeholder="Kruijs"
                           defaultValue= {state.Lastname}
                    />
                </div>
            </div>
        </>
    )
}