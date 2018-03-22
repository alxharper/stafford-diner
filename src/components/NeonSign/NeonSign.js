import React, { Component } from "react";

import "./neon.css";

class NeonSign extends Component {
	render() {
		return (
			<div className="neonSign">
				<div className="open">Open</div>
				<div className="bottom">
					<span className="twentyFour">24</span>
					<span className="neonHours"> HOURS</span>
				</div>
			</div>
		);
	}
}

export default NeonSign;
