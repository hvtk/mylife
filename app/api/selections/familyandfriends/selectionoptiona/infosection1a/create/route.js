import prisma from '@/prisma/prisma-client/prisma'

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { NextResponse } from "next/server"

import { getServerSession } from "next-auth"

export const POST = async (request) => {

    const { firstName, secondName, infix, lastName, consumerEmail} = await request.json();

    const session = await getServerSession(authOptions);

    try {

        const SelectionOptionA1aCreate = await prisma.FamilyAndFriendsSelectionOptionA1a.create({
            data: {
                firstName: firstName,
                secondName: secondName,
                infix: infix,
                lastName: lastName,
                consumer: { connect: {email: consumerEmail} },
            },
        });

        if (SelectionOptionA1aCreate) {
            
            if (session) {
                return new NextResponse (
                    "InfoPerson has been created!", 
                    { status: 201, }
                );
            } else {
                return new NextResponse (
                    "You are unauthorized to create infoPerson!",
                    { status: 401, });
            }
        
        } else {
            return new NextResponse (
                "InfoPerson is not created!",
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
