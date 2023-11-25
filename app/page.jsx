import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { MylifeImageAndCaption } from '@/components/self-contained-items/MyLifeImageAndCaption'
import { MylifeIntroSelectionOptionsView } from '@/components/mylifeIntroPage/MylifeIntroSelectionOptionsView'
import { HeaderBase } from '@/components/header/HeaderBase'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function MylifeIntroPage() {

  const session = await getServerSession(authOptions);

    if(session) {
        redirect('/homepage')
    }

  return (

    <>
      <div className='container min-vw-100 bg-body'>
        <div className='row bg-success min-vh-100'>
            <div className='col-sm-4 min-vh-100 d-flex flex-column justify-content-center'>
            <MylifeImageAndCaption />
            </div>
            <div className='col-sm-8'>
              <div className='row h-4'>
                <div className='d-flex align-items-center justify-content-end'>
                  <div className='fs-5 me-5'>
                      MYLIFE INTRODUCTION PAGE
                  </div>  
                  <HeaderBase/>
                </div>
              </div>
              <MylifeIntroSelectionOptionsView />
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