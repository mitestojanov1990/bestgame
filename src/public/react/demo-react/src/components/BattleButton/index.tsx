import React, { Component } from 'react';
import './BattleButton.scss';
import IBattleButtonProps from './interfaces/props.interface';
import IBattleButtonState from './interfaces/state.interface';
/**
 * Button component
 * It is supposed to POST selected avengers and start the game
 * @property { avengers } IAvenger[] data to be sent to server
 * @class BattleButton
 * @extends {Component<IBattleButtonProps, IBattleButtonState>}
 */
class BattleButton extends Component<IBattleButtonProps, IBattleButtonState> {
  constructor(props: IBattleButtonProps) {
    super(props);

    this.state = {
      loading: true,
      avengers: props.avengers
    };
  }

  startBattle() {
      return;
  }
  async componentDidMount() {
    this.setState({ loading: false });
  }
  render() {
    return (
        <button onClick={this.startBattle}>Start Battle</button>
    );
  }
}

export default BattleButton;
