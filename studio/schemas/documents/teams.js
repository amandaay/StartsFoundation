import {BsPeople} from 'react-icons/bs'

export default {
  title: 'Starts Foundation Team',
  name: 'team',
  type: 'document',
  icon: BsPeople,
  fields: [
    {
      title: 'Member Name',
      name: 'memberName',
      type: 'string',
      validation: (Rule) => Rule.error('Name cannot be empty').required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.error('Title cannot be empty').required(),
      options: {source: 'memberName', maxLength: 96},
    },
    {
      title: 'Member Portrait',
      name: 'memberPortrait',
      type: 'customImage',
      validation: (Rule) => Rule.error('Picture cannot be empty').required(),
    },
    {
      title: 'About Member',
      name: 'body',
      type: 'normalText',
      validation: (Rule) => Rule.error('Bio cannot be empty').required(),
    },
  ],
  preview: {
    select: {
      image: 'memberPortrait',
      title: 'memberName',
    },
    prepare({image, title}) {
      return {
        title,
        media: image,
      }
    },
  },
}
