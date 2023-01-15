import Footer from '../../components/Footer'
import HeaderCL from '../../components/HeaderCL'
import '../../styles/globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <HeaderCL />
        {children}
        <Footer />
      </body>
    </html>
  )
}
