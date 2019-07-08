import React, { Component } from "react";

class ListCategorySelect extends Component {
  render() {
    return (
      <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 ms">
        <select
          name=""
          id="input"
          className="form-control"
          required="required"
          style={{ margin: "20px" }}
        >
          <option value="" />
        </select>
      </div>
    );
  }
}
export default ListCategorySelect;
