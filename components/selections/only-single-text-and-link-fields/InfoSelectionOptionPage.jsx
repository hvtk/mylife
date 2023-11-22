import Link from "next/link"

export function InfoSelectionOptionPage({href, children}) {

    return(
        <>
            <div className='d-flex align-items-center justify-content-start ms-3 fs-5'>
                <Link href={href}
                    className='text-dark'
                    >
                        {children}
                </Link>
            </div>
        </>
    )
}