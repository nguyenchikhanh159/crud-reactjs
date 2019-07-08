import React, { Component } from "react";
import { Link } from "react-router-dom";


class ListCategoryItem extends Component {
  StyleDelete = () => {
    return {
      marginLeft: "5px",
      boderRadius: "50px"
    };
  };
  onDelete = id => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Bạn có chắc chắn xóa")) {
      this.props.onDelete(id);
    }
  };

  render() {
    var { product, index } = this.props;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'warning' : 'default';
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <img className="imageDisplay" src={product.image} 
          style={{ width: "50px" }} />
        </td> 
        <td>
          <span class={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link
            to={`product/${product.id}/edit`}
            className="btn btn-sm btn-info"
          >
            Sửa
          </Link>
          <button
            type="button"
            className="btn btn-default"
            style={this.StyleDelete()}
            onClick={() => this.onDelete(product.id)}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

// const mapDispatchToProps=(dispatch,props)=>{
//   return{

//   }
// }

export default ListCategoryItem;
