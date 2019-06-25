import React from "react";
import "./index.less";
import Header from "../header";
import Menu from "../menu";

class Container extends React.Component {
  render() {
    return (
      <div className="site-page-container">
        <Header />
        <div className="container-body">
          <Menu />
          <div className="right-body">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
export default Container;
