import {GiNotebook} from 'react-icons/gi'
import {format} from 'date-fns'

export default {
  title: 'Blog Post',
  name: 'blog',
  type: 'document',
  icon: GiNotebook,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {title: 'Author', name: 'author', type: 'string'},
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    },
    {
      title: 'Publication Date',
      name: 'publicationDate',
      type: 'datetime',
    },

    {
      title: 'Cover Image',
      name: 'coverImage', 
      type: 'customImage',
    },
    {title: 'Excerpt', name: 'excerpt', type: 'excerptText'},
    {title: 'Blog body', name: 'body', type: 'bodyText'},
  ],
  preview: {
    select: {
      image: 'coverImage',
      title: 'title',
      publicationDate: 'publicationDate',
    },
    prepare({image, title, publicationDate}) {
      return {
        title,
        media: image,
        subtitle: publicationDate ? format(new Date(publicationDate), 'p, MM/dd/yyyy') : '',
      }
    },
  },
}
