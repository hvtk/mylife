import Link from "next/link"

export function InfoSectionGetDataToUpdate({href, children}) {

    return(
         
        <>
            <Link 
                    href={href}
                >
                    <button className="border border-1 border-black rounded-1 text-black"
                            type="button"
                            >
                                {children}
                    </button>
                
            </Link>
        </>
            
    )
}