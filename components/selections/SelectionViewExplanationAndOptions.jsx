export function SelectionViewExplanationAndOptions() {
  return (
    <>
        <div className='bg-warning h-75 w-75 rounded-5'>
            <div className='d-flex flex-column align-items-center h-100'>
            <div className='text-bg-success border border-dark border-2 d-flex flex-column align-items-center justify-content-center mb-auto mt-3 fs-5 w-75 h-25 rounded-4'>
                <p>
                Choose one of the options below to fill in the data.
                </p>
                <p>
                Choose "Create an option yourself" <br></br>if the option does not resist.
                </p>
            </div>
            <p className='text-bg-success border border-dark border-2 fw-bold d-flex align-items-center justify-content-center fs-3 w-75 h-10 rounded-3'>
                MY FAMILY AND FRIENDS
            </p>
            <p className='text-bg-danger d-flex align-items-center justify-content-center fs-3 w-75 h-8 rounded-3'>
                A: Those who raised you
            </p>
            <p className='text-bg-danger d-flex align-items-center justify-content-center text-center fs-3 w-75 h-8 rounded-3'>
                B: Brothers and Sisters
            </p>
            <p className='text-bg-danger d-flex align-items-center justify-content-center text-center fs-3 w-75 h-8 rounded-3'>
                C: Uncles and Aunts
            </p>
            <p className='text-bg-danger d-flex align-items-center justify-content-center text-center fs-3 w-75 h-8 rounded-3 '>
                D: Grandpa's and Grandma's
            </p>
            <p className='text-bg-danger d-flex align-items-center justify-content-center text-center fs-3 w-75 h-8 rounded-3'>
                E: Friends
            </p>
            <p className='text-bg-dark d-flex align-items-center justify-content-center text-center fs-3 w-75 h-8 rounded-3'>
                F: Create an option yourself
            </p>
            </div>
        </div>
    </>
  )
}