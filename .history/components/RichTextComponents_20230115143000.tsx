import React from 'react'
import urlFor from '../lib/urlFor'
import Image from 'next/image'
import Link from 'next/link'



export const RichTextComponents = {
    types : {
        {
            h1: (props: any) => (
              <h1 className="text-3xl my-3 font-bold" {...props} />
            ),
            h2: (props: any) => (
              <h2 className="text-2xl my-5 font-semibold" {...props} />
            ),
            h3: (props: any) => (
              <h3 className="text-xl my-5 font-medium" {...props} />
            ),
            h4: (props: any) => (
              <h4 className="text-lg my-5 font-normal" {...props} />
            ),
            normal: (props: any) => <p className="  my-5 " {...props} />,
            Image: ({ srce }: any) => (
              <img
                src={urlFor(srce).url()}
                className="w-full my-4 h-40"
              />
            ),
            li: ({ children }: any) => (
              <li className="ml list-disc-">{children}</li>
            ),

            link: ({ href, children }: any) => (
              <a className=" text-lime-400 hover:underline" href={href}>
                {children}
              </a>
            ),
          }
    }
}