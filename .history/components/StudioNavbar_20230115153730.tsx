import { useAddress } from "@thirdweb-dev/react";


function StudioNavbar(props :any) {
  const address = useAddress();
  return (
    <div className="bg-black">
        <h1 className=" text-white">hello {address}</h1>
        {props.renderDefault(props)}
    </div>
  )
}

export default StudioNavbar