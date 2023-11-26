export function InfoSectionAName() {
        
    return (
        <>
           
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
        </>
    )
}