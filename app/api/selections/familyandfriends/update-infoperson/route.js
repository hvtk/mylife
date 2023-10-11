import { NextResponse } from "next/server"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function PUT(request, {params}) {

    const body = await request.json();
    const { firstName, lastName } = body.data;
    console.log(body.data);

    const { id } = params;

    const updateInfoPerson = await prisma.infoPerson.update({
        where: {
            id
        },

        data: {
            firstName,
            lastName,
        }
    });

    if(!updateInfoPerson) {
        return NextResponse("Update Info Person not created!", { status: 404 });
    }

    return NextResponse.json(infoPerson)
}


