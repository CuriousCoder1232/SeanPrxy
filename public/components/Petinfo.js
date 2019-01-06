import React, { Component } from "react";

class PetImage extends React {
  constructor(props) {
    super(props);
  }
  render() {
    return <img src={this.props.image_url} className="pet-image" />;
  }
}

export default PetImage;
export default class PetDescription extends React.Component {
  constructor(props) {
      super(props)
  }

  render() {
      return (
          <div className="pet-description-container">
              <div className='pet-description-header'>Description</div>
              <p className='pet-description'>{this.props.description}</p>
          </div>
      )
  }
}