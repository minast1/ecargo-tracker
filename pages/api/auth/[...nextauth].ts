import NextAuth from 'next-auth'
import prisma from  '../../../src/Prisma'
import bcrypt from 'bcrypt'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import CredentialsProvider from 'next-auth/providers/credentials'
//import Credentials from '../../auth/credentials-signin';
let userAccount:User | null  = null;

 type User ={
        id: string
      email: string | null
      password : string
}


   
 const getUserByEmail  =  async (email: string | undefined) => {
     const user: User | null  =  await prisma.user.findUnique({
        where : {
              email:  email
       },
        select : {
              id : true ,
              email: true,
              password : true
            }
      })
     return user 
}
 


export default NextAuth ({
  // @link https://next-auth.js.org/configuration/providers
  //site : process.env.NEXTAUTH_URL ,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [

    CredentialsProvider({
        name: 'Credentials',
       
      credentials: {
        email: { type: 'text'},
        password: {  type: 'password'} 
     },
        async authorize(credentials, req) {
            //console.log(credentials)
            // const {id ,  password} = credentials
            //const userEmail =  credentials.userId ??  userId;
            // Add logic here to look up the user from the credentials supplied
        
            const user = await getUserByEmail(credentials?.email)
           
  
          if (user) {

               if(typeof credentials != "undefined"){
            const crosscheckPassword = bcrypt.compareSync(credentials.password, user.password);
            if (crosscheckPassword) {
              userAccount = user;

              return user
            } else {
              throw new Error("Invalid Password");
              return;
           
            }
          }
            
            } else {
                throw new Error("Invalid Credentials!");
                return;

            }
         
            // return Promise.resolve(null)
            // You can also Reject this callback with an Error or with a URL:
            // return Promise.reject(new Error('error message')) // Redirect to error page
      
        } })
  ],
  adapter: PrismaAdapter(prisma),
  // @link https://next-auth.js.org/configuration/databases
  //database: process.env.NEXTAUTH_DATABASE_URL,

  // @link https://next-auth.js.org/configuration/options#session
  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    strategy: 'jwt',
    // Seconds - How long until an idle session expires and is no longer valid.
   // maxAge: 1 * 3 * 60 * 60, // 3 hrs
    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
     //updateAge: 24 * 60 * 60, // 24 hours
  },
  debug: true,
 
  // @link https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation - you should set this explicitly
    // Defaults to NextAuth.js secret if not explicitly specified.
     secret: process.env.NEXTAUTH_SECRET,
    
  },

  // @link https://next-auth.js.org/configuration/callbacks
  callbacks: {
    
    session: async ({ session, token }) => {
        
      if(userAccount !== null ) {
        session.user = userAccount;
      }
      //session = user ;
      //session.customSessionProperty = 'bar'
      return  session ///Promise.resolve(session)
    },

   
    jwt: async ({ token, user }) => {
      if (user) {
        token.email = user.email
      }
      //const isSignIn = (user) ? true : false
      // Add auth_time to token on signin in
      //if (isSignIn) { token.auth_time = Math.floor(Date.now() / 1000) }
      return  token //Promise.resolve(token)
    },
  },

  // You can define custom pages to override the built-in pages
  // The routes shown here are the default URLs that will be used.
  // @link https://next-auth.js.org/configuration/pages
  pages: {
    signIn: '/auth/credentials-signin',
    //signOut: '/api/auth/signout',
    error: '/admin-area', // Error code passed in query string as ?error=
    //verifyRequest: '/api/auth/verify-request', // (used for check email message)
    //newUser: null // If set, new users will be directed here on first sign in
  },

  // Additional options
  // secret: 'abcdef123456789' // Recommended (but auto-generated if not specified)
  // debug: true, // Use this option to enable debug messages in the console
})

//const Auth = (req, res) => NextAuth(req, res, options)

//export default Auth
