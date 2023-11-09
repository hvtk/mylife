import { NextResponse } from "next/server"
import prisma from "@/app/lib/prisma"
import { getSession } from "next-auth/react";

// export const POST = async (request) => {

//     const { firstName, lastName } = await request.json();

//     const infoPersonCreate = await prisma.infoPerson.create({
//         data: {
//             firstName,
//             lastName, 
//             user: {
//                 connect: { email: userEmail}
//             } 
//         },
//     });

//     try {
//         if (infoPersonCreate) {
//             return new NextResponse("InfoPerson has been created", {
//                 status: 201,
//             });
//         }

//     } catch (err) {
//         return new NextResponse(err.message, {
//             status: 500,
//         });
//     }

// }

export const POST = async (request) => {

    const { firstName, lastName} = await request.json();

    const session = await getSession({ request });

    if (session) {
        await prisma.infoPerson.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                user: {connect: { email: session?.user?.email }},
            },
        });

        // res.json(result);

        return new NextResponse("InfoPerson has been created", { status: 201,});
    }

    if (!session) {
        return new NextResponse("You are unauthorized to create InfoPerson", { status: 500,});
    }
}
