'use client'

import Link from "next/link"
import { useState } from "react"


export function InfoSelectionOptionPage({href, children}) {

    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

    return(
        <>
            <div className='d-flex align-items-center justify-content-start ms-3 fs-5'>
                <Link href={href}
                    >
                        <button className={ active ? "btn btn-bg-secondary text-white" : "btn btn-outline-primary text-black"}
                                type="button"
                                onClick={handleClick}
                             >
                        {children}
                        </button>
                </Link>
            </div>
        </>
    )
}