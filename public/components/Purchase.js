class PetInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genus: null,
      species: null,
      description: null,
      image_url: null
    };
  }

  render() {
    return (
      <div style={[styles.description.primary, { display: "inline-block" }]}>
        <PetImage image_url={this.state.image_url} />
        <PetDescription
          description={this.state.description}
          pet={this.state.species}
        />
      </div>
    );
  }
}

let PetDescription = props => {
  return (
    <div>
      <p style={[styles.description.base]}>{props.description}</p>
    </div>
  );
};

let PetDescription = props => {
  return (
    <div>
      <p style={[styles.description.base]}>{props.description}</p>
    </div>
  );
};

PetDescription = Radium(PetDescription);
export default PetDescription;
