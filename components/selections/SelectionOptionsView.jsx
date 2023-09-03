import Link from 'next/link'

import { Selection } from 'components/selections/Selection'
import { SelectionName } from 'components/selections/SelectionName'
import selectImageWhereILive from 'public/assets/images/selections/where i live.jpg'
import selectImageFamily from 'public/assets/images/selections/family.jpg'
import selectImageEatAndDrink from 'public/assets/images/selections/eat and drink.jpg'
import selectImageSleep from 'public/assets/images/selections/sleep.jpg'
import selectImagePersonalSituation from 'public/assets/images/selections/personal situation.jpg'
import selectImageDailyRoutine from 'public/assets/images/selections/daily routine.jpg'
import selectImageMyFinance from 'public/assets/images/selections/my finances.jpg'
import selectImageInsurance from 'public/assets/images/selections/insurance.jpg'
import selectImageSubcriptions from 'public/assets/images/selections/subcriptions.jpg'
import selectImageInstalledApps from 'public/assets/images/selections/installed apps.jpg'
import selectImageUsedWebsites from 'public/assets/images/selections/used websites.jpg'
import selectImageReminders from 'public/assets/images/selections/reminders.jpg'
import selectImageRightsAndObligations from 'public/assets/images/selections/rights and obligations.jpg'
import selectImageMySchedule from 'public/assets/images/selections/my schedule.jpg'

export function SelectionOptionsView() {
    return(
        <>
            <div className='row h-20'>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                <Selection 
                src={selectImageFamily}
                    alt="image respresending my family and friends"
                />
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                <Selection
                src={selectImageWhereILive} 
                    alt="images represending my place to live"
                /> 
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                <Selection 
                src={selectImageEatAndDrink}
                    alt="image respresending what I eat and drink"
                />
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                <Selection
                src={selectImagePersonalSituation} 
                    alt="images represending on my personal situation"
                /> 
                </div>
            </div>
            <div className='row h-4'>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                <SelectionName >
                    <Link href="/selectionFamilyAndFriends">
                        Family and Friends
                    </Link>
                </SelectionName>
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                <SelectionName>
                    <Link href="/selectionWhereILive">
                        Where I live
                    </Link>
                </SelectionName>
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                <SelectionName >
                    <Link href="/selectionEatAndDrink">
                        Eat and Drink
                    </Link>
                </SelectionName>
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                <SelectionName>
                    <Link href="/selectionPersonalSituation">
                        Personal Situation
                    </Link>
                </SelectionName>
                </div>
            </div>
            <div className='row h-20'>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                <Selection 
                src={selectImageSleep}
                    alt="image respresending what my sleep routine is"
                />
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                <Selection 
                src={selectImageDailyRoutine}
                    alt="image respresending on my daily routine"
                />
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                <Selection
                src={selectImageMyFinance} 
                    alt="images represending my finance"
                /> 
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                <Selection
                src={selectImageInsurance} 
                    alt="images represending my insurances"
                /> 
                </div>
            </div>
            <div className='row h-4'>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                <SelectionName >
                    <Link href="/selectionSleepRoutine">
                        Sleep Routine
                    </Link>
                </SelectionName>
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                <SelectionName>
                    <Link href="/selectionDailyRoutine">
                        Daily Routine
                    </Link>
                </SelectionName>
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                <SelectionName >
                    <Link href="/selectionFinance">
                        Finance
                    </Link>
                </SelectionName>
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                <SelectionName>
                    <Link href="/selectionInsurances">
                        Insurances
                    </Link>
                </SelectionName>
                </div>
            </div>
            <div className='row h-20'>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                <Selection 
                src={selectImageSubcriptions}
                    alt="image respresending my subcriptions"
                />
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                <Selection
                src={selectImageUsedWebsites} 
                    alt="images represending my used websites"
                /> 
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                <Selection 
                src={selectImageInstalledApps}
                    alt="image respresending my installed apps"
                />
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                <Selection
                src={selectImageReminders} 
                    alt="images represending my reminders"
                /> 
                </div>
            </div>
            <div className='row h-4'>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                <SelectionName >
                    <Link href="/selectionSubcriptions">
                        Subcriptions
                    </Link>
                </SelectionName>
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                <SelectionName>
                    <Link href="/selectionUsedWebsites">
                        Used Websites
                    </Link>
                </SelectionName>
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                <SelectionName >
                    <Link href="/selectionInstalledApps">
                        Installed Apps
                    </Link>
                </SelectionName>
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                <SelectionName>
                    <Link href="/selectionReminders">
                        Reminders
                    </Link>
                </SelectionName>
                </div>
            </div>
            <div className='row h-20'>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                <Selection 
                src={selectImageRightsAndObligations}
                    alt="image respresending my rights and obligations"
                />
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                <Selection
                src={selectImageMySchedule} 
                    alt="images represending my schedule"
                /> 
                </div>
            </div>
            <div className='row h-4'>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                <SelectionName >
                    <Link href="/selectionRightsAndObligations">
                        Rights and Obligations
                    </Link>
                </SelectionName>
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                <SelectionName>
                    <Link href="/selectionMySchedule">
                        My Schedule
                    </Link>
                </SelectionName>
                </div>
            </div>
        </>
    )
}
              