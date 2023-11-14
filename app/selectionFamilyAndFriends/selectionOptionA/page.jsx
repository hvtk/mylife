import { getServerSession } from 'next-auth'

import { InfoPersonCreate } from '@/components/selections/selection-options/InfoPersonCreate'

import { HeaderSignOut } from '@/components/header/HeaderSignOut'
import { SidebarBase } from '@/components/sidebar/SidebarBase'
import { SelectionOptionImage } from '@/components/selections/only-single-image-fields/SelectionOptionImage'
import { SelectedPageName } from '@/components/header/only-single-text-fields/SelectedPageName'

import selectImageFamily from 'public/assets/images/selections/family.jpg'

export default async function SelectionOptionA() {

  const session = await getServerSession();
  const option = "Selection option A: 'Those who raised you'";

  return (

    <>
      <div className='container min-vw-100 bg-body'>
        <div className='row'>
          <div className='col-sm-1 bg-secondary min-vh-100 d-flex flex-column justify-content-center'>
            <SidebarBase/>
          </div>
          <div className='col-sm-11 bg-info min-vh-100'>
            <div className='row'>
              <div className='col-sm-12 h-4 mt-2 d-flex align-items-center justify-content-end'>
                {/* <div className='fs-5 me-5 mt-2'>
                  Selection option A: "Those who raised you"
                </div>   */}
                <SelectedPageName>
                  { option }
                </SelectedPageName>
                {!!session && 
                <div className='fs-5 me-4'>
                  Hi...{session.user.name}
                </div>
                }
                {!!session &&
                <HeaderSignOut/>
                }
              </div>
                <div className='col-sm-6 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
                  <div className='bg-warning h-75 w-75 rounded-5'>
                    <div className='row h-35'>
                      <div className='col-sm-6 d-flex align-items-center justify-content-center'>
                        <div>
                          <SelectionOptionImage
                            src={selectImageFamily}
                            alt="image respresending my family and friends"
                          />
                        </div>
                      </div>
                      <div className='col-sm-6 d-flex flex-column align-items-center justify-content-center'>
                        <div className='fs-5'>
                          SELECTION OPTION A:
                        </div>
                        <div className='fs-5'>
                          "Those who raised you"
                        </div>
                      </div>
                    </div>
                    <div className='row h-10'>
                      <div className='d-flex align-items-center justify-content-center fs-5'>
                        <div>
                          INFORMATION SECTIONS
                        </div> 
                      </div>
                    </div>
                    <div className='row h-5'>
                      <div className='col-sm-6 d-flex align-items-center justify-content-start'>
                        <div className='fs-5 ms-5'>
                          <div>
                            Name first person
                          </div> 
                        </div>
                      </div>
                      <div className='col-sm-6 d-flex align-items-center justify-content-start'>
                        <div className='fs-5 ms-5'>
                          <div>
                            Name second person
                          </div> 
                        </div>
                      </div>
                    </div>
                    <div className='row h-5'>
                      <div className='col-sm-6 d-flex align-items-center justify-content-start'>
                        <div className='fs-5 ms-5'>
                          <div>
                            Name third person
                          </div> 
                        </div>
                      </div>
                      <div className='col-sm-6 d-flex align-items-center justify-content-start'>
                        <div className='fs-5 ms-5'>
                          <div>
                            Name fourth person
                          </div> 
                        </div>
                      </div>
                    </div>
                    <div className='row h-5'>
                      <div className='col-sm-6 d-flex align-items-center justify-content-start'>
                        <div className='fs-5 ms-5'>
                          <div>
                            Adress first person
                          </div> 
                        </div>
                      </div>
                      <div className='col-sm-6 d-flex align-items-center justify-content-start'>
                        <div className='fs-5 ms-5'>
                          <div>
                            Adress second person
                          </div> 
                        </div>
                      </div>
                    </div>
                    <div className='row h-5'>
                      <div className='col-sm-6 d-flex align-items-center justify-content-start'>
                        <div className='fs-5 ms-5'>
                          <div>
                            Adress third person
                          </div> 
                        </div>
                      </div>
                      <div className='col-sm-6 d-flex align-items-center justify-content-start'>
                        <div className='fs-5 ms-5'>
                          <div>
                            Adress fourth person
                          </div> 
                        </div>
                      </div>
                    </div>
                    <div className='row h-5'>
                      <div className='col-sm-6 d-flex align-items-center justify-content-start'>
                        <div className='fs-5 ms-5'>
                          <div>
                            Other info first person
                          </div> 
                        </div>
                      </div>
                      <div className='col-sm-6 d-flex align-items-center justify-content-start'>
                        <div className='fs-5 ms-5'>
                          <div>
                            Other info second person
                          </div> 
                        </div>
                      </div>
                    </div>
                    <div className='row h-5'>
                      <div className='col-sm-6 d-flex align-items-center justify-content-start'>
                        <div className='fs-5 ms-5'>
                          <div>
                            Other info third person
                          </div> 
                        </div>
                      </div>
                      <div className='col-sm-6 d-flex align-items-center justify-content-start'>
                        <div className='fs-5 ms-5'>
                          <div>
                            Other info fourth person
                          </div> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
                  <div className='bg-warning h-75 w-75 rounded-5 d-flex flex-column align-items-center justify-content-center'>
                    <div className='row h-10'>
                      <div className='fs-5 mb-5'>
                        <div>
                          input: NAME FIRST PERSON "Those who raised you"
                        </div> 
                      </div>
                    </div>
                    <InfoPersonCreate/>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
              integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" 
              crossOrigin="anonymous">
      </script>
    </>
  )
}