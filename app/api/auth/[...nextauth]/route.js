import NextAuth from "next-auth"
import bcrypt from "bcryptjs"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/app/lib/prisma"

export const authOptions = {

    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            
            credentials: {
                email: {},
                password: {},
            },
            
            async authorize(credentials) {
                
                if (!credentials?.email || !credentials.password) {
                    return null
                }

                const user = await prisma.user.findUnique({
                    where : {
                        email: credentials.email
                    }
                })

                if (!user) {
                    return null
                }

                const passwordCorrect = await bcrypt.compare(
                    credentials?.password || '',
                    user.password
                )

                if (!passwordCorrect) {
                    return null
                }

                return {
                    id: user.id + '',
                    email: user.email,
                    name: user.name,
                    randomKey: 'Hey cool'
                }

            }
        }),
    ],

    callbacks: {
        session: ({session, token}) => {
           return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    randomKey: token.randomKey
                }
            }
        },

        jwt: ({ token, user }) => {
            if (user) {
                const u = user
                return {
                    ...token,
                    id: u.id,
                    randomKey: u.randomKey
                } 
            }

            return token
        }

    },

    session: {
         strategy: "jwt",
    },

    // When using custom signIn page (not the generic signin page from auth) 
    pages: {
        signIn: "/auth/signIn",
    },

    // secret: process.env.NEXTAUTH_SECRET,
    // debug: process.env.NODE_ENV === "development",

}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}
