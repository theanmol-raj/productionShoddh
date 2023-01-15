import { groq } from 'next-sanity';
import React from 'react'
import Fullcard from '../../../../components/PostCards/Fullcard';
import SideCard from '../../../../components/PostCards/SideCard';
import TrendingCard from '../../../../components/PostCards/TrendingCard'
import { client } from '../../../../lib/sanity.client';
import { Post } from '../../../../typings';


export const revalidate = 60 ;

export async function generateStaticParams(){
  const query = groq `*[_type=="post" ]{slug}`
  const slugs : Post[] =await client.fetch(query) ;
  const slugRoutes = slugs.map((slug) => slug.slug.current)
  return slugRoutes.map(slug => ({slug}))
 
 
 }

 type Props = {
  params : {
    slug : string
  }
}



async function page({params : {slug}} :Props) {

  const query = groq`
    *[_type=="post" && $slug in categories[]->title]{
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
  `
  const post  : any = await client.fetch(query , {slug}) ;

  return (
    <div className={``}>
      {/* <Navbar /> */}
      <div className=" max-w-7xl pt-40 mx-auto">
        <section className=" max-w-7xl mx-auto pb-20">
          <div className=" flex items-center mt-2 mx-4 md:mx-0 ">
            <p className=" whitespace-nowrap tracking-tighter border-b border-black text-2xl py-4 font-medium capitalize">
              {post[0].categories.description}
            </p>
            <div className=" w-full border-b py-8" />
          </div>
          <div className="  ">       
          <div className=" flex flex-col my-20 space-x-4 lg:flex-row">
          <div className="">
            <p className=" text-xl font-medium border-b-2 max-w-max pb-2 border-black">
              Recomended for you
            </p>
            <div className=" grid gap-4 my-2 grid-cols-1 md:grid-cols-2 pt-8 md:pt-12">
              <div className="">
                <Fullcard data={post[0]} />

              </div>
              <div className=" space-y-4">
                {post.filter((x:Post,y:number) => y&1).map((x:Post,y:number) => <SideCard key={y} data={x} shade />) }
                
              </div>
            </div>
          </div>
          <div className=" md:w-1/3">
            <p className=" text-xl font-medium border-b-2 max-w-max pb-2 border-black">
              Recently Uploaded
            </p>
            <div className="my-2  pt-8 md:pt-12">
              <TrendingCard index={0} />
              <TrendingCard index={1} />
              <TrendingCard index={2} />
              <TrendingCard index={3} />
              <TrendingCard index={4} />
            </div>
            <p className=" px-4 cursor-pointer hover:text-yellow-400">
              See All 
            </p>
          </div>
        </div>
        <p className=" text-xl font-medium border-b-2 max-w-max pb-2 border-black">
              More on {post[0]?.categories.description}
            </p>
        <div className=" grid my-8 gap-8 md:grid-cols-2">
        {post.filter((x:Post,y:number) => !(y&1)).map((x:Post,y:number) => <SideCard key={y} data={x} shade />) }
           
          
        </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default page