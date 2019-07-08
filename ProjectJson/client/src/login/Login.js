import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import callApi from "./../login/Login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: "",
      txtPassWord: ""
    };
  }
  componentWillMount(){
    callApi("user", "GET", null).then(res => {
      var user = res.data;
      if (user.username === "admin" && user.password === "admin") {
        return <Redirect to={"/product-list"} />;
      }
      console.log(user);
    });
  }
  onLogin = e => {
    var { txtName, txtPassWord } = this.state;
    e.preventDefault();
    callApi("user", "GET", null).then(res => {
      var user=res.data;
      if(user!=null){
        callApi("user","POST",{
          username:txtName,
          password:txtPassWord
        })
      }
    })
  }

  onHandleChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
    
  };

  render() {
    
    return (
      <div>
        <div className="container login-container">
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 login-container-1">
              <h3>Login form</h3>

              <form onSubmit={this.onLogin}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="txtName"
                    value={this.state.txtName}
                    onChange={this.onHandleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="txtPassWord"
                    value={this.state.txtPassWord}
                    onChange={this.onHandleChange}
                  />
                </div>
                <div className="form-group">
                  <button type="button" className="btnSubmit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
