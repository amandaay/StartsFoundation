import {RiHammerLine} from 'react-icons/ri'
// import {format} from 'date-fns'

export default {
  title: 'Projects: Aid For Living Life',
  name: 'AidForLivingLife',
  type: 'document',
  icon: RiHammerLine,
  fields: [
    {
      title: 'Activity',
      name: 'activity',
      type: 'string',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
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
    },
    {title: 'Project Content', name: 'body', type: 'bodyText'},
  ],
}
