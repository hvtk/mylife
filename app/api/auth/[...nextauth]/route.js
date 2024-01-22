import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { verify } from "@/utils/password"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from '@/prisma/prisma-client/prisma'

export const handler = NextAuth({

    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            
            name: 'Credentials',
             
            async authorize(credentials, req) {
                
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if (!user) {
                    throw new Error("User account does not exists.")
                }

                // Validation logic for login
                if(!verify(credentials.password, user.password)) {
                    throw new Error("Invalid email or password.")
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name
                }

            }
        }),
    ],

    session: {
        strategy: "jwt",
    },

    secret: process.env.NEXTAUTH_SECRET,

    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
        encryption: true,
    },

    callbacks: {
        async signIn({ user, account}) {
          if(account?.provider === 'credentials') {
            return true;
          }

          if(user) {
            const dbUser = await prisma.user.findUnique({
              where: {
                email: user.email
              }
            })
            if(dbUser) {
              const dbAccount = await prisma.account.findUnique({
                where: {
                  provider_providerAccountId: {
                    provider: account.provider,
                    providerAccountId:account.providerAccountId 
                  }
                }
              })
              if(!dbAccount) {
                await prisma.account.create({
                  data: {
                    userId: dbUser.id,
                    provider: account.provider,
                    providerAccountId: account.providerAccountId,
                    type: account.type,
                    token_type: account.token_type,
                    scope: account.scope,
                    access_token: account.access_token,
                    refresh_token: account.refresh_token,
                    expires_at: account.expires_at
                  }
                })
              }
            }
          }
          return true;
        },
        async session({ session, user, token }) {
          return session
        },
        async jwt({ token, user}) {
            if(user) {
                token.user = user
            }
          return token
        }
    },

    // When using custom signIn page (not the generic signin page from auth) 
    pages: {
        signIn: "/auth/signIn",
    },

    
    // debug: process.env.NODE_ENV === "development",

})

export { handler as GET, handler as POST}

// export const authOptions = {

//     adapter: PrismaAdapter(prisma),
//     providers: [
//         CredentialsProvider({
            
//             credentials: {
//                 email: {},
//                 password: {},
//             },
            
//             async authorize(credentials) {
                
//                 if (!credentials?.email || !credentials.password) {
//                     return null
//                 }

//                 const user = await prisma.user.findUnique({
//                     where: {
//                         email: credentials.email
//                     }
//                 })

//                 if (!user) {
//                     return null
//                 }

//                 const isPasswordValid = await bcrypt.compare(
//                     credentials?.password || '',
//                     user.password
//                 )

//                 if (!isPasswordValid) {
//                     return null
//                 }

//                 return {
//                     id: user.id + '',
//                     email: user.email,
//                     name: user.name,
//                     randomKey: 'Hey cool'
//                 }

//             }
//         }),
//     ],

//     callbacks: {
//         session: ({session, token}) => {
//            return {
//                 ...session,
//                 user: {
//                     ...session.user,
//                     id: token.id,
//                     randomKey: token.randomKey
//                 }
//             }
//         },

//         jwt: ({ token, user }) => {
//             if (user) {
//                 const u = user
//                 return {
//                     ...token,
//                     id: u.id,
//                     randomKey: u.randomKey
//                 } 
//             }

//             return token
//         }

//     },

//     session: {
//          strategy: "jwt",
//     },

//     secret: process.env.NEXTAUTH_SECRET,

//     // When using custom signIn page (not the generic signin page from auth) 
//     pages: {
//         signIn: "/auth/signIn",
//     },

    
//     // debug: process.env.NODE_ENV === "development",

// }

// const handler = NextAuth(authOptions)
// export { handler as GET, handler as POST}
