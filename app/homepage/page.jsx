'use client'

import { useSession } from 'next-auth/react'

import { MylifeImageAndCaption } from '@/components/self-contained-items/MyLifeImageAndCaption'
import { SelectionOptionsView } from '@/components/selections/SelectionOptionsView'
import { SidebarBase } from '@/components/sidebar/SidebarBase'
import { HeaderBase } from '@/components/header/HeaderBase'

export default function Homepage() {

  const { data: session, status } = useSession();
  console.log(session);
  return (

    <>
      <div className='container min-vw-100 bg-body'>
        <div className='row'>
          <div className='col-sm-1 bg-secondary min-vh-100 d-flex flex-column justify-content-center'>
            <SidebarBase/>
          </div>
          <div className='col-sm-11 bg-success min-vh-100'>
            <div className='row'>
              <div className='col-sm-4 min-vh-100 d-flex flex-column justify-content-center'>
                <MylifeImageAndCaption />
              </div>
              <div className='col-sm-8'>
                <div className='row h-4'>
                 <div className='d-flex align-items-center justify-content-end '>
                    <div className='fs-5 me-4'>
                      <h1>Homepage</h1>
                      <p>
                        Hi {session?.user.name}
                      </p>
                    </div>
                    <HeaderBase/>
                  </div>
                </div>
                <SelectionOptionsView />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
