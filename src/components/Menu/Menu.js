import React, { Component } from "react";
import MenuGroup from "../MenuGroup/MenuGroup";

import "./Menu.css";

class Menu extends Component {
	render() {
		return <div className="menu">{this.props.children}</div>;
	}
}

export default Menu;
