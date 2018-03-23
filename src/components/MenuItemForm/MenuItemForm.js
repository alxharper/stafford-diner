import React, { Component } from "react";

import "./MenuItemForm.css";

class MenuItemForm extends Component {
	render() {
		return (
			<div className="menuItemEditor">
				<form className="menuItemForm">
					<div>
						<span className="menuItemFormLabel">Name:</span>
						<input
							type="text"
							name="name"
							placeholder={this.props.name}
							onChange={this.props.onNameChange}
						/>
					</div>
					<div>
						<span className="menuItemFormLabel">Price:</span>
						<input
							type="text"
							name="price"
							placeholder={this.props.price}
							onChange={this.props.onPriceChange}
						/>
					</div>
					<div>
						<span className="menuItemFormLabel">Description:</span>
						<input
							type="text"
							name="description"
							placeholder={this.props.description}
							onChange={this.props.onDescriptionChange}
						/>
					</div>
					<MenuSelector menus={this.props.menus} />
					<input type="submit" value="create" />
				</form>
			</div>
		);
	}
}

const MenuSelector = ({ menus }) => {
	const options = Object.keys(menus).map(function(key) {
		return (
			<option key={menus[key]} value={menus[key]}>
				{menus[key].name}
			</option>
		);
	});

	return <select className="menuFormSelector">{options}</select>;
};

export default MenuItemForm;
