import { MylifeImageAndCaption } from '@/components/self-contained-items/MyLifeImageAndCaption'
import { MylifeIntroSelectionOptionsView } from '@/components/mylife-intro/MylifeIntroSelectionOptionsView'
import { HeaderMylifeIntro } from '@/components/header/HeaderMylifeIntro'

export default function MylifeIntroPage() {

  return (

    <>
      <div className='container min-vw-100 bg-body'>
        <div className='row bg-success min-vh-100'>
            <div className='col-sm-4 min-vh-100 d-flex flex-column justify-content-center'>
            <MylifeImageAndCaption />
            </div>
            <div className='col-sm-8'>
              <div className='row h-4'>
                  <div className='d-flex align-items-center justify-content-end'>
                  <div className='fs-5 me-5'>
                      MYLIFE INTRODUCTION PAGE
                  </div>  
                  <HeaderMylifeIntro/>
                  </div>
              </div>
              <MylifeIntroSelectionOptionsView />
            </div>
        </div>
      </div>
    </>
  )
}