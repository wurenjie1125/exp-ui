import React, { Component } from "React";
import menuData from "../../route/menuData";
import { Link } from "react-router-dom";
import "./index.less";

class SubMenu extends Component {
  render() {
    const { childRoute, route, menuName } = this.props.data;
    if (childRoute) {
      const childRouteItem = childRoute.map((cr, index) => (
        <div className="menu-list--submenu">
          <SubMenu key={index} data={cr} />
        </div>
      ));
      return (
        <div className="menu-list__item">
          <div className="menu-list__item__name">{menuName}</div>
          {childRouteItem}
        </div>
      );
    } else {
      return (
        <li className="menu-list__item">
          <Link to={route}>{menuName}</Link>
        </li>
      );
    }
  }
}

class Menu extends Component {
  render() {
    const menu = menuData.map((item, index) => {
      return <SubMenu key={index} data={item} />;
    });
    return (
      <div className="side-menu">
        <ul className="side-menu__list">{menu}</ul>
      </div>
    );
  }
}
export default Menu;
