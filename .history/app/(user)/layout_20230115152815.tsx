import Footer from '../../components/Footer'
import HeaderCL from '../../components/HeaderCL'
import Subscribe from '../../components/Subscribe'
import '../../styles/globals.css'
import { ThirdwebProvider } from "@thirdweb-dev/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
      <ThirdwebProvider
      desiredChainId={}
      authConfig={{
        // Set this to your domain to prevent signature malleability attacks.
        domain: "example.com",
        authUrl: "/api/auth",
      }}
    >
        <HeaderCL />
        {children}
        <Subscribe />
        <Footer />
        </ThirdwebProvider>
      </body>
    </html>
  )
}
