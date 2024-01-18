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

export const PUT = async (request, {params={id: string}} ) => {

  const id = params.id;
  const json = await request.json()

  try {

    const updateInfoSection1aData = await prisma.FamilyAndFriendsSelectionOptionA1a.update({
      where: {
          id: parseInt(id, 10)
      },
      data: {
        firstName: json.firstName || null,
        secondName: json.secondName || null,
        infix: json.infix || null,
        lastName: json.lastName || null,
      }
    });

    return new NextResponse(JSON.stringify(updateInfoSection1aData, { status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const PATCH = async (request, {params={id: string}} ) => {

  const id = params.id;
  const json = await request.json()

  try {

    const updateInfoSection1aData = await prisma.FamilyAndFriendsSelectionOptionA1a.update({
      where: {
          id: parseInt(id, 10)
      },
      data: json
    });

    return new NextResponse(JSON.stringify(updateInfoSection1aData, { status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const DELETE = async (request, {params={id: string}} ) => {

  const id = params.id;
  
  try {

    const deleteInfoSection1aData = await prisma.FamilyAndFriendsSelectionOptionA1a.delete({
      where: {
          id: parseInt(id, 10)
      },
    });

    return new NextResponse(JSON.stringify(deleteInfoSection1aData, { status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};