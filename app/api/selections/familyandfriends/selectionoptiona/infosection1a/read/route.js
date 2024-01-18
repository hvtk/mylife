import { NextResponse } from "next/server"

import { getServerSession } from "next-auth"

import prisma from "@/prisma/prisma-client/prisma"

import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function GET(request) {

    const session = await getServerSession(authOptions)

    if (!session.user.email) {
        return new NextResponse(null, {status: 401})
    }
  
    const infoSectionA1aData = await prisma.FamilyAndFriendsSelectionOptionA1a.findMany({
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
    })

    return NextResponse.json(infoSectionA1aData)
}