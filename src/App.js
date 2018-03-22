import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import MenuGroup from "./components/MenuGroup/MenuGroup";
import MenuItem from "./components/MenuItem/MenuItem";
import GoogleMap from "./components/GoogleMap/GoogleMap";
import MenuSelector from "./components/MenuSelector/MenuSelector";
import Base from "./base";

import menuData from "./menu.json";

class App extends Component {
	state = {
		menus: menuData,
	};

	render() {
		return (
			<div className="App">
				<Header />
				<MenuSelector />
				<hr />
				<Menu menus={this.state.menus} />
			</div>
		);
	}
}

export default App;
