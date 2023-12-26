'use Client'

import { useState } from "react"

export function InfoSectionANameUpdateChange() {

    const [firstName, setFirstname] = useState("");

    const handleChange = (e) => {
        setFirstname(e.target[0].value);
    };

    document.getElementById("FirstName").addEventListener("click", () => {
        const newAttrA = document.createAttribute("value");
        const newAttrB = document.createAttribute("onChange");
        newAttrA.value = {firstName};
        newAttrB.value = {handleChange};
        value.setAttributeNode(newAttrA);
        onChange.setAttributeNode(newAttrB);
    });
    
}