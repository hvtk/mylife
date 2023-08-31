import Link from 'next/link'

import { SidebarBase } from '@/components/sidebar/SidebarBase'
import { SelectionOptionName } from '@/components/selections/SelectionOptionName'
import { SelectionExplenation } from '@/components/selections/SelectionExplenation'
import { SelectionOptions } from '@/components/selections/SelectionOptions'
import { SelectionInfo } from '@/components/selections/SelectionInfo'
import { SelectionImage } from '@/components/selections/SelectionImage'

import selectImageFinance from 'public/assets/images/selections/my finances.jpg'

export default function SelectionFinance() {
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
                      All your information about your friends and family in one place
                    </SelectionInfo>
                    <SelectionImage
                      src={selectImageFinance}
                      alt="image respresending my family and friends"
                    />
                  </figure>
                </div>
              </div>
              <div className='col-sm-6 min-vh-100 d-flex flex-column align-items-center justify-content-center'>
                <div className='bg-warning h-75 w-75 rounded-5'>
                  <div className='d-flex flex-column align-items-center h-100'>
                    <SelectionExplenation />
                    <SelectionOptionName>
                      MY FAMILY AND FRIENDS
                    </SelectionOptionName>
                    <SelectionOptions>
                      <Link href="/selectionOptionsAA">
                        A: Those who raised you
                      </Link>
                    </SelectionOptions>
                    <SelectionOptions>
                      <Link href="/selectionOptionsAB">
                        B: Brothers and Sisters
                      </Link>
                    </SelectionOptions>
                    <SelectionOptions>
                      <Link href="/selectionOptionsAC">
                        C: Uncles and Aunts
                      </Link>
                    </SelectionOptions>
                    <SelectionOptions>
                      <Link href="/selectionOptionsAD">
                        D: Grandpa's and Grandma's
                      </Link>
                    </SelectionOptions>
                    <SelectionOptions>
                      <Link href="/selectionOptionsAE">
                        E: Friends
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