import { SidebarBase } from '@/components/sidebar/SidebarBase'
import { SelectionViewInfoAboutSelection } from '@/components/selections/SelectionViewInfoAboutSelection'
import { SelectionViewExplanationAndOptions } from '@/components/selections/SelectionViewExplanationAndOptions'

import selectImageFamily from 'public/assets/images/selections/family.jpg'

export default function SelectionFamilyAndFriends() {
  return (
    <>
      <div className='container min-vw-100 bg-body'>
        <div className='row'>
          <div className='col-sm-1 bg-secondary min-vh-100 d-flex flex-column justify-content-center'>
            <SidebarBase/>
          </div>
          <div className='col-sm-11 bg-info min-vh-100'>
            <div className='row'>
              <div className='col-sm-6 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
                <SelectionViewInfoAboutSelection />
              </div>
              <div className='col-sm-6 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
               <SelectionViewExplanationAndOptions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}