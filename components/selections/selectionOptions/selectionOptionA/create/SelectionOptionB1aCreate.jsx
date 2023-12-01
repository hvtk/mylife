'use client'

import { useRouter } from "next/navigation"

import { useState } from "react"

import { ConsumerEmail } from "@/components/selections/selectionOptions/selectionOptionA/create/input-fields/ConsumerEmail"
import { SaveOptionB } from "@/components/selections/buttons/SaveOptionB"
import { InfoSectionBName } from "@/components/selections/selectionOptions/selectionOptionA/create/input-fields/infoSectionB/InfoSectionBName"

export function SelectionOptionB1aCreate() {
        
        const router = useRouter();

        const [err, setErr] = useState(false);

        const SelectionOptionB1aCreation = async (e) => {
            e.preventDefault();
            const consumerEmail = e.target[0].value;
            const firstName = e.target[1].value;
            const secondName = e.target[2].value;
            const infix = e.target[3].value;
            const lastName = e.target[4].value;

            try {
            
                const res = await fetch("/api/selections/familyandfriends/selectionoptionb/infosection1a/create", {
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
            <form onSubmit={SelectionOptionB1aCreation}
                  className='row w-95'  
                >
                <ConsumerEmail />
                <InfoSectionBName />
                <div className='row'>
                    <SaveOptionB>
                        Save Name First Brother
                    </SaveOptionB>
                </div>
            </form>
        </>
    )
}