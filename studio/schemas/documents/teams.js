import {BsPeople} from 'react-icons/bs'

export default {
  title: 'Starts Foundation Team',
  name: 'team',
  type: 'document',
  icon: BsPeople,
  fields: [
    {title: 'Member Name', name: 'memberName', type: 'string'},
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {source: 'memberName', maxLength: 96},
    },
    {title: 'Member Portrait', name: 'memberPortrait', type: 'customImage'},
    {title: 'About Member', name: 'body', type: 'normalText'},
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
