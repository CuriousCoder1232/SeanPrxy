import React from "react";

const PetInfo = () => {
  return (
    <div>
      <img src={this.props.image_url} className="pet-image" />
      <div className="pet-description-container">
        <div className="pet-description-header">Description</div>
        <p className="pet-description">{this.props.description}</p>
      </div>
    </div>
  );
};

export default PetInfo;
