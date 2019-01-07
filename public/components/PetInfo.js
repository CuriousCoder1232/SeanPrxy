import React from "react";
import { Col, Image } from "react-bootstrap/lib";
import Purchase from "./Purchase";

const PetInfo = props => {
  const { species, image_url, description } = props.selectedPet;
  return (
    <div>
      <Col xs={7} sm={7} md={7} lg={7}>
        <Image src={image_url} responsive />
        <h4>{species}:</h4>
        <p>{description}</p>
      </Col>
      <Col xs={4} sm={4} md={4} lg={4}>
        <Purchase purchasePet={props.purchaseInfo} />
      </Col>
    </div>
  );
};

export default PetInfo;
