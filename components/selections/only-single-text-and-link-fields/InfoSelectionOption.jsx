import Link from "next/link"

export function InfoSelectionOption({href, children}) {

    return(
        <>
            <div className='d-flex text-bg-danger align-items-center justify-content-center border border-dark border-1 fs-3 w-75 h-8 mb-2 rounded-3'>
                <Link href={href}
                    className='text-dark'
                    >
                        {children}
                </Link>
            </div>
        </>
    )
}