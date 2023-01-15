import React from 'react'

function RecentBlogs() {
    let description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam";
    const truncate = (string :string , n : number) =>{
        return string?.length > n ? string.substr(0 , n-1) + " ..." : string
      }
  return (
    <div className={`flex justify-start space-x-4 bg-gray-100 cursor-pointer `}>
      <div >
        <img
          className="h-24"
          src="https://cdn.sanity.io/images/o5jpsuct/production/ee90923b28df548c832c37193e01abcd960c35d4-4000x3000.jpg"
        />
      </div>

      <div className=" p-2 pt-4 flex flex-col w-full space-y-3 ">
        <div>
          <p className="tracking-tight capitalize text-lg selection:text-white selection:bg-black">
            it is all folks
          </p>
        </div>
        <div className=" ">
          <div className=" text-sm flex space-x-3 font-light">
            {/* <img className=' rounded-full h-10 w-10 object-cover' src={author.image} /> */}

            <div className=" pb-4 text-xs">
              <p>Oct 7 2020 , 3 min read</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentBlogs