import Image from 'next/image'

import { MylifeLogo } from 'components/sidebar/sidebarParts/MylifeLogo'
import SidebarViewList from 'public/assets/icons/sidebar/view-list.svg'
import SidebarPerson from 'public/assets/icons/sidebar/person.svg'

export function SidebarListSelections() {
  return (
    <>
      <div className='d-flex-flex-column min-vh-100 justify-content-center'>
       <div className='row'>
          <div className='col-sm-8 d-flex flex-column justify-content-center min-vh-100'>
            <div className='h-90 d-flex flex-column justify-content-center'>
              <dl className='fs-5'>
                <dt>
                  <a href="/selectionFamilyAndFriends">
                    A: Family and Friends
                  </a>
                </dt>
                <dt>
                  <a href="/selectionWhereILife">
                    B: Where I Live
                  </a>
                </dt>
                <dt>
                  <a href="/selectionEatAndDrink">
                    C: Eat and Drink
                  </a>
                </dt>
                <dt>
                  <a href="/selectionPersonalSituation">
                    D: Personal Situation
                  </a>
                </dt>
                <dt>
                  <a href="/selectionSleepRoutine">
                    E: Sleep Routine
                  </a>
                </dt>
                <dt>
                  <a href="/selectionDailyRoutine">
                    F: Daily Routine
                  </a>
                </dt>
                <dt>
                  <a href="/selectionFinance">
                    G: Finance
                  </a>
                </dt>
                <dt>
                  <a href="/selectionInsurances">
                    H: Insurances
                  </a>
                </dt>
                <dt>
                  <a href="/selectionSubcriptions">
                    I: Subcriptions
                  </a>
                </dt>
                <dt>
                  <a href="/selectionUsedWebsites">
                    J: Used Websites
                  </a>
                </dt>
                <dt>
                  <a href="/selectionInstalledApps">
                    K: Installed Apps
                  </a>
                </dt>
                <dt>
                  <a href="/selectionReminders">
                    L: Reminders
                  </a>
                </dt>
                <dt>
                  <a href="/selectionRightsAndObligations">
                    M: Rights and Obligations
                  </a>
                </dt>
                <dt>
                  <a href="/selectionMySchedule">
                    N: My Schedule
                  </a>
                </dt>
              </dl>
            </div>
          </div>
          <div className='col-sm-4 d-flex flex-column justify-content-center min-vh-100'>
            <div className='h-90 d-flex flex-column align-items-center justify-content-between'>
              <div>
                <a href="/homepage">
                  <MylifeLogo />  
                </a>
              </div>
              <div>
                <a href="/homepage">
                  <Image
                      src={SidebarViewList}
                      alt="icon for list options/selection"
                      width={60}
                      height={60}
                    />
                </a>
              </div>
              <div>
                <a href="/account">
                  <Image
                      src={SidebarPerson}
                      alt="icon for account user"
                      width={60}
                      height={60}
                    />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}