type Props = {
  params : {
    slug : string
  }
}

function Article({params : {slug}} :Props) {
  return (
    <div>Article {slug}</div>
  )
}

export default Article