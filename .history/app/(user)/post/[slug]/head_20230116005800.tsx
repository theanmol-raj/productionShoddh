type Props = {
    params : {
      slug : string
    }
  }

export default function Head({params : {slug}} :Props) {
    let st = slug.split("-");
    let u = ""
    st.map(c=> {
        u = u+c+" "
    })
    return (
      <>
        <title className=" capitalize">{u}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://cdn.sanity.io/images/ehiaaqe5/production/07e6e0d5ef3866cf31ee73b41492421fbcd717db-512x512.png"
        />
      </>
    )
  }
  