import { NextResponse } from "next/server"
import prisma from "@/app/lib/prisma"

export const GET = async ( request ) => {
    try {
        const infoPerson = await prisma.InfoPerson.findMany();

        return new NextResponse(JSON.stringify(infoPerson), { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
}
