import Link from "next/link"

export function InfoSelectionOptionPage({href, children}) {

    return(
        <>
            <div className='d-flex align-items-center justify-content-start border border-dark border-1 rounded-2 ms-3 fs-5'>
                <Link href={href}
                    className='text-dark ms-1'
                    >
                        {children}
                </Link>
            </div>
        </>
    )
}