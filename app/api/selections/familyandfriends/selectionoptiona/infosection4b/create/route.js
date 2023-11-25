import prisma from "@/app/lib/prisma"

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { NextResponse } from "next/server"

import { getServerSession } from "next-auth"

export const POST = async (request) => {

    const { land, county, address, postalCode, city, consumerEmail } = await request.json();

    const session = await getServerSession(authOptions);

    try {

        const SelectionOptionA4bCreate = await prisma.FamilyAndFriendsSelectionOptionA4b.create({
            data: {
                land: land,
                county: county,
                address: address,
                postalCode: postalCode,
                city: city,
                consumer: { connect: {email: consumerEmail} },
            },
        });

        if (SelectionOptionA4bCreate) {
            
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
