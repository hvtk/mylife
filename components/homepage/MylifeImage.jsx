import Image from 'next/image'
import MylifeLogoImageFill from 'public/assets/images/mylife-logo/life.jpg'
import MylifeLogoImageTopLeft from 'public/assets/images/mylife-logo/home.jpg'
import MylifeLogoImageTopRight from 'public/assets/images/mylife-logo/sad.jpg'
import MylifeLogoImageBottomRight from 'public/assets/images/mylife-logo/working.jpg'
import MylifeLogoImageBottomLeft from 'public/assets/images/mylife-logo/happy.jpg'

export function MylifeImage() {
  return (
    <div className="border border-dark border-1 w-200px h-200px">
      <div className="position-relative">
        <Image 
          src={MylifeLogoImageFill}
          alt="image that fills the parent element"
          width={200}
          height={200}
        />
        <div className="position-absolute top-0 start-0">
          <Image
            src={MylifeLogoImageTopLeft}
            alt="image on top left in the parent element"
            width={65}
            height={75}
          />
        </div>
        <div className="position-absolute top-0 end-0">
          <Image
            src={MylifeLogoImageTopRight}
            alt="image on top right in the parent element"
            width={60}
            height={90}
          />
        </div>
        <div className="position-absolute bottom-0 end-0">
          <Image
            src={MylifeLogoImageBottomRight}
            alt="image on bottom right in the parent element"
            width={90}
            height={80}
          />
        </div>
        <div className="position-absolute bottom-0 start-0" >
          <Image
            src={MylifeLogoImageBottomLeft}
            alt="image on bottom left in the parent element"
            width={77}
            height={90}
          />
        </div>
      </div>
    </div>
  )
}
