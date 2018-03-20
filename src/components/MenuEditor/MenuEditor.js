import React, { Component } from "react";
import MenuItemForm from "../MenuItemForm/MenuItemForm";
import MenuGroup from "../MenuGroup/MenuGroup";
import MenuItem from "../MenuItem/MenuItem";

import "./MenuEditor.css";

class MenuEditor extends Component {
	state = {
		previewTitle: "",
		previewPrice: "",
		previewDesc: "",
	};

	render() {
		return (
			<div className="menuEditor">
				<div className="preview">
					<MenuItemForm className="previewForm" />
					<MenuItem style="previewItem" />
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
