import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

// The code for the prisma client with no limitation 
import prisma from "@/app/lib/prisma"

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

    const hashedPassword = await bcrypt.hash(password, 5);

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