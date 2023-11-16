import { getServerSession } from 'next-auth'

import { InfoPersonCreate } from '@/components/selections/selection-options/InfoPersonCreate'

import { HeaderSignOut } from '@/components/header/HeaderSignOut'
import { SidebarBase } from '@/components/sidebar/SidebarBase'
import { SelectionOptionImage } from '@/components/selections/only-single-image-fields/SelectionOptionImage'
import { SelectedPageName } from '@/components/header/only-single-text-fields/SelectedPageName'
import { InfoSectionName } from '@/components/selections/only-single-text-and-link-fields/InfoSectionName'
import { SelectionOptionName } from '@/components/selections/only-single-text-fields/SelectionOptionName'
import { InfoSections } from '@/components/selections/self-contained-items/InfoSections'
import { InfoSectionNameInput } from '@/components/selections/only-single-text-fields/InfoSectionNameInput'

import selectImageFamily from 'public/assets/images/selections/family.jpg'

export default async function SelectionOptionA() {

  const session = await getServerSession();
  const option = "Selection option A: 'Those who raised you'";

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
                  { option }
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
                  <div className='row h-35'>
                    <div className='col-sm-6 d-flex align-items-center justify-content-center'>
                      <div>
                        <SelectionOptionImage
                          src={selectImageFamily}
                          alt="image respresending my family and friends"
                        />
                      </div>
                    </div>
                    <div className='col-sm-6 d-flex flex-column align-items-center justify-content-center'>
                      <SelectionOptionName option={"SELECTION OPTION A:"}/>
                      <SelectionOptionName optionName={"'Those who raised you'"}/>
                    </div>
                  </div>
                  <div className='row h-10'>
                    <InfoSections />
                  </div>
                  <div className='row h-25'>
                    <div className='col-sm-6 d-flex flex-column'>
                      <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        1a: Name first person
                      </InfoSectionName>
                      <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        1b: Adress first person
                      </InfoSectionName>
                      <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        1c: Other info first person
                      </InfoSectionName>
                    </div>
                    <div className='col-sm-6 d-flex flex-column'>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        2a: Name first person
                      </InfoSectionName>
                      <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        2b: Adress first person
                      </InfoSectionName>
                      <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        2c: Other info first person
                      </InfoSectionName>
                    </div>
                  </div>
                  <div className='row h-25'>
                    <div className='col-sm-6 d-flex flex-column'>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        3a: Name first person
                      </InfoSectionName>
                      <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        3b: Adress first person
                      </InfoSectionName>
                      <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        3c: Other info first person
                      </InfoSectionName>
                    </div>
                    <div className='col-sm-6 d-flex flex-column'>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        4a: Name first person
                      </InfoSectionName>
                      <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        4b: Adress first person
                      </InfoSectionName>
                      <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        4c: Other info first person
                      </InfoSectionName>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
                <div className='bg-warning h-75 w-75 rounded-5 d-flex flex-column align-items-center justify-content-center'>
                  <div className='row h-10'>
                    <InfoSectionNameInput>
                      input 1a: NAME FIRST PERSON "Those who raised you"
                    </InfoSectionNameInput>
                  </div>
                  <InfoPersonCreate/>
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