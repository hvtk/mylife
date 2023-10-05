import { NextResponse } from "next/server"

export async function GET(request, {params}) {

    const { id } = params;

    const infoPerson = await prisma.infoPerson.findUnique({
        where: {
            id
        }
    });

    if(!infoPerson) {
        return NextResponse("Info Person not found!", { status: 404 });
    }

    return NextResponse.json(infoPerson)
}

export async function PATCH(request, {params}) {

    const body = await request.json();
    const { firstName, lastName } = body.data;
    console.log(body.data);

    const { id } = params;

    const updateInfoPerson = await prisma.infoPerson.update({
        where: {
            id
        },

        data: {
            firstName,
            lastName,
        }
    });

    if(!updateInfoPerson) {
        return NextResponse("Update Info Person not created!", { status: 404 });
    }

    return NextResponse.json(infoPerson)
}

export async function DELETE(request, {params}) {

    const { id } = params;

    await prisma.infoPerson.delete({
        where: {
            id
        }
    });

    if(!infoPerson) {
        return NextResponse("Info Person not deleted!", { status: 404 });
    }

    return NextResponse.json("Info Person has been deleted!")
}

