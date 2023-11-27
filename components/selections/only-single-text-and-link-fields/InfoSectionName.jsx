import Link from "next/link"

export function InfoSectionName({href, children}) {

    return(
        <>
            <div>
                <Link className='fs-5 ms-3 text-dark'
                      href={href}
                    >
                    {children}
                </Link>
            </div>
        </>    
    )
}