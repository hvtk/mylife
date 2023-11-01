'use client'

import { SidebarBase } from '@/components/sidebar/SidebarBase'
import { FormSignUp } from '@/components/account/FormSignUp'
import { FormMylifeImage } from '@/components/account/FormMylifeImage'

export default function SignUp() {

  return (
    <>
      <div className='container min-vw-100 bg-body'>
        <div className='row'>
          <div className='col-sm-1 bg-secondary min-vh-100 d-flex flex-column justify-content-center'>
            <SidebarBase/>
          </div>
          <div className='col-sm-11 bg-success min-vh-100 d-flex flex-column justify-content-center'>
            <div className='row'>
              <div className='col-sm-5 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
                <div className='bg-secondary w-75 h-75 d-flex flex-column align-items-center justify-content-center '> 
                  <FormMylifeImage/>
                </div>
              </div>
              <div className='col-sm-7 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
                <div className='bg-secondary w-75 h-75 d-flex flex-column align-items-center justify-content-center '>
                  <FormSignUp/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
              integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" 
              crossorigin="anonymous">
      </script>
    </>
  )
}
