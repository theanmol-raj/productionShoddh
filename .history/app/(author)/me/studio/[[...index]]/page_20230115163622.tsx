'use client'

import React from 'react'
import {NextStudio} from 'next-sanity/studio'

import config from '../../../../../sanity.config'

import { useDispatch ,useSelector } from 'react-redux';

export default function StudioPage() {
  const user = useSelector((state :any) => state.user)

// console.log(user)
  return <div>
      
    <NextStudio config={config} />
  </div>
}
