

// import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"
import prisma from "@/app/lib/prisma"
import { getSession } from "next-auth/react"

// const prisma = new PrismaClient();

export async function POST(request) {

    const body = await request.json();
    const { firstName, lastName } = body.data;
    console.log(body.data);

    const session = await getSession({ body })
    const infoPerson = await prisma.infoPerson.create({
        data: {
            firstName: firstName,
            lastName: lastName, 
        },

        include: {
            user: {
                select: {
                    email: true,
                    sessions: true,
                    id: true,
                    hashedPassword: true,
                },
            }

        }
    });

    return NextResponse.json(infoPerson)
}
