import React, { Component } from "react";

import "./MenuItem.css";

class MenuItem extends Component {
	render() {
		return (
			<div className="menuItem">
				<div className="itemName">
					{this.props.name} <span className="price">{this.props.price}</span>
				</div>
				<div className="description">{this.props.description}</div>
			</div>
		);
	}
}

export default MenuItem;
