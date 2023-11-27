export function SidebarSelectionDropdownButton({ children }) {

    return (

        <>
           
            <button className='btn btn-secondary dropdown-toggle text-dark fw-bold'
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                        {children}
            </button>
        
        </>
    )
}