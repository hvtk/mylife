import Image from 'next/image'
import styles from './sidebarStyles.module.css'
import { MylifeLogo } from './mylifeLogo'
import SidebarList from 'public/icons/sidebar/list.svg'


export function SidebarBase() {
  return (
    <div>
      <MylifeLogo /> 
      <div className={styles.SidebarList}>
      <Image
          src={SidebarList}
          alt="icon for list options/selection"
          width={60}
          height={60}
        />
      </div>
    </div>
  )
}


