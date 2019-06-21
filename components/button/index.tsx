import * as React from "react";
import classnames from 'classnames';
import {prefixCls} from '../config/defaultName' 

type ButtonHTMLType = 'submit'| 'button' | 'reset';
type ButtonType = 'primary' | 'default' | 'danger'| 'disable'
type ButtonSize = 'large' | 'middle' | 'small'


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
    type: 'primary',
    size: 'middle',
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
      ...rest
    } = this.props;
    const classes = classnames(className,`${prefixCls}-btn`, {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-${type}`]: true,
      [`${prefixCls}-${size}`]: true,
    })
    
    return <button className={classes} onClick={this.onClick} {...rest}>{children}</button>;
  }
}
export default Button;
