import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'
export default NextAuth({
    providers: [
        CredentialsProvider({

            name: "Credentials",

            credentials: {
                username: { label: "E-mail", type: "text", placeholder: "Digite seu Email" },
                password: { label: "Password", type: "password", placeholder: "Digite sua senha" }
            },
            async authorize(credentials: any, req: any) {
           
                const user = { id: "1", password: "12345678", email: "gabrielwaltmann030@gmail.com" }

                if (user.email === credentials.username && user.password === credentials.password) {
                    console.log(user)
                    return user
                } else {
                    console.log('dont find')
                    return null
                }
            }
        })
    ],
    callbacks:{
       jwt: ({ token, user }) => {
    
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;

      }

      return session;
    },
    },
    secret: 'd85dccca540c42789ea914b2d41b6f08',
    jwt: {
        secret: "d85dccca540c42789ea914b2d41b6f08",
    }


})