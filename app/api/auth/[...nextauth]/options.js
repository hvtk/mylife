import bcrypt from 'bcryptjs'
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/app/lib/prisma"

export const authOptions = {

    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            
            id:"credentials",
            name: "credentials",
            
            async authorize(credentials) {

                try {
                    const user = await prisma.user.findUnique({
                        where : {
                            email: credentials.email
                        },
                    });

                    if(user) {
                        //check password
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        if ( isPasswordCorrect ) {
                            return user;
                        } else {
                            throw new Error("Wrong Credentials!");
                        }

                    } else {
                        throw new Error("User not found!");
                    }
                }
                catch (err) {
                    throw new Error(err);
                }
            }
        })
    ],

    session: {
         strategy: "jwt",
    },

    // When using custom signIn page (not the generic signin page from auth) 
    pages: {
        signIn: "/auth/signIn",
    },

    // callbacks: {
    //     async jwt({ token, account }) {
    //         // Persist the OAuth access_token to the token right after signin
    //         if (account) {
    //             token.accessToken = account.access_token
    //         }
    //         return token
    //     },

    //     async session({ session, token, user }) {
    //         // Send properties to the client, like an access_token from a provider
    //         session.accessToken = token.accessToken
    //         return session
    //     },
    // },

    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",

}