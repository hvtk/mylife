export function SelectionOptionA1aRead({firstName, secondName, infix, lastName}) {
    
    return (
        <>
        
            <div className='row w-95'>  
                <div className='row mb-3'>
                    <div className='col-sm-4'>
                            {firstName}
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-sm-4'>
                        {secondName}
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-sm-4'>
                            {infix}
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-sm-4'>
                        {lastName}
                    </div>
                </div>
            </div>
            
        </>
    )
}