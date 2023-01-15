'use client'

import React from 'react'
import {NextStudio} from 'next-sanity/studio'

import config from '../../../../../sanity.config'

export default function StudioPage() {

// console.log(user)
  return <div>
      
    <NextStudio config={config} />
  </div>
}
