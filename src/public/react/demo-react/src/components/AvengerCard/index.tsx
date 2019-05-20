import React, { Component } from 'react';
import IAvengerCardProps from './interfaces/props.interface';
import IAvengerCardState from './interfaces/state.interface';
import { config } from '../../config/config';
import './AvengerCard.scss';
import PreloadImage from 'components/PreloadImage';
/**
 * Component class to render avengers
 * This component will render all attributes of an Avenger
 * It also handles click events
 * @method { toggleAvengerSelection } toggle selected avenger and pass it to parent
 *
 * @class AvengerCard
 * @extends {Component<IAvengerCardProps, IAvengerCardState>}
 */
class AvengerCard extends Component<IAvengerCardProps, IAvengerCardState> {
  constructor(props: IAvengerCardProps) {
    super(props);


    this.state = { loading: true, avenger: this.props.avenger };
  }

  async componentDidMount() {
    this.setState({
      loading: false
    });
  }

  toggleAvengerSelection(e: any) {
    this.props.onClick(this.props.avenger);
  }

  render() {
    if (!this.state.avenger) {
  // tslint:disable-next-line: no-null-keyword
      return null;
    }
    const avenger_card_class = this.state.avenger.selected ?
      'avenger-card avenger-selected' : 'avenger-card';
    if (!this.state.loading) {
      return (
        <div className={avenger_card_class} onClick={(e) => this.toggleAvengerSelection(e)}>
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

export default AvengerCard;