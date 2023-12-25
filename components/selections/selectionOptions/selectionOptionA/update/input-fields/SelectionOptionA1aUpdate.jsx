'use client'

import { useRouter } from "next/navigation"

import { useState } from "react"

import { SaveOptionA } from "@/components/selections/buttons/SaveOptionA"
import { InfoSectionANameUpdateChange } from "@/components/selections/selectionOptions/selectionOptionA/update/change-input-fields/InfoSectionANameUpdateChange"
import { InfoSectionANameUpdate } from "@/components/selections/selectionOptions/selectionOptionA/update/input-fields/infoSectionA/InfoSectionANameUpdate"



export function SelectionOptionA1aUpdate() {

        const router = useRouter();

        const [err, setErr] = useState(false);

        const SelectionOptionA1aUpdateData = async (e) => {
            e.preventDefault();

            const firstName = e.target[0].value;
            const secondName = e.target[1].value;
            const infix = e.target[2].value;
            const lastName = e.target[3].value;

            try {
            
                const res = await fetch("/api/selections/familyandfriends/selectionoptiona/infosection1a/update", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
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
            <form onSubmit={SelectionOptionA1aUpdateData}
                  className='row w-95'  
                >
                <InfoSectionANameUpdateChange>
                    <InfoSectionANameUpdate />
                </InfoSectionANameUpdateChange>
                <div className='row'>
                    <SaveOptionA>
                        Update Name First Person
                    </SaveOptionA>
                </div>
            </form>
        </>
    )
}