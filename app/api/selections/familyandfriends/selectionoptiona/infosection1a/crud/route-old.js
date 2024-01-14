import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { getServerSession } from "next-auth"

import { createInfoSection1aData } from "@/prisma/selections/familyAndFriends/selectionOptionA/infoSection1a/crud/infoSection1aData";

export default async function handle(req, res) {

    // Get the current session data with {id, email, name}
    const session = await getServerSession(authOptions);

    // Run if the request was a post request
    if (req.method == "POST") {
        
        // Get infoSection1aData firstName, secondName, infix and lastName form the request body
        const { firstName, secondName, infix, lastName} = req.body;

        // Create new infoSection1aData
        // also pass the session which would be use to get the user information
        const infoSection1a = await createInfoSection1aData(firstName, secondName, infix, lastName, session);

        //return created infoSection1a
        return res.json(infoSection1a);
    }    
}
