import { MylifeImage } from '@/components/homepage/MylifeImage' 

export function MylifeImageAndCaption() {
    return (
        <>
            <div className='bg-warning h-75 rounded-5'>
                <div className='d-flex flex-column align-items-center justify-content-between h-100'>
                    <div className='d-flex align-items-center text-center fs-3 w-75 h-25'>
                        All that influences who you are, what you can do, your daily activities, organized at one place.
                    </div>
                    <div className='d-flex align-items-center h-50'>
                        <MylifeImage/>
                    </div>
                    <div className='d-flex align-items-center text-center fs-3 w-75 h-25'>
                        In order to be able to manage all that life demands as good as possible!
                    </div>
                </div>
            </div>
        </>
    )
}