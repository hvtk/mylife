import Link from "next/link"

export function InfoSelectionOption({href, children}) {

    return(
        <>
            <div className='d-flex align-items-center justify-content-center border border-dark border-1 w-75 h-8 mb-2 rounded-3 bg-primary'>
                <Link href={href}
                    >
                        <button className="btn text-white fs-4"
                                type="button"
                             >
                                {children}
                        </button>
                        
                </Link>
            </div>
        </>
    )
}