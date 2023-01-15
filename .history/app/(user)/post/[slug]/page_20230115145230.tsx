import { groq } from "next-sanity"
import { client } from "../../../../lib/sanity.client"
import urlFor from "../../../../lib/urlFor"
import { Post } from "../../../../typings"
import StarIcon from '@mui/icons-material/Star';
import RecentBlogs from "../../../../components/PostCards/RecentBlogs";
import AuthorCard from "../../../../components/Author/Authorcard";
import { PortableText } from "@portabletext/react";
import RichTextComponents from "../../../../components/RichTextComponents";



type Props = {
  params : {
    slug : string
  }
}
const Month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
]
async function Article({params : {slug}} :Props) {
  const query = groq`
    *[_type=="post" && slug.current == $slug][0]{
          _id,
      title,
      slug,
      applause,
      mainImage,
      categories[]->{
      title,description
      },
      publishedAt,
      description,
      body,
      author->{
      name,slug,image,wallet,bio
      } 
      }
  `
  const post  : Post = await client.fetch(query , {slug}) ;


console.log(post)
  if (!post) return <h1>Loading</h1>

  return (
    <article className=" bg-[#fffdfd]">
      <div className=" grid lg:grid-cols-3 pt-40 max-w-7xl mx-auto gap-8">
        <div className=" row-start-2 lg:row-start-1 mx-8 lg:mx-0 lg:col-start-1">
          <div className=" flex border w-full justify-between border-black  my-8 ">
            <input  placeholder="Type a keyword " className="w-full px-4 py-2" />
            <button className=" bg-black text-white px-4">Search</button>
          </div>
          <div>
            <p className=" text-xl lg:text-2xl font-serif font-semibold pb-8">Categories</p>
            <button className=" border-b w-full flex justify-between py-2 text-lg font-black hover:bg-gray-200 px-4 font-serif text-black/50 "><span>Data Science</span><span></span>{`(20)`}</button>
            <button className=" border-b w-full flex justify-between py-2 text-lg font-black hover:bg-gray-200 px-4 font-serif text-black/50 "><span>Artificial Intelligence</span><span></span>{`(10)`}</button>
            {/* <Link href="/category/ml" className=" border-b w-full flex justify-between py-2 text-lg font-black hover:bg-gray-200 px-4 font-serif text-black/50 "><span>Machine Learning</span><span></span>{`(28)`}</Link> */}
            <button className=" border-b w-full flex justify-between py-2 text-lg font-black hover:bg-gray-200 px-4 font-serif text-black/50 "><span>Natural Language Processing</span><span></span>{`(14)`}</button>
            <button className=" border-b w-full flex justify-between py-2 text-lg font-black hover:bg-gray-200 px-4 font-serif text-black/50 "><span>Computer Vision</span><span></span>{`(5)`}</button>
          </div>
          <div className=" my-8">
            <p className=" text-xl lg:text-2xl font-serif font-semibold pb-8">Recent Blogs</p>
            <div className=" space-y-4">
            <RecentBlogs />
            <RecentBlogs />
            <RecentBlogs />
            </div>
          </div>

          <div>
            <AuthorCard data={post.author} />
          </div>
        </div>
        <div className=" lg:col-span-2 lg:row-start-1 lg:col-start-2 mx-4 md:mx-8 lg:mx-0 ">
          <div className=" pt-8">
            <h1 className=" text-4xl font-serif font-semibold">
              {post.title}
            </h1>
            <h2 className=" md:text-lg pt-4 text-gray-500">
              {post.description}
            </h2>
            <div className=" flex space-x-2">
              <p className=" text-gray-500 pt-2 flex items-center space-x-4 font-light  text-base">
                {Month[0]}{" "}
                {new Date(post.publishedAt).getDate()}
              </p>
              <p className=" text-gray-500 pt-2 flex items-center space-x-4 font-light  text-base">
                {/* <StarIcon fontSize="inherit" /> */}
              </p>
              <p className=" text-gray-500 pt-2 flex items-center space-x-4 font-light  text-base">
                4 min read
              </p>
            </div>
            <img src={urlFor(post.mainImage).url()} className="py-4" alt="" />
            <div>
              <PortableText value={post.body} components={RichTextComponents} />
              {/* <PortableText
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                value={post.body}
                className=" pb-8"
                serializers={{
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
                }}
              /> */}
              <hr className=" mt-4 mb-2" />
              <div className=" flex space-x-2 pt-4">
                {post?.categories.map((x,y) => (<a key={y}className=" bg-yellow-200 p-1 cursor-pointer px-3 tracking-tighter">{x.description}</a>) )}
              </div>

              <div className=" py-4 my-8 bg-gray-200">
                <div className=" flex mx-12 space-x-4  items-center border-b pb-8 ">
           
            
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Article