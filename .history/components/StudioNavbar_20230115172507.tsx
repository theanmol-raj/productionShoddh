import Link from "next/link"


function StudioNavbar(props :any) {
  return (
    <div className="bg-[#1a1a1a]">
        <div
      className={` mediumnavigation  transform transition duration-200 ease-in-out  border-b right-0  left-0 z-50 '`}
    >
      <div className=" relative bg-gradient-to-r from-yellow-400 via-green-400 to-purple-500 text-white py-2 text-center">
        <p className=" max-w-7xl mx-auto">We are exited to announce that <span className=" font-bold capitalize">shoddh</span> has fully transitioned into a Dapp . Buy tokens @ <span className=" underline font-bold">Drut.ai/token</span></p>
      </div>
      <div className="  p-3  mx-auto max-w-7xl  ">
        <div>
          <div className={`" flex justify-between items-center  `}>
            <Link href="/">
            <p className={` text-2xl text-white cursor-pointer font-serif font-extrabold `}>
              Shoddh<span className=" text-4xl text-yellow-400">.</span>
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
        {props.renderDefault(props)}
    </div>
  )
}

export default StudioNavbar