import React from "react";

const PetInfo = ({ selectedPet }) => {
  const img_url = selectedPet.image_url;
  const description = selectedPet.description;
  return (
    <div>
      <img src={img_url} />
      <div>Description</div>
      <p>{description}</p>
    </div>
  );
};

export default PetInfo;
