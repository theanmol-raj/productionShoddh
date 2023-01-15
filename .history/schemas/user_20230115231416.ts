export default {
    name: 'user',
    title: 'User',
    type: 'document',
    // hidden : true,
    readonly : true ,
    fields: [
      {
        name: 'wallet',
        title: 'Wallet Address',
        type: 'string',
      },
      {
        name:'balance',
        title: 'Balance',
        type: 'number', 
        readOnly: true
      },
      {
        name:'s_bonus',
        title: 'SignUp Bonus ?',
        type: 'boolean', 
      },
      {
        name:'savedpost',
        title: 'Saved Posts',
        type: 'array',
        of: [{type: 'reference', to: {type: 'post'}}],
      }
    ],
    initialValue : {
      s_bonus : false ,

    } ,
    preview: {
      select: {
        title: 'wallet',
        media: 'image',
      },
      prepare(selection :any){
        return {title : selection.title.substr(0,4)+"..."+selection.title.substr(-4,) }
      }
    },
  }