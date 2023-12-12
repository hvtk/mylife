import { SidebarInfoSectionName } from '@/components/sidebar/sidebarParts/SidebarInfoSectionName'
import { SidebarSelectionDropdownButtonOffcanvas } from '@/components/sidebar/sidebarParts/SidebarSelectionDropdownButtonOffcanvas'

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
                    <SidebarSelectionDropdownButtonOffcanvas>
                      A: Family and Friends
                    </SidebarSelectionDropdownButtonOffcanvas>
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
                        <li>
                            <SidebarInfoSectionName
                                href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/update"}>
                                Update Data
                            </SidebarInfoSectionName>
                        </li>
                    </ul>
                  </div>
                </dt>
                <dt>
                <div className='dropdown-center'>  
                    <SidebarSelectionDropdownButtonOffcanvas>
                      B: Where I Live
                    </SidebarSelectionDropdownButtonOffcanvas>
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
                    <SidebarSelectionDropdownButtonOffcanvas>
                      C: Eat and Drink
                    </SidebarSelectionDropdownButtonOffcanvas>
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
                    <SidebarSelectionDropdownButtonOffcanvas>
                      D: Personal Situation
                    </SidebarSelectionDropdownButtonOffcanvas>
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
                    <SidebarSelectionDropdownButtonOffcanvas>
                    E: Sleep Routine
                    </SidebarSelectionDropdownButtonOffcanvas>
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
                    <SidebarSelectionDropdownButtonOffcanvas>
                      F: Daily Routine
                    </SidebarSelectionDropdownButtonOffcanvas>
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
                    <SidebarSelectionDropdownButtonOffcanvas>
                      G: Finance
                    </SidebarSelectionDropdownButtonOffcanvas>
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
                    <SidebarSelectionDropdownButtonOffcanvas>
                      H: Insurances
                    </SidebarSelectionDropdownButtonOffcanvas>
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
                    <SidebarSelectionDropdownButtonOffcanvas>
                      I: Subcriptions
                    </SidebarSelectionDropdownButtonOffcanvas>
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
                    <SidebarSelectionDropdownButtonOffcanvas>
                      J: Used Websites
                    </SidebarSelectionDropdownButtonOffcanvas>
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
                    <SidebarSelectionDropdownButtonOffcanvas>
                      K: Installed Apps
                    </SidebarSelectionDropdownButtonOffcanvas>
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
                    <SidebarSelectionDropdownButtonOffcanvas>
                    L: Reminders
                    </SidebarSelectionDropdownButtonOffcanvas>
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
                    <SidebarSelectionDropdownButtonOffcanvas>
                      M: Rights and Obligations
                    </SidebarSelectionDropdownButtonOffcanvas>
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
                    <SidebarSelectionDropdownButtonOffcanvas>
                      N: My Schedule
                    </SidebarSelectionDropdownButtonOffcanvas>
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