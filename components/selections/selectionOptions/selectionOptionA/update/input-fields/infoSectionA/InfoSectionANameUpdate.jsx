import prisma from '@/app/lib/prisma'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'

import { getServerSession } from 'next-auth'


export async function InfoSectionANameUpdate() {

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
            <div> 
                <div className='row mb-3' key={FamilyAndFriendsSelectionOptionA1a.firstName}>
                    <label htmlFor="FirstName"
                        className='col-sm-4 col-form-label'
                        >
                            First Name: {""}
                    </label> 
                    <div className="col-sm-8">
                        <input type="text"
                            name="FirstName"
                            className='form-control' 
                            id="FirstName"
                            placeholder="Henk"
                            value={FamilyAndFriendsSelectionOptionA1a.firstName}
                            
                        />
                    </div>
                </div>
                <div className='row mb-3'>
                    <label htmlFor="SecondName"
                        className='col-sm-4 col-form-label'
                        >
                            Second Name: {""}
                    </label> 
                    <div className='col-sm-8'>
                        <input type="text"
                            name="SecondName"
                            className='form-control' 
                            id="SecondName"
                            placeholder="Diederik"
                            value={FamilyAndFriendsSelectionOptionA1a.secondName}
                        />
                    </div>
                </div>
                <div className='row mb-3'>
                    <label htmlFor="Infix"
                        className='col-sm-4 col-form-label'
                        >
                            Infix: {""}
                    </label> 
                    <div className="col-sm-8">
                        <input type="text"
                            name="Infix"
                            className='form-control' 
                            id="Infix"
                            placeholder="van 't"
                            value={FamilyAndFriendsSelectionOptionA1a.infix}
                        />
                    </div>
                </div>
                <div className='row mb-3'>
                    <label htmlFor="LastName"
                        className='col-sm-4 col-form-label'
                        >
                            Last Name: {""}
                    </label> 
                    <div className='col-sm-8'>
                        <input type="text"
                            name="LastName"
                            className='form-control' 
                            id="LastName"
                            placeholder="Kruijs"
                            value={FamilyAndFriendsSelectionOptionA1a.lastName}
                        />
                    </div>
                </div>
            </div>
            ))}
        </>
    )
        
}
