import * as React from "react";

import { Button, Input } from "expui";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Container from "./components/container";
import "./style/index";
import Markdown from "./components/markdown";


class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <Route path="/button" component={Markdown} />
          {/* <Button loading={true} type="primary" className="dda dd">
            确定
          </Button> */}
        </Container>
      </Router>
    );
  }
}
export default App;
