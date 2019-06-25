import React, { Component } from "react";
import marked from 'marked'
// import hljs from "highlight.js";
// import "highlight.js/styles/github.css";

class Markdown extends Component {
  render() {
    // const {document} = this.props;
    const document = '## abc';

    const renderer = new marked.Renderer();
    const html = marked(document, { renderer });

    return (
      <div dangerouslySetInnerHTML={{ __html: html }} />
      // <div>123</div>
    );
  }
}
export default Markdown;
