import 'bootstrap/dist/css/bootstrap.css'

import { Selection } from 'components/selections/Selection'
import { SelectionName } from 'components/selections/SelectionName'
import { SidebarBase } from 'components/sidebar/SidebarBase'
import selectImageWhereILive from 'public/assets/images/selections/where i live.jpg'
import selectImageFamily from 'public/assets/images/selections/family.jpg'


export default function Homepage() {
  return (
   
      <div>
        
          <SidebarBase/>
       
        <div >
              <Selection 
                src={selectImageFamily}
                alt="image respresending my family and friends"
              />
        </div>
        <div  >
          <SelectionName >
            Family and Friends
          </SelectionName>
        </div>
        <div >
          <Selection
            src={selectImageWhereILive} 
            alt="images represending my place to live"
          /> 
        </div>
        <div >
          <SelectionName>
            Where I live
          </SelectionName>
        </div>
      </div>
    
  )
}
