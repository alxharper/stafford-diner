import React, { Component } from "react";
import MenuItem from "../MenuItem/MenuItem";

import "./MenuItemForm.css";

class MenuItemForm extends Component {
	render() {
		return (
			<div className="menuItemEditor">
				<form className="menuItemForm">
					<div>
						<span className="menuItemFormLabel">Name:</span>
						<input type="text" name="name" placeholder={this.props.name} />
					</div>
					<div>
						<span className="menuItemFormLabel">Price:</span>
						<input type="text" name="price" placeholder={this.props.price} />
					</div>
					<div>
						<span className="menuItemFormLabel">Description:</span>
						<input
							type="text"
							name="description"
							placeholder={this.props.description}
						/>
					</div>
					<input type="submit" value="create" />
				</form>
			</div>
		);
	}
}

export default MenuItemForm;
