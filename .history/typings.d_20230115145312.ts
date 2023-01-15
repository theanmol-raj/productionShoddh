export interface Post {
    _id: string,
    applause : {
        _key :string,
        _ref :string ,
        _type:string
    }[],
    _createdAt:string,
    title:string,
    slug:{
        current :string
    },
    mainImage : {
        asset : {
            url :string
        }
    },
    categories : Category[],
    publishedAt:string,
    description:string,
    body : any[],
    author : {
        wallet : string
        name:string,
        image:any,
        bio: string,
        slug:{
            current:string
        }
    }
}

export interface Category{
    description:string , title:string
}