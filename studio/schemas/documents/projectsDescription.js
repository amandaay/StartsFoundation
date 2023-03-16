import {RiHammerLine} from 'react-icons/ri'
import {format} from 'date-fns'

export default {
  title: 'All Projects Description',
  name: 'GenericDescription',
  type: 'document',
  icon: RiHammerLine,
  fields: [
    {
      title: 'Project Name',
      name: 'project',
      type: 'string',
      options: {
        list: [
            {title: 'Aid For Living Life', value: 'aid-for-living-life'},
            {title: 'Canvas', value: 'canvas'},
            {title: 'A Waiting Smile', value: 'smile'},
            {title: 'Others', value: 'others'},
        ]
      },
      validation: (Rule) => Rule.error('Project name cannot be empty').required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.error('Slug cannot be empty').required(),
      options: {source: 'project', maxLength: 96},
    },
    {
      title: 'Date',
      name: 'date',
      type: 'datetime',
      description: 'Only the latest project description will be displayed. It is recommeded to unpublish the old descriptions.',
      validation: (Rule) => Rule.error('Date cannot be empty').required(),
    },
    {
      title: 'Images gallery',
      name: 'imagesGallery',
      type: 'array',
      of: [{type: 'image'}],
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
      image: 'imagesGallery',
      title: 'project',
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
