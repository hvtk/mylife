import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient();

export async function GET() {

    const infoPersons = await prisma.infoPerson.findMany();

    return NextResponse.json(infoPersons)
}