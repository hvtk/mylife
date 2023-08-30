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
                    <div className='text-bg-success border border-dark border-2 d-flex flex-column align-items-center justify-content-center mb-auto mt-3 fs-5 w-75 h-25 rounded-4'>
                      <p>
                      Choose one of the options below to fill in the data.
                      </p>
                      <p>
                        Choose "Create an option yourself" <br></br>if the option does not resist.
                      </p>
                    </div>
                    <p className='text-bg-success border border-dark border-2 fw-bold d-flex align-items-center justify-content-center fs-3 w-75 h-10 rounded-3'>
                      MY FAMILY AND FRIENDS
                    </p>
                    <p className='text-bg-danger d-flex align-items-center justify-content-center fs-3 w-75 h-8 rounded-3'>
                      A: Those who raised you
                    </p>
                    <p className='text-bg-danger d-flex align-items-center justify-content-center text-center fs-3 w-75 h-8 rounded-3'>
                      B: Brothers and Sisters
                    </p>
                    <p className='text-bg-danger d-flex align-items-center justify-content-center text-center fs-3 w-75 h-8 rounded-3'>
                      C: Uncles and Aunts
                    </p>
                    <p className='text-bg-danger d-flex align-items-center justify-content-center text-center fs-3 w-75 h-8 rounded-3 '>
                      D: Grandpa's and Grandma's
                    </p>
                    <p className='text-bg-danger d-flex align-items-center justify-content-center text-center fs-3 w-75 h-8 rounded-3'>
                      E: Friends
                    </p>
                    <p className='text-bg-dark d-flex align-items-center justify-content-center text-center fs-3 w-75 h-8 rounded-3'>
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