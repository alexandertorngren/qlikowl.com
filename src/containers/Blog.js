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

  trackPage(props.match.path)

  useEffect(() => {
    console.log('PROPS', props)
    const getData = async () => {
      try {
        let site = await client.getEntry(process.env.REACT_APP_SITE_ID)
        let bg = await (await client.getEntry(process.env.REACT_APP_BG_ID)).fields.image

        let posts = await client.getEntries({
          content_type: 'blogPost',
          'fields.slug': props.match.params.slug,
          'fields.tags': props.match.params.tag,
          order: '-fields.publishDate'
        })

        setState({
          slug: props.match.params.slug,
          tag: props.match.params.tag,
          background: bg[Math.floor(Math.random() * +bg.length - 1)].fields.file.url,
          posts: posts.items,
          site: site.fields,
          loaded: true
        })
      } catch (error) {
        console.log(error)
      }
    }
    getData()
    window.scrollTo(0, 0)
  }, [props, pathname])

  if (!state.loaded) {
    return <Loading />
  }

  const { site, posts, background } = state

  return (
    <div>
      <Navigation site={site} author={site.owner.fields} />
      <Route
        exact
        path="/home"
        render={() => (
          <Header author={site.owner.fields} featured={posts[0]} background={background} />
        )}
      />
      <Container className="main">
        <Card
          body
          style={
            props.match.params.slug || props.match.params.tag
              ? { marginTop: '2rem' }
              : { marginTop: '-50px' }
          }>
          <Row>
            <Col lg="8" sm="12">
              <Switch>
                <Route
                  exact
                  path={'/home' || '/posts'}
                  render={() => <BlogPosts posts={posts} />}
                />
                <Route path={'/tags/:tag'} render={() => <BlogPosts posts={posts} />} />
                <Route path={'/post/:slug'} render={() => <BlogPost post={posts[0]} />} />
              </Switch>
            </Col>
            <Col lg="4" sm="12">
              <SideBar author={site.owner.fields} />
            </Col>
          </Row>
        </Card>
      </Container>
      <Footer site={site} author={site.owner.fields} />
    </div>
  )
}

export { Blog }
