import { SidebarBase } from '@/components/sidebar/SidebarBase'

import { SignUpForm } from '@/components/Account/SignUpForm'

export default function SignUp() {
  return (
    <>
      <div className='container min-vw-100 bg-body'>
        <div className='row'>
          <div className='col-sm-1 bg-secondary min-vh-100 d-flex flex-column justify-content-center'>
            <SidebarBase/>
          </div>
          <div className='col-sm-11 bg-success min-vh-100'>
            <div className='d-flex flex-column align-items-center'>
                <SignUpForm/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}