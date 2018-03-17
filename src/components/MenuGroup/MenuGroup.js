import React, { Component } from "react";
import MenuItem from "../MenuItem/MenuItem";

import "./MenuGroup.css";

class MenuGroup extends Component {
	render() {
		return (
			<div className="menuGroup">
				<div className="menuGroupTitle">Appitizers</div>
				{this.props.children}
			</div>
		);
	}
}

export default MenuGroup;
