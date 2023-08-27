import Image from 'next/image'
import Link from 'next/link'
import { MylifeLogo } from 'components/sidebar/MylifeLogo'
import SidebarViewList from 'public/assets/icons/sidebar/view-list.svg'
import SidebarPerson from 'public/assets/icons/sidebar/person.svg'

export function SidebarListSelections() {
  return (
    <>
      <div className="d-flex flex-column h-90">
        <div className="d-flex flex-column align-items-end justify-content-between h-100">
          <div>
            <MylifeLogo /> 
          </div>
          <div>
            <Link href="/">
              <Image
                  src={SidebarViewList}
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