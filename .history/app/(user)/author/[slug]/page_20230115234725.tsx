import React from 'react'

interface Author {
    author : {name : string,
     followers : {
       _key : string ,
       _type : string ,
       _ref : string ,
     }[] ,
     _id : string ,
     slug : {
       current : string
     } ,
     image : any ,
     banner: any ,
     bio : string ,
     posts : {
         _id : string,
 title : string,
 slug :{
   current : string
 },
 mainImage : string,
 publishedAt : string,
 description : string,
     }[]}  
 
 }

function page({}: Author) {
  return (
    <div>page</div>
  )
}

export default page