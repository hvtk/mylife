import Link from "next/link"

export function SidebarInfoSectionName({href, children}) {

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