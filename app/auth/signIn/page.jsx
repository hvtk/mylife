import { FormSignIn } from '@/components/signIn/FormSignIn'
import { FormMylifeImage } from '@/components/self-contained-items/FormMylifeImage'


export default async function SignIn() {

  return (
    <>
      <div className='container min-vw-100 bg-success'>
        <div className='row'>
          <div className='col-sm-5 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
            <div className='bg-secondary w-75 h-75 d-flex flex-column align-items-center justify-content-center '> 
              <FormMylifeImage />
            </div>
          </div>
          <div className='col-sm-7 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
            <div className='bg-secondary w-75 h-75 d-flex flex-column align-items-center justify-content-center '>
              <div className='bg-warning h-75 w-75 d-flex flex-column align-items-center justify-content-center '>
                <FormSignIn />
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

