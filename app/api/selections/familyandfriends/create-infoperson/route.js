import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient();

export async function POST(request) {

    const body = await request.json();
    const { firstName, lastName } = body.data;
    console.log(body.data);

    const infoPerson = await prisma.infoPerson.create({
        data: {
            firstName,
            lastName,
        }
    });

    return NextResponse.json(infoPerson)
}

export async function GET() {

    const infoPersons = await prisma.infoPerson.findMany();

    return NextResponse.json(infoPersons)
}