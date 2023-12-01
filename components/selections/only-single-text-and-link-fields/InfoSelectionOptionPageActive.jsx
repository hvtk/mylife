'use client'

import Link from "next/link"
import { useState } from "react"


export function InfoSelectionOptionPageActive({href, children}) {

    // const [active, setActive] = useState(false);
    // const handleClick = () => {
    //     setActive(!active);
    // };

    return(
        <>
            <div className='d-flex align-items-center justify-content-start ms-3 fs-5'>
                <Link href={href}
                    >
                        <button className="btn btn-outline-primary text-white active"
                                type="button"
                                aria-pressed="true"
                                data-bs-toggle="button"
                                // onClick={handleClick}
                             >
                                {children}
                        </button>
                </Link>
            </div>
        </>
    )
}