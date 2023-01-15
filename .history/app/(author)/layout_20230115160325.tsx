import '../../styles/globals.css'
import { getUser } from "../../pages/api/auth/[...thirdweb]";
import axios from 'axios';



export default async  function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const user = await axios.get('http://localhost:3000/api/auth/user');

  console.log(user);



  return (
    <html>
      <head />
      
      <body>{children}</body>
    </html>
  )
}
