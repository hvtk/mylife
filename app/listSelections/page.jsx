import { handler } from '@/app/api/auth/[...nextauth]/route'

import { getServerSession } from 'next-auth'

import { MylifeImageAndCaption } from '@/components/self-contained-items/MyLifeImageAndCaption'
import { SelectionOptionsView } from '@/components/selections/SelectionOptionsView'
import { SidebarListSelections } from '@/components/sidebar/sidebarParts/sidebarOptions/SidebarListSelections'
import { HeaderSignOut } from '@/components/header/HeaderSignOut'
import { SelectedPageName } from '@/components/header/only-single-text-fields/SelectedPageName'

export default async function ListSelections() {

  const session = await getServerSession(handler);

  return (
    <>
      <div className='container min-vw-100 bg-body'>
        <div className='row'>
          <div className='col-sm-3 bg-secondary min-vh-100 d-flex flex-column justify-content-center'>
            <SidebarListSelections/> 
          </div>
          <div className='col-sm-9 bg-success min-vh-100'>
            <div className='row'>
              <div className='col-sm-4 min-vh-100 d-flex flex-column justify-content-center'> 
                <MylifeImageAndCaption />
              </div>
              <div className='col-sm-8'>
                <div className='row h-4'>
                  <div className='d-flex align-items-center justify-content-end '>
                    <SelectedPageName>
                      List Selections
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
                </div>
                <SelectionOptionsView />
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
