"use client"

import { groq } from 'next-sanity'
import React ,{useState ,useEffect} from 'react'
import Carousel from '../../components/Carousel'
import AltPostCard from '../../components/PostCards/AltPostCard'
import EditorPick from '../../components/PostCards/EditorPick'
import Fullcard from '../../components/PostCards/Fullcard'
import SideCard from '../../components/PostCards/SideCard'
import TrendingCard from '../../components/PostCards/TrendingCard'
import { client } from '../../lib/sanity.client'


const query = groq`
  {
    'ds' : *[_type=="post" && "ds" in categories[]->title][0..4]{
      _id,
  title,
  slug,
  mainImage,
  categories[]->{
  title,description
  },
  publishedAt,
  description,
  body,
  author->{
  followers,name,slug,image,bio,address
  } 
  } ,
  'ml': *[_type=="post" && "ml" in categories[]->title][0...3]{
    _id,
title,
slug,
mainImage,
categories[]->{
title,description
},
publishedAt,
description,
body,
author->{
followers,name,slug,image,bio,address
} 
} ,
'nlp' : *[_type=="post" && "nlp" in categories[]->title][0...3]{
  _id,
title,
slug,
mainImage,
categories[]->{
title,description
},
publishedAt,
description,
body,
author->{
followers,name,slug,image,bio,address
} 
} ,
'cv' : *[_type=="post" && "cv" in categories[]->title][0..3]{
  _id,
title,
slug,
mainImage,
categories[]->{
title,description
},
publishedAt,
description,
body,
author->{
followers,name,slug,image,bio,address
} 
}
,
}
`
async function getData(){
  await client.fetch(query).then(data=>data)
}



function Page() {
  const [parentQ ,setParentQ] = useState<any>() ;
  useEffect(() => {
    async function getData(){
      await client.fetch(query).then(data=>setParentQ(data))
    }

    getData();
    
    
  }, [])
  







  
  return (
    <div className=" pt-40">
      {/* <Navbar /> */}
      <div className=" max-w-7xl mx-auto px-4 md:px-0">
        <Carousel data={[parentQ['cv'][0] , parentQ['cv'][1]]} />
        <div className=" flex flex-col my-20 space-x-4 lg:flex-row">
          <div className=" lg:w-2/3">
            <p className=" text-xl font-medium border-b-2 max-w-max pb-2 border-black">
              Data Science
            </p>
            <div className=" grid gap-4 my-2 grid-cols-1 md:grid-cols-2 pt-8 md:pt-12">
              <div className="">
                <Fullcard data={parentQ['ds'][0]} />
              </div>
              <div className=" space-y-4">
                {parentQ['ds'].filter((x:any ,y:number)=> y > 0).map((item:Post ,index:number)=><SideCard key={index} data={item} shade={true} /> )}
                
              </div>
            </div>
          </div>
          <div className=" md:w-1/3">
            <p className=" text-xl font-medium border-b-2 max-w-max pb-2 border-black">
              Trending
            </p>
            <div className="my-2  pt-8 md:pt-12">
              <TrendingCard index={0} />
              <TrendingCard index={1} />
              <TrendingCard index={2} />
              <TrendingCard index={3} />
              <TrendingCard index={4} />
            </div>
            <p className=" px-4 cursor-pointer hover:text-yellow-400">
              See All trends
            </p>
          </div>
        </div>
        <EditorPick />
        <div className=" grid mt-24 gap-8 md:grid-cols-2">
          <div>
            <p className=" text-xl font-medium border-b-2 max-w-max pb-2 border-black">
              Machine Learning
            </p>
            <div className="my-2 space-y-4  pt-8 md:pt-12">
              {parentQ['ml'].map((it :Post , ind : number) => <SideCard key={ind} data={it} shade={false} />)}
            </div>
          </div>
          <div>
            <p className=" text-xl font-medium border-b-2 max-w-max pb-2 border-black">
              Natural Language Processing
            </p>
            <div className="my-2 space-y-4  pt-8 md:pt-12">
            {parentQ['nlp'].map((it :Post , ind : number) => <SideCard key={ind} data={it} shade={false} />)}
            </div>
          </div>
        </div>

        <div className=" my-20">
          <p className=" text-xl font-medium border-b-2 max-w-max pb-2 border-black">
            Computer Vision
          </p>
          <div className=" grid mt-8 gap-6 md:grid-cols-2">
          {parentQ['cv'].map((it :Post , ind : number) => <AltPostCard key={ind} data={it} shade={false} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page