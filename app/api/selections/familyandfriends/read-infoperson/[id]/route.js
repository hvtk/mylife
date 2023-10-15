// import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"
import prisma from "@/app/lib/prisma"

// const prisma = new PrismaClient();

export async function GetServerSideProps(request, {params}) {

    const infoPersons = await prisma.infoPerson.findUnique({
        where: {
            id: String(params?.id)
        },
        include: {
            user: {
                select: {name: true}
            }
        }
    });

    return NextResponse.json(infoPersons)
}