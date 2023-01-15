"use client "
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <ThirdwebProvider
      desiredChainId={ChainId.BinanceSmartChainMainnet}
      authConfig={{
        // Set this to your domain to prevent signature malleability attacks.
        domain: "example.com",
        authUrl: "/api/auth",
      }}
    >
      <body>{children}</body>
    </ThirdwebProvider>
      
    </html>
  )
}
