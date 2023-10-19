

import { InfoPersonList } from '@/components/selections/selection-options/InfoPersonList';

import { SidebarBase } from '@/components/sidebar/SidebarBase'
import { SelectionOptionImage } from '@/components/selections/SelectionOptionImage'

import selectImageFamily from 'public/assets/images/selections/family.jpg'



async function getData() {
  const res = await fetch("http://localhost:3000/api/selections/familyandfriends/read-infoperson", {
    cache: "no-store",
  });

  if(!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json();
}

const SelectionOptionAData = async () => {

  const infoPersons = await getData();

  return (

    <>
      <div className='container min-vw-100 bg-body'>
        <div className='row'>
          <div className='col-sm-1 bg-secondary min-vh-100 d-flex flex-column justify-content-center'>
            <SidebarBase/>
          </div>
          <div className='col-sm-11 bg-info min-vh-100'>
            <div className='row h-4'>
              <div className='d-flex align-items-center justify-content-end '>
                <div className='fs-5 me-5'>
                  Selection option A: "Those who raised you"
                </div>  
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-6 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
                <div className='bg-warning h-75 w-75 rounded-5 d-flex flex-column align-items-center'>
                  <div className='row h-35'>
                    <div className='d-flex align-items-center justify-content-center'>
                      <figure>
                        <SelectionOptionImage
                          src={selectImageFamily}
                          alt="image respresending my family and friends"
                        />
                      </figure>
                      <div className='d-flex flex-column align-items-center justify-content-center ms-5'>
                        <div className='fs-5'>
                          <div>
                            SELECTION OPTION A:
                          </div> 
                        </div>
                        <div>
                          <div className='fs-5'>
                            "Those who raised you"
                          </div>
                        </div> 
                      </div>
                    </div>
                  </div>
                  <div className='row h-4'>
                    <div className='d-flex align-items-center justify-content-center'>
                      {infoPersons.map((item) => (
                      <div className='fs-5 me-5'
                           key={item.id} 
                      >
                         <h1>
                            {item.firstName}
                          </h1>
                          <h1>
                            {item.lastName}
                           </h1>
                        {/* <InfoPersonList infoPersons={infoPersons}/> */}
                      
                          position info person
                        </div>
                      ))}
                      <div className='fs-5 ms-5'>
                          position info person
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
                <div className='bg-warning h-75 w-75 rounded-5'>
                  <div className='d-flex flex-column align-items-center h-100'>
                    <div className='dropdown'>
                      <button type="button"
                              className='btn btn-primary dropdown-toggle'
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              Info Person
                      </button> 
                      {/* <InfoPersonCreate/> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
              integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" 
              crossorigin="anonymous"
            >
      </script>
    </>
  )
}

export default SelectionOptionAData