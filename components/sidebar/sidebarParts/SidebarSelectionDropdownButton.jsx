export function SidebarSelectionDropdownButton({ children }) {

    return (

        <>
           
            <button className='btn btn-outline-primary dropdown-toggle text-dark fw-bold m-1'
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                        {children}
            </button>
        
        </>
    )
}