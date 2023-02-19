import {ImNewspaper} from 'react-icons/im'

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
      options: {source: 'title', maxLength: 96},
    },
    {
      title: 'Date',
      name: 'date',
      type: 'datetime',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
    },
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
