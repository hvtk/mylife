import Link from "next/link"

export function DropdownInfoSectionName({href, children}) {

    return(
        <>
            <div>
                <Link className='text-dark dropdown-item'
                      href={href}
                    >
                    {children}
                </Link>
            </div>
        </>    
    )
}