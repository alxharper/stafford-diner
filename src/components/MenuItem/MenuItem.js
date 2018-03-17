import React, { Component } from "react";

import "./MenuItem.css";

class MenuItem extends Component {
	render() {
		return (
			<div className="menuItem">
				<div className="itemName">
					chicken wings <span className="price">7.25</span>
				</div>
				<div className="description">
					Hot or mild Buffalo sauce or barbecue sauce
				</div>
			</div>
		);
	}
}

export default MenuItem;
