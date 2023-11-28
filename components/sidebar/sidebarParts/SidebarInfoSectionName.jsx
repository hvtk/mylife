import Link from "next/link"

export function SidebarInfoSectionName({href, children}) {

    return(
        <>
            <div>
                <Link className='fs-6 ms-3 text-dark'
                      href={href}
                    >
                    {children}
                </Link>
            </div>
        </>    
    )
}