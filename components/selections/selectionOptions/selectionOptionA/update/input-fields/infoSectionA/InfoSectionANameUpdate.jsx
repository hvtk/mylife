import prisma from '@/prisma/prisma-client/prisma'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'

import { getServerSession } from 'next-auth'


export async function InfoSectionANameUpdate({value1, onChange1, value2, onChange2, value3, onChange3, value4, onChange4}) {

    const session = await getServerSession(authOptions)
  
    const infoSectionA1aData = await prisma.FamilyAndFriendsSelectionOptionA1a.findMany({
        where: {
            consumer: {
                email: session.user.email
            }
        },
        include: {
            consumer: {
                select: { name: true}
            }
        },
    })

    return (

        <>
            {infoSectionA1aData.map((FamilyAndFriendsSelectionOptionA1a) => (
            <div key={FamilyAndFriendsSelectionOptionA1a.id}> 
                <div className='row h-4 mb-3 w-85 d-flex align-items-center justify-content-end'>
                    Old data first name:'{FamilyAndFriendsSelectionOptionA1a.firstName}'
                </div>
                <div className='row h-15 mb-1' >
                    <label htmlFor="FirstName"
                        className='col-sm-4 col-form-label'
                        >
                            First Name
                    </label> 
                    <div className="col-sm-8">
                        <input type="text"
                            name="FirstName"
                            className='form-control' 
                            id="FirstName"
                            placeholder={FamilyAndFriendsSelectionOptionA1a.firstName}
                            value={value1}
                            onChange={onChange1}
                        />
                    </div>
                </div>
                <div className='row h-4 mb-3 w-90 d-flex align-items-center justify-content-end'>
                    Old data second name:'{FamilyAndFriendsSelectionOptionA1a.secondName}'
                </div>
                <div className='row h-15 mb-1'>
                    <label htmlFor="SecondName"
                        className='col-sm-4 col-form-label'
                        >
                            Second Name
                    </label> 
                    <div className='col-sm-8'>
                        <input type="text"
                               name="SecondName"
                               className='form-control' 
                               id="SecondName"
                               placeholder={FamilyAndFriendsSelectionOptionA1a.secondName}
                               value={value2}
                               onChange={onChange2}
                        />
                    </div>
                </div>
                <div className='row h-4 mb-3 w-85 d-flex align-items-center justify-content-end'>
                    Old data infix:'{FamilyAndFriendsSelectionOptionA1a.infix}'
                </div>
                <div className='row h-15 mb-1'>
                    <label htmlFor="Infix"
                        className='col-sm-4 col-form-label'
                        >
                            Infix
                    </label> 
                    <div className="col-sm-8">
                        <input type="text"
                               name="Infix"
                               className='form-control' 
                               id="Infix"
                               placeholder={FamilyAndFriendsSelectionOptionA1a.infix}
                               value={value3}
                               onChange={onChange3}
                        />
                    </div>
                </div>
                <div className='row h-4 mb-3 w-85 d-flex align-items-center justify-content-end'>
                    Old data last name:'{FamilyAndFriendsSelectionOptionA1a.lastName}'
                </div>
                <div className='row h-15 mb-3'>
                    <label htmlFor="LastName"
                        className='col-sm-4 col-form-label'
                        >
                            Last Name
                    </label> 
                    <div className='col-sm-8'>
                        <input type="text"
                               name="LastName"
                               className='form-control' 
                               id="LastName"
                               placeholder={FamilyAndFriendsSelectionOptionA1a.lastName}
                               value={value4}
                               onChange={onChange4}
                        />
                    </div>
                </div>
            </div>
            ))}
        </>
    )
        
}
