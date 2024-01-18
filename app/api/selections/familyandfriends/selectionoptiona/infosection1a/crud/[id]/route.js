// /api/selections/familyandfriends/selectionoptiona/infosection1a/crud/12345
import prisma from '@/prisma/prisma-client/prisma'

import { NextResponse } from "next/server"


export const GET = async (request, {params={id: string}} ) => {

    const id = params.id;

    try {

      const getInfoSection1aData = await prisma.FamilyAndFriendsSelectionOptionA1a.findUnique({
        where: {
            id: parseInt(id, 10)
        },
      });

      return new NextResponse(JSON.stringify(getInfoSection1aData, { status: 200 }));
    } catch (err) {
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
      );
    }
  };