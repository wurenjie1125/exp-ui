import * as React from "react";

export interface HelloProps {
  disable?: boolean;
}
class Button extends React.Component<HelloProps, {}> {
  render() {
    return <div className="exp-button">{this.props.children}</div>;
  }
}
export default Button;
