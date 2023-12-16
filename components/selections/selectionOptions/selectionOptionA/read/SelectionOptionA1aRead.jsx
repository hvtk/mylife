export async function SelectionOptionA1aRead({firstName, secondName, infix, lastName}) {

    return (
        <>
          
            <div className='row w-95'> 
                
                <div className='row mb-3'>
                    <div className='col-sm-4'
                        >
                            First Name
                    </div> 
                    <div className="col-sm-8 border border-1 border-dark rounded-2">
                        <div>
                               {firstName}
                        </div>
                    </div>
                </div>
                <div className='row mb-3'>
                <div className='col-sm-4'
                        >
                            Second Name
                    </div> 
                    <div className="col-sm-8 border border-1 border-dark rounded-2">
                        <div>
                               {secondName}
                        </div>
                    </div>
                </div>
                <div className='row mb-3'>
                <div className='col-sm-4'
                        >
                            Infix
                    </div> 
                    <div className="col-sm-8 border border-1 border-dark rounded-2">
                        <div>
                               {infix}
                        </div>
                    </div>
                </div>
                <div className='row mb-3'>
                <div className='col-sm-4'
                        >
                            Last Name
                    </div> 
                    <div className="col-sm-8 border border-1 border-dark rounded-2">
                        <div>
                               {lastName}
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}