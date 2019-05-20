import React, { Component } from 'react';
import AvengerCard from '../AvengerCard';
import IAvengerListProps from './interfaces/props.interface';
import IAvengerListState from './interfaces/state.interface';
import { config } from './../../config/config';
import './AvengersList.scss';
import SelectedAvengerCard from 'components/SelectedAvengerCard';
import BattleButton from 'components/BattleButton';
/**
 * Our main component
 * Here we fetch data from the server
 * This data is then rendered using AvengerCard component
 * @property { avengers } IAvenger[] here we stored our fetched data from server
 * @property { selectedAvengers} IAvenger[] here we stored selected avengers
 * @method { onSelectedAvenger } used to toggle selection of avengers
 *
 * @class AvengersList
 * @extends {Component<IAvengerListProps, IAvengerListState>}
 */
class AvengersList extends Component<IAvengerListProps, IAvengerListState> {
  constructor(props: IAvengerListProps) {
    super(props);

    this.state = {
      loading: true,
      avengers: [],
      selectedAvengers: [],
      error: false
    };

    this.onSelectedAvenger = this.onSelectedAvenger.bind(this);
  }

  onSelectedAvenger(avenger: any) {
    // if undefined, set to true
    avenger.selected = !avenger.selected;
    // if true, but we already have 3 selected, set to false
    avenger.selected = (avenger.selected ?
                          this.state.selectedAvengers.length >= 3 ?
                            false : true : false);
    if (avenger.selected) {
      if (this.state.selectedAvengers.length < 3) {
        this.setState((state) => {
          const list = [...state.selectedAvengers, avenger];
          return {
            selectedAvengers: list
          };
        });
      }
    } else {
      if (this.state.selectedAvengers.length > 0) {
        this.setState(state => {
          const list = this.state.selectedAvengers.filter(obj => {
            return obj._id !== avenger._id;
          });
          return {
            selectedAvengers: list
          };
        });
      }
    }
  }

  async componentDidMount() {
    /**
     * Fetch our avengers here
     */
    try {
      const response = await fetch(config.apiUrl + 'avengers/attributes');
      const avengers = await response.json();
      this.setState({ loading: false, avengers: avengers });
    } catch (err) {
      this.setState({
        error: true,
        errorMsg: err.message
      });
      return;
    }

  }
  /**
   *
   *
   * @returns
   * @memberof AvengersList
   */
  render() {
    if (this.state.error) {
      return (
        <div>
          {/* Here we render the message we get from our fetch response,
            * in case there is an error */}
          <p>Ups! Maybe server isn't running?</p>
          <p>Response Message: {this.state.errorMsg}</p>
        </div>
      );
    }
    if (!this.state.loading) {
      return (
        <div className='avengers-list'>
          <h2 className='avengers-list-title'>
            Available Avengers ({this.state.avengers.length})
          </h2>
          <div className='avengers-list-container'>
            {this.state.avengers.map((avenger, index) => {
              return (
                <div className='avengers-list-avenger-container' key={avenger._id}>
                  <AvengerCard avenger={avenger} onClick={this.onSelectedAvenger}></AvengerCard>
                </div>
              );
            })}
          </div>
          <h2 className='avengers-list-title'>
            Selected Avengers ({this.state.selectedAvengers.length})
          </h2>
          <div className='selected-avengers avengers-list-container'>
            {this.state.selectedAvengers.map((avenger, index) => {
              return (
                <div className='avengers-list-avenger-container' key={avenger._id}>
                  <SelectedAvengerCard avenger={avenger}></SelectedAvengerCard>
                </div>
              );
            })}
            {this.state.selectedAvengers.length === 3 &&
              <BattleButton avengers={this.state.selectedAvengers}></BattleButton>
            }
          </div>
        </div>
      );
    }

    return (<h2 className='AvengersList-title'>Waiting for API...</h2>);
  }
}

export default AvengersList;
