import prisma from '@/app/lib/prisma'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'

import { getServerSession } from 'next-auth'

import { SelectionOptionA1bRead } from '@/components/selections/selectionOptions/selectionOptionA/read/SelectionOptionA1bRead'
import { HeaderSignOut } from '@/components/header/HeaderSignOut'
import { SidebarBase } from '@/components/sidebar/SidebarBase'
import { SelectionOptionImage } from '@/components/selections/only-single-image-fields/SelectionOptionImage'
import { SelectedPageName } from '@/components/header/only-single-text-fields/SelectedPageName'
import { SelectionOptionName } from '@/components/selections/only-single-text-fields/SelectionOptionName'
import { InfoSections } from '@/components/selections/self-contained-items/InfoSections'
import { InfoSectionNameInput } from '@/components/selections/only-single-text-fields/InfoSectionNameInput'
import { InfoSelectionName } from '@/components/selections/only-single-text-fields/InfoSelectionName'

import selectImageFamily from '@/public/assets/images/selections/family.jpg'

export default async function InfoSectionA1bGetData() {

  const session = await getServerSession(authOptions)
  
  const infoSectionA1bData = await prisma.FamilyAndFriendsSelectionOptionA1b.findMany({
    where: {
        consumer: {
            email: session.user.email
        }
    },
    include: {
      consumer: {
        select: { name: true}
      }
    },
  })
  
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
                  DATA:  Selection option A: 'Those who raised you'
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
                  <div className='row h-30'>
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
                  <InfoSelectionName />
                </div>
              </div>
              <div className='col-sm-6 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
                <div className='bg-warning h-75 w-75 rounded-5 d-flex flex-column align-items-center justify-content-center'>
                  <div className='row h-10'>
                    <InfoSectionNameInput>
                      Data 1b: ADDRESS FIRST PERSON "Those who raised you"
                    </InfoSectionNameInput>
                  </div>
                  {
                    infoSectionA1bData.map((FamilyAndFriendsSelectionOptionA1b) => {
                      return (
                        <SelectionOptionA1bRead
                          key={FamilyAndFriendsSelectionOptionA1b.firstName}
                          firstName={FamilyAndFriendsSelectionOptionA1b.firstName}
                          secondName={FamilyAndFriendsSelectionOptionA1b.secondName}
                          infix={FamilyAndFriendsSelectionOptionA1b.infix}
                          lastName={FamilyAndFriendsSelectionOptionA1b.lastName}
                        />
                      )
                    })
                  }
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