import Image from 'next/image'
import selectImageFamily from '@/public/assets/images/selections/family.jpg'


export function SelectionViewInfoAboutSelection() {
  return (
    <>
      <div className='bg-warning h-75 w-75 rounded-5'>
        <figure className='d-flex flex-column align-items-center h-100'>
          <figcaption className='d-flex align-items-center text-center fs-3 w-75 h-25'>
            All your information about your friends and family in one place
          </figcaption>
          <div>
            <Image
              src={selectImageFamily} 
              alt="image respresending my family and friends" 
              width={550} 
              height={375}
            />
          </div>
        </figure>
      </div>    
    </>
  )
}