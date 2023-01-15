export {NextStudioHead } from 'next-sanity/studio/head'

// To customize it, use it as a children component:
import {NextStudioHead} from 'next-sanity/studio/head'

export default function CustomStudioHead() {
  return (
    <>
      <NextStudioHead title="Shoddh Content Lake" favicons={false} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://cdn.sanity.io/images/ehiaaqe5/production/07e6e0d5ef3866cf31ee73b41492421fbcd717db-512x512.png"
      />
    </>
  )
}