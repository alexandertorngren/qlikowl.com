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
  const [state, setState] = useState()
  const [clientSize, setClientSize] = useState({
    clientWidth: document.documentElement.clientWidth.toFixed(0),
    clientHeight: (document.documentElement.clientHeight * 0.8).toFixed(0)
  })
  const { pathname } = useLocation()

  trackPage(props.match.url)

  useEffect(() => {
    const getData = async () => {
      try {
        let site = await client.getEntry(process.env.REACT_APP_SITE_ID)
        let bg = await client.getEntry(process.env.REACT_APP_BG_ID)
        let img = await bg.fields.image
        let background = await img[Math.floor(Math.random() * +img.length - 1)]

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

        setState({
          slug: props.match.params.slug,
          tag: props.match.params.tag,
          background: background.fields.file.url,
          posts: posts.items,
          site: site.fields,
          featured: featured.items[0],
          loaded: true
        })
      } catch (error) {
        console.log(error)
      }
    }

    window.addEventListener('resize', () => {
      setClientSize({
        clientWidth: document.documentElement.clientWidth.toFixed(0),
        clientHeight: (document.documentElement.clientHeight * 0.8).toFixed(0)
      })
    })

    getData()
    window.scrollTo(0, 0)
  }, [props, pathname, clientSize])

  if (!state) {
    return <Loading />
  }

  const { site, posts, featured, background } = state

  let cardClass = ''

  if (props.match.params.slug !== undefined || props.match.params.tag !== undefined) {
    cardClass = 'card-xs-topmargin'
  }

  return (
    <div id="head-section">
      <Navigation site={site} author={site.owner.fields} />
      <Header
        featured={featured || posts[0]}
        background={`${background}?fit=fill&f=bottom&w=${clientSize.clientWidth}&h=${clientSize.clientHeight}`}
        {...clientSize}
      />
      <Container className="main">
        <Card body className={`p-md-3 p-xs-1 ${cardClass}`} style={{ marginTop: '-100px' }}>
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
    </div>
  )
}

export { Blog }
