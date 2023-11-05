'use client'

import { useSession } from "next-auth/react"

export function LoginName() {

    const { data: session, status } = useSession();

    return(

        <div> 
            Hi...{session?.user.name}
        </div>  
    )
}