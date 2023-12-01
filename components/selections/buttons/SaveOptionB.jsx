export function SaveOptionB({children}) {

    return (

        <>
            <div className='col-sm-12'>
                <button type="submit"
                        className='btn btn-primary form-control'
                        >
                            {children} 
                </button>
            </div>
        </>
    )
}