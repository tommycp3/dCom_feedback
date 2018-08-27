import React, { Component } from "react";
import { connect } from "react-redux";
import { googleLogin, twitterLogin } from "../actions/userAction";

class Login extends Component {
  componentWillMount() {
    if (this.props.user !== null) {
      // console.log(this.props.history);
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== null) {
      nextProps.history.push("/");
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="row text-center">
            <div className="col-sm-12 jumbotron" style={{ marginTop: "-20px" }}>
              <h1>
                Welcome to the dCom feedback Portal
              </h1>

              <p>
                <i>
                  "The best way to involve the mesh and crowdsource the best ideas to use ethereum to bring accountability and transparency to our internet infrasctructure."
                </i>
                <br />
                <br />
                <h3>Login and give your feedback, to be eligible for 1 dCom Token.</h3>
                <p>dCom token will be redeemable via your google account once token contract is live.</p>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <button
              className="btn btn-danger col-sm-12"
              onClick={this.props.googleLogin}
            >
              Login with Google
            </button>

            
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, onwProps) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { googleLogin, twitterLogin }
)(Login);
