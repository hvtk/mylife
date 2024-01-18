// import prisma from '@/prisma/prisma-client/prisma'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'

import { getServerSession } from 'next-auth'

import { SelectionOptionA1aRead } from '@/components/selections/selectionOptions/selectionOptionA/read/SelectionOptionA1aRead'
import { HeaderSignOut } from '@/components/header/HeaderSignOut'
import { SidebarSelections } from '@/components/sidebar/selections/SidebarSelections'
import { SelectionOptionImage } from '@/components/selections/only-single-image-fields/SelectionOptionImage'
import { SelectedPageName } from '@/components/header/only-single-text-fields/SelectedPageName'
import { SelectionOptionName } from '@/components/selections/only-single-text-fields/SelectionOptionName'
import { InfoSectionNameInput } from '@/components/selections/only-single-text-fields/InfoSectionNameInput'
import { GoBackTo } from '@/components/selections/only-single-text-and-link-fields/GoBackTo'

import selectImageFamily from '@/public/assets/images/selections/family.jpg'
import { OptionsToSelectAndInfoSelectionNamesData } from '@/components/selections/selectionOptions/selectionOptionA/optionsToSelect-InfoSelectionNamesData'


const getData = async (id) => {

  const res = await fetch(`http://localhost:3000/api/selections/familyandfriends/selectionoptiona/infosection1a/crud/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
}
export default async function InfoSectionA1aGetData({params}) {

  const session = await getServerSession(authOptions)
  
  // const infoSectionA1aData = await prisma.FamilyAndFriendsSelectionOptionA1a.findMany({
  //   where: {
  //       consumer: {
  //           email: session.user.email
  //       }
  //   },
  //   include: {
  //     consumer: {
  //       select: { name: true}
  //     }
  //   },
  // })

  const { id } = params;

  const data = await getData(id);
  
  return (

    <>
      <div className='container min-vw-100 bg-body'>
        <div className='row'>
          <div className='col-sm-1 bg-secondary min-vh-100 d-flex flex-column justify-content-center'>
            <SidebarSelections />
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
                      <GoBackTo href={'/selectionFamilyAndFriends'}>
                          selection 'My Family and Friends' 
                      </GoBackTo> 
                    </div>
                  </div>
                  <div className='row h-8'>
                    <div className='col-sm-6 d-flex flex-column'>
                      <div className='d-flex align-items-center justify-content-center fs-5'>      
                        OPTIONS TO SELECT
                      </div> 
                    </div>
                    <div className='col-sm-6 d-flex flex-column'>
                      <div className='d-flex align-items-center justify-content-center fs-5 me-3'>      
                      GET DATA FROM INFO SECTION
                      </div> 
                    </div>
                  </div>
                  <OptionsToSelectAndInfoSelectionNamesData />
                </div>
              </div>
              <div className='col-sm-6 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
                <div className='bg-warning h-75 w-75 rounded-5 d-flex flex-column align-items-center justify-content-center'>
                  <div className='row h-10'>
                    <InfoSectionNameInput>
                      DATA NAME FIRST PERSON "Those who raised you"
                    </InfoSectionNameInput>
                  </div>
                  {/* {
                    infoSectionA1aData.map((FamilyAndFriendsSelectionOptionA1a) => {
                      return (
                        <SelectionOptionA1aRead
                          key={FamilyAndFriendsSelectionOptionA1a.firstName}
                          firstName={FamilyAndFriendsSelectionOptionA1a.firstName}
                          secondName={FamilyAndFriendsSelectionOptionA1a.secondName}
                          infix={FamilyAndFriendsSelectionOptionA1a.infix}
                          lastName={FamilyAndFriendsSelectionOptionA1a.lastName}
                        />
                      )
                    })
                  } */}
                  <SelectionOptionA1aRead>
                    firstName={data.firstName}
                    secondName={data.secondName}
                    infix={data.infix}
                    lastName={data.lastName}
                  </SelectionOptionA1aRead>
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