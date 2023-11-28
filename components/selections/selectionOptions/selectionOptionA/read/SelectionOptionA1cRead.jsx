export function SelectionOptionA1cRead({birthday, email, phone, phoneMobile, instagram}) {
    
    return (
        <>
        
            <div className='row w-95'>  
                <div className='row mb-3'>
                    <div className='col-sm-4'
                        >
                            Birthday
                    </div> 
                    <div className="col-sm-8 border border-1 border-dark rounded-2">
                        <div>
                               {birthday}
                        </div>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-sm-4'
                        >
                            Email
                    </div> 
                    <div className="col-sm-8 border border-1 border-dark rounded-2">
                        <div>
                               {email}
                        </div>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-sm-4'
                        >
                            Phone
                    </div> 
                    <div className="col-sm-8 border border-1 border-dark rounded-2">
                        <div>
                               {phone}
                        </div>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-sm-4'
                        >
                            Phone Mobile
                    </div> 
                    <div className="col-sm-8 border border-1 border-dark rounded-2">
                        <div>
                               {phoneMobile}
                        </div>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-sm-4'
                        >
                            Instagram
                    </div> 
                    <div className="col-sm-8 border border-1 border-dark rounded-2">
                        <div>
                               {instagram}
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}