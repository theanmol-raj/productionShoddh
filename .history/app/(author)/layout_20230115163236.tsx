import '../../styles/globals.css'
import { getUser } from "../../pages/api/auth/[...thirdweb]";
import axios from 'axios';

import {action} from '../../store/index'
import { Provider } from 'react-redux'
import store from '../../store/index'

export default async  function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html>
      <head />
      <Provider store={store}>
      <body>{children}</body>
      </Provider>
      
    </html>
  )
}
