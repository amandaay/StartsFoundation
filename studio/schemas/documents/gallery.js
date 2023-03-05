import {BiPhotoAlbum} from 'react-icons/bi'
export default {
  title: 'Gallery',
  name: 'gallery',
  type: 'document',
  icon: BiPhotoAlbum,
  fields: [
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
      validation: (Rule) => Rule.error('Caption cannot be empty').required(),
      options: {
        isHighlighted: true,
      },
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: (Rule) => Rule.error('Image cannot be empty').required(),
    },
  ],
  preview: {
    select: {
      image: 'image',
      title: 'caption',
    },
    prepare({image, title}) {
      return {
        media: image,
        title,
      }
    },
  },
}
