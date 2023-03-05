import {SlBubbles} from 'react-icons/sl'

export default {
  title: 'Testimonials',
  name: 'testimonials',
  type: 'document',
  icon: SlBubbles,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.error('Name cannot be empty').required(),
    },
    {
      title: 'image',
      name: 'image',
      type: 'customImage',
      validation: (Rule) => Rule.error('Image cannot be empty').required(),
    },
    {
      title: 'Testimonial',
      name: 'body',
      type: 'normalText',
      validation: (Rule) => Rule.error('Body cannot be empty').required(),
    },
  ],
  preview: {
    select: {
      image: 'image',
      title: 'name',
    },
    prepare({image, title}) {
      return {
        title,
        media: image,
      }
    },
  },
}
