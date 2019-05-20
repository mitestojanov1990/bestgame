import React, { Component } from 'react';

class BattleButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            avengers: props.selectedAvengers,
            label: "Battle",
            isBattleStarted: false
        }
    }

    async startBattle() {
        /**
         * POST selected avengers and start battle
         */
        let response = await fetch("http://localhost:5000/avengers", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avengers: this.state.avengers
            })
        });
        if (!response.ok) {
          return
        }
    
        let message = await response.json()
        this.setState({ loading: false, label: message, isBattleStarted: true })
    }
    isBattleStarted() {
        return this.state.isBattleStarted;
    }

    render() {
        return (
            <button
                className="battle-button" onClick="{this.startBattle}" disabled="{this.isBattleStarted}">
                {this.state.label}
            </button>
        );
    }
}

export default BattleButton;
