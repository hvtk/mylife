import prisma from '@/prisma/prisma-client/prisma'

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { NextResponse } from "next/server"

import { getServerSession } from "next-auth"


export const PUT = async (request) => {

    const { firstName, secondName, infix, lastName} = await request.json();

    const session = await getServerSession(authOptions);

    try {

        const SelectionOptionA1aUpdate = await prisma.FamilyAndFriendsSelectionOptionA1a.update({
            where: {
                id: request.query.id,
            },
            data: {
                firstName: firstName,
                secondName: secondName,
                infix: infix,
                lastName: lastName,
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

