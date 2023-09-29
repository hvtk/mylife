'use client'

import { useEffect } from "react"

export default function ImportBsJS() {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);
    return null
}