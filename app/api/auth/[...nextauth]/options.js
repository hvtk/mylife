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

                try {

                    const user = await prisma.user.findUnique({
                        where : {
                            email: credentials.email
                        },
                    });

                    if(user) {

                        const passwordCorrect = await bcrypt.compare(
                            credentials?.password || '',
                            user.password
                        );

                        if (passwordCorrect) {
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
        }),
    ],

    session: {
         strategy: "jwt",
    },

    // When using custom signIn page (not the generic signin page from auth) 
    pages: {
        signIn: "/auth/signIn",
    },

    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",

}