import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'
import { v4 as uuidv4 } from 'uuid';

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    }, 
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            authorize(credentials, req){
                const {email, password} = credentials as {
                    email: string,
                    password: string
                }

                if(email !== 'test2@gmail.com' && password !== '12345678'){
                    return null
                }else return {
                    id: uuidv4(),
                    email: email
                }
            }
        })
    ],
    pages: {
        signIn: '/Entrar/'
    },
    callbacks: {
  async jwt({ token, account, profile }) {
    // Persist the OAuth access_token and or the user id to the token right after signin
    if (account) {
      token.accessToken = account.access_token
      token.id = uuidv4()
    }
    return token
  }
}

}
export default NextAuth(authOptions)
// export default NextAuth({
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: { label: "E-mail", type: "text", placeholder: "Digite seu Email" },
//                 password: { label: "Password", type: "password", placeholder: "Digite sua senha" }
//             },
//             async authorize(credentials: any) {
//                 const user = { id: uuidv4(), credentials:credentials }
//                  if (user) {
//                     return user
//                 } else {
//                     return null
//                 }
//             }
//         })
//     ],
//     callbacks: {
//         jwt: ({ token, user }) => {
//             if (user) { token.id = user.id }
//             return token;
//         },
//         session: ({ session, token }: any) => {
//             if (token)  {session.id = token.id};
//             return session;
//         },
//     },
//     secret: 'd5dccca540c42789ea914b2d41b6f08',
//     jwt: { },
//     pages: {
//         signIn: '/Entrar/',
//         newUser: '/Registrar/'
//     }
// })