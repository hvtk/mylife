'use client'

import { useState } from "react"

export function InfoSectionAOtherInfo() {
        
    const [state, setState] = useState({
        Birthday: "",
        Email: "",
        Phone: "",
        PhoneMobile: "",
        Instagram: ""
    });

    return (
        <>
           
            <div className='row mb-3'>
                <label htmlFor="Birthday"
                       className='col-sm-4 col-form-label'
                    >
                        Birthday
                </label> 
                <div className="col-sm-8">
                    <input type="text"
                           name="Birthday"
                           className='form-control' 
                           id="Birthday"
                           placeholder="7 maart 1968"
                           defaultValue={state.Birthday}
                    />
                </div>
            </div>
            <div className='row mb-3'>
                <label htmlFor="Email"
                       className='col-sm-4 col-form-label'
                    >
                        Email
                </label> 
                <div className='col-sm-8'>
                    <input type="text"
                           name="Email"
                           className='form-control' 
                           id="Email"
                           placeholder="hvtk1968@gmail.com"
                           defaultValue={state.Email}
                    />
                </div>
            </div>
            <div className='row mb-3'>
                <label htmlFor="Phone"
                       className='col-sm-4 col-form-label'
                    >
                        Phone
                </label> 
                <div className="col-sm-8">
                    <input type="text"
                           name="Phone"
                           className='form-control' 
                           id="Phone"
                           placeholder="0318621482"
                           defaultValue={state.Phone}
                    />
                </div>
            </div>
            <div className='row mb-3'>
                <label htmlFor="PhoneMobile"
                       className='col-sm-4 col-form-label'
                    >
                        Phone Mobile
                </label> 
                <div className='col-sm-8'>
                    <input type="text"
                           name="Phone Mobile"
                           className='form-control' 
                           id="PhoneMobile"
                           placeholder="0647123326"
                           defaultValue={state.PhoneMobile}
                    />
                </div>
            </div>
            <div className='row mb-3'>
                <label htmlFor="Instagram"
                       className='col-sm-4 col-form-label'
                    >
                        Instagram
                </label> 
                <div className='col-sm-8'>
                    <input type="text"
                           name="Instagram"
                           className='form-control' 
                           id="Instagram"
                           placeholder="henknatuurfotografie"
                           defaultValue={state.Instagram}
                    />
                </div>
            </div>
        </>
    )
}