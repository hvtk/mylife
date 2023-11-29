import Link from "next/link"

export function GoBackTo({href, children}) {

    return ( 

        <>
            <div className='mt-2 me-3'>          
                <Link className='p-1'
                      href={href}  
                    >
                    <button className='btn btn-outline-secondary text-dark'
                                type="button"
                                >
                            {children}
                    </button>
                </Link>
            </div>
        </>
    )

}