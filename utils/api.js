import { handler } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"


export const isAuthenticated = async () => {
    const session = await getServerSession(handler)
    return session?.user ?? false
}