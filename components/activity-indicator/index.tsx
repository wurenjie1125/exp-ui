import * as React from "react";
import { prefixCls } from '../config/defaultName'

type LoadingProps = {

}

class ActivityIndicator extends React.PureComponent<LoadingProps, {}> {
  render() {
    return (
      <span className={`${prefixCls}-activity-indicator`}>
        <svg className={`${prefixCls}-activity-indicator__svg`} viewBox="31 31 62 62">
          <circle className={`${prefixCls}-activity-indicator__circular`} cx="62" cy="62" r="28.5" fill="none"></circle>
        </svg>
      </span>

    )
  }
}
export default ActivityIndicator
