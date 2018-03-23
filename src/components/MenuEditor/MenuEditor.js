import React, { Component } from "react";
import MenuItemForm from "../MenuItemForm/MenuItemForm";
import MenuSection from "../MenuSection/MenuSection";
import MenuItem from "../MenuItem/MenuItem";

import "./MenuEditor.css";

class MenuEditor extends Component {
	constructor() {
		super();
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handlePriceChange = this.handlePriceChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

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

	handleNameChange(event) {
		const placeholder = { ...this.state.placeholder };
		placeholder.name = event.target.value;
		this.setState({ placeholder });
	}

	handlePriceChange(event) {
		const placeholder = { ...this.state.placeholder };
		placeholder.price = event.target.value;
		this.setState({ placeholder });
	}

	handleDescriptionChange(event) {
		const placeholder = { ...this.state.placeholder };
		placeholder.description = event.target.value;
		this.setState({ placeholder });
	}

	handleSubmit(event) {
		const menus = { ...this.state.menus };
	}

	render() {
		return (
			<div className="menuEditor">
				<div className="preview">
					<div className="previewForm">
						<MenuItemForm
							name={this.state.placeholder.name}
							price={this.state.placeholder.price}
							description={this.state.placeholder.description}
							onNameChange={this.handleNameChange}
							onPriceChange={this.handlePriceChange}
							onDescriptionChange={this.handleDescriptionChange}
							menus={this.state.menus}
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
				<MenuSection SectionName="Appitizers">
					<MenuItem />
				</MenuSection>
			</div>
		);
	}
}

export default MenuEditor;
