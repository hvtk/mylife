import { NextResponse } from "next/server"
import prisma from "@/app/lib/prisma"

export const POST = async (request) => {

    const { firstName, lastName } = await request.json();

    const infoPersonCreate = await prisma.InfoPerson.create({
        data: {
            firstName,
            lastName,  
        },
    });

    try {
        if (infoPersonCreate) {
            return new NextResponse("InfoPerson has been created", {
                status: 201,
            });
        }

    } catch (err) {
        return new NextResponse(err.message, {
            status: 500,
        });
    }

}