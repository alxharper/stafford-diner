import React, { Component } from "react";
import MenuSection from "../MenuSection/MenuSection";

import "./Menu.css";

class Menu extends Component {
	render() {
		const sections = this.props.menus.sections.map(sectionData => {
			return <MenuSection section={sectionData} />;
		});

		return <div className="menu">{sections}</div>;
	}
}

export default Menu;
