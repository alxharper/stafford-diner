import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MenuEditor from "../MenuEditor/MenuEditor";
import App from "../../App";

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/admin" component={MenuEditor} />
			<Route component={App} />
		</Switch>
	</BrowserRouter>
);

export default Router;
