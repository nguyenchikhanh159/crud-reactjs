import React, { Component } from "react";
import f2 from './../image/f2.jpg';

class Header extends Component {
 
ImageFont=()=>{
  return{
    width:'40px',
    height:'40px',
    borderRadius:50,
    boder:'5px solid red',
    lineHeight:'40px',
    textAligh:'center',
    marginTop:'5px'
  }
}
  render() {
    return (
        
      <div>
    
         <div className="row rt-1">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 rt1-col1">
                <ul>
                  <li>
                    <i className="glyphicon glyphicon-user" />
                  </li>
                  <li>
                    <a style={this.ImageFont()}>Admin</a>
                  </li>
                </ul>
              </div>

              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 rt1-col2">
                <ul >
                  <li >
                    <a ><img style={this.ImageFont()} src={f2}></img></a>
                  </li>
                  <li>
                    <i className="glyphicon glyphicon-bell" />
                  </li>
                  <li>
                    <i className="glyphicon glyphicon-envelope" />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          </div>
    );
  }
}

export default Header;
