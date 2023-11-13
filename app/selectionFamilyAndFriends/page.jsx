import Link from 'next/link'

import { getServerSession } from 'next-auth'

import { HeaderSignOut } from '@/components/header/HeaderSignOut'
import { SidebarBase } from '@/components/sidebar/SidebarBase'
import { SelectionExplenation } from '@/components/selections/SelectionExplenation'
import { SelectionImage } from '@/components/selections/SelectionImage'
import { SelectionName } from '@/components/header/SelectionName'

import selectImageFamily from 'public/assets/images/selections/family.jpg'

export default async function SelectionFamilyAndFriends() {

  const session = await getServerSession();
  const selection = "Selection 'My Family and Friends'";

  return (

    <>
      <div className='container min-vw-100 bg-body'>
        <div className='row'>
          <div className='col-sm-1 bg-secondary min-vh-100 d-flex flex-column justify-content-center'>
            <SidebarBase/>
          </div>
          <div className='col-sm-11 bg-info min-vh-100'>
            <div className='row'>
              <div className='col-sm-12 h-4 mt-2 d-flex align-items-center justify-content-end'>
                <SelectionName>
                  { selection }
                </SelectionName>
                {!!session && 
                <div className='fs-5 me-4'>
                  Hi...{session.user.name}
                </div>
                }
                {!!session &&
                <HeaderSignOut/>
                }
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-6 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
                <div className='bg-warning h-75 w-75 rounded-5'>
                  <div className='d-flex flex-column align-items-center h-100'>
                    <div className='d-flex align-items-center justify-content-center fs-3 w-75 h-25'>
                      All your information about your <br/> friends and family in one place
                    </div>
                    <div>
                      <SelectionImage
                        src={selectImageFamily}
                        alt="image respresending my family and friends"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
                <div className='bg-warning h-75 w-75 rounded-5'>
                  <div className='d-flex flex-column align-items-center h-100'>
                    <SelectionExplenation />
                    <div className='d-flex align-items-center justify-content-center text-bg-success border border-dark border-2 w-75 h-10 rounded-3 fs-3 fw-bold'>
                        MY FAMILY AND FRIENDS
                    </div>
                    <div className='d-flex text-bg-danger align-items-center justify-content-center border border-dark border-1 fs-3 w-75 h-8 rounded-3'>
                      <Link href="/selectionFamilyAndFriends/selectionOptionA">
                        A: Those who raised you
                      </Link>
                    </div>
                    <div className='d-flex text-bg-danger align-items-center justify-content-center border border-dark border-1 fs-3 w-75 h-8 rounded-3'>
                      <Link href="/selectionOptionsAB">
                        B: Brothers and Sisters
                      </Link>
                    </div>
                    <div className='d-flex text-bg-danger align-items-center justify-content-center border border-dark border-1 fs-3 w-75 h-8 rounded-3'>
                      <Link href="/selectionOptionsAC">
                        C: Uncles and Aunts
                      </Link>
                    </div>
                    <div className='d-flex text-bg-danger align-items-center justify-content-center border border-dark border-1 fs-3 w-75 h-8 rounded-3'>
                      <Link href="/selectionOptionsAD">
                        D: Grandpa's and Grandma's
                      </Link>
                    </div>
                    <div className='d-flex text-bg-danger align-items-center justify-content-center border border-dark border-1 fs-3 w-75 h-8 rounded-3'>
                      <Link href="/selectionOptionsAE">
                        E: Friends
                      </Link>
                    </div>
                    <div className='d-flex text-bg-danger fs-3 align-items-center justify-content-center border border-dark border-1 w-75 h-8 rounded-3 mb-3'>
                      <Link href="/selectionOptionsAF">
                        F: Create an option yourself
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
              integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" 
              crossOrigin="anonymous">
      </script>
    </>
  )
}