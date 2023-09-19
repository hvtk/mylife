import NextAuth from "next-auth"
// import { authenticate } from "@/services/authService"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    providers: [
        CredentialsProvider({
            // the name to display on the sign in form (e.g.'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "full name"},
                password: { label: "Password", type: "password"}
            },

            async authorize (credentials, req) {
               // You need to provide your own logic here to look up the user from the credentials supplied
               const user = {id: "1", name: "J Smith", email: "jsmith@example.com"}

               if (user) {
                // Any object returned will be savedin 'user' property of the JWT
                return user
               } else {
                // If you return null then an error will be displayed advising the user to check their details
                return null
               }
            },



            // // To tell te application to use nextauth_secret, see the next.config.js file
            // secret: process.env.NEXTAUTH_SECRET,
        })
    ],
    // session: { strategy: "jwt"}
}

// Route handlers is the preferred way to handle REST-like requests in App Router
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
