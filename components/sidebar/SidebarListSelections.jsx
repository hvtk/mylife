import Image from 'next/image'
import Link from 'next/link'
import { MylifeLogo } from 'components/sidebar/MylifeLogo'
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
                <dt>A: Family and Friends</dt>
                <dt>B: Where I Live</dt>
                <dt>C: Eat and Drink</dt>
                <dt>D: Personal Situation</dt>
                <dt>E: Sleep Routine</dt>
                <dt>F: Daily Routine</dt>
                <dt>G: Finance</dt>
                <dt>H: Insurances</dt>
                <dt>I: Subscriptions</dt>
                <dt>J: Used Websites</dt>
                <dt>K: Installed Apps</dt>
                <dt>L: Reminders</dt>
                <dt>M: Rights and Obligations</dt>
                <dt>N: My Schedule</dt>
              </dl>
            </div>
          </div>
          <div className='col-sm-4 d-flex flex-column justify-content-center min-vh-100'>
            <div className='h-90 d-flex flex-column align-items-center justify-content-between'>
            <div>
              <Link href="/">
                <MylifeLogo /> 
              </Link>
            </div>
            <div>
              <Link href="/">
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