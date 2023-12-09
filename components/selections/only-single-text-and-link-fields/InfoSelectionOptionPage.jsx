import Link from "next/link"

export function InfoSelectionOptionPage({href, children}) {

    return(
        <>
            <div className='d-flex align-items-center justify-content-start ms-3 fs-5'>
                <Link href={href}
                    >
                        <button className="btn btn-outline-primary text-black"
                                type="button"
                             >
                                {children}
                        </button>
                </Link>
            </div>
        </>
    )
}