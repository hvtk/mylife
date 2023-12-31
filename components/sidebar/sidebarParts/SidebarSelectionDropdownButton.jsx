export function SidebarSelectionDropdownButton({ children }) {

    return (

        <>
           
            <button className='btn btn-outline-light dropdown-toggle text-black fw-bold m-1'
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                        {children}
            </button>
        
        </>
    )
}