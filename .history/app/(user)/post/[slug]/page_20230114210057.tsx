type Props = {
  params : {
    slug : string
  }
}

function Article({params : {slug}} :Props) {
  return (
    <div className="h-screen items-center pt-40">Article {slug}</div>
  )
}

export default Article