import React from 'react'
import urlFor from '../../lib/urlFor'


interface Props {
    data : {
    wallet : string ,
    bio:string ,
    image : any ,
    name : string ,
    slug : {
        current : string
    }
    }
}
function AuthorCard({data}:Props) {
  return (
    <div className='rounded-lg border '>
        <div className=' bg-gradient-to-br rounded-t-lg from-purple-500 to-yellow-400 h-40' />
        <div className='relative flex justify-center'>
        <img src={urlFor(data.image)?.url()} className=' rounded-full absolute -top-20 p-2 bg-white h-40 w-40 object-cover' />
        </div>
        <div className='pt-20 px-6 pb-8'>
          <h1 className=' text-center text-xl font-serif font-bold'>{data?.name}</h1>
            <p className=' text-center font-semibold text-black/50'>{data?.wallet}</p>
            <p className=' text-center text-sm font-light py-4'>{data?.bio}</p>
            <div className=''>
            <Link href={`/author/${data.slug.current}`} className=' text-lg border-black border font-bold w-full py-2 my-2 mt-8'>Visit Profile</Link> 
            <button className=' text-lg bg-black text-white w-full py-2 '>DonateLink</button>              
            </div>

          </div>
        
    </div>
  )
}

export default AuthorCard