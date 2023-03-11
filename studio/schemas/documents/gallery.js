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
      options: {
        isHighlighted: true,
      },
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
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
