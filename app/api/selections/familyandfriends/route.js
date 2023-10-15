// import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"
import prisma from "@/app/lib/prisma"

// const prisma = new PrismaClient();

export async function GET() {

    const infoPersons = await prisma.infoPerson.findMany();

    return NextResponse.json(infoPersons)
}