import React, { Component } from 'react';

class AvengerCard extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, avenger: {}, selected: false };
  }

  async componentDidMount() {
    //fetch image
    let response = await fetch(`http://localhost:5000/avengers/${this.props.avenger.id}`);
    let data = await response.json();
    this.setState({
      loading: false,
      avenger: data
    });
  }

  toggleAvengerSelection() {
    this.setState({
      selected: !this.state.selected
    });
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="avenger-card" onClick={(e) => this.toggleAvengerSelection(e)}>
          <div className="card-frame">
            <img src="{this.state.avenger.image}" alt="{this.state.avenger.name}" />
          </div>
          <div className="card-body">
            <p className="avenger-name">{this.state.avenger.name}</p>
            <div className="avenger-attrs">
              <p className="avenger-health">{this.state.avenger.attributes.health}</p>
              <p className="avenger-attack">{this.state.avenger.attributes.attack}</p>
              <p className="avenger-defense">{this.state.avenger.attributes.defense}</p>
            </div>
          </div>
        </div>
      );
    }

    return (<h2>Waiting for API...</h2>);
  }
}

export default AvengerCard;