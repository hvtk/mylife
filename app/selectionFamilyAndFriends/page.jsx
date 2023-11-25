import { getServerSession } from 'next-auth'

import { HeaderSignOut } from '@/components/header/HeaderSignOut'
import { SidebarBase } from '@/components/sidebar/SidebarBase'
import { SelectionExplenation } from '@/components/selections/self-contained-items/SelectionExplenation'
import { SelectedSelectionImage } from '@/components/selections/only-single-image-fields/SelectedSelectionImage'
import { SelectedPageName } from '@/components/header/only-single-text-fields/SelectedPageName'
import { InfoSelectionName } from '@/components/selections/only-single-text-fields/InfoSelectionName'
import { InfoSelectionOption } from '@/components/selections/only-single-text-and-link-fields/InfoSelectionOption'

import selectImageFamily from 'public/assets/images/selections/family.jpg'
import { authOptions } from '../api/auth/[...nextauth]/route'


export default async function SelectionFamilyAndFriends() {

  const session = await getServerSession(authOptions);
  
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
                <SelectedPageName>
                  Selection 'My Family and Friends'
                </SelectedPageName>
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
                      <SelectedSelectionImage
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
                    <InfoSelectionName>
                      MY FAMILY AND FRIENDS
                    </InfoSelectionName>
                    <InfoSelectionOption 
                      href={"/selectionFamilyAndFriends/selectionOptionA/infoSection1a/create"}>
                        A: Those who raised you
                    </InfoSelectionOption>
                    <InfoSelectionOption 
                      href={"/selectionFamilyAndFriends/selectionOptionB/infoSection1a/create"}>
                        B: Brothers and Sisters
                    </InfoSelectionOption>
                    <InfoSelectionOption 
                      href={"/selectionFamilyAndFriends/selectionOptionC/infoSection1a/create"}>
                        C: Uncles and Aunts
                    </InfoSelectionOption>
                    <InfoSelectionOption 
                      href={"/selectionFamilyAndFriends/selectionOptionD/infoSection1a/create"}>
                        D: Grandpa's and Grandma's
                    </InfoSelectionOption>
                    <InfoSelectionOption 
                      href={"/selectionFamilyAndFriends/selectionOptionE/infoSection1a/create"}>
                        E: Friends
                    </InfoSelectionOption>
                    <InfoSelectionOption
                      href={"/selectionFamilyAndFriends/selectionOptionF/infoSection1a/create"}>
                        F: Create an option yourself
                    </InfoSelectionOption>
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