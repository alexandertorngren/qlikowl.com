import React from 'react'
import SideBar from '../components/SideBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import BlogPosts from '../components/BlogPosts'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Route } from 'react-router-dom'
import { getEntries, getSite, getPerson, getEntry } from '../services/contentfulClient'
import Loading from '../components/Loading'
import { trackPage } from '../services/gTracker'

class Blog extends React.Component {
  state = {
    site: null,
    author: null,
    posts: [],
    initialFetch: true,
    listView: true
  }

  componentDidMount() {
    this.fetchDataInitial()
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.match.params.tag === undefined &&
      this.props.match.params.slug !== prevProps.match.params.slug
    ) {
      this.fetchData()
    }
    if (
      this.props.match.params.slug === undefined &&
      this.props.match.params.tag !== prevProps.match.params.tag
    ) {
      this.fetchData()
    }
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
        listView: posts.items.length > 1
      })

      console.log('UPD #1: thisfetchData(), New STATE', this.state)
    })
  }

  fetchDataInitial() {
    this._asyncFetch = getSite()
      .then(response => {
        this._asyncFetch = null
        return response
      })
      .then(site => {
        this._asyncFetch = getPerson()
          .then(author => {
            this._asyncFetch = null
            return { site: site.fields, author: author.fields }
          })
          .then(partialState => {
            this._asyncFetch = getEntries({
              content_type: 'blogPost',
              'fields.slug': this.props.match.params.slug,
              'fields.tags': this.props.match.params.tag,
              order: '-fields.publishDate'
            })
              .then(posts => {
                this._asyncFetch = null
                partialState.posts = posts.items
                return partialState
              })
              .then(partialStateFinal => {
                this._asyncFetch = getEntry('H0EjxqdvViOmSP4VTDML7').then(backgrounds => {
                  this._asyncFetch = null

                  // FEATURED
                  const filterPost = partialStateFinal.posts.filter(post => {
                    return post.fields.featured
                  })

                  partialStateFinal.featured = filterPost[0].fields
                  const images = backgrounds.image

                  partialStateFinal.background =
                    images[Math.floor(Math.random() * +images.length - 1)].fields.file.url
                  partialStateFinal.initialFetch = false

                  this.setState(partialStateFinal)
                })
              })
          })
      })
  }

  render() {
    trackPage(this.props.match.path)
    if (this.state.initialFetch) {
      return <Loading />
    }

    const { site, author, posts, background, featured, listView } = this.state

    return (
      <div>
        <Navigation site={site} author={author} />
        <Route
          exact
          path="/home"
          render={() => <Header author={author} featured={featured} background={background} />}
        />
        <Route
          exact
          path="/tags"
          render={() => <Header author={author} featured={featured} background={background} />}
        />
        <Container>
          <Card
            body
            style={this.props.match.params.slug ? { marginTop: '50px' } : { marginTop: '-50px' }}>
            <Row>
              <Col lg="8" sm="12">
                <BlogPosts posts={posts} listView={listView} />
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

export default Blog
