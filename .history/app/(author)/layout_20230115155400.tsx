import '../../styles/globals.css'
import { getUser } from "../../pages/api/auth/[...thirdweb]";



export default function RootLayout({
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
