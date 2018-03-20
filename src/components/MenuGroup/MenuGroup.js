import React, { Component } from "react";

import "./MenuGroup.css";

class MenuGroup extends Component {
	render() {
		return (
			<div className="menuGroup">
				<div className="menuGroupTitle">{this.props.groupName}</div>
				{this.props.children}
			</div>
		);
	}
}

export default MenuGroup;
