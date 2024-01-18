// /api/selections/familyandfriends/selectionoptiona/infosection1a/crud
import prisma from '@/prisma/prisma-client/prisma'

import { NextResponse } from "next/server"

export async function POST(request) {

    const json = await request.json()

    const infoSectionA1aDataCreate = await prisma.FamilyAndFriendsSelectionOptionA1a.create({
        data: json
    })
    
    return new NextResponse(JSON.stringify(infoSectionA1aDataCreate), { status: 201})
}

// Get all infoSection1aData from all users
export const GET = async () => {

  try {
    const getInfoSection1aData = await prisma.FamilyAndFriendsSelectionOptionA1a.findMany();

    return new NextResponse(JSON.stringify(getInfoSection1aData, { status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
  
