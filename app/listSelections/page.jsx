import { MylifeImageAndCaption } from '@/components/self-contained-items/MyLifeImageAndCaption'
import { SelectionOptionsView } from '@/components/selections/SelectionOptionsView'
import { SidebarListSelections } from '@/components/sidebar/SidebarListSelections'
import { HeaderBase } from '@/components/header/HeaderBase'

export default function ListSelections() {
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
                <HeaderBase/>
                <SelectionOptionsView />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
