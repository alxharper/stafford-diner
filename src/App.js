import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import MenuSection from "./components/MenuSection/MenuSection";
import MenuItem from "./components/MenuItem/MenuItem";
import GoogleMap from "./components/GoogleMap/GoogleMap";
import MenuSelector from "./components/MenuSelector/MenuSelector";
import base from "./base";

class App extends Component {
	state = {
		menus: {},
	};

	componentDidMount() {
		this.ref = base.syncState("menus", {
			context: this,
			state: "menus",
		});
	}

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
