import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BuyButton from '../BattleButton';
import AvengerCard from '../AvengerCard';

class AvengersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      avengers: []
    }
  }

  async componentDidMount() {
    /**
     * Fetch our avengers here
     */
    let response = await fetch("http://localhost:5000/avengers");
    if (!response.ok) {
      return
    }

    let avengers = await response.json()
    this.setState({ loading: false, avengers: avengers })
  }

  render() {
    if (!this.state.loading) {
      return (
        <div className="AvengersList">
          <h2 className="AvengersList-title">Available Avengers ({this.state.avengers.length})</h2>
          <div className="AvengersList-container">
            {this.state.avengers.map((avenger, index) => {
              return (
                <div className="AvengersList-avenger" key={avenger.id}>
                  <AvengerCard avenger="{avenger}"></AvengerCard>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return (<h2 className="AvengersList-title">Waiting for API...</h2>);
  }
}

export default AvengersList;
