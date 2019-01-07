import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Grid, Row, Col } from "react-bootstrap/lib";
import RelatedPetsList from "./components/RelatedPetsList";
import SelectionTabs from "./components/SelectionTabs";
import PetInfo from "./components/Petinfo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pet_id: 1112,
      relatedPets: [],
      selectedPetInfo: {},
      purchaseInfo: {}
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.getRelatedPets = this.getRelatedPets.bind(this);
    this.getPetInfo = this.getPetInfo.bind(this);
  }

  getPurchaseInfo(pet_id) {
    axios
      .get(
        `http://ec2-52-90-48-243.compute-1.amazonaws.com:3000/api/info/${pet_id}`
      )
      .then(response => {
        this.setState({
          purchaseInfo: {
            species: response.data.species,
            description: response.data.description
          }
        });
      })
      .catch(err => console.log(err));
  }

  getPetInfo(pet_id) {
    axios
      .get(
        `http://ec2-52-90-48-243.compute-1.amazonaws.com:3000/api/info/${pet_id}`
      )
      .then(response => {
        this.setState({
          selectedPetInfo: {
            image_url: response.data.image_url,
            description: response.data.description
          }
        });
      })
      .catch(err => console.log(err));
  }

  getRelatedPets(pet_id) {
    axios
      .get(
        `http://ec2-52-206-107-252.compute-1.amazonaws.com:3050/api/recommends/${pet_id}`
      )
      .then(response => {
        this.setState({ relatedPets: response.data });
      })
      .catch(error => console.log(error));
  }

  handleSelect(key) {
    console.log("we got the pet: ", key);
    this.setState(
      {
        pet_id: key
      },
      () => {
        console.log("local and global state has been set to pet: ", key);
        this.getRelatedPets(this.state.pet_id);
        this.getPetInfo(this.state.pet_id);
      }
    );
  }

  componentDidMount() {
    this.handleSelect(this.state.pet_id);

    console.log(
      "componentDidMount seting global state to pet_id: ",
      this.state.pet_id
    );
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <SelectionTabs id="Tabs" handleSelect={this.handleSelect} />
          </Col>
        </Row>
        <Row>
          <Col>
            <PetInfo id="PetInfo" selectedPet={this.state.selectedPetInfo} />
          </Col>
        </Row>
        <Row>
          <RelatedPetsList
            id="Pets"
            relatedPets={this.state.relatedPets}
            handleSelect={this.handleSelect}
          />
        </Row>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("petList"));
