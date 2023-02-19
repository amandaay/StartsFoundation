import {RiHammerLine} from 'react-icons/ri'
import {format} from 'date-fns'
//import custom object
import customImage from '../objects/customImage'


export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  icon: RiHammerLine,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {title: 'Slug', name: 'slug', type: 'slug', options: {source: 'title', maxLength: 96}},
    {
      title: 'Date',
      name: 'date',
      type: 'datetime',
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'customImage',
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
