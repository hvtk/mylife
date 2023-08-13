import Image from 'next/image'
import styles from './mylifeImageStyles.module.css'
import MylifeLogoImageFill from 'public/assets/images/mylife-logo/life.jpg'
import MylifeLogoImageTopLeft from 'public/assets/images/mylife-logo/home.jpg'
import MylifeLogoImageTopRight from 'public/assets/images/mylife-logo/sad.jpg'
import MylifeLogoImageBottomRight from 'public/assets/images/mylife-logo/working.jpg'
import MylifeLogoImageBottomLeft from 'public/assets/images/mylife-logo/happy.jpg'

export function MylifeImage() {
  return (
    <div className={styles.divLogo} >
      <div>
        <Image
          src={MylifeLogoImageFill}
          alt="image that fills the parent element"
          placeholder='blur'
          quality={100}
          fill
          sizes="100vw"
        />
      </div>
      <div className={styles.mylifeLogoTL} >
        <Image
          src={MylifeLogoImageTopLeft}
          alt="image on top left in the parent element"
          width={25}
          height={30}
        />
      </div>
      <div className={styles.mylifeLogoTR} >
        <Image
          src={MylifeLogoImageTopRight}
          alt="image on top right in the parent element"
          width={23}
          height={32}
        />
      </div>
      <div className={styles.mylifeLogoBR} >
        <Image
          src={MylifeLogoImageBottomRight}
          alt="image on bottom right in the parent element"
          width={34}
          height={30}
        />
      </div>
      <div className={styles.mylifeLogoBL} >
        <Image
          src={MylifeLogoImageBottomLeft}
          alt="image on bottom left in the parent element"
          width={29}
          height={34}
        />
      </div>
    </div>
  )
}
