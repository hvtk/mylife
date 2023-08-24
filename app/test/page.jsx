'use client'

import Head from 'next/head'

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>NextJS</title>
//         <meta name='description' content='Generated by create next app' />
//         <link rel='icon' href='/favicon.ico' />
//       </Head>
//       <main className='container'>
//         <h1 className='text-center'>NextJS Application</h1>
//         <button className='btn btn-primary m-2'>Button</button>
//         <button className='btn btn-secondary m-2'>Button</button>
//         <button className='btn btn-danger m-2'>Button</button>
//       </main>
//     </>
//   )
// }


export default function Home() {
    return (
      <>
        <Head>
        <title>NextJS</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className='container'>
            <h1 className='text-center'>NextJS Application</h1>
            <button className='btn btn-primary m-2'>Button</button>
            <button className='btn btn-secondary m-2'>Button</button>
            <button className='btn btn-danger m-2'>Button</button>
    
            {/* Button trigger modal */}
            <button
            type='button'
            className='btn btn-primary'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
            >
            Launch demo modal
            </button>
            {/* Modal */}
            <div
            className='modal fade'
            id='exampleModal'
            tabIndex={-1}
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
            >

                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h1 className='modal-title fs-5' id='exampleModalLabel'>
                            Modal title
                            </h1>
                            <button
                            type='button'
                            className='btn-close'
                            data-bs-dismiss='modal'
                            aria-label='Close'
                            />
                        </div>
                        <div className='modal-body'>...</div>
                        <div className='modal-footer'>
                            <button
                            type='button'
                            className='btn btn-secondary'
                            data-bs-dismiss='modal'
                            >
                            Close
                            </button>
                            <button type='button' className='btn btn-primary'>
                            Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
    )
}

