import React, { Component } from "react";
import MenuSection from "../MenuSection/MenuSection";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

import "./Menu.css";

class Menu extends Component {
	render() {
		if (!this.props.menus.sections) {
			return <LoadingAnimation />;
		} else {
			const sections = this.props.menus.sections.map(sectionData => {
				return <MenuSection section={sectionData} />;
			});

			return <div className="menu">{sections}</div>;
		}
	}
}

export default Menu;
