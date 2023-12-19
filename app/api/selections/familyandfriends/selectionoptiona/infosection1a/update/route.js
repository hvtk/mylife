import prisma from "@/app/lib/prisma"

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { getServerSession } from "next-auth"

export const UPDATE = async (req, res) => {

    const session = await getServerSession(authOptions);

    try {

        if (req.method === "PUT") {

            await prisma.FamilyAndFriendsSelectionOptionA1a.update({
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
                data: {
                    completed: req.body.completed,
                },
            });
            
            if (session) {
                res.status(201).json(
                    {message: "InfoPerson has been updated!"} 
                );
            } else {
                res.status(401).json (
                    {message: "You are unauthorized to update infoPerson!"}
                );
            }
        
        } else {
            res.status(401).json (
                {message: "InfoPerson is not updated!"}
            );
        }

    } catch (err) {
        res.err.status(500).json (
           {message: "There is something going wrong!"} 
        );
    }
}
