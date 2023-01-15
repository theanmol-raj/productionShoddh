import React from 'react'
import urlFor from '../lib/urlFor'
import Image from 'next/image'
import Link from 'next/link'



export const RichTextComponents = {
    types : {
        image : ({value} : any) => <img src={urlFor(value).url()} className="w-full my-4 h-40" />
    } ,
    list : {
        bullet : ({children} :any) => <li className="ml-10 py-4 space-y-5 list-disc ">{children}</li>,
        number : ({children} :any) => <ol className="mt-lg list-decimal ">{children}</ol>,
    } ,
    block : {
        h1: ({children}: any) =><h1 className="text-3xl my-3 font-bold">{children}</h1>,
        h2: ({children}: any) =><h2 className="text-2xl my-5 font-semibold">{children} </h2>,
        h3: ({children}: any) =><h3 className="text-xl my-5 font-medium">{children} </h3>,
        h4: ({children}: any) =><h4 className="text-lg my-5 font-normal">{children} </h4>,
    normal: ({children}: any) =><p className="my-5">{children} </p>,
    blockquote : ({children} :any) => <blockquote className='pl-5 py-5 my-5 border-l-4 '>{children}</blockquote>
    }
}

// {
        
//     h1: ({children}: any) => (
//       <h1 className="text-3xl my-3 font-bold">{children}</h1>
//     ),
//     h2: (props: any) => (
//       <h2 className="text-2xl my-5 font-semibold" {...props} />
//     ),
//     h3: (props: any) => (
//       <h3 className="text-xl my-5 font-medium" {...props} />
//     ),
//     h4: (props: any) => (
//       <h4 className="text-lg my-5 font-normal" {...props} />
//     ),
//     normal: (props: any) => <p className="  my-5 " {...props} />,
//     image: ({ srce }: any) => (
//       <img
//         src={urlFor(srce).url()}
//         className="w-full my-4 h-40"
//       />
//     ),
//     li: ({ children }: any) => (
//       <li className="ml list-disc-">{children}</li>
//     ),

//     link: ({ href, children }: any) => (
//       <a className=" text-lime-400 hover:underline" href={href}>
//         {children}
//       </a>
//     ),
  
// }