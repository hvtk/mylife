'use client'

import { useRouter } from "next/navigation"

import { useState } from "react"

import { SaveOptionA } from "@/components/selections/buttons/SaveOptionA"
import { ConsumerEmailUpdate } from "@/components/selections/selectionOptions/selectionOptionA/create/input-fields/ConsumerEmailUpdate"

export function SelectionOptionA1aUpdate({children, value1, onChange1, value2, onChange2, value3, onChange3, value4, onChange4 }) {

    const router = useRouter();

    const [err, setErr] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [infix, setInfix] = useState('');
    const [lastName, setLastName] = useState('');

    const changeFirstName = (e) => {
        
        setFirstName(e.target.value);
    }

    value1=firstName;
    onChange1=changeFirstName;

    const changeSecondName = (e) => {
        
        setSecondName(e.target.value);       
    }

    value2=secondName;
    onChange2=changeSecondName;

    const changeInfix = (e) => {
        
        setInfix(e.target.value); 
    }

    value3=infix;
    onChange3=changeInfix;

    const changeLastName = (e) => {
        
        setLastName(e.target.value);
    }

    value4=lastName;
    onChange4=changeLastName;

    const SelectionOptionA1aUpdateData = async (e) => {
        e.preventDefault();

        const consumerEmail = e.target[0].value;
        const firstName = e.target[1].value;
        const secondName = e.target[2].value;
        const infix = e.target[3].value;
        const lastName = e.target[4].value;

        try {
        
            const res = await fetch("/api/selections/familyandfriends/selectionoptiona/infosection1a/update", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    consumerEmail,
                    firstName,
                    secondName,
                    infix,
                    lastName,
                }),
            });

            // res.status === 201 && router.push("/selectionFamilyAndFriends")
            res.status === 201 && router.refresh();
    
        } catch (err) {
            setErr(true);
        }
    }


    return (
        <>
            <form onSubmit={SelectionOptionA1aUpdateData}
                  className='row w-95'  
                > 
                <ConsumerEmail/> 
                {children}
                <div className='row'>
                    <SaveOptionA>
                        Update Name First Person
                    </SaveOptionA>
                </div>
            </form>
        </>
    )
}