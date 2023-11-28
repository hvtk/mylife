export function SelectionOptionA1bRead({land, county, address, postalCode, city}) {
    
    return (
        <>
        
            <div className='row w-95'>  
                <div className='row mb-3'>
                    <div className='col-sm-4'
                        >
                            Land
                    </div> 
                    <div className="col-sm-8 border border-1 border-dark rounded-2">
                        <div>
                               {land}
                        </div>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-sm-4'
                        >
                            County
                    </div> 
                    <div className="col-sm-8 border border-1 border-dark rounded-2">
                        <div>
                            {county}
                        </div>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-sm-4'
                        >
                            Address
                    </div> 
                    <div className="col-sm-8 border border-1 border-dark rounded-2">
                        <div>
                            {address}
                        </div>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-sm-4'
                        >
                            Postal Code
                    </div> 
                    <div className="col-sm-8 border border-1 border-dark rounded-2">
                        <div>
                            {postalCode}
                        </div>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-sm-4'
                        >
                            City
                    </div> 
                    <div className="col-sm-8 border border-1 border-dark rounded-2">
                        <div>
                            {city}
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}