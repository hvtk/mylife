import Link from 'next/link'

import { SidebarBase } from '@/components/sidebar/SidebarBase'
import { SelectionOptionName } from '@/components/selections/SelectionOptionName'
import { SelectionExplenation } from '@/components/selections/SelectionExplenation'
import { SelectionOptions } from '@/components/selections/SelectionOptions'
import { SelectionInfo } from '@/components/selections/SelectionInfo'
import { SelectionImage } from '@/components/selections/SelectionImage'

import selectImageWhereILive from 'public/assets/images/selections/where i live.jpg'

export default function SelectionWhereILife() {
  return (
    <>
      <div className='container min-vw-100 bg-body'>
        <div className='row'>
          <div className='col-sm-1 bg-secondary min-vh-100 d-flex flex-column justify-content-center'>
            <SidebarBase/>
          </div>
          <div className='col-sm-11 bg-info min-vh-100'>
            <div className='row'>
              <div className='col-sm-6 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
                <div className='bg-warning h-75 w-75 rounded-5'>
                  <figure className='d-flex flex-column align-items-center h-100'>
                    <SelectionInfo>
                      All your information about your the place you live
                    </SelectionInfo>
                    <SelectionImage
                      src={selectImageWhereILive}
                      alt="image represending my place to live"
                    />
                  </figure>
                </div>
              </div>
              <div className='col-sm-6 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
                <div className='bg-warning h-75 w-75 rounded-5'>
                  <div className='d-flex flex-column align-items-center h-100'>
                    <SelectionExplenation />
                    <SelectionOptionName>
                      WHERE I LIVE
                    </SelectionOptionName>
                    <SelectionOptions>
                      <Link href="/selectionOptionsAA">
                        A: The adress
                      </Link>
                    </SelectionOptions>
                    <SelectionOptions>
                      <Link href="/selectionOptionsAB">
                        B: My inventory
                      </Link>
                    </SelectionOptions>
                    <SelectionOptions>
                      <Link href="/selectionOptionsAC">
                        C: How do I pay it
                      </Link>
                    </SelectionOptions>
                    <SelectionOptions>
                      <Link href="/selectionOptionsAD">
                        D: Maintenance require within my responsibility
                      </Link>
                    </SelectionOptions>
                    <SelectionOptions>
                      <Link href="/selectionOptionsAE">
                        E: Create an option yourself
                      </Link>
                    </SelectionOptions>
                    <SelectionOptions>
                      <Link href="/selectionOptionsAF">
                        F: Create an option yourself
                      </Link>
                    </SelectionOptions>
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