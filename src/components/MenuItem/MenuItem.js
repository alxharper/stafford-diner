import React, { Component } from "react";
import { formatPrice } from "../../util.js";

import "./MenuItem.css";

class MenuItem extends Component {
	renderPrices = prices => {
		return prices.map((option, index) => {
			return (
				<span className="itemOption" key={index}>
					<span className="itemOptionLabel">{option.label}</span>
					<span className="itemOptionPrice">{formatPrice(option.price)}</span>
				</span>
			);
		});
	};

	handleUpdateClick = () => {
		let updatedItem = this.props.item;

		updatedItem.updated = true;

		this.props.updateItem(
			this.props.sectionIndex,
			this.props.itemIndex,
			updatedItem
		);
	};

	render() {
		const prices = this.renderPrices(this.props.item.prices);

		return (
			<div className="menuItem">
				<button onClick={this.handleUpdateClick}>edit</button>
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
