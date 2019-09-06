import { createClient } from 'contentful'

const initClient = (spaceId, accessToken) => {
  return createClient({
    space: spaceId,
    accessToken
  })
}

const client = initClient(process.env.REACT_APP_SPACE_ID, process.env.REACT_APP_ACCESS_TOKEN)

const getContentTypes = async () => {
  try {
    const response = await client.getContentTypes()
    return response
  } catch (error) {
    return console.error(error)
  }
}

const getPerson = async () => {
  try {
    const response = await client.getEntry('15jwOBqpxqSAOy2eOO4S0m')
    return response
  } catch (error) {
    return console.error(error)
  }
}

const getEntries = async type => {
  try {
    const response = await client.getEntries({ content_type: type })
    return response.items
  } catch (error) {
    return console.error(error)
  }
}

const getEntryBySlug = async (type, slug) => {
  try {
    const response = await client.getEntries({ content_type: type, 'fields.slug': slug })
    return response.items
  } catch (error) {
    return console.error(error)
  }
}

const getFeatured = async type => {
  try {
    const response = await client.getEntries({ content_type: type, 'fields.featured': true })
    return response
  } catch (error) {
    return console.error(error)
  }
}

const getAssets = async () => {
  try {
    const response = await client.getAssets()
    return response.items
  } catch (error) {
    return console.error(error)
  }
}

export {
  initClient,
  getPerson,
  getEntries,
  getFeatured,
  getContentTypes,
  getAssets,
  getEntryBySlug
}
