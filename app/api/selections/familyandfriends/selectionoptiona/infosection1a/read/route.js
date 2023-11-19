import { NextResponse } from "next/server"
import prisma from "@/app/lib/prisma"
import { getServerSession } from "next-auth"

export const Read = async (request) => {

    const session = await getServerSession();

    try {

        const SelectionOptionA1aRead = await prisma.FamilyAndFriendsSelectionOptionA1a.find({
            where: { consumer: session.user.email }
            },
        )            

        if (SelectionOptionA1aRead) {
            
            if (session) {
                return new NextResponse (
                    JSON.stringify(SelectionOptionA1aRead), 
                    { status: 200, }
                );
            } else {
                return new NextResponse (
                    "You are unauthorized to read these info!",
                    { status: 401, });
            }
        
        } else {
            return new NextResponse (
                "There is an database error!",
                { status: 401, }
            );
        }

    } catch (err) {
        return new NextResponse (
            err.message,
            { status: 500, }
        );
    }
}
