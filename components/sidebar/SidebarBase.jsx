import Image from 'next/image'
import { MylifeLogo } from 'components/sidebar/MylifeLogo'
import SidebarList from 'public/assets/icons/sidebar/list.svg'
import SidebarPerson from 'public/assets/icons/sidebar/person.svg'

export function SidebarBase() {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <MylifeLogo /> 
        <Image
            src={SidebarList}
            alt="icon for list options/selection"
            width={60}
            height={60}
          />
        <Image
            src={SidebarPerson}
            alt="icon for account user"
            width={60}
            height={60}
          />
     </div>
    </>
  )
}


