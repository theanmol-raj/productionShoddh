import React from "react";
import getDate from "../../Helper/DateMaker";
import urlFor from "../../lib/urlFor";
import { Post } from "../../typings";

interface Props {
  shade : boolean | undefined ,
  data : Post
}

function SideCard({shade , data}:Props) {
  let date = new Date(data?.publishedAt)
    const truncate = (string :string , n : number) =>{
        return string?.length > n ? string.substr(0 , n-1) + " ..." : string
      }
  return (
    <div className={`flex justify-start cursor-pointer ${shade ? "bg-gray-100" : " border"}`}>
      <div className={` ${shade ? " w-40  " : "w-56  "}`}>
        <img
          className={` h-full max-h-56 w-full object-cover ${shade ? " " : " "}`}
          src={urlFor(data?.mainImage).url()} 
        />
      </div>

      <div className=" p-3 flex flex-col w-full space-y-3 ">
        <div>
          <p className="tracking-tight capitalize text-xl selection:text-white selection:bg-black">
            {data?.title}
          </p>
          
          {!shade && <p className=' text-sm py-2 text-gray-700'>{truncate(data.description , 250)}</p>}
        </div>
        <div className=" ">
          <div className=" text-sm flex space-x-3 font-light">
            <div className=" pb-4 text-xs">
              <p className=" font-medium  pb-2 text-black">
              {data?.author.name} <span className=" text-gray-500"> in </span>{" "}
                {data.categories[0]?.description}
              </p>
              <p>{getDate(date)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideCard;