import { getEntries } from './contentful'

const fetchPosts = async (slug, tags) => {
  const posts = await getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    'fields.tags': tags,
    order: '-fields.publishDate'
  }).then((items) => {
    return items
  })

  return posts
}

export { fetchPosts }
