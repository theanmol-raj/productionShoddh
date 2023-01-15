

function StudioNavbar(props :any) {
  return (
    <div className="bg-black">
        <h1 className=" text-white">hello</h1>
        {props.renderDefault(props)}
    </div>
  )
}

export default StudioNavbar