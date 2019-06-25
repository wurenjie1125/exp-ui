import * as React from "react";
import classnames from 'classnames';
import {prefixCls} from '../config/defaultName' 
import ActivityIndicator from '../activity-indicator'

type ButtonHTMLType = 'submit'| 'button' | 'reset';
type ButtonType = 'primary' | 'default' | 'danger'| 'disable'
type ButtonSize = 'lg' | 'md' | 'sm' | 'xs'


type BaseButtonProps  = {
  type?: ButtonType,
  icon?: string,
  size? : ButtonSize,
  loading?: boolean,
  children?: React.ReactNode,
  className?: string,
  block: boolean,
  disabled: boolean
}

type ButtonProps = {
  htmlType?: ButtonHTMLType,
  onClick: React.MouseEventHandler<any>
} & BaseButtonProps


class Button extends React.PureComponent<ButtonProps, {}> {
  static defaultProps = {
    type: 'default',
    size: 'md',
    block: false,
    loading: false,
    disabled: false,
  }
  onClick = (e:any) => {
    const { disabled, onClick } = this.props;
    if(disabled){
      return ;
    }else{
      if(typeof onClick === 'function'){
        onClick(e)
      }
    }
  }
  render() {
    const {
      className,
      disabled,
      type,
      size,
      children,
      loading,
      block,
      icon,
      ...rest
    } = this.props;
    const classes = classnames(className,`${prefixCls}-btn`, {
      [`${prefixCls}-btn--disabled`]: disabled,
      [`${prefixCls}-btn--${type}`]: true,
      [`${prefixCls}-btn--${size}`]: true,
      [`${prefixCls}-btn--loading`]: loading,
    })
    let contentRender;
    if(loading){
      contentRender = <div className={`${prefixCls}-btn__content`}>
        <ActivityIndicator />
        {children}
      </div> 
    }else if(icon){
      //todo
    }else{
      contentRender = children
    }
    
    return <button className={classes} onClick={this.onClick} {...rest}>{contentRender}</button>;
  }
}
export default Button;
