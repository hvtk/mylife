import bcrypt from 'bcryptjs'
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/app/lib/prisma"

export const authOptions = {

    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            // the name to display on the sign in form (e.g.'Sign in with...')
            // name: 'credentials',
            id:"credentials",
            name: "credentials",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            // credentials: {
            //     username: { label: "Username", type: "text", placeholder: "full name test" },
            //     password: { label: "Password", type: "password"},
            //     email: { label: "Email", type: "email"}
            // },

            async authorize(credentials) {

                // if (credentials?.email === user.email && credentials?.password === user.hashedPassword) {
                //     return user;
                // } 

                // if (!credentials?.email || !credentials?.password) {
                //     return null;
                // } 

                // // Check to see if user exists
                // const user = await prisma.user.findUnique({
                //  where: {
                //     email: credentials.email
                //     }
                // });
             
                // if(!user) {
                //     return null;
                // }

                // // Check to see if password match
                // const passwordsMatch = await bcrypt.compare(
                //     credentials.password,
                //      user.hashedPassword
                // );

                // if(!passwordsMatch) {
                //     return null;
                // }

                // // Return user object if everything is valid
                // return {
                //     id: user.id + '',
                //     email: user.email,
                //     name: user.name
                // }

                try {
                    const user = user.findOne({ email: credentials.email });

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

    // database: {
    //     type: "mysql",
    //     database: ":memory:",
    //     synchronize: true,
    // },

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