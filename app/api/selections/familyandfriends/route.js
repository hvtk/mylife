import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient();

export async function POST(request) {

    const body = await request.json();
    const { firstName, lastName } = body;
    console.log(body);

    // if(!name || !email || !password) {
    //     return new NextResponse("Missing name, email, password", { status: 400});
    // }

    // const exist = await prisma.user.findUnique({
    //     where: {
    //         email: email
    //     }
    // });

    // if(exist) {
    //     return new NextResponse("User already exists", { status: 400 });
    // }

    const post = await prisma.infoPerson.create({
        data: {
            firstName,
            lastName
        }
    });

    return NextResponse.json(post)
}