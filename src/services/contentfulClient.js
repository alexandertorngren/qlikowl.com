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
    
    response.fields.github    = 'https://github.com/' + response.fields.github;
    response.fields.linkedIn  = 'https://linkedin.com/in/' + response.fields.linkedIn;
    response.fields.facebook  = 'https://www.facebook.com/' + response.fields.facebook;
    
    return response
  } catch (error) {
    return console.error(error)
  }
}

const getPersonAndSite = async () => {
  try {
    const person = await client.getEntry('15jwOBqpxqSAOy2eOO4S0m');
    const site = await client.getEntry('5nYiPPMvdN1MFpHnGt5NMd');
    
    if(person && site) {
      return { person: person.fields, site: site.fields}
    } else {
      console.log("error...")
    }
  } catch (error) {
    return console.error(error)
  }
}

const getSite = async slug => {
  try {
    let blogPosts
    if ((slug === null) | undefined) {
      console.log('HERE')
      blogPosts = await client.getEntries({ content_type: 'blogPost' })
    } else {
      console.log('HERE222')
      blogPosts = await client.getEntries({ content_type: 'blogPost', 'fields.slug': slug })
    }
    const response = {
      site: await client.getEntry('5nYiPPMvdN1MFpHnGt5NMd'),
      person: await client.getEntry('15jwOBqpxqSAOy2eOO4S0m'),
      blogPosts,
      featured: await client.getEntries({ content_type: 'blogPost', 'fields.featured': true }),
      background: getCarouselItem()
    }
    return response
  } catch (error) {
    return console.error(error)
  }
}

const getCarouselItem = async () => {
  try {
    const response = await client.getEntries({ content_type: 'background' })

    let imgUrl = []
    let max

    response.items.map(item => {
      let result = item.fields.image
      max = result.length - 1

      return result.map(image => {
        return imgUrl.push('https:' + image.fields.file.url)
      })
    })

    return imgUrl[Math.floor(Math.random() * +max)]
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
  getEntryBySlug,
  getSite,
  getPersonAndSite,
  getEntry
}
