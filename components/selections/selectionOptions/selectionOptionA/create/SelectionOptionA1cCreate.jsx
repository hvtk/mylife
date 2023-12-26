'use client'

import { useRouter } from "next/navigation"

import { useState } from "react"

import { ConsumerEmail } from "@/components/selections/selectionOptions/selectionOptionA/create/input-fields/ConsumerEmail"
import { SaveOptionA } from "@/components/selections/buttons/SaveOptionA"

export function SelectionOptionA1cCreate({children}) {
        
        const router = useRouter();

        const [err, setErr] = useState(false);

        const SelectionOptionA1cCreation = async (e) => {
            e.preventDefault();
            const consumerEmail = e.target[0].value;
            const birthday = e.target[1].value;
            const email = e.target[2].value;
            const phone = e.target[3].value;
            const phoneMobile = e.target[4].value;
            const instagram = e.target[5].value;

            try {
            
                const res = await fetch("/api/selections/familyandfriends/selectionoptiona/infosection1c/create", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        consumerEmail,
                        birthday,
                        email,
                        phone,
                        phoneMobile,
                        instagram
                    }),
                });

                res.status === 201 && router.push("/selectionFamilyAndFriends")
        
            } catch (err) {
                setErr(true);
            }
        }

    return (
        <>
            <form onSubmit={SelectionOptionA1cCreation}
                  className='row w-95'  
                >
                <ConsumerEmail />
                    {children}
                <div className='row'>
                    <SaveOptionA>
                        Save Other Info First Person
                    </SaveOptionA>
                </div>
            </form>
        </>
    )
}