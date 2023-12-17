import prisma from "@/app/lib/prisma"

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { NextResponse } from "next/server"

import { getServerSession } from "next-auth"

export const UPDATE = async (request) => {

    // const { firstName, secondName, infix, lastName, consumerEmail} = await request.json();

    const session = await getServerSession(authOptions);

    try {

        const SelectionOptionA1aUpdate = await prisma.FamilyAndFriendsSelectionOptionA1a.update({
            where: {
                consumer: {
                    email: session.user.email
                }
            },
            include: {
              consumer: {
                select: { name: true}
              }
            },
        });

        if (SelectionOptionA1aUpdate) {
            
            if (session) {
                return new NextResponse (
                    "InfoPerson has been updated!", 
                    { status: 201, }
                );
            } else {
                return new NextResponse (
                    "You are unauthorized to update infoPerson!",
                    { status: 401, });
            }
        
        } else {
            return new NextResponse (
                "InfoPerson is not updated!",
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
