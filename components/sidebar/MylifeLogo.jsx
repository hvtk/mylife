import Image from 'next/image'

import MylifeLogoImageFill from 'public/assets/images/mylife-logo/life.jpg'
import MylifeLogoImageTopLeft from 'public/assets/images/mylife-logo/home.jpg'
import MylifeLogoImageTopRight from 'public/assets/images/mylife-logo/sad.jpg'
import MylifeLogoImageBottomRight from 'public/assets/images/mylife-logo/working.jpg'
import MylifeLogoImageBottomLeft from 'public/assets/images/mylife-logo/happy.jpg'

export function MylifeLogo() {
  return (
    <>
      <div className="border border-dark border-2 ">
        <div className="position-relative">
          <Image
            src={MylifeLogoImageFill}
            alt="image that fills the parent element"
            width={80}
            height={80}
            priority
          />
          <div className="position-absolute top-0 start-0">
            <Image
              src={MylifeLogoImageTopLeft}
              alt="image on top left in the parent element"
              width={25}
              height={30}
            />
          </div>
          <div className="position-absolute top-0 end-0">
            <Image
              src={MylifeLogoImageTopRight}
              alt="image on top right in the parent element"
              width={23}
              height={32}
            />
          </div>
          <div className="position-absolute bottom-0 end-0">
            <Image
              src={MylifeLogoImageBottomRight}
              alt="image on bottom right in the parent element"
              width={34}
              height={30}
            />
          </div>
          <div className="position-absolute bottom-0 start-0">
            <Image
              src={MylifeLogoImageBottomLeft}
              alt="image on bottom left in the parent element"
              width={29}
              height={34}
            />
          </div>
        </div>
      </div>
    </>
  )
}
