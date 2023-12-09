export function DropdownToggle({children}) {

    return (    

        <>
            <button className='btn btn-outline-primary dropdown-toggle text-dark'
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                        {children}
            </button>
        </>
    )
}