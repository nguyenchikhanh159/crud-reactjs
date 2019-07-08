import React, { Component } from "react";
import ListCategorySelect from './ListCategorySelect';
import ListCategorySearch from './ListCategorySearch';

class ListCategoryControl extends Component {
  render() {
    return (
      <div className="row ">
        <ListCategorySelect/>

        <ListCategorySearch/>
      </div>
    );
  }
}
export default ListCategoryControl;
