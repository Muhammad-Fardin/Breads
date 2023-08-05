import {ClerkProvider} from "@clerk/nextjs"
import { Inter } from "next/font/google"

export const metadata = {
     title: 'Breads - Auth/Onboarding',
     description: "Onboarding or Login/Signup to Breads a Threads Clone"
}

const inter = Inter({subsets: ['latin']})

export default function RootLayout({
     children
}: {children: React.ReactNode}) {
     return (
          <ClerkProvider>
               <html lang="en">
                    <body className={`${inter.className} bg-dark-1`}>
                         {children}
                    </body>
               </html>
          </ClerkProvider>
     )
}