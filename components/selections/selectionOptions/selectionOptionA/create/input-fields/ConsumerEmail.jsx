export function ConsumerEmail() {

    return (

        <>
            <div className='row mb-3'>
                <label htmlFor="ConsumerEmail"
                    className='col-sm-4 col-form-label'
                    >
                        Consumer-email
                </label> 
                <div className='col-sm-8'>
                    <input type="text"
                            name="ConsumerEmail"
                            className='form-control' 
                            id="ConsumerEmail"
                            placeholder="Consumer (email address)"
                            required
                    />
                </div>
            </div>
        </>
    )
}
