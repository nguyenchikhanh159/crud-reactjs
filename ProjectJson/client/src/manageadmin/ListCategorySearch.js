import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./../action/index";

class ListCategorySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
  }
  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.searchTask(this.state.keyword);
    this.setState({
      [name]: value
    });
  
    
  };
 
  render() {
    var { keyword } = this.state;
    console.log(keyword);
    return (
      <div
        className="col-xs-6 col-sm-6 col-md-6 col-lg-6"
        style={{ margin: "20px 0px 20px 100px" }}
      >
        <input
          type="search"
          name="keyword"
          id="input"
          className="form-control"
          value={keyword}
          required="required"
          onChange={this.onChange}
        
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
   
  };
};
// const mapDispatchToProps = (dispatch, props) => {
//   return {
//     onSearch: keyword => {
//       dispatch(actions.searchTask(keyword));
//     }
//   };
// };

export default connect(
  mapStateToProps,
  actions
)(ListCategorySearch);
