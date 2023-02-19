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
  ],
  preview: {
    select: {
      image: 'image',
      title: 'name',
    },
    prepare({image, name}) {
      return {
        title: name,
        media: image,
      }
    },
  },
}
