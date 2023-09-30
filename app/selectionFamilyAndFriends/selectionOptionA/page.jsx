'use client'



import { useSession } from 'next-auth/react'

import { InfoPersonCreate } from '@/components/selections/selection-options/InfoPersonCreate'

import { HeaderSignOut } from '@/components/header/HeaderSignOut'
import { SidebarBase } from '@/components/sidebar/SidebarBase'
import { SelectionOptionImage } from '@/components/selections/SelectionOptionImage'

import selectImageFamily from 'public/assets/images/selections/family.jpg'

export default function SelectionFamilyAndFriends() {

  const { data: session, status } = useSession();

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
                <div className='fs-5 me-5'>
                    Hi... {session?.user.name}
                </div>
                <HeaderSignOut/>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-6 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
                <div className='bg-warning h-75 w-75 rounded-5'>
                  <figure className='d-flex flex-column align-items-start h-100'>
                    <SelectionOptionImage
                      src={selectImageFamily}
                      alt="image respresending my family and friends"
                    />
                  </figure>
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
                      <InfoPersonCreate/>
                      {/* <form className='dropdown-menu p-4'>
                        <div className='mb-3'>
                          <label htmlFor="dropdownFormFirstName"
                                className='form-label'
                                >
                                  First Name
                          </label> 
                          <input type="text"
                                 className='form-label' 
                                 id="dropdownFormFirstName"
                                 placeholder="Henk"
                          />
                        </div>
                        <div className='mb-3'>
                          <label htmlFor="dropdownFormLastName"
                                 className='form-label'
                                >
                                  Last Name
                          </label> 
                          <input type="text"
                                 className='form-control' 
                                 id="dropdownFormLastName"
                                 placeholder="van t Kruijs"
                          />
                        </div>
                        <button type="submit"
                                className='btn btn-primary'
                              >
                                  Save Info Person 
                        </button>
                      </form> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </>
  )
}