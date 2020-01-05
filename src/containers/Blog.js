//import React from 'react';
import React, { useState, useEffect } from 'react'
import SideBar from '../components/SideBar'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { BlogPosts, BlogPost } from '../components/BlogPosts'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Switch, Route, useLocation } from 'react-router-dom'
import client from '../services/contentful'
import Loading from '../components/Loading'
import { trackPage } from '../services/gTracker'

const Blog = (props) => {
  const [state, setState] = useState({})
  const { pathname } = useLocation()

  trackPage(props.match.url)

  useEffect(() => {
    console.log('PROPS', props)
    const getData = async () => {
      try {
        let site = await client.getEntry(process.env.REACT_APP_SITE_ID)
        let background = await client.getEntry(process.env.REACT_APP_BG_ID)

        let posts = await client.getEntries({
          content_type: 'blogPost',
          'fields.slug': props.match.params.slug,
          'fields.tags': props.match.params.tag,
          order: '-fields.publishDate'
        })

        let featured = await client.getEntries({
          content_type: 'blogPost',
          'fields.slug': props.match.params.slug,
          'fields.tags': props.match.params.tag,
          'fields.featured': true,
          order: '-fields.publishDate'
        })

        let bg = background.fields.image

        setState({
          slug: props.match.params.slug,
          tag: props.match.params.tag,
          background: bg[Math.floor(Math.random() * +bg.length - 1)].fields.file.url,
          posts: posts.items,
          site: site.fields,
          loaded: true,
          height: window.innerHeight,
          width: window.innerWidth,
          featured: featured.items[0]
        })
      } catch (error) {
        console.log(error)
      }
    }
    getData()
    window.scrollTo(0, 0)
  }, [props, pathname])

  if (!state.loaded || !state.posts) {
    return <Loading />
  }

  const { site, posts, featured, background, height } = state

  return (
    <div>
      <Navigation site={site} author={site.owner.fields} />
      <Header featured={featured || posts[0]} background={background} height={height}>
        <Container className="main">
          <Card body className="p-md-4 p-sm-1">
            <Row>
              <Col lg="8" sm="12">
                <Switch>
                  <Route
                    exact
                    path={'/home' || '/posts'}
                    render={() => <BlogPosts posts={posts} />}
                  />
                  <Route path={'/tags/:tag'} render={() => <BlogPosts posts={posts} />} />
                  <Route
                    path={'/post/:slug'}
                    render={() => <BlogPost post={posts[0]} match={props.match.url} />}
                  />
                </Switch>
              </Col>
              <Col lg="4" sm="12">
                <SideBar author={site.owner.fields} />
              </Col>
            </Row>
          </Card>
        </Container>
        <Footer site={site} author={site.owner.fields} />
      </Header>
    </div>
  )
}

export { Blog }
