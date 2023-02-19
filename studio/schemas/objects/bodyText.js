export default {
  title: 'Post Body',
  name: 'bodyText',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      lists: [
        {title: 'Bullet List', value: 'bullet'},
        {title: 'Numbered List', value: 'number'},
      ],
    },
    {
      type: 'customImage',
    },
  ],
}
