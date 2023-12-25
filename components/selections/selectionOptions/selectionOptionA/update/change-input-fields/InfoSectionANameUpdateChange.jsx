'use Client'

import { useState } from "react"

export function InfoSectionANameUpdateChange({children}) {

    const [firstName, setFirstname] = useState("");

    const handleChange = (e) => {
        setFirstname(e.target[0].value);
    };

    const nameUpdateChange = document.getElementById("#FirstName");
    const newAttrA = document.createAttribute("value");
    const newAttrB = document.createAttribute("onChange");
    
    nameUpdateChange.addEventListener("click", () => {
        newAttrA.value = {firstName};
        newAttrB.value = {handleChange};
        value.setAttributeNode(newAttrA);
        onChange.setAttributeNode(newAttrB);
    });

    return (
        <>
            {children}
        </>
    )
}