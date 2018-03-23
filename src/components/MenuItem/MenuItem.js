import React, { Component, Fragment } from "react";
import { formatPrice } from "../../util.js";

import "./MenuItem.css";

class MenuItem extends Component {
	render() {
		const prices = this.props.item.prices.map(option => {
			return (
				<React.Fragment>
					<span className="itemOptionLabel">{option.label}</span>
					<span className="itemOptionPrice">{formatPrice(option.price)}</span>
				</React.Fragment>
			);
		});

		return (
			<div className="menuItem">
				<div className="itemName">
					{this.props.item.name}
					<span className="price">{prices}</span>
				</div>
				<div className="description">{this.props.item.description}</div>
			</div>
		);
	}
}

export default MenuItem;
