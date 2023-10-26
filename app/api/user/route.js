import { NextResponse } from "next/server"
import prisma from "@/app/lib/prisma"

export const GET = async ( request ) => {

    const url = new URL(request.url);

    const username = url.searchParams.get("username");

    try {
        const user = await prisma.user.find(
            username &&
            { username
            // where: {
            //     email: email
            // }
        });

        return new NextResponse (JSON.stringify(user), { status: 200 });
    } catch (err) {
        return new NextResponse  ("Database Error", { status: 500 });
    }
}