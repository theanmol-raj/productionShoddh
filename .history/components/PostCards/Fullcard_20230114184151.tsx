import React from 'react'


function Fullcard({data}:any) {
  let date = new Date(data?.publishedAt)
  const Month = ["January" ,"Febuary" ,"March","April","May","June","July","August" ,"September",
"October","November" ,"December"]
    const truncate = (string :string , n : number) =>{
        return string?.length > n ? string.substr(0 , n-1) + " ..." : string
      }
  return (
    <div className={`flex border relative h-full cursor-pointer flex-col`}>
      <img className=' h-60 object-cover '  />
      <div className='p-6  flex flex-col justify-between w-full '>
        <p className=' font-semibold tracking-tight text-xl leading-6 selection:text-white selection:bg-black'>{data?.title}</p>
        <p className=' text-sm py-2 text-gray-700'>{truncate(data?.description , 250)}</p>
        <div className=' flex pt-2 items-center justify-between'>
          <div className=' text-sm flex space-x-3'>
            {/* <img className=' rounded-full h-10 w-10 object-cover' src={author.image} /> */}
            <div className=' pb-4 text-xs'>
              <p className=" font-medium  pb-2 text-black">{data?.author.name} <span className=' text-gray-700'>in</span>{data.categories[0]?.description}</p>
              <p>{`${date.getDate()} ${Month[date.getMonth()]} ${date.getFullYear()}`} ,   3 min read</p>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Fullcard