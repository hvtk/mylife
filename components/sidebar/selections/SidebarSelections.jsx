import Image from 'next/image'
import Link from 'next/link'

import { MylifeLogo } from '@/components/sidebar/sidebarParts/MylifeLogo'
import SidebarList from 'public/assets/icons/sidebar/list.svg'
import SidebarPerson from 'public/assets/icons/sidebar/person.svg'
import { SidebarListSelectionsOffcanvas } from '@/components/sidebar/sidebarParts/sidebarOptions/SidebarListSelectionsOffcanvas'

export function SidebarSelections() {
  return (
    <>
      <div className='d-flex flex-column h-90'>
        <div className='d-flex flex-column align-items-center justify-content-between h-100'>
          <div>
            <Link href="/homepage">
               <MylifeLogo /> 
            </Link>
          </div>
          <div>
            <Link href="#listSelections"
                  data-bs-toggle="offcanvas"
                  role="button"
                  aria-controls="listSelections"
                >
              <Image
                  src={SidebarList}
                  alt="icon for list options/selection"
                  width={60}
                  height={60}
                />
            </Link>
            <div className='offcanvas offcanvas-start'
                 tabIndex="-1"
                 id="listSelections"
                 aria-labelledby='listSelectionsLabel' 
                >
                <div className='offcanvas-header'>
                  <h5 className='offcanvas-title'
                      id="listSelectionsLabel"
                    >
                      List Selections
                  </h5>
                  <button type="button"  
                          className='btn-close text-reset'
                          data-bs-dismiss="offcanvas"
                          aria-label="Close">
                  </button>
                </div>
                <div className='offcanvas-body'>
                  <SidebarListSelectionsOffcanvas />
                </div>
            </div>
          </div>
          <div>
            <Link href="/account">
              <Image
                  src={SidebarPerson}
                  alt="icon for account user"
                  width={60}
                  height={60}
                />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}


