export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'wallet',
        title: 'Wallet Address',
        type: 'string',
      },
      {
        name:'balance',
        title: 'Balance',
        type: 'number', 
      },
      {
        name:'s_bonus',
        title: 'SignUp Bonus ?',
        type: 'boolean', 
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name:'savedpost',
        title: 'Saved Posts',
        type: 'array',
        of: [{type: 'reference', to: {type: 'post'}}],
      }
    ],
    preview: {
      select: {
        title: 'name',
        media: 'image',
      },
    },
  }