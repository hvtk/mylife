import 'bootstrap/dist/css/bootstrap.css'

import { Selection } from 'components/selections/Selection'
import { SelectionName } from 'components/selections/SelectionName'
import { SidebarBase } from 'components/sidebar/SidebarBase'
import selectImageWhereILive from 'public/assets/images/selections/where i live.jpg'
import selectImageFamily from 'public/assets/images/selections/family.jpg'


export default function Homepage() {
  return (
    <div className="container bg-body">
      <div className="row">
        <div className="col-sm-1 bg-secondary">
          <SidebarBase/>
        </div>
        <div className="col-sm-11 bg-success">
          <div className="row">
            <div className="col-sm-4 bg-warning">
            </div>
            <div className="col-sm-8">
              <div className="row">
                <div className="col-3">
                  <Selection 
                  src={selectImageFamily}
                    alt="image respresending my family and friends"
                  />
                </div>
                <div className="col-3">
                  <Selection
                  src={selectImageWhereILive} 
                    alt="images represending my place to live"
                  /> 
                </div>
                <div className="col-3">
                  <Selection 
                  src={selectImageFamily}
                    alt="image respresending my family and friends"
                  />
                </div>
                <div className="col-3">
                  <Selection
                  src={selectImageWhereILive} 
                    alt="images represending my place to live"
                  /> 
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <SelectionName >
                    Family and Friends
                  </SelectionName>
                </div>
                <div className="col-3">
                  <SelectionName>
                    Where I live
                  </SelectionName>
                </div>
                <div className="col-3">
                  <SelectionName >
                    Family and Friends
                  </SelectionName>
                </div>
                <div className="col-3">
                  <SelectionName>
                    Where I live
                  </SelectionName>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <Selection 
                  src={selectImageFamily}
                    alt="image respresending my family and friends"
                  />
                </div>
                <div className="col-3">
                  <Selection
                  src={selectImageWhereILive} 
                    alt="images represending my place to live"
                  /> 
                </div>
                <div className="col-3">
                  <Selection 
                  src={selectImageFamily}
                    alt="image respresending my family and friends"
                  />
                </div>
                <div className="col-3">
                  <Selection
                  src={selectImageWhereILive} 
                    alt="images represending my place to live"
                  /> 
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <SelectionName >
                    Family and Friends
                  </SelectionName>
                </div>
                <div className="col-3">
                  <SelectionName>
                    Where I live
                  </SelectionName>
                </div>
                <div className="col-3">
                  <SelectionName >
                    Family and Friends
                  </SelectionName>
                </div>
                <div className="col-3">
                  <SelectionName>
                    Where I live
                  </SelectionName>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <Selection 
                  src={selectImageFamily}
                    alt="image respresending my family and friends"
                  />
                </div>
                <div className="col-3">
                  <Selection
                  src={selectImageWhereILive} 
                    alt="images represending my place to live"
                  /> 
                </div>
                <div className="col-3">
                  <Selection 
                  src={selectImageFamily}
                    alt="image respresending my family and friends"
                  />
                </div>
                <div className="col-3">
                  <Selection
                  src={selectImageWhereILive} 
                    alt="images represending my place to live"
                  /> 
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <SelectionName >
                    Family and Friends
                  </SelectionName>
                </div>
                <div className="col-3">
                  <SelectionName>
                    Where I live
                  </SelectionName>
                </div>
                <div className="col-3">
                  <SelectionName >
                    Family and Friends
                  </SelectionName>
                </div>
                <div className="col-3">
                  <SelectionName>
                    Where I live
                  </SelectionName>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <Selection 
                  src={selectImageFamily}
                    alt="image respresending my family and friends"
                  />
                </div>
                <div className="col-3">
                  <Selection
                  src={selectImageWhereILive} 
                    alt="images represending my place to live"
                  /> 
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <SelectionName >
                    Family and Friends
                  </SelectionName>
                </div>
                <div className="col-3">
                  <SelectionName>
                    Where I live
                  </SelectionName>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
