import { MylifeImageAndCaption } from '@/components/self-contained-items/MyLifeImageAndCaption'
import { SelectionOptionsView } from '@/components/selections/SelectionOptionsView'
import { SidebarBase } from '@/components/sidebar/SidebarBase'
import { HeaderBase } from '@/components/header/HeaderBase'
import { HeaderPageName } from '@/components/header/HeaderPageName'

export default function Homepage() {
  return (
    <>
      <div className='container min-vw-100 bg-body'>
        <div className='row'>
          <div className='col-sm-1 bg-secondary min-vh-100 d-flex flex-column justify-content-center'>
            <SidebarBase/>
          </div>
          <div className='col-sm-11 bg-success min-vh-100'>
            
            <div className='row'>
              <div className='col-sm-4 min-vh-100 d-flex flex-column justify-content-center'>
                <MylifeImageAndCaption />
              </div>
              <div className='col-sm-8'>
                <div className='h-4 d-flex justify-content-end '> 
                  <div className='d-flex align-items-center'>
                    <HeaderPageName>
                      Homepage
                    </HeaderPageName>
                    <HeaderBase/>
                  </div>
                </div>
                <SelectionOptionsView />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
