import * as React from "react";

import { Button, Input } from "expui"

import cloud from './images/Cloud.png'


class App extends React.Component {
  render() {
    return (
      <div>
        <Button className='dda dd'>123</Button>
        <Input />
        <img src={cloud}></img>

      </div>
    );
  }
}
export default App;
