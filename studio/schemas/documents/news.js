import {ImNewspaper} from 'react-icons/im'
import {format} from 'date-fns'

export default {
  title: 'Recent News',
  name: 'news',
  type: 'document',
  icon: ImNewspaper,
  fields: [
    {title: 'Title', name: 'title', type: 'string'},
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
    },
    {title: 'News Content', name: 'body', type: 'bodyText'},
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
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
