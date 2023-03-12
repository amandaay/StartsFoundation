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
      validation: (Rule) => Rule.error('Title cannot be empty').required(),
    },
    {
      title: 'Author',
      name: 'author',
      type: 'string',
      validation: (Rule) => Rule.error('Author cannot be empty').required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.error('Slug cannot be empty').required(),
      options: {source: 'title', maxLength: 96},
    },
    {
      title: 'Publication Date',
      name: 'publicationDate',
      type: 'datetime',
      validation: (Rule) => Rule.error('Date cannot be empty').required(),
    },

    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'customImage',
      validation: (Rule) => Rule.error('Image cannot be empty').required(),
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'excerptText',
      validation: (Rule) => Rule.error('Excerpt cannot be empty').required(),
    },
    {
      title: 'Blog body',
      name: 'body',
      type: 'bodyText',
      validation: (Rule) => Rule.error('Body cannot be empty').required(),
    },
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
