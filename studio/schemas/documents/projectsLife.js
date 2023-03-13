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
      // validation: (Rule) => Rule.error('Activity cannot be empty').required(),
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
    // {
    //   title: 'Cover Image',
    //   name: 'coverImage',
    //   type: 'customImage',
    // },
    {title: 'Project Content', name: 'body', type: 'bodyText'},
  ],
  // preview: {
  //   select: {
  //     image: 'coverImage',
  //     title: 'title',
  //     date: 'date',
  //   },
  //   prepare({image, title, date}) {
  //     return {
  //       title,
  //       media: image,
  //       subtitle: date ? format(new Date(date), 'p, MM/dd/yyyy') : '',
  //     }
  //   },
  // },
}
