import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username:", type: "text", placeholder: "User" },
        password: { label: "Password:", type: "password", placeholder: "Password" }
      },
      async authorize(credentials) {
        const user = { id: "711", name: "Admin", password: "admin"  };
        if (credentials?.username === user.name && credentials?.password === user.password) {
          return user;
        } else {
          return null;
        }
      }
    }),
  ],
}