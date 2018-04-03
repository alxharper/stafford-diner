import React, { Component } from "react";
import firebase from "firebase";
import "./App.css";

import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import MenuSelector from "./components/MenuSelector/MenuSelector";
import Menu from "./components/Menu/Menu";
import base from "./base";
import { firebaseApp } from "./base";

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

	authHandler = async authData => {
		console.log(authData);
	};

	authenticate = provider => {
		const authProvider = new firebase.auth[`${provider}AuthProvider`]();
		firebaseApp
			.auth()
			.signInWithPopup(authProvider)
			.then(this.authHandler);
	};

	updateItem = (sectionIndex, itemIndex, updatedItem) => {
		const menus = { ...this.state.menus };
		menus.sections[sectionIndex].items[itemIndex] = updatedItem;
		this.setState({ menus });
	};

	render() {
		return (
			<div className="App">
				<Header />
				<Login
					showLogin={this.props.showLogin}
					authenticate={this.authenticate}
				/>
				<MenuSelector />
				<hr />
				<Menu updateItem={this.updateItem} menus={this.state.menus} />
			</div>
		);
	}
}

export default App;
