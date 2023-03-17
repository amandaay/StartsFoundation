import {RiHammerLine} from 'react-icons/ri'
import {format} from 'date-fns'

export default {
  title: 'Projects: Canvas',
  name: 'Canvas',
  type: 'document',
  icon: RiHammerLine,
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
      title: 'Cover Image',
      name: 'coverImage',
      type: 'customImage',
      validation: (Rule) => Rule.error('Image cannot be empty').required(),
    },
    {
      title: 'Project Content',
      name: 'body',
      type: 'bodyText',
      validation: (Rule) => Rule.error('Body cannot be empty').required(),
    },
  ],
  preview: {
    select: {
      image: 'coverImage',
      title: 'title',
      date: 'date',
    },
    prepare({image, title, date}) {
      return {
        title,
        media: image,
        subtitle: date ? format(new Date(date), 'p, MM/dd/yyyy') : '',
      }
    },
  },
}
