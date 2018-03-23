import React, { Component } from "react";
import MenuSection from "../MenuSection/MenuSection";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

import "./Menu.css";

class Menu extends Component {
	renderSections = sections => {
		return sections.map((sectionData, sectionIndex) => (
			<MenuSection
				updateItem={this.props.updateItem}
				key={sectionData.key}
				section={sectionData}
				sectionIndex={sectionIndex}
			/>
		));
	};

	render() {
		if (!this.props.menus.sections) {
			return <LoadingAnimation />;
		} else {
			const sections = this.renderSections(this.props.menus.sections);

			return <div className="menu">{sections}</div>;
		}
	}
}

export default Menu;
