import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  {
    name: "LISTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT",
    to: "/",
    exact: true
  },
  {
    name: "ADDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
    to: "/product/add",
    exact: true
  }
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "SubmenuCategory" : "";
        return (
          <li>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};
class ListMenu extends Component {
  render() {
    return (
      <div>
        <div className="Wrapper1">
          <div className="Wrapper1-1">Main</div>
          <div className="Wrapper1-2">
            <ul>
              <li>
                <i className="glyphicon glyphicon-dashboard" />
                <span className="site-menu-title">Dashboard</span>
              </li>

              <li>
                <i className="glyphicon glyphicon-th-list" />
                <span className="site-menu-title ">Category</span>
                <ul className="SubmenuCategory">{this.showMenus(menus)}</ul>
              </li>
              <li>
                <i className="glyphicon glyphicon-folder-close" />
                <span className="site-menu-title">Products</span>
              </li>
              <li>
                <i className="glyphicon glyphicon-gift" />
                <span className="site-menu-title">Order</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  showMenus=(menus)=>{
    var result=null;
    if(menus.length>0){
        result=menus.map((menu,index)=>{
            return (
                <MenuLink
                    key={index}
                    label={menu.name}
                    to={menu.to}
                    activeOnlyWhenExact={menu.exact}
                />
            );
        });
    }
    return result;
}
}

export default ListMenu;
