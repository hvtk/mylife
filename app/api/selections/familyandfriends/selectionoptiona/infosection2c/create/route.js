import prisma from "@/app/lib/prisma"

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { NextResponse } from "next/server"

import { getServerSession } from "next-auth"

export const POST = async (request) => {

    const { birthday, email, phone, phoneMobile, instagram, consumerEmail} = await request.json();

    const session = await getServerSession(authOptions);

    try {

        const SelectionOptionA2cCreate = await prisma.FamilyAndFriendsSelectionOptionA2c.create({
            data: {
                birthday: birthday,
                email: email,
                phone: phone,
                phoneMobile: phoneMobile,
                instagram: instagram,
                consumer: { connect: {email: consumerEmail} },
            },
        });

        if (SelectionOptionA2cCreate) {
            
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
