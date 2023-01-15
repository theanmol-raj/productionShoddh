'use client'

import React from 'react'
import {NextStudio} from 'next-sanity/studio'

import config from '../../../../../sanity.config'

import { useDispatch ,useSelector } from 'react-redux';

export default function StudioPage() {
  


  return <div>
    <NextStudio config={config} />
  </div>
}
