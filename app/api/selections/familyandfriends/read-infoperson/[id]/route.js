// import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"
import prisma from "@/app/lib/prisma"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

// const prisma = new PrismaClient();

export async function Get(request, {params}) {

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