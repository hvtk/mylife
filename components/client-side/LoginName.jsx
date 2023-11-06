'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export function LoginName() {

    const session = useSession()

    const router = useRouter()

    if (session.status === "loading") {
        return <p>Loading...</p>;
    }

    if (session.status === "unauthenticated") {
        router?.push("/")
    }
    
    if (session.status === "authenticated") {

        return

            <div> 
                Hi...{session?.user.name}
            </div>  
        
    }
}