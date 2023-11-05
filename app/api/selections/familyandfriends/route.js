// import { NextResponse } from "next/server"
// import prisma from "@/app/lib/prisma"

// export async function GET() {

//     const infoPersons = await prisma.infoPerson.findMany();

//     return NextResponse.json(infoPersons)
// }

import { getSession } from "next-auth/react"
import prisma from "@/app/lib/prisma"

export default async function handle(req, res) {
    const { firstName, lastName} = req.body;

    const session = await getSession({ req });
    const result = await prisma.infoPerson.create({
        data: {
            firstName: firstName,
            lastName: lastName,
            user: { connect: { email: session?.user?.email}},
        },
    });
    res.json(result);
}