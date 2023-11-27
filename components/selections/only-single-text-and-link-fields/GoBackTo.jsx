import Link from "next/link"

export function GoBackTo({href, children}) {

    return ( 

        <div className='mt-2 me-3'>          
            <Link className='p-1 fs-7 text-dark border border-dark rounded-1'
                  href={href}  
                >
                    {children} 
            </Link>
        </div>
    )
}