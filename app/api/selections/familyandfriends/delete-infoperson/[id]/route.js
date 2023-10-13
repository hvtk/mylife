import { NextResponse } from "next/server"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function DELETE(request, {params}) {

    const { id } = params;

    await prisma.infoPerson.delete({
        where: {
            id
        }
    });

    if(!infoPerson) {
        return NextResponse("Info Person not deleted!", { status: 404 });
    }

    return NextResponse.json("Info Person has been deleted!")
}

