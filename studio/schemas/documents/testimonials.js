import {SlBubbles} from 'react-icons/sl'

export default {
  title: 'Testimonials',
  name: 'testimonials',
  type: 'document',
  icon: SlBubbles,
  fields: [
    {title: 'Name', name: 'name', type: 'string'},
    {
      title: 'image',
      name: 'image',
      type: 'customImage',
    },
    {title: 'Testimonial', name: 'body', type: 'normalText'},
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
