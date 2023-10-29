'use client'

import { signOut } from "next-auth/react"
import { useEffect } from "react"

export function HeaderSignOut() {

    useEffect(() => {
        require('/node_modules/bootstrap/dist/js/bootstrap.js');
      }, []);
    
    return(
        <>
            <div>
                <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000/'})}>
                    SignOut
                </button>
            </div>

        </>
    )
}