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

    response.fields.github = 'https://github.com/' + response.fields.github
    response.fields.linkedIn = 'https://linkedin.com/in/' + response.fields.linkedIn
    response.fields.facebook = 'https://www.facebook.com/' + response.fields.facebook

    return response
  } catch (error) {
    return console.error(error)
  }
}

const getSite = async () => {
  try {
    const response = await client.getEntry('5nYiPPMvdN1MFpHnGt5NMd')
    return response
  } catch (error) {
    return console.error(error)
  }
}

const getEntries = async query => {
  try {
    const response = await client.getEntries(query)
    return response
  } catch (error) {
    return console.error(error)
  }
}

const getEntry = async query => {
  try {
    const response = await client.getEntry(query)
    return response.fields
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

export { initClient, getPerson, getEntries, getContentTypes, getAssets, getSite, getEntry }
