'use client'

import { useRouter } from "next/navigation"

import { useState } from "react"

import { ConsumerEmail } from "@/components/selections/selectionOptions/selectionOptionA/create/input-fields/ConsumerEmail"
import { SaveOptionA } from "@/components/selections/buttons/SaveOptionA"

export function SelectionOptionA1bCreate({children}) {
        
        const router = useRouter();

        const [err, setErr] = useState(false);

        const SelectionOptionA1bCreation = async (e) => {
            e.preventDefault();
            const consumerEmail = e.target[0].value;
            const land = e.target[1].value;
            const county = e.target[2].value;
            const address = e.target[3].value;
            const postalCode = e.target[4].value;
            const city = e.target[5].value;

            try {
            
                const res = await fetch("/api/selections/familyandfriends/selectionoptiona/infosection1b/create", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        consumerEmail,
                        land,
                        county,
                        address,
                        postalCode,
                        city
                    }),
                });

                res.status === 201 && router.push("/selectionFamilyAndFriends")
        
            } catch (err) {
                setErr(true);
            }
        }

    return (
        <>
            <form onSubmit={SelectionOptionA1bCreation}
                  className='row w-95'  
                >
                <ConsumerEmail />
                {children}
                <div className='row'>
                    <SaveOptionA>
                        Save Address First Person
                    </SaveOptionA>
                </div>
            </form>
        </>
    )
}