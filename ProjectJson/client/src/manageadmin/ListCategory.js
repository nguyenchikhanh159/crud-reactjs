import React, { Component } from "react";
import ListCategoryItem from "./ListCategoryItem";
import { connect } from "react-redux";
import ListCategoryControl from "./ListCategoryControl";
import {actFectchProductsRequest, actDeleteProductsRequest} from './../action/index';

class ListCategory extends Component {
  

  divFont = () => {
    return {
      marginTop: "40px",
      color: "#373838",
      fontSize: "14px"
    };
  };
  componentDidMount() {
    // callApi("products", "GET", null).then(res => {
    //   this.setState({
    //     products: res.data
    //   });
    //   console.log(res.data);
    // });
  
    this.props.fetchAllProducts();
    console.log('componentDidMount')
  }
  componentWillReceiveProps(nextProps){
    var {products} = nextProps;
    
    console.log('componentWillReceiveProps')
  }
  // findIndex = (products, id) => {
  //   var result = -1;
  //   products.forEach((product, index) => {
  //     if (product.id === id) {
  //       result = index;
  //     }
  //     return result;
  //   });
  // };
  onDelete = id => {
    // var { products } = this.state;
    // callApi(`products/${id}`, "DELETE", null).then(res => {
    //   if (res.status === 200) {
    //     var index = this.findIndex(products, id);
    //     if (index !== -1) {
    //       products.splice(index, 1);
    //       this.setState({ 
    //         products:products
    //       })
    //     }
    //   }
    // });
    this.props.onDeleteProducts(id);
  };

  render() {
    console.log('render')
    // var { tasks, keyword } = this.props;
    
    var { products } = this.props;
    // products = products.filter(task => {
    //   return task.name.indexOf(this.props.keyword) !== -1;
    // });
    
    var elmTasks = products.map((product, index) => {
      return (
        <ListCategoryItem
          key={index}
          index={index}
          product={product}
          onDelete={this.onDelete}
        />
      );
    });

    return (
      <div>
        <div className="Wrapper2">
          <div className="Wrapper2-0">
            <h2>LIST CATEGORY</h2>
          </div>
          <div className="Wrapper2-1">
            <div className="Wrapper2-txt">
              <p style={this.divFont()}>ALL CATE</p>
            </div>
          </div>
          <div className="Wrapper2-2">
            <ListCategoryControl />

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Image</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>{elmTasks}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products:state.products,
    keyword: state.search
  };
};

const mapDispatchToProps=(dispatch,props)=>{
  return{
      fetchAllProducts:()=>{
          dispatch(actFectchProductsRequest());
      },
      onDeleteProducts:(id)=>{
        dispatch(actDeleteProductsRequest(id));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCategory);

