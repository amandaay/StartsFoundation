// import object
import customImage from './objects/customImage'
import bodyText from './objects/bodyText'
import normalText from './objects/normalText'
import excerptText from './objects/excerptText'

// import document schemas
import blogs from './documents/blogs'
import gallery from './documents/gallery'
import news from './documents/news'
import projectsLife from './documents/projectsLife'
import projectsCanvas from './documents/projectsCanvas'
import projectsSmile from './documents/projectsSmile'
import teams from './documents/teams'
import testimonials from './documents/testimonials'
import projectsDescription from './documents/projectsDescription'

export const schemaTypes = [
  //document schemas
  blogs,
  gallery,
  news,
  projectsDescription,
  projectsLife,
  projectsCanvas,
  projectsSmile,
  teams,
  testimonials,
  //object schemas
  customImage,
  bodyText,
  normalText,
  excerptText,
]
