import Image from 'next/image'

import Link from 'next/link'

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
              <dl className='fs-5 ms-3'>
                <dt>
                  <Link href="/selectionFamilyAndFriends"
                        className='text-dark' 
                      >
                    A: Family and Friends
                  </Link>
                </dt>
                <dt>
                  <Link href="/selectionWhereILife"
                        className='text-dark'
                      >
                    B: Where I Live
                  </Link>
                </dt>
                <dt>
                  <Link href="/selectionEatAndDrink"
                        className='text-dark'
                      >
                    C: Eat and Drink
                  </Link>
                </dt>
                <dt>
                  <Link href="/selectionPersonalSituation"
                        className='text-dark'
                      >
                    D: Personal Situation
                  </Link>
                </dt>
                <dt>
                  <Link href="/selectionSleepRoutine"
                        className='text-dark'
                    >
                    E: Sleep Routine
                  </Link>
                </dt>
                <dt>
                  <Link href="/selectionDailyRoutine"
                        className='text-dark'
                      >
                    F: Daily Routine
                  </Link>
                </dt>
                <dt>
                  <Link href="/selectionFinance"
                        className='text-dark'
                      >
                    G: Finance
                  </Link>
                </dt>
                <dt>
                  <Link href="/selectionInsurances"
                        className='text-dark'
                      >
                    H: Insurances
                  </Link>
                </dt>
                <dt>
                  <Link href="/selectionSubcriptions"
                        className='text-dark'
                      >
                    I: Subcriptions
                  </Link>
                </dt>
                <dt>
                  <Link href="/selectionUsedWebsites"
                        className='text-dark'
                      >
                    J: Used Websites
                  </Link>
                </dt>
                <dt>
                  <Link href="/selectionInstalledApps"
                        className='text-dark'
                      >
                    K: Installed Apps
                  </Link>
                </dt>
                <dt>
                  <Link href="/selectionReminders"
                        className='text-dark'
                      >
                    L: Reminders
                  </Link>
                </dt>
                <dt>
                  <Link href="/selectionRightsAndObligations"
                        className='text-dark'
                      >
                    M: Rights and Obligations
                  </Link>
                </dt>
                <dt>
                  <Link href="/selectionMySchedule"
                        className='text-dark'
                      >
                    N: My Schedule
                  </Link>
                </dt>
              </dl>
            </div>
          </div>
          <div className='col-sm-4 d-flex flex-column justify-content-center min-vh-100'>
            <div className='h-90 d-flex flex-column align-items-center justify-content-between'>
              <div>
                <Link href="/homepage">
                  <MylifeLogo />  
                </Link>
              </div>
              <div>
                <Link href="/homepage">
                  <Image
                      src={SidebarViewList}
                      alt="icon for list options/selection"
                      width={60}
                      height={60}
                    />
                </Link>
              </div>
              <div>
                <Link href="/account">
                  <Image
                      src={SidebarPerson}
                      alt="icon for account user"
                      width={60}
                      height={60}
                    />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}