import React, { Component } from 'react';
import './PreloadImage.scss';
import IPreloadImageProps from './interfaces/props.interface';
import IPreloadImageState from './interfaces/state.interface';
import Loader from 'react-loaders';
/**
 * Extending Loader from react-loaders
 * Image helper component which renders a placeholder while the image is downloading
 * 
 * @class PreloadImage
 * @extends {Component<IPreloadImageProps, IPreloadImageState>}
 */
class PreloadImage extends Component<IPreloadImageProps, IPreloadImageState> {
  constructor(props: IPreloadImageProps) {
    super(props);

    this.state = { loading: true };
  }

  async componentDidMount() {
    const img = new Image();
    img.src = this.props.imageSrc;
    img.onload = () => {
      this.setState({ loading: false});
    };
  }
  render() {
    if (!this.state.loading) {
      return <img className='preload-image' src={this.props.imageSrc} alt={this.props.imageAlt} />;
    }
    return <div className='preload-wrapper'><Loader type='ball-grid-pulse' active /></div>;
  }
}

export default PreloadImage;