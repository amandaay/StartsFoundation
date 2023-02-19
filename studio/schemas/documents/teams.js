import {BsPeople} from 'react-icons/bs'

export default {
  title: 'Starts Foundation Team',
  name: 'team',
  type: 'document',
  icon: BsPeople,
  fields: [
    {title: 'Member Name', name: 'name', type: 'string'},
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    },
    {title: 'Member Portrait', name: 'memberPortrait', type: 'customImage'},
  ],
  preview: {
    select: {
      image: 'memberPortrait',
      title: 'name',
    },
    prepare({memberPortrait, name}) {
      return {
        title: name,
        media: memberPortrait,
      }
    },
  },
}
