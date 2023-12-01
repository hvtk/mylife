import { authOptions } from '@/app/api/auth/[...nextauth]/route'

import { getServerSession } from 'next-auth'

import { SelectionOptionB1aCreate } from '@/components/selections/selectionOptions/selectionOptionA/create/SelectionOptionB1aCreate'
import { HeaderSignOut } from '@/components/header/HeaderSignOut'
import { SidebarSelections } from '@/components/sidebar/selections/SidebarSelections'
import { SelectionOptionImage } from '@/components/selections/only-single-image-fields/SelectionOptionImage'
import { SelectedPageName } from '@/components/header/only-single-text-fields/SelectedPageName'
import { SelectionOptionName } from '@/components/selections/only-single-text-fields/SelectionOptionName'
import { InfoSectionNameInput } from '@/components/selections/only-single-text-fields/InfoSectionNameInput'
import { OptionsToSelectAndInfoSelectionNames } from '@/components/selections/selectionOptions/selectionOptionA/optionsToSelect-InfoSelectionNames'

import selectImageFamily from 'public/assets/images/selections/family.jpg'
import { GoBackTo } from '@/components/selections/only-single-text-and-link-fields/GoBackTo'

export default async function InfoSectionB1a() {

  const session = await getServerSession(authOptions);
  
  return (

    <>
      <div className='container min-vw-100 bg-body'>
        <div className='row'>
          <div className='col-sm-1 bg-secondary min-vh-100 d-flex flex-column justify-content-center'>
            <SidebarSelections/>
          </div>
          <div className='col-sm-11 bg-info min-vh-100'>
            <div className='row'>
              <div className='col-sm-12 h-4 mt-2 d-flex align-items-center justify-content-end'>
                <SelectedPageName>
                  Selection option B: 'Brothers an Sisters'
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
              <div className='col-sm-6 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
                <div className='bg-warning h-75 w-75 rounded-5'>
                  <div className='row h-30 mt-2'>
                    <div className='col-sm-6 d-flex align-items-center justify-content-center'>
                      <div>
                        <SelectionOptionImage
                          src={selectImageFamily}
                          alt="image respresending my family and friends"
                        />
                      </div>
                    </div>
                    <div className='col-sm-6 d-flex flex-column align-items-center justify-content-center'>
                      <SelectionOptionName option={"SELECTION OPTION B:"}/>
                      <SelectionOptionName optionName={"'Brothers and Sisters'"}/>
                      <GoBackTo href={'/selectionFamilyAndFriends'}>
                          selection 'My Family and Friends' 
                      </GoBackTo> 
                    </div>
                  </div>
                  <div className='row h-10'>
                    <div className='col-sm-6 d-flex flex-column'>
                      <div className='d-flex align-items-center justify-content-center fs-5'>      
                        OPTIONS TO SELECT
                      </div> 
                    </div>
                    <div className='col-sm-6 d-flex flex-column'>
                      <div className='d-flex align-items-center justify-content-center fs-5 me-3'>      
                      INFORMATION SECTION
                      </div> 
                    </div>
                  </div>
                  <OptionsToSelectAndInfoSelectionNames />
                </div>
              </div>
              <div className='col-sm-6 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
                <div className='bg-warning h-75 w-75 rounded-5 d-flex flex-column align-items-center justify-content-center'>
                  <div className='row h-10'>
                    <InfoSectionNameInput>
                      input 1a: NAME FIRST BROTHER "Brothers and Sisters"
                    </InfoSectionNameInput>
                  </div>
                  <SelectionOptionB1aCreate/>
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