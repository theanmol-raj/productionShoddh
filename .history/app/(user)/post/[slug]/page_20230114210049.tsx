type Props = {
  params : {
    slug : string
  }
}

function Article({params : {slug}} :Props) {
  return (
    <div className="h-screen items-center">Article {slug}</div>
  )
}

export default Article