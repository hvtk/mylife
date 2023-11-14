import Link from 'next/link'

import { SelectionImage } from '@/components/selections/only-single-image-fields//SelectionImage'
import selectImageWhereILive from '/public/assets/images/selections/where i live.jpg'
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
                    <SelectionImage 
                        src={selectImageFamily}
                        alt="image respresending my family and friends"
                    />
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                    <SelectionImage
                        src={selectImageWhereILive} 
                        alt="images represending my place to live"
                    /> 
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                    <SelectionImage 
                        src={selectImageEatAndDrink}
                        alt="image respresending what I eat and drink"
                    />
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                    <SelectionImage
                        src={selectImagePersonalSituation} 
                        alt="images represending on my personal situation"
                    /> 
                </div>
            </div>
            <div className='row h-4'>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                    <Link href="/selectionFamilyAndFriends">
                        Family and Friends
                    </Link>
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                    <Link href="/selectionWhereILive">
                        Where I live
                    </Link>
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                    <Link href="/selectionEatAndDrink">
                        Eat and Drink
                    </Link>
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                    <Link href="/selectionPersonalSituation">
                        Personal Situation
                    </Link>
                </div>
            </div>
            <div className='row h-20'>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                    <SelectionImage 
                        src={selectImageSleep}
                        alt="image respresending what my sleep routine is"
                    />
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                    <SelectionImage 
                        src={selectImageDailyRoutine}
                        alt="image respresending on my daily routine"
                    />
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                    <SelectionImage
                        src={selectImageMyFinance} 
                        alt="images represending my finance"
                    /> 
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                    <SelectionImage
                        src={selectImageInsurance} 
                        alt="images represending my insurances"
                    /> 
                </div>
            </div>
            <div className='row h-4'>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                    <Link href="/selectionsleepRoutine">
                        Sleep Routine
                    </Link>
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                    <Link href="/selectionDailyRoutine">
                        Daily Routine
                    </Link>
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                    <Link href="/selectionFinance">
                        Finance
                    </Link>
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                    <Link href="/selectionInsurances">
                        Insurances
                    </Link>
                </div>
            </div>
            <div className='row h-20'>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                    <SelectionImage 
                        src={selectImageSubcriptions}
                        alt="image respresending my subcriptions"
                    />
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                    <SelectionImage
                        src={selectImageUsedWebsites} 
                        alt="images represending my used websites"
                    /> 
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                    <SelectionImage 
                        src={selectImageInstalledApps}
                        alt="image respresending my installed apps"
                    />
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                    <SelectionImage
                        src={selectImageReminders} 
                        alt="images represending my reminders"
                    /> 
                </div>
            </div>
            <div className='row h-4'>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                    <Link href="/selectionsubcriptions">
                        Subcriptions
                    </Link>
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                    <Link href="/selectionUsedWebsites">
                        Used Websites
                    </Link>
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                    <Link href="/selectionInstalledApps">
                        Installed Apps
                    </Link>
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                    <Link href="/selectionReminders">
                        Reminders
                    </Link>
                </div>
            </div>
            <div className='row h-20'>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                    <SelectionImage 
                        src={selectImageRightsAndObligations}
                        alt="image respresending my rights and obligations"
                    />
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center align-items-center'>
                    <SelectionImage
                        src={selectImageMySchedule} 
                        alt="images represending my schedule"
                    /> 
                </div>
            </div>
            <div className='row h-4'>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                    <Link href="/selectionRightsAndObligations">
                        Rights and Obligations
                    </Link>
                </div>
                <div className='col-sm-3 d-flex flex-row justify-content-center'>
                    <Link href="/selectionMySchedule">
                        My Schedule
                    </Link>
                </div>
            </div>
        </>
    )
}
              