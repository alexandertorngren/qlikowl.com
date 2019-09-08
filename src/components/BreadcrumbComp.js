import React from 'react'
import Breadcrumb from 'react-bootstrap'

const BreadcrumbComp = props => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.NavItem active>Home</Breadcrumb.NavItem>
      </Breadcrumb>
      <Breadcrumb>
        <Breadcrumb.NavItem>
          <a href="/">Home</a>
        </Breadcrumb.NavItem>
        <Breadcrumb.NavItem active>Library</Breadcrumb.NavItem>
      </Breadcrumb>
      <Breadcrumb>
        <Breadcrumb.NavItem>
          <a href="/">Home</a>
        </Breadcrumb.NavItem>
        <Breadcrumb.NavItem>
          <a href="/">Library</a>
        </Breadcrumb.NavItem>
        <Breadcrumb.NavItem active>Data</Breadcrumb.NavItem>
      </Breadcrumb>
    </div>
  )
}

export default BreadcrumbComp
