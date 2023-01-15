import Link from 'next/link';
import React from 'react'
import urlFor from '../../lib/urlFor';

function EditorPick({data} :any) {
    let description = data.description;
    const truncate = (string :string , n : number) =>{
        return string?.length > n ? string.substr(0 , n-1) + " ..." : string
      }

  console.log(data)

  return (
    <div className=" grid grid-cols-1  md:grid-cols-2">
          <div>
            <img src={urlFor(data.mainImage).url()}/>

          </div>
          <div className=" bg-gray-100 p-8">
          <p className=" uppercase  text-yellow-800 tracking-widest">{`Editor's pick`}</p>
                <p className=" text-4xl capitalize pt-6 pb-2 font-bold ">{data.title}</p>
                <p className=' text-sm py-2 text-gray-700'>{truncate(description , 250)}</p>
                <div className=' text-sm flex pt-8 space-x-3'>
            {/* <img className=' rounded-full h-10 w-10 object-cover' src={author.image} /> */}
            <div className=' pb-4 text-xs'>
              <p className=" font-medium  pb-2 text-black">{data.author.name} <span className=' text-gray-700'>in</span> {data.categories[0].description}</p>
              <p>Oct 7 2020 ,   3 min read</p>
            </div>
          </div>
          <div><Link href={`/post/${data.slug.current}`}>Read More</Link></div>
          </div>
        </div>
  )
}

export default EditorPick