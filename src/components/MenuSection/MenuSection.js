import React, { Component } from "react";
import MenuItem from "../MenuItem/MenuItem";

import "./MenuSection.css";

class MenuSection extends Component {
	render() {
		const menuItems = this.props.section.items.map(item => {
			return <MenuItem item={item} />;
		});

		return (
			<div className="menuSection">
				<div className="menuSectionTitle">{this.props.section.sectionName}</div>
				{menuItems}
			</div>
		);
	}
}

export default MenuSection;
