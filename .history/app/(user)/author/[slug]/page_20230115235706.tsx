import { groq } from "next-sanity";
import Link from "next/link";
import React from "react";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";

interface Author {
  author: {
    name: string;
    followers: {
      _key: string;
      _type: string;
      _ref: string;
    }[];
    _id: string;
    slug: {
      current: string;
    };
    image: any;
    banner: any;
    bio: string;
    posts: {
      _id: string;
      title: string;
      slug: {
        current: string;
      };
      mainImage: string;
      publishedAt: string;
      description: string;
    }[];
  };
}


export const revalidate = 60 ;

export async function generateStaticParams(){
    const query = groq `*[_type=="post" ]{slug}`
    const slugs : Author[] =await client.fetch(query) ;
    const slugRoutes = slugs.map((slug) => slug.slug.current)
    return slugRoutes.map(slug => ({slug}))
 
 
 }



function page({ author }: Author) {

  return (
    <div className=" bg-[#f2f1ef]/40">
      {/* <Navbar/> */}
      <div className=" ">
        <img
          className=" h-[28rem] w-full object-cover object-top "
          src={urlFor(author.banner).url()}
        />
        <div className=" mx-auto max-w-7xl ">
          <div className=" relative flex lg:h-20 h-16 justify-center w-full">
            <img
              src={urlFor(author.image).url()}
              className="rounded-full mx-auto absolute -top-20 h-32 w-32 lg:h-40 lg:w-40 p-2 bg-[#ffffff] object-cover"
            />
          </div>
          <div className=" relative border-b justify-center text-center py-4 max-w-sm mx-auto flex flex-col">
            <p className=" text-4xl font-serif font-bold">{author.name}</p>
            <p className=" font-light text-lg">{author.bio}</p>
            <div className=" flex justify-between items-center pt-4 space-x-7 font-light text-lg">
              {/* <p> <span className=' font-bold'>200k </span> followers</p> */}
              <p>
                {" "}
                <span className=" font-bold">{author.posts.length} </span>Posts
              </p>
              <p>
                {" "}
                <span className=" font-bold">{author.posts.length + 600} </span>
                Popularity
              </p>
              <button className=" text-sm border border-black text-white bg-black rounded-3xl py-2 px-6 font-bold flex items-center">
                Send Popularity
              </button>
            </div>
          </div>

          <div className=" flex flex-col space-y-4">
            {author.posts.map((item, y) => (
              <Link key={y} href={`/post/${item.slug.current}`}>
                <div
                  className={`flex cursor-pointer max-w-4xl w-full mx-auto flex-col my-2 border-2 rounded-sm  bg-white `}
                >
                  <img
                    className="h-44 object-cover rounded-t-sm "
                    src={urlFor(item.mainImage).url()}
                  />
                  <div className=" px-6 py-4 pb-6 rounded-b-3xl flex justify-between flex-col  h-full border-gray-300 ">
                    <p className=" font-bold text-xl ">{item.title}</p>
                    <p className="  text-sm pt-2 ">{item.description}</p>

                    <div className=" flex pt-2 items-center justify-between">
                      <div className="  flex space-x-3">
                        <div className="text-sm ">
                          <p>Oct 7, 2020 1 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
