

import styles from './homepage.modules.css'
import { Selection } from 'components/selections/selection'
import { SelectionName } from 'components/selections/selectionName'
import { SidebarBase } from 'components/sidebar/base'
import selectImageWhereILive from 'public/assets/images/selections/where i live.jpg'
import selectImageFamily from 'public/assets/images/selections/family.jpg'


export default function Homepage() {
  return (
    <>
      <div className={styles.homepageLayout}>
        <div id={styles.sidebar}>
          <SidebarBase/>
        </div>
        <div id={styles.dialog}></div>
        <div id={styles.figureFamily}>
              <Selection 
                src={selectImageFamily}
                alt="image respresending my family and friends"
              />
        </div>
        <div id={styles.figcaptionFamily}>
          <SelectionName>
            Family and Friends
          </SelectionName>
        </div>
        <div id={styles.figureHome}>
          <Selection
            src={selectImageWhereILive} 
            alt="images represending my place to live"
          /> 
        </div>
        <div id={styles.figcaptionHome}>
          <SelectionName>
            Where I live
          </SelectionName>
        </div>
        <div id={styles.figureEatAndDrink}></div>
        <div id={styles.figcaptionEatAndDrink}></div>
      
        <div id={styles.figureMySchedule}></div>
        <div id={styles.figcaptionMySchedule}></div>
      
        <div id={styles.figurePersonalSituation}></div>
        <div id={styles.figcaptionPersonalSituation}></div>
      
        <div id={styles.figureFinance}></div>
        <div id={styles.figcaptionFinance}></div>
      
        <div id={styles.figureInsurance}></div>
        <div id={styles.figcaptionInsurance}></div>
      
        <div id={styles.figureSleep}></div>
        <div id={styles.figcaptionSleep}></div>
      
        <div id={styles.figureSubscribtions}></div>
        <div id={styles.figcaptionSubscribtions}></div>
      
        <div id={styles.figureInstalledApps}></div>
        <div id={styles.figcaptionInstalledApps}></div>
      
        <div id={styles.figureUsedWebsites}></div>
        <div id={styles.figcaptionUsedWebsites}></div>
      
        <div id={styles.figureReminders}></div>
        <div id={styles.figcaptionReminders}></div>
      
        <div id={styles.figureRightsAndObligations}></div>
        <div id={styles.figcaptionRightsAndObligations}></div>
      
        <div id={styles.figureDailyRoutine}></div>
        <div id={styles.figcaptionDailyRoutine}></div>
      </div>
    </>
  )
}