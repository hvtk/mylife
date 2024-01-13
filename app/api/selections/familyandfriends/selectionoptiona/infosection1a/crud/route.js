import prisma from '@/prisma/prisma-client/prisma'

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { getServerSession } from "next-auth"

export const getInfoSection1aByID = async (id) => {

    const infoSection1a = await prisma.FamilyAndFriendsSelectionOptionA1a.findUnique({
        where: {
            id,
        },
        include: {
            consumer: true,
        },
    });

    return infoSection1a;
};

export const createInfoSection1a = async (firstName, secondName, infix, lastName, session) => {

    const session = await getServerSession(authOptions);

    const newInfoSection1a = await prisma.FamilyAndFriendsSelectionOptionA1a.create({
        data: {
            firstName: firstName,
            secondName: secondName,
            infix: infix,
            lastName: lastName,
            consumer: { connect: {email: session?.consumer?.email} },
        },
    });

    const infoSection1a = await getInfoSection1aByID(newInfoSection1a.id);

    return infoSection1a;    
};
