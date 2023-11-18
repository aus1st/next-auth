import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'



export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                userName: { label: 'Username', type: 'text', placeholder: 'username' },
                password: { label: 'Password', type: 'password', placeholder: 'password' }

            },

            async authorize(credentials) {

                ///this is where you can make a call to your database
                const user = { id: '1', name: 'Ahmed', password: '123' }

                if (credentials?.userName === user?.name && credentials?.password === user?.password) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
}