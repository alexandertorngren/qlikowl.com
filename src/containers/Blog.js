import React, { useState, useEffect } from 'react'
import SideBar from '../components/SideBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { BlogPosts, BlogPost } from '../components/BlogPosts'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Switch, Route } from 'react-router-dom'
import { getEntries, getSite, getEntry, createSocialUrl } from '../services/contentfulClient'
import Loading from '../components/Loading'
import { trackPage } from '../services/gTracker'
import Button from 'react-bootstrap/Button'

const BlogTest = () => {
  const [state, setState] = useState(0)

  useEffect(() => {
    // API call
    console.log('FETCH API', state)
    // eslint-disable-next-line
  }, [state]) // Run once

  return (
    <div>
      <Button onClick={() => setState(state + 1)} variant="secondary" size="sm" block>
        Update State
      </Button>
    </div>
  )
}

class Blog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      site: null,
      author: null,
      slug: null,
      tag: null,
      posts: [],
      initialFetch: true,
      dataLoaded: false
    }
  }

  scrollAction = () => {
    console.log(this.offset)
    return alert('Scroll here :)')
  }

  componentDidMount() {
    if (
      this.state.initialFetch ||
      (this.props.match.params.slug === undefined && this.props.match.params.tag === undefined)
    ) {
      this.fetchDataInitial()
    } else {
      this.fetchData()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      (this.props.match.params.tag === undefined &&
        this.props.match.params.slug !== prevProps.match.params.slug) ||
      (this.props.match.params.slug === undefined &&
        this.props.match.params.tag !== prevProps.match.params.tag)
    ) {
      this.fetchData()
    }
    return null
  }

  componentWillUnmount() {
    if (this._asyncFetch) {
      this._asyncFetch = null
    }
  }

  fetchData() {
    this._asyncFetch = getEntries({
      content_type: 'blogPost',
      'fields.slug': this.props.match.params.slug,
      'fields.tags': this.props.match.params.tag,
      order: '-fields.publishDate'
    }).then(posts => {
      this._asyncFetch = null
      this.setState({
        posts: posts.items,
        slug: this.props.match.params.slug,
        tag: this.props.match.params.tag,
        dataLoaded: true
      })
    })
  }

  fetchDataInitial() {
    this._asyncFetch = getSite()
      .then(response => {
        this._asyncFetch = null
        createSocialUrl(response.fields.owner)
        return response
      })
      .then(site => {
        this._asyncFetch = getEntries({
          content_type: 'blogPost',
          'fields.slug': this.props.match.params.slug,
          'fields.tags': this.props.match.params.tag,
          'fields.featured': false,
          order: '-fields.publishDate'
        }).then(posts => {
          this._asyncFetch = null
          const stateObj = {
            site: site.fields,
            author: site.fields.owner.fields,
            posts: posts.items
          }
          this._asyncFetch = getEntries({
            content_type: 'blogPost',
            'fields.featured': true,
            order: '-fields.publishDate'
          })
            .then(featured => {
              stateObj.featured = featured.items[0]
              return stateObj
            })
            .then(stateObj => {
              this._asyncFetch = getEntry('H0EjxqdvViOmSP4VTDML7').then(backgrounds => {
                this._asyncFetch = null
                const images = backgrounds.image
                const background =
                  images[Math.floor(Math.random() * +images.length - 1)].fields.file.url

                this.setState({
                  site: stateObj.site,
                  author: stateObj.author,
                  posts: stateObj.posts,
                  background: background,
                  featured: stateObj.featured,
                  initialFetch: false,
                  dataLoaded: true
                })
              })
            })
        })
      })
  }

  render() {
    trackPage(this.props.match.path)
    if (!this.state.dataLoaded) {
      return <Loading />
    }

    const { site, author, posts, background, featured } = this.state
    return (
      <div>
        <Navigation site={site} author={author} />
        <Route
          exact
          path="/home"
          render={() => <Header author={author} featured={featured} background={background} />}
        />
        <Container className="main">
          <Card
            body
            style={
              this.props.match.params.slug || this.props.match.params.tag
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
                  <Route
                    path={`${this.props.match.path}/featured`}
                    render={() => <BlogPost posts={featured} />}
                  />
                </Switch>
              </Col>
              <Col lg="4" sm="12">
                <SideBar author={author} />
              </Col>
            </Row>
          </Card>
        </Container>
        <Footer site={site} author={author} />
      </div>
    )
  }
}

export { Blog, BlogTest }
