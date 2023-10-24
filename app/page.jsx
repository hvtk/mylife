import { MylifeImageAndCaption } from '@/components/self-contained-items/MyLifeImageAndCaption'
import { SelectionOptionsView } from '@/components/selections/SelectionOptionsView'
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
                <div className='d-flex align-items-center justify-content-end '>
                <div className='fs-5 me-4'>
                    MYLIFE INTRODUCTION PAGE
                </div>  
                <HeaderMylifeIntro/>
                </div>
            </div>
            <SelectionOptionsView />
            </div>
        </div>
      </div>
    </>
  )
}