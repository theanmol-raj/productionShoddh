import '../../styles/globals.css'
import { getUser } from "../../pages/api/auth/[...thirdweb]";
import axios from 'axios';

import {action} from '../../store/index'

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
