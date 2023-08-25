import { MylifeImage } from '@/components/homepage/MylifeImage'
import { Selection } from 'components/selections/Selection'
import { SelectionName } from 'components/selections/SelectionName'
import { SidebarBase } from 'components/sidebar/SidebarBase'
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

export default function Homepage() {
  return (
    <>
      <div className="container min-vw-100 bg-body">
        <div className="row">
          <div className="col-sm-1 bg-secondary d-flex flex-column justify-content-center min-vh-100">
            <SidebarBase/>
          </div>
          <div className="col-sm-11 bg-success">
            <div className="row">
              <div className="col-sm-4 min-vh-100 d-flex flex-column justify-content-center">
                <div className="bg-warning d-flex flex-column justify-content-center h-75 rounded-5">
                  <figure  className="d-flex flex-column align-items-center">
                    <figcaption className="fs-3 w-75 mb-5 text-center">
                      All that influences who you are, what you can do, your daily activities, organized at one place.
                    </figcaption>
                      <MylifeImage/>
                    <figcaption className="fs-3 w-75 mt-5 text-center">
                      In order to be able to manage all that life demands as good as possible!
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="row h-20">
                  <div className="col-sm-3 d-flex flex-row justify-content-center align-items-center">
                    <Selection 
                    src={selectImageFamily}
                      alt="image respresending my family and friends"
                    />
                  </div>
                  <div className="col-sm-3 d-flex flex-row justify-content-center align-items-center">
                    <Selection
                    src={selectImageWhereILive} 
                      alt="images represending my place to live"
                    /> 
                  </div>
                  <div className="col-sm-3 d-flex flex-row justify-content-center align-items-center">
                    <Selection 
                    src={selectImageEatAndDrink}
                      alt="image respresending what I eat and drink"
                    />
                  </div>
                  <div className="col-sm-3 d-flex flex-row justify-content-center align-items-center">
                    <Selection
                    src={selectImagePersonalSituation} 
                      alt="images represending on my personal situation"
                    /> 
                  </div>
                </div>
                <div className="row h-5">
                  <div className="col-sm-3 d-flex flex-row justify-content-center">
                    <SelectionName >
                      Family and Friends
                    </SelectionName>
                  </div>
                  <div className="col-sm-3 d-flex flex-row justify-content-center">
                    <SelectionName>
                      Where I live
                    </SelectionName>
                  </div>
                  <div className="col-sm-3 d-flex flex-row justify-content-center">
                    <SelectionName >
                      Eat and Drink
                    </SelectionName>
                  </div>
                  <div className="col-sm-3 d-flex flex-row justify-content-center">
                    <SelectionName>
                      Personal Situation
                    </SelectionName>
                  </div>
                </div>
                <div className="row h-20">
                  <div className="col-sm-3 d-flex flex-row justify-content-center align-items-center">
                    <Selection 
                    src={selectImageSleep}
                      alt="image respresending what my sleep routine is"
                    />
                  </div>
                  <div className="col-sm-3 d-flex flex-row justify-content-center align-items-center">
                    <Selection 
                    src={selectImageDailyRoutine}
                      alt="image respresending on my daily routine"
                    />
                  </div>
                  <div className="col-sm-3 d-flex flex-row justify-content-center align-items-center">
                    <Selection
                    src={selectImageMyFinance} 
                      alt="images represending my finance"
                    /> 
                  </div>
                  <div className="col-sm-3 d-flex flex-row justify-content-center align-items-center">
                    <Selection
                    src={selectImageInsurance} 
                      alt="images represending my insurances"
                    /> 
                  </div>
                </div>
                <div className="row h-5">
                  <div className="col-sm-3 d-flex flex-row justify-content-center ">
                    <SelectionName >
                      Sleep Routine
                    </SelectionName>
                  </div>
                  <div className="col-sm-3 d-flex flex-row justify-content-center">
                    <SelectionName>
                      Daily Routine
                    </SelectionName>
                  </div>
                  <div className="col-sm-3 d-flex flex-row justify-content-center">
                    <SelectionName >
                      Finance
                    </SelectionName>
                  </div>
                  <div className="col-sm-3 d-flex flex-row justify-content-center">
                    <SelectionName>
                      Insurances
                    </SelectionName>
                  </div>
                </div>
                <div className="row h-20">
                  <div className="col-sm-3 d-flex flex-row justify-content-center align-items-center">
                    <Selection 
                    src={selectImageSubcriptions}
                      alt="image respresending my subcriptions"
                    />
                  </div>
                  <div className="col-sm-3 d-flex flex-row justify-content-center align-items-center">
                    <Selection
                    src={selectImageUsedWebsites} 
                      alt="images represending my used websites"
                    /> 
                  </div>
                  <div className="col-sm-3 d-flex flex-row justify-content-center align-items-center">
                    <Selection 
                    src={selectImageInstalledApps}
                      alt="image respresending my installed apps"
                    />
                  </div>
                  <div className="col-sm-3 d-flex flex-row justify-content-center align-items-center">
                    <Selection
                    src={selectImageReminders} 
                      alt="images represending my reminders"
                    /> 
                  </div>
                </div>
                <div className="row h-5">
                  <div className="col-sm-3 d-flex flex-row justify-content-center">
                    <SelectionName >
                      Subcriptions
                    </SelectionName>
                  </div>
                  <div className="col-sm-3 d-flex flex-row justify-content-center ">
                    <SelectionName>
                      Used Websites
                    </SelectionName>
                  </div>
                  <div className="col-sm-3 d-flex flex-row justify-content-center ">
                    <SelectionName >
                      Installed Apps
                    </SelectionName>
                  </div>
                  <div className="col-sm-3 d-flex flex-row justify-content-center">
                    <SelectionName>
                      Reminders
                    </SelectionName>
                  </div>
                </div>
                <div className="row h-20">
                  <div className="col-sm-3 d-flex flex-row justify-content-center align-items-center">
                    <Selection 
                    src={selectImageRightsAndObligations}
                      alt="image respresending my rights and obligations"
                    />
                  </div>
                  <div className="col-sm-3 d-flex flex-row justify-content-center align-items-center">
                    <Selection
                    src={selectImageMySchedule} 
                      alt="images represending my schedule"
                    /> 
                  </div>
                </div>
                <div className="row h-5">
                  <div className="col-sm-3 d-flex flex-row justify-content-center ">
                    <SelectionName >
                      Rights and Obligations
                    </SelectionName>
                  </div>
                  <div className="col-sm-3 d-flex flex-row justify-content-center">
                    <SelectionName>
                      My Schedule
                    </SelectionName>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
