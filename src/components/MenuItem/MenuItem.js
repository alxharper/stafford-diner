import React, { Component, Fragment } from "react";
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

	adminButtons = admin => {
		if (admin) {
			return (
				<div className="adminButtons">
					<button className="editButton" onClick={this.handleUpdateClick}>
						edit
					</button>
					<button className="deleteButton" onClick={this.handleDeleteClick}>
						delete
					</button>
				</div>
			);
		}
	};

	render() {
		const prices = this.renderPrices(this.props.item.prices);
		const adminButtons = this.adminButtons(true);

		return (
			<React.Fragment>
				{adminButtons}
				<div className="menuItem">
					<div className="itemName">
						{this.props.item.name}
						<span className="price">{prices}</span>
					</div>
					<div className="description">{this.props.item.description}</div>
				</div>
			</React.Fragment>
		);
	}
}

export default MenuItem;
