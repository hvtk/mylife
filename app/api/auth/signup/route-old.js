import bcrypt from "bcryptjs"
// import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

import prisma from "@/app/lib/prisma"
// const prisma = new PrismaClient();

// export async function POST(request) {

//     const body = await request.json();
//     const { name, email, password } = body.data;
//     console.log(body.data);

//     if(!name || !email || !password) {
//         return new NextResponse("Missing name, email, password", { status: 400});
//     }

//     const exist = await prisma.user.findUnique({
//         where: {
//             email: email
//         }
//     });

//     if(exist) {
//         return new NextResponse("User already exists", { status: 400 });
//     }

//     const hashedPassword = await bcrypt.hash(password, 12);

//     const user = await prisma.user.create({
//         data: {
//             name,
//             email,
//             hashedPassword
//         }
//     });

//     return NextResponse.json(user)
// }

export const POST = async (request) => {

    const { name, email, password } = await request.json();
    
    if(!name || !email || !password) {
        return new NextResponse("Missing name, email, password", { status: 400});
    }

    const exist = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    if(exist) {
        return new NextResponse("User already exists", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password:hashedPassword,
        },
    });

    try {
        if (user) {
            return new NextResponse("User has been created", {
                status: 201,
            });
        }

    } catch (err) {
        return new NextResponse(err.message, {
            status: 500,
        });
    }

}