'client'
import '../../styles/globals.css'
import { getUser } from "../../pages/api/auth/[...thirdweb]";
import axios from 'axios';



export default async  function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html>
      <head />
      <body>{children}</body>

      
    </html>
  )
}
