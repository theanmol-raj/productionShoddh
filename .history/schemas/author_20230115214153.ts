import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  hidden: ({currentUser ,document}) => currentUser?.email !== document?.email ,

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly : true
    }),
    defineField({
      name: 'followers',
      title: 'Followers',
      hidden : true,
      type: 'array',
      of: [{type: 'reference', to: {type: 'user'}}],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      title: 'Verified Author',
      name: 'verified',
      type: 'boolean'
    }),
    defineField({
      name: 'wallet',
      title: 'Wallet',
      type: 'string',
      readOnly : true
    }),
    defineField({
      name: 'banner',
      title: 'Cover Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'string',
    }),
  ],
  initialValue :{
    verified : false,
    wallet : "",

  } ,
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
