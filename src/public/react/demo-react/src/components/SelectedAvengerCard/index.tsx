import React, { Component } from 'react';
import './SelectedAvengerCard.scss';
import PreloadImage from 'components/PreloadImage';
import ISelectedAvengerCardProps from './interfaces/props.interface';
import ISelectedAvengerCardState from './interfaces/state.interface';
/**
 *
 * @class SelectedAvengerCard
 * @extends {Component<ISelectedAvengerCardProps, ISelectedAvengerCardState>}
 */
class SelectedAvengerCard extends Component<ISelectedAvengerCardProps, ISelectedAvengerCardState> {
  constructor(props: ISelectedAvengerCardProps) {
    super(props);


    this.state = { loading: true, avenger: this.props.avenger };
  }

  async componentDidMount() {
    this.setState({
      loading: false
    });
  }

  render() {
    if (!this.state.avenger) {
  // tslint:disable-next-line: no-null-keyword
      return null;
    }
    const avenger_card_class = 'avenger-card';
    if (!this.state.loading) {
      return (
        <div className={avenger_card_class}>
          <div className='avenger-card-image-frame'>
            <PreloadImage
            imageAlt={this.state.avenger.name}
            imageSrc={this.state.avenger.image}></PreloadImage>
          </div>
          <div className='avenger-card-body'>
            <p className='avenger-card-name'>{this.state.avenger.name}</p>
            <div className='avenger-card-attrs'>
              <p className='avenger-card-health'>
                <span>health:</span> {this.state.avenger.attributes.health}
              </p>
              <p className='avenger-card-attack'>
                <span>attack:</span> {this.state.avenger.attributes.attack}
              </p>
              <p className='avenger-card-defense'>
                <span>defense:</span> {this.state.avenger.attributes.defense}
              </p>
            </div>
          </div>
        </div>
      );
    }
// tslint:disable-next-line: no-null-keyword
    return null;
  }
}

export default SelectedAvengerCard;