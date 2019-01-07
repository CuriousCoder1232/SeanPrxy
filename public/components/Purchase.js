import React from "react";

const Purchase = props => {
  console.log(props.purchasePet);

  return (
    <div>
      <p>purchase information will be here</p>
      <sub>
        * animals are only sold if buyers meet strict guidelines for animal
        rights and housing needs.
      </sub>
    </div>
  );
};

export default Purchase;
