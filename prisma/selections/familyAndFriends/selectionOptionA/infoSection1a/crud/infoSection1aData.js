import prisma from "@/prisma/prisma-client/prisma"

// READ
//get unique infoSection1a by id

export const getInfoSection1aDataByID = async (id) => {

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

// CREATE

export const createInfoSection1aData = async (firstName, secondName, infix, lastName, session) => {

    const newInfoSection1aData = await prisma.FamilyAndFriendsSelectionOptionA1a.create({
        data: {
            firstName,
            secondName,
            infix,
            lastName,
            consumer: {connect: { email: session?.consumer?.email} },
        },
    });
    const infoSection1a = await getInfoSection1aDataByID(newInfoSection1aData.id);

    return infoSection1a;
};