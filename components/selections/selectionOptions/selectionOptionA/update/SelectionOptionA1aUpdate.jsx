'use client'

import { useRouter } from "next/navigation"

import { useState } from "react"

import { ConsumerEmail } from "@/components/selections/selectionOptions/selectionOptionA/create/input-fields/ConsumerEmail"
import { SaveOptionA } from "@/components/selections/buttons/SaveOptionA"
import { InfoSectionAName } from "./input-fields/infoSectionA/InfoSectionAName"

export function SelectionOptionA1aUpdate() {
        
        const router = useRouter();

        const [err, setErr] = useState(false);

        const SelectionOptionA1aCreation = async (e) => {
            e.preventDefault();
            const consumerEmail = e.target[0].value;
            const firstName = e.target[1].value;
            const secondName = e.target[2].value;
            const infix = e.target[3].value;
            const lastName = e.target[4].value;

            try {
            
                const res = await fetch("/api/selections/familyandfriends/selectionoptiona/infosection1a/create", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        consumerEmail,
                        firstName,
                        secondName,
                        infix,
                        lastName
                    }),
                });

                res.status === 201 && router.push("/selectionFamilyAndFriends")
        
            } catch (err) {
                setErr(true);
            }
        }

    return (
        <>
            <form onSubmit={SelectionOptionA1aCreation}
                  className='row w-95'  
                >
                <ConsumerEmail />
                <InfoSectionAName />
                <div className='row'>
                    <SaveOptionA>
                        Save Name First Person
                    </SaveOptionA>
                </div>
            </form>
        </>
    )
}