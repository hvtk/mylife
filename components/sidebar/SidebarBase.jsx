import Image from 'next/image'
import Link from 'next/link'

import { MylifeLogo } from '@/components/sidebar/sidebarParts/MylifeLogo'
import SidebarList from '@/public/assets/icons/sidebar/list.svg'
import SidebarPerson from '@/public/assets/icons/sidebar/person.svg'

export function SidebarBase() {
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
            <Link href="/listSelections">
              <Image
                  src={SidebarList}
                  alt="icon for list options/selection"
                  width={60}
                  height={60}
                />
            </Link>
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


