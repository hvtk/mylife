import Image from 'next/image'

import Link from 'next/link'

import { SidebarSelectionDropdownButton } from '@/components/sidebar/sidebarParts/SidebarSelectionDropdownButton'
import { MylifeLogo } from '@/components/sidebar/sidebarParts/MylifeLogo'
import { SidebarInfoSectionName } from '@/components/sidebar/sidebarParts/SidebarInfoSectionName'
import SidebarViewList from '@/public/assets/icons/sidebar/view-list.svg'
import SidebarPerson from '@/public/assets/icons/sidebar/person.svg'


export function SidebarListSelectionsOffcanvas() {
  return (
    <>
      <div className='d-flex-flex-column min-vh-100 justify-content-center'>
       <div className='row'>
          <div className='col-sm-8 d-flex flex-column justify-content-center min-vh-100'>
            <div className='h-90 d-flex flex-column justify-content-center'>
              <dl className='ms-3'>
                <dt>
                  <div className='dropdown-center'>  
                    <SidebarSelectionDropdownButton>
                      A: Family and Friends
                    </SidebarSelectionDropdownButton>
                    <ul className='dropdown-menu'>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends"}>
                                Options
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/create"}>
                                Input
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/read"}>
                                Data
                            </SidebarInfoSectionName>
                        </li>
                    </ul>
                  </div>
                </dt>
                <dt>
                <div className='dropdown-center'>  
                    <SidebarSelectionDropdownButton>
                      B: Where I Live
                    </SidebarSelectionDropdownButton>
                    <ul className='dropdown-menu'>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionWhereILife"}>
                                Options
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/create"}>
                                Input
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/read"}>
                                Data
                            </SidebarInfoSectionName>
                        </li>
                    </ul>
                  </div>
                </dt>
                <dt>
                <div className='dropdown-center'>  
                    <SidebarSelectionDropdownButton>
                      C: Eat and Drink
                    </SidebarSelectionDropdownButton>
                    <ul className='dropdown-menu'>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionEatAndDrink"}>
                                Options
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/create"}>
                                Input
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/read"}>
                                Data
                            </SidebarInfoSectionName>
                        </li>
                    </ul>
                  </div>
                </dt>
                <dt>
                <div className='dropdown-center'>  
                    <SidebarSelectionDropdownButton>
                      D: Personal Situation
                    </SidebarSelectionDropdownButton>
                    <ul className='dropdown-menu'>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionPersonalSituation"}>
                                Options
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/create"}>
                                Input
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/read"}>
                                Data
                            </SidebarInfoSectionName>
                        </li>
                    </ul>
                  </div>
                </dt>
                <dt>
                <div className='dropdown-center'>  
                    <SidebarSelectionDropdownButton>
                    E: Sleep Routine
                    </SidebarSelectionDropdownButton>
                    <ul className='dropdown-menu'>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionSleepRoutine"}>
                                Options
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/create"}>
                                Input
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/read"}>
                                Data
                            </SidebarInfoSectionName>
                        </li>
                    </ul>
                  </div>
                </dt>
                <dt>
                <div className='dropdown-center'>  
                    <SidebarSelectionDropdownButton>
                      F: Daily Routine
                    </SidebarSelectionDropdownButton>
                    <ul className='dropdown-menu'>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionDailyRoutine"}>
                                Options
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/create"}>
                                Input
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/read"}>
                                Data
                            </SidebarInfoSectionName>
                        </li>
                    </ul>
                  </div>
                </dt>
                <dt>
                <div className='dropdown-center'>  
                    <SidebarSelectionDropdownButton>
                      G: Finance
                    </SidebarSelectionDropdownButton>
                    <ul className='dropdown-menu'>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFinance"}>
                                Options
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/create"}>
                                Input
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/read"}>
                                Data
                            </SidebarInfoSectionName>
                        </li>
                    </ul>
                  </div>
                </dt>
                <dt>
                <div className='dropdown-center'>  
                    <SidebarSelectionDropdownButton>
                      H: Insurances
                    </SidebarSelectionDropdownButton>
                    <ul className='dropdown-menu'>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionInsurances"}>
                                Options
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/create"}>
                                Input
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/read"}>
                                Data
                            </SidebarInfoSectionName>
                        </li>
                    </ul>
                  </div>
                </dt>
                <dt>
                <div className='dropdown-center'>  
                    <SidebarSelectionDropdownButton>
                      I: Subcriptions
                    </SidebarSelectionDropdownButton>
                    <ul className='dropdown-menu'>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionSubcriptions"}>
                                Options
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/create"}>
                                Input
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/read"}>
                                Data
                            </SidebarInfoSectionName>
                        </li>
                    </ul>
                  </div>
                </dt>
                <dt>
                <div className='dropdown-center'>  
                    <SidebarSelectionDropdownButton>
                      J: Used Websites
                    </SidebarSelectionDropdownButton>
                    <ul className='dropdown-menu'>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionUsedWebsites"}>
                                Options
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/create"}>
                                Input
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/read"}>
                                Data
                            </SidebarInfoSectionName>
                        </li>
                    </ul>
                  </div>
                </dt>
                <dt>
                <div className='dropdown-center'>  
                    <SidebarSelectionDropdownButton>
                      K: Installed Apps
                    </SidebarSelectionDropdownButton>
                    <ul className='dropdown-menu'>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionInstalledApps"}>
                                Options
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/create"}>
                                Input
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/read"}>
                                Data
                            </SidebarInfoSectionName>
                        </li>
                    </ul>
                  </div>
                </dt>
                <dt>
                <div className='dropdown-center'>  
                    <SidebarSelectionDropdownButton>
                    L: Reminders
                    </SidebarSelectionDropdownButton>
                    <ul className='dropdown-menu'>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionReminders"}>
                                Options
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/create"}>
                                Input
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/read"}>
                                Data
                            </SidebarInfoSectionName>
                        </li>
                    </ul>
                  </div>
                </dt>
                <dt>
                <div className='dropdown-center'>  
                    <SidebarSelectionDropdownButton>
                      M: Rights and Obligations
                    </SidebarSelectionDropdownButton>
                    <ul className='dropdown-menu'>
                        <li>
                            <SidebarInfoSectionName
                                href={"SelectionRightsAndObligations"}>
                                Options
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/create"}>
                                Input
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/read"}>
                                Data
                            </SidebarInfoSectionName>
                        </li>
                    </ul>
                  </div>
                </dt>
                <dt> <div className='dropdown-center'>  
                    <SidebarSelectionDropdownButton>
                      N: My Schedule
                    </SidebarSelectionDropdownButton>
                    <ul className='dropdown-menu'>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionMySchedule"}>
                                Options
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/create"}>
                                Input
                            </SidebarInfoSectionName>
                        </li>
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/read"}>
                                Data
                            </SidebarInfoSectionName>
                        </li>
                    </ul>
                  </div>
                </dt>
              </dl>
            </div>
          </div>
          <div className='col-sm-4 d-flex flex-column justify-content-center min-vh-100'>
            <div className='h-90 d-flex flex-column align-items-center justify-content-between'>  
            </div>
          </div>
        </div>
      </div>
    </>
  )
}