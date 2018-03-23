import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
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

	updateItem = (sectionIndex, itemIndex, updatedItem) => {
		const menus = { ...this.state.menus };

		menus.sections[sectionIndex].items[itemIndex] = updatedItem;

		this.setState({ menus });
	};

	render() {
		return (
			<div className="App">
				<Header />
				<MenuSelector />
				<hr />
				<Menu updateItem={this.updateItem} menus={this.state.menus} />
			</div>
		);
	}
}

export default App;
