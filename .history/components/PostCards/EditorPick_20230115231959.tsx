import React from 'react'

function EditorPick({data} :any) {
    let description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam";
    const truncate = (string :string , n : number) =>{
        return string?.length > n ? string.substr(0 , n-1) + " ..." : string
      }
  return (
    <div className=" grid grid-cols-1  md:grid-cols-2">
          <div>
            <img src="https://images.wallpaperscraft.com/image/single/deer_grass_leaves_autumn_trees_59721_1280x720.jpg" className=" w-full object-center h-full"/>

          </div>
          <div className=" bg-gray-100 p-8">
          <p className=" uppercase  text-yellow-800 tracking-widest">{`Editor's pick`}</p>
                <p className=" text-4xl capitalize pt-6 pb-2 font-bold "> hello i am a title & anmol made me</p>
                <p className=' text-sm py-2 text-gray-700'>{truncate(description , 250)}</p>
                <div className=' text-sm flex pt-8 space-x-3'>
            {/* <img className=' rounded-full h-10 w-10 object-cover' src={author.image} /> */}
            <div className=' pb-4 text-xs'>
              <p className=" font-medium  pb-2 text-black">Anmol raj <span className=' text-gray-700'>in</span> Data Science</p>
              <p>Oct 7 2020 ,   3 min read</p>
            </div>
          </div>
          </div>
        </div>
  )
}

export default EditorPick