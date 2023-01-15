"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
    useAddress,
    useUser,
    useLogin,
    useLogout,
    useMetamask,
    useDisconnect,
  } from "@thirdweb-dev/react";
  import axios from "axios";
import Dropdown from './User/Dropdown';

function HeaderCL() {
    const [show, SetShow] = useState<boolean>(false);
    const [announcement ,SetAnnouncement] = useState<boolean>(true);
    const transitionNavbar = () => {
      window.scrollY > 60 ? SetShow(true) : SetShow(false);
    };
    useEffect(() => {
      window.addEventListener("scroll", transitionNavbar);
      return () => window.removeEventListener("scroll", transitionNavbar);
    }, []);

    const address = useAddress();
//   const connect = useMetamask();
  // const disconnect = useDisconnect();

  // const login = useLogin();
  // const logout = useLogout();
  // const { user } = useUser();

  const [secret, setSecret] = useState();

  // const getSecret = async () => {
  //   const res = await fetch("/api/secret");
  //   const data = await res.json();
  //   setSecret(data);
  // }
  
  
  const createUser = async (address : string) => axios.post('/api/checks/checkuser',{address})
    


  useEffect(()=>{
    if(address){
      createUser(address)
    }
  },[address])


  return (
    <div
      className={` mediumnavigation ${
        !show ? "top-0 fixed" : announcement ? " -top-16 fixed" : " -top-5 fixed"
      } transform transition duration-200 ease-in-out  border-b right-0 bg-white left-0 z-50 '`}
    >
      {announcement && <div className=" relative bg-gradient-to-r from-yellow-400 via-green-400 to-purple-500 text-white py-2 text-center">
        {/* <button className=" absolute right-5 top-2" onClick={()=>SetAnnouncement(false)}><CloseIcon /></button> */}
        <p className=" max-w-7xl mx-auto">We are exited to announce that <span className=" font-bold capitalize">shoddh</span> has fully transitioned into a Dapp . Buy tokens @ <span className=" underline font-bold">Drut.ai/token</span></p>
      </div>}
      <div className="  p-3  mx-auto max-w-7xl  ">
        <div>
          <div className={`" flex justify-between items-center pb-6 `}>
            <Link href="/">
            <p className={` ${show ? "hidden" :""} text-2xl cursor-pointer font-serif font-extrabold `}>
              Shoddh<span className=" text-4xl text-yellow-400">.</span>
            </p>
            </Link>
            <div className={`" flex space-x-4 text-sm ${show ? "hidden" :""}`}>
            <a className="">About</a>
            <a className="">Contact</a>
              <a></a>
              <a></a>
              <a></a>
            </div>
          </div>
        </div>
        <div className=" flex justify-between items-center">
        <div className=" flex items-center space-x-4">
          <Link href={`/`}>
            <p className=" text-sm hover:text-yellow-500 text-black cursor-pointer">
              Home
            </p>
          </Link>
          <Link href={`/category/nlp`}>
            <p className=" text-sm hover:text-yellow-500 text-black cursor-pointer">
              Natural Language
            </p>
          </Link>
          <Link href={`/category/ml`}>
            <p className=" text-sm hover:text-yellow-500 text-black cursor-pointer">
              Machine Learning
            </p>
          </Link>
          <Link href={`/category/cv`}>
            <p className=" text-sm hover:text-yellow-500 text-black cursor-pointer">
              Computer Vision
            </p>
          </Link>
          <Link href={`/category/ds`}>
            <p className=" text-sm hover:text-yellow-500 text-black cursor-pointer">
              Data Science
            </p>
          </Link>
          <Link href={`/category/authors`}>
            <p className=" text-sm hover:text-yellow-500 text-black cursor-pointer">
              Authors
            </p>
          </Link>
        </div>
          <div className=" space-x-4 text-sm">
            {/* logins */}
            {address ? <Dropdown user={address} /> : <button onClick={()=>connect()} className="  px-4 text-white bg-gradient-to-l from-blue-400 font-medium rounded-full text-sm hover:to-yellow-400 hover:from-yellow-400 hover:text-black to-purple-500 py-1">Connect Wallet</button>
            }
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default HeaderCL