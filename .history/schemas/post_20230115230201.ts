import {defineField, defineType} from 'sanity'


let u : any = null ;

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  hidden :({currentUser ,parent ,document}) => {
    u = currentUser?.email
    return currentUser?.email !== document?.email
  } ,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly : true
    }),
    defineField({
      title: 'Passed all checks ?',
      name: 'nlpCheck',
      type: 'boolean',
      readOnly : true
    }),
    defineField({
      title: 'Exclusive Content ?',
      name: 'premium',
      type: 'boolean',
      readOnly : true
    }),
    defineField({
      title: 'Editor Pick',
      name: 'EP',
      type: 'boolean',
      readOnly : true
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'wallet',
      title: 'Wallet',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
      validation :Rule => Rule.required()
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      validation: Rule => Rule.required().min(1).max(1)
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ] ,
  initialValue : () => ({
    email : u ,
    EP : false ,
    premium : false ,
    nlpCheck :false
    
  })
,
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
