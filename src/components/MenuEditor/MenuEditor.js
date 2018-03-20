import React, { Component } from "react";
import MenuItemForm from "../MenuItemForm/MenuItemForm";
import MenuGroup from "../MenuGroup/MenuGroup";
import MenuItem from "../MenuItem/MenuItem";

import "./MenuEditor.css";

class MenuEditor extends Component {
	constructor() {
		super();
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handlePriceChange = this.handlePriceChange.bind(this);
		this.handleDescChange = this.handleDescChange.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	state = {
		menus: {
			earlyBird: { name: "Early Bird" },
			breakFast: { name: "Breakfast" },
			linner: { name: "Lunch & Dinner" },
			lateNight: { name: "Late Night" },
		},
		placeholder: {
			name: "Name Goes Here",
			price: "$#.##",
			description: "Description Goes Here",
		},
	};

	handleNameChange(event) {}

	handlePriceChange(event) {}

	handleDescChange(event) {}

	handleSubmit(event) {}

	render() {
		return (
			<div className="menuEditor">
				<div className="preview">
					<div className="previewForm">
						<MenuItemForm
							name={this.state.placeholder.name}
							price={this.state.placeholder.price}
							description={this.state.placeholder.description}
						/>
					</div>
					<div className="previewItem">
						<MenuItem
							name={this.state.placeholder.name}
							price={this.state.placeholder.price}
							description={this.state.placeholder.description}
						/>
					</div>
				</div>
				<hr />
				<MenuGroup groupName="Appitizers">
					<MenuItem />
				</MenuGroup>
			</div>
		);
	}
}

export default MenuEditor;
