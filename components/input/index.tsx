import * as React from "react";

export interface HelloProps {
  disable?: boolean;
}
class Input extends React.Component<HelloProps, {}> {
  render() {
    return <input className='exp-input' />;
  }
}
export default Input;
