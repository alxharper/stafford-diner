import React, { Component } from "react";

import "./MenuSelector.css";

class MenuSelector extends Component {
	render() {
		return (
			<div className="menuSelector">
				<div className="menuOption" id="earlybird">
					Eary Bird<br />
					<span className="menuHours">5am-7am</span>
				</div>
				<div className="menuOption" id="breakfast">
					Breakfast<br />
					<span className="menuHours">7am-11am</span>
				</div>
				<div className="menuOption" id="linner">
					Lunch/Dinner<br />
					<span className="menuHours">11am-9pm</span>
				</div>
				<div className="menuOption" id="lateNight">
					Late Night<br />
					<span className="menuHours">9pm-5am</span>
				</div>
			</div>
		);
	}
}

export default MenuSelector;
