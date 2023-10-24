import { NextResponse } from "next/server"
import prisma from "@/app/lib/prisma"

export async function GET() {

    const infoPersons = await prisma.infoPerson.findMany();

    return NextResponse.json(infoPersons)
}