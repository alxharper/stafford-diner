import React, { Component } from "react";

class GoogleMap extends Component {
  render() {
    return (
      <div className="GoogleMap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.5890398623815!2d-74.2924833838872!3d39.726417505254425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c108a22711c3f5%3A0xec3da5cd7b563209!2sStafford+Diner!5e0!3m2!1sen!2sus!4v1520205588710"
          width="600"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen
        />
      </div>
    );
  }
}

export default GoogleMap;
