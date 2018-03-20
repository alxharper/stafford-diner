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

class App extends Component {
	state = {
		menus: {},
	};

	componentDidMount() {
		this.ref = Base.syncState("stafford-diner/menus", {
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
				<Menu>
					<MenuGroup>
						<MenuItem />
						<MenuItem />
						<MenuItem />
						<MenuItem />
						<MenuItem />
					</MenuGroup>
					<MenuGroup>
						<MenuItem />
						<MenuItem />
						<MenuItem />
					</MenuGroup>
					<MenuGroup>
						<MenuItem />
						<MenuItem />
						<MenuItem />
					</MenuGroup>
					<MenuGroup>
						<MenuItem />
						<MenuItem />
						<MenuItem />
					</MenuGroup>
				</Menu>
			</div>
		);
	}
}

export default App;
