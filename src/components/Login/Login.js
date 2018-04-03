import React, { Component } from "react";

import "./Login.css";

class Login extends Component {
	render() {
		if (this.props.showLogin === true) {
			return (
				<div>
					<span className="loginLabel">Login: </span>
					<div className="facebookLogin">
						<button onClick={this.props.authenticate("Facebook")}>
							Facebook
						</button>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Login;
