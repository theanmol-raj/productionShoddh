import '../../styles/globals.css'
import { getUser } from "../../pages/api/auth/[...thirdweb]";



export default async  function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const user = await getUser(req);



  return (
    <html>
      <head />
      
      <body>{children}</body>
    </html>
  )
}
