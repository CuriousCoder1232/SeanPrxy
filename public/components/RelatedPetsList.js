import React, { Component } from "react";
import {
  Col,
  Image,
  Panel,
  ButtonToolbar,
  Button,
  Label
} from "react-bootstrap/lib";

class RelatedPetsList extends Component {
  constructor(props) {
    super(props);

    this.handleThumbnailSelect = this.handleThumbnailSelect.bind(this);
  }

  handleThumbnailSelect(event) {
    let pet_id = event.target.id;
    console.log("we are looking for pet_id: ", pet_id);
    this.props.handleSelect(pet_id);
  }

  render() {
    const pets = this.props.relatedPets;
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">
            You may also like these pets!
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <ButtonToolbar>
            {pets.map((pet, index) => (
              <Col md={2} xs={2} lg={2} key={index}>
                <Panel>
                  <Panel.Heading>
                    <Label bsStyle="info">{pet.species}</Label>
                  </Panel.Heading>
                  <Panel.Body>
                    <Button>
                      <Image
                        src={pet.img_url}
                        onClick={this.handleThumbnailSelect}
                        id={pet.pet_id}
                        responsive
                      />
                    </Button>
                  </Panel.Body>
                </Panel>
              </Col>
            ))}
          </ButtonToolbar>
        </Panel.Body>
      </Panel>
    );
  }
}
export default RelatedPetsList;
