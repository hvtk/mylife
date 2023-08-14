import Image from 'next/image'
import styles from './sidebarStyles.module.css'
import { MylifeLogo } from 'components/sidebar/MylifeLogo'
import SidebarList from 'public/assets/icons/sidebar/list.svg'


export function SidebarBase() {
  return (
    <div>
      <MylifeLogo /> 
      <div className={styles.divSidebarList}>
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


