import Image from 'next/image'
import { SidebarBase } from '@/components/sidebar/SidebarBase'

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
              <div className='col-sm-6 min-vh-100 d-flex flex-column justify-content-center'>
                <div className='bg-warning h-75 rounded-5'>
                  <div className='d-flex flex-column align-items-center justify-content-center h-100'>
                    <div>
                      <Image
                        src={selectImageFamily} 
                        alt="image respresending my family and friends" 
                        width={500} 
                        height={500}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-6'>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}