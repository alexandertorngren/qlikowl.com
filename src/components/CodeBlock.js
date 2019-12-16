import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism/okaidia'

class CodeBlock extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  }

  static defaultProps = {
    language: null
  }

  render() {
    const { language, value } = this.props
    return (
      <SyntaxHighlighter language={language} style={okaidia} showLineNumbers>
        {value}
      </SyntaxHighlighter>
    )
  }
}

export default CodeBlock
