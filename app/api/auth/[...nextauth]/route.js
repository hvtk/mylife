import NextAuth from "next-auth/next"
import { EmailProvider } from "next-auth/providers/email"

const handler = NextAuth({
    providers: [
        EmailProvider({
            clientId: '',
            clientSecret: '',
        })
    ],
    async session({ session }) {

    },
    async signIn({ signIn }) {

    }
})

export { handler as GET, handler as POST }
