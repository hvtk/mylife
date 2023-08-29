import Image from 'next/image'
import { SidebarBase } from '@/components/sidebar/SidebarBase'

import selectImageFamily from 'public/assets/images/selections/family.jpg'

export default function SelectionFamilyAndFriends() {
  return (
    <>
      <div className='container min-vw-100 bg-body'>
        <div className='row'>
          <div className='col-sm-1 bg-secondary min-vh-100 d-flex flex-column justify-content-center'>
            <SidebarBase/>
          </div>
          <div className='col-sm-11 bg-info min-vh-100'>
            <div className='row'>
              <div className='col-sm-6 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
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
              </div>
              <div className='col-sm-6 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
                <div className='bg-warning h-75 w-75 rounded-5'>
                  <div className='d-flex flex-column align-items-center h-100'>
                    <p className='bg-success d-flex align-items-center text-center fs-3 w-75 h-25'>
                      Choose one of the options below to fill in the data.
                      Choose "Create an option yourself" if the option does not resist.
                    </p>
                    <p className='bg-success d-flex align-items-center text-center fs-3 w-75 h-10'>
                      MY FAMILY AND FRIENDS
                    </p>
                    <p className='bg-success d-flex align-items-center text-center fs-3 w-75 h-8'>
                      A: Those who raised you
                    </p>
                    <p className='bg-success d-flex align-items-center text-center fs-3 w-75 h-8'>
                      B: Brothers and Sisters
                    </p>
                    <p className='bg-success d-flex align-items-center text-center fs-3 w-75 h-8'>
                      C: Uncles and Aunts
                    </p>
                    <p className='bg-success d-flex align-items-center text-center fs-3 w-75 h-8'>
                      D: Grandpa's and Grandma's
                    </p>
                    <p className='bg-success d-flex align-items-center text-center fs-3 w-75 h-8'>
                      E: Friends
                    </p>
                    <p className='bg-success d-flex align-items-center text-center fs-3 w-75 h-8'>
                      F: Create an option yourself
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}