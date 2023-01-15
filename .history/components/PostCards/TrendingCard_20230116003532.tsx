import React from 'react'

interface Props {
    index : number ,
}

function TrendingCard({index} : Props) {
  return (
    <div className="flex  cursor-pointer w-full ">
    <div className="  flex justify-center">
      <p className=' px-4 pt-4 font-black text-gray-300 text-4xl'>
        0{index + 1}
      </p>
    </div>

    <div className=" p-3 flex flex-col w-full justify-between ">
      <div>
        <p className="tracking-tight text-xl leading-6 selection:text-white selection:bg-black">
          No Trending Post Found
        </p>
        
      </div>
      <div className=" flex pt-2 items-center justify-between">
        <div className=" text-sm flex space-x-3 font-light">
          {/* <img className=' rounded-full h-10 w-10 object-cover' src={author.image} /> */}

          <div className=" pb-4 text-xs">
            <p className=" font-medium  pb-2 text-black">
              Anmol raj <span className=" text-gray-500"> in </span>{" "}
              Data Science
            </p>
            <p>Oct 7 2020 , 3 min read</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TrendingCard