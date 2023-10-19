// import NextAuth from "next-auth"
// import bcrypt from "bcrypt"
// import CredentialsProvider from "next-auth/providers/credentials"
// import { PrismaAdapter } from "@auth/prisma-adapter"
// import prisma from "@/app/lib/prisma"
// import { PrismaClient } from "@prisma/client"

// const prisma = new PrismaClient();

// export const authOptions = {

//     adapter: PrismaAdapter(prisma),
//     providers: [
//         CredentialsProvider({
//             // the name to display on the sign in form (e.g.'Sign in with...')
//             name: 'credentials',
//             // The credentials is used to generate a suitable form on the sign in page.
//             // You can specify whatever fields you are expecting to be submitted.
//             // e.g. domain, username, password, 2FA token, etc.
//             // You can pass any HTML attribute to the <input> tag through the object.
//             credentials: {
//                 username: { label: "Username", type: "text", placeholder: "full name test" },
//                 password: { label: "Password", type: "password"},
//                 email: { label: "Email", type: "email"}
//             },

//             async authorize (credentials) {
//                 console.log(credentials);

//                // You need to provide your own logic here to look up the user from the credentials supplied
//                // Check to see if email and password is valid
//                if(!credentials.email || !credentials.password) {
//                     return null;
//                }

//                // Check to see if user exists
//                const user = await prisma.user.findUnique({
//                   where: {
//                       email: credentials.email
//                   }
//                });

//                if(!user) {
//                     return null;
//                }

//                // Check to see if password match
//                const passwordsMatch = await bcrypt.compare(credentials.password, user.hashedPassword);

//                if(!passwordsMatch) {
//                     return null;
//                }

//                // Return user opject if everything is valid
//                return user;

//             }

//         })
//     ],

//     session: {
//         strategy: "jwt",
//     },

//     callbacks: {
//         async jwt({ token, account }) {
//             // Persist the OAuth access_token to the token right after signin
//             if (account) {
//                 token.accessToken = account.access_token
//             }
//             return token
//         },

//         async session({ session, token, user }) {
//             // Send properties to the client, like an access_token from a provider
//             session.accessToken = token.accessToken
//             return session
//         }
//     },

//     secret: process.env.NEXTAUTH_SECRET,
//     debug: process.env.NODE_ENV === "development",

// };

// // Route handlers is the preferred way to handle REST-like requests in App Router
// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST }

import NextAuth from "next-auth/next"
import { authOptions } from "./options"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}
