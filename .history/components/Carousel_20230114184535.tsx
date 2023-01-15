import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Post } from "../typings";
// import { urlFor } from "../Sanity";

// interface Props {
//   post : Post[]
// }

export default function Carousel({data} :any) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper my-6"
      >        
        {data.map((item:Post ,index : number) => (<SwiperSlide key={index} >
        <div className=" max-h-[600px] flex ">
            <div className=" hidden md:block md:w-2/3">
                <img  className=" w-full object-center object-cover h-[600px]" alt="The 25 best European city breaks for 2022 and beyond"  />
            </div>
            <div className="md:w-1/3 flex flex-col  items-center bg-yellow-400/95">
                <div className=" py-12 px-8">
                <p className=" uppercase  text-yellow-800 tracking-widest">Featured Post</p>
                <p className=" text-3xl md:text-5xl capitalize pt-6 pb-2 font-black ">{item.title}</p>
                <hr className=" border-black border-2 mr-4 mt-4" />
                <p className=" py-6 text-yellow-900 leading-6 md:text-lg">{item.description}</p>
                <button className=" mb-8 text-white bg-black px-6 rounded-md py-3">
                    Read More
                </button>
                </div>                
            </div>
       
        </div>
        </SwiperSlide>))}

        
      </Swiper>
    </>
  );
}