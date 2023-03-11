// import object
import customImage from './objects/customImage'
import bodyText from './objects/bodyText'
import normalText from './objects/normalText'
import excerptText from './objects/excerptText'

// import document schemas
import blogs from './documents/blogs'
import gallery from './documents/gallery'
import news from './documents/news'
import projects from './documents/projects'
import teams from './documents/teams'
import testimonials from './documents/testimonials'

export const schemaTypes = [
  //document schemas
  blogs,
  gallery,
  news,
  projects,
  teams,
  testimonials,
  //object schemas
  customImage,
  bodyText,
  normalText,
  excerptText,
]
