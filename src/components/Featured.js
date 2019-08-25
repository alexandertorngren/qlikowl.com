import React from 'react'
import { Col, Row } from 'reactstrap'
import MaterialIcon from 'material-icons-react'
import { ColorPalette, Loader } from '../services/MaterialHelpers'

class Featured extends React.Component {
  render() {
    const colorPalette = ColorPalette()
    let loader = Loader
    return (
      <Row className="mb-2">
        <Col md="6">
          <Row className="no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <Col className="p-4 d-flex flex-column position-static">
              <div className="d-inline-block mb-2">
                <MaterialIcon
                  icon="person_pin"
                  size="small"
                  color={colorPalette.teal._700}
                  preloader={loader}
                />
                <strong
                  className="d-inline-block mb-2 ml-1"
                  style={{ color: colorPalette.teal._900 }}>
                  World
                </strong>
              </div>
              <h3 className="mb-0">Featured post</h3>
              <div className="mb-1 text-muted">
                <MaterialIcon
                  icon="date_range"
                  size="tiny"
                  color={colorPalette.blueGrey._900}
                  preloader={loader}
                />
                Nov 12
              </div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="http://localhost:3000" className="stretched-link">
                Continue reading
              </a>
            </Col>
            <Col className="col-auto d-none d-lg-block">
              <svg
                className="bd-placeholder-img"
                width="200"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: Thumbnail">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </Col>
          </Row>
        </Col>
        <Col md="6">
          <Row className="no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <Col className="p-4 d-flex flex-column position-static">
              <div className="d-inline-block mb-2">
                <MaterialIcon
                  icon="widgets"
                  size="small"
                  color={colorPalette.deepOrange._700}
                  preloader={loader}
                />
                <strong
                  className="d-inline-block mb-2 ml-1"
                  style={{ color: colorPalette.deepOrange._900 }}>
                  Design
                </strong>
              </div>
              <h3 className="mb-0">Post title</h3>
              <div className="mb-1" style={{ color: colorPalette.blueGrey._600 }}>
                <MaterialIcon
                  icon="date_range"
                  size="tiny"
                  color={colorPalette.blueGrey._600}
                  preloader={loader}
                />
                Nov 11
              </div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="http://localhost:3000" className="stretched-link">
                Continue reading
              </a>
            </Col>
            <Col className="col-auto d-none d-lg-block">
              <svg
                className="bd-placeholder-img"
                width="200"
                height="250"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: Thumbnail">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default Featured
