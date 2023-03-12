import {ImNewspaper} from 'react-icons/im'
import {format} from 'date-fns'

export default {
  title: 'Recent News',
  name: 'news',
  type: 'document',
  icon: ImNewspaper,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.error('Title cannot be empty').required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.error('Slug cannot be empty').required(),
      options: {source: 'title', maxLength: 96},
    },
    {
      title: 'Date',
      name: 'date',
      type: 'datetime',
      validation: (Rule) => Rule.error('Date cannot be empty').required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: (Rule) => Rule.error('Image cannot be empty').required(),
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
      validation: (Rule) => Rule.error('Caption cannot be empty').required(),
      options: {
        isHighlighted: true,
      },
    },
    {title: 'News Content', name: 'body', type: 'bodyText'},
  ],
  preview: {
    select: {
      image: 'image',
      title: 'title',
      date: 'date',
    },
    prepare({image, title, date}) {
      return {
        title,
        media: image,
        subtitle: date ? format(new Date(date), 'MM/dd/yyyy') : '',
      }
    },
  },
}
