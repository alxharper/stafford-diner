import React, { Component } from "react";
import MenuItem from "../MenuItem/MenuItem";

import "./MenuSection.css";

class MenuSection extends Component {
	renderItems = items => {
		return items.map((item, itemIndex) => (
			<MenuItem
				key={item.key}
				updateItem={this.props.updateItem}
				sectionIndex={this.props.sectionIndex}
				itemIndex={itemIndex}
				item={item}
			/>
		));
	};

	render() {
		const menuItems = this.renderItems(this.props.section.items);

		return (
			<div className="menuSection">
				<div className="menuSectionTitle">
					{this.props.section.sectionName}
					<span className="openClose">&or;</span>
				</div>
				{menuItems}
			</div>
		);
	}
}

export default MenuSection;
