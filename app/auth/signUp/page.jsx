import { handler } from '@/app/api/auth/[...nextauth]/route';

import { getServerSession } from 'next-auth'

import { redirect } from 'next/navigation'

import { FormSignUp } from '@/components/signUp/FormSignUp'
import { FormMylifeImage } from '@/components/self-contained-items/FormMylifeImage'

export default async function SignUp() {

  const session = await getServerSession(handler);

    if(session) {
        redirect('/homepage')
    }

  return (
    <>
      <div className='container min-vw-100 bg-success'>
        <div className='row'>
          <div className='col-sm-5 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
            <div className='bg-secondary w-75 h-75 d-flex flex-column align-items-center justify-content-center '> 
              <FormMylifeImage/>
            </div>
          </div>
          <div className='col-sm-7 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
            <div className='bg-secondary w-75 h-75 d-flex flex-column align-items-center justify-content-center '>
              <div className='bg-warning h-75 w-75 d-flex flex-column align-items-center justify-content-center '>
                <FormSignUp/>
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
