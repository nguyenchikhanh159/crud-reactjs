import React, { Component } from "react";

import {
  actShowEditingProductsRequest,
    actAddProductsRequest,
    actUpdateProductsRequest
} from "./../action/index";
import { connect } from "react-redux";

class ListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      checkStatus:true,
      Image: ""
    };
  }
  componentDidMount() {
    var { match } = this.props;
    // console.log('componentDidMount')
    if (match) {
      var id = match.params.id;
      // callApi(`products/${id}`, "GET", null).then(res => {
      //   var data = res.data;
      //   this.setState({
      //     id: data.id,
      //     txtName: data.name,
      //     txtPrice: data.price,
      //     status: data.status,
      //     Image: data.image
      //   });
      // });
      
      this.props.onShowEditing(id);
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.ItemEditing){
        var {ItemEditing} = nextProps;
        this.setState({
            id : ItemEditing.id,
            txtName : ItemEditing.name,
            txtPrice : ItemEditing.price,
            checkStatus : ItemEditing.status
        });
    }
    var {itemEditing}=this.props;
    console.log(itemEditing);
    // console.log('componentWillReceiveProps')
}
  onHandleChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === "checkStatus") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value
    });
  };
  onImageChange = e => {
    if (e.target.files && e.target.files[0]) {
      this.setState({
        Image: URL.createObjectURL(e.target.files[0])
      });
    }
  };
  onSave = event => {
    event.preventDefault();
    var { history } = this.props;
    console.log(this.props.match)
    var { txtName, txtPrice, checkStatus, id, Image } = this.state;
    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: checkStatus,
      image: Image
    };
    if (id) {
      // callApi(`products/${id}`, "PUT", {
      //   name: txtName,
      //   price: txtPrice,
      //   status: status,
      //   image: Image
      // }).then(res => {
      //   history.goBack();
      // });
      this.props.onUpdateProducts(product);
    } else {
      // callApi("products", "POST", {
      //   name: txtName,
      //   price: txtPrice,
      //   status: status,
      //   image: Image
      // }).then(res => {
      //   history.goBack();
      // });
      this.props.onAddProducts(product);
    }
    history.goBack();
  };
  render() {
    
    return (
      <div className="WrapperForm">
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">
              <span className="fa fa-times-circle text-right" />
            </h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSave}>
              <div class="form-group">
                <label>Tên: </label>
                <input
                  type="text"
                  class="form-control"
                  name="txtName"
                  value={this.state.txtName}
                  onChange={this.onHandleChange}
                />
              </div>
              <div class="form-group">
                <label>Price: </label>
                <input
                  type="text"
                  class="form-control"
                  name="txtPrice"
                  value={this.state.txtPrice}
                  onChange={this.onHandleChange}
                />
              </div>
              <div class="form-group">
                <label>Image: </label>
                <input
                  type="file"
                  class="form-control"
                  name="Image"
                  value=""
                  style={{ height: "200px", width: "400px" }}
                  onChange={this.onImageChange}
                />
              </div>
              <label>Trạng Thái </label>
              <select
                class="form-control"
                name="checkStatus"
                value={this.state.checkStatus}
                onChange={this.onHandleChange}
              >
                <option value={true}>Kích Hoạt </option>
                <option value={false}>Ẩn </option>
              </select>

              <br />
              <div className="text-center">
                <button type="submit" class="btn btn-warning">
                  <span className="fa fa-plus mr-5" />
                  Lưu
                </button>
                &nbsp;
                <button type="submit" class="btn btn-danger">
                  <span className="fa fa-plus mr-5" />
                  Hủy bỏ
                </button>
                &nbsp;
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ItemEditing:state.itemEditing
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onShowEditing:(id)=>{
      dispatch(actShowEditingProductsRequest(id));
    },
    onAddProducts: (product) => {
      dispatch(actAddProductsRequest(product));
    },
    onUpdateProducts:(product)=>{
      dispatch(actUpdateProductsRequest(product))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
