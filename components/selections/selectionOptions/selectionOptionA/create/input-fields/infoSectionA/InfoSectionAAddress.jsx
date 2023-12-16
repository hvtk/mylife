'use client'

import { useState } from "react"

export function InfoSectionAAddress() {
        
    const [state, setState] = useState({
        Land: "",
        County: "",
        Address: "",
        PostalCode: "",
        City: ""
    });

    return (
        <>
           
            <div className='row mb-3'>
                <label htmlFor="Land"
                       className='col-sm-4 col-form-label'
                    >
                        Land
                </label> 
                <div className="col-sm-8">
                    <input type="text"
                           name="Land"
                           className='form-control' 
                           id="Land"
                           placeholder="Netherlands"
                           defaultValue={state.Land}
                    />
                </div>
            </div>
            <div className='row mb-3'>
                <label htmlFor="County"
                       className='col-sm-4 col-form-label'
                    >
                        County
                </label> 
                <div className='col-sm-8'>
                    <input type="text"
                           name="County"
                           className='form-control' 
                           id="County"
                           placeholder="Gelderland"
                           defaultValue={state.County}
                    />
                </div>
            </div>
            <div className='row mb-3'>
                <label htmlFor="Address"
                       className='col-sm-4 col-form-label'
                    >
                        Address
                </label> 
                <div className="col-sm-8">
                    <input type="text"
                           name="Address"
                           className='form-control' 
                           id="Address"
                           placeholder="Nicolaas Maesstraat 52"
                           defaultValue={state.Address}
                    />
                </div>
            </div>
            <div className='row mb-3'>
                <label htmlFor="PostalCode"
                       className='col-sm-4 col-form-label'
                    >
                        Postal Code
                </label> 
                <div className='col-sm-8'>
                    <input type="text"
                           name="PostalCode"
                           className='form-control' 
                           id="PostalCode"
                           placeholder="6717SV"
                           defaultValue={state.PostalCode}
                    />
                </div>
            </div>
            <div className='row mb-3'>
                <label htmlFor="City"
                       className='col-sm-4 col-form-label'
                    >
                        City
                </label> 
                <div className='col-sm-8'>
                    <input type="text"
                           name="City"
                           className='form-control' 
                           id="City"
                           placeholder="Ede"
                           defaultValue={state.City}
                    />
                </div>
            </div>
        </>
    )
}