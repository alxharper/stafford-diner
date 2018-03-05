import React, { Component } from "react";

import "./header.css";

class Header extends Component {
	render() {
		return (
			<header>
				<div className="header">
					<div className="staffordDiner">
						<span className="stafford">STAFFORD</span>{" "}
						<span className="diner">DINER</span>
					</div>
					<div className="hours">OPEN 24 HOURS</div>
					<div className="locationInfo">
						<span>
							<a
								className="googleMapsLink"
								href="https://www.google.com/maps/place/Stafford+Diner/@39.7264134,-74.2902947,15z/data=!4m5!3m4!1s0x0:0xec3da5cd7b563209!8m2!3d39.7264134!4d-74.2902947?sa=X&ved=0ahUKEwiKxPiHg9TZAhUum-AKHeqmCXkQ_BIIkgEwCw"
							>
								1388 NJ-72, Manahawkin, NJ 08050
							</a>
						</span>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
