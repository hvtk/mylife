export function ConsumerEmailUpdate({children}) {

    return (

        <>
            <div className='row w-95'>
                <div className='row h-4 mb-2 ms-3 w-80 d-flex align-items-center justify-content-end'>
                        The email can not be changed!
                </div>
                <div className='row h-15 mb-3'>
                    <label htmlFor="ConsumerEmail"
                        className='col-sm-4 col-form-label'
                        >
                            Consumer-email
                    </label> 
                    <div className='col-sm-8'>
                        <input type="text"
                            name="ConsumerEmail"
                            className='form-control bg-danger' 
                            id="ConsumerEmail"
                            defaultValue={children}
                            required
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
