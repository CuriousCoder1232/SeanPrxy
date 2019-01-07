import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Grid, Row, Col } from "react-bootstrap/lib";
import SelectionTabs from "./components/SelectionTabs";
import PetInfo from "./components/PetInfo";
import Review from "./components/Review";
import RelatedPetsList from "./components/RelatedPetsList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pet_id: 1112,
      relatedPets: [{ null: null }],
      selectedPetInfo: { null: null },
      purchaseInfo: { null: null },
      reviews: [{ null: null }]
    };

    this.getRelatedPets = this.getRelatedPets.bind(this);
    this.getPetInfo = this.getPetInfo.bind(this);
    this.getPurchaseInfo = this.getPurchaseInfo.bind(this);
    this.getPetReviews = this.getPetReviews.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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

  getPetInfo(pet_id) {
    axios
      .get(
        `http://ec2-52-90-48-243.compute-1.amazonaws.com:3000/api/info/${pet_id}`
      )
      .then(response => {
        this.setState({
          selectedPetInfo: {
            species: response.data.species,
            image_url: response.data.image_url,
            description: response.data.description
          }
        });
      })
      .catch(err => console.log(err));
  }

  getPurchaseInfo(pet_id) {
    axios
      .get(
        `http://ec2-3-17-59-254.us-east-2.compute.amazonaws.com:4002/buy/${pet_id}`
      )
      .then(res => {
        this.setState({
          purchaseInfo: res.data
        });
      })
      .catch(err => console.log(err));
  }

  getPetReviews(pet_id) {
    axios
      .get(
        `http://ec2-18-191-41-4.us-east-2.compute.amazonaws.com/reviews/${pet_id}`
      )
      .then(res => {
        this.setState({
          reviews: res.data
        });
      });
  }

  handleSelect(key) {
    console.log("we got the pet: ", key);
    this.setState(
      {
        pet_id: key
      },
      () => {
        const currentPet = this.state.pet_id;

        this.getPurchaseInfo(currentPet);
        this.getPetInfo(currentPet);
        this.getRelatedPets(currentPet);
        this.getPetReviews(currentPet);

        console.log("local and global state has been set to pet: ", key);
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
          <Col xs={12} sm={12} md={12} lg={12}>
            <SelectionTabs id="Tabs" handleSelect={this.handleSelect} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <PetInfo
              id="PetInfo"
              selectedPet={this.state.selectedPetInfo}
              purchaseInfo={this.state.purchaseInfo}
            />
          </Col>
          <Row>
            <Col xs={12}>
              <RelatedPetsList
                id="Pets"
                relatedPets={this.state.relatedPets}
                handleSelect={this.handleSelect}
              />
            </Col>
          </Row>
        </Row>
        <Row>
          {this.state.reviews.map((review, index) => (
            <Review review={review} key={index} />
          ))}
        </Row>
        <Row />
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("petList"));
