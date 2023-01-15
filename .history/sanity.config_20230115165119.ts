import {createAuthStore, defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { theme } from './theme';
import StudioNavbar from './components/StudioNavbar';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! ;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!


export default defineConfig({
  name: 'Shoddh_Client_Backend',
  title: 'Shoddh-Client Studio',
  basePath:'/me/studio' ,
  projectId,
  dataset,
  studio : {
    components :  {
      // logo 
      navbar : StudioNavbar,
    }
  } ,
  plugins: [deskTool()],
  theme,
  schema: {
    types: schemaTypes,
  },
  auth : createAuthStore({
    projectId ,
    dataset ,
    mode : "replace",
    redirectOnSingle : false ,
    providers : [{
      name: 'metamask',
      title: 'MetaMask',
      url: '/',
    }]

  })
})
