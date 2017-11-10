import React from 'react';
import MainView from './MainView';

export default class App extends React.Component {

  state = {
    // Display in App
    remainingMinutes: null,
    remainingSeconds: null,
    smallBlind: '10',
    bigBlind: '25',
    // Internal State
    appState: 'stopped',
    intervalID: null,
    startTime: null,                      // when did we press start the first time
    pause: 0,                             // how long was the clock paused at all
    // Configuration
    levelTime: 0.25 * 60 * 1000 + 1000,   // in ms
    rounds: [
      {smallBlind: 5, bigBlind: 10},
      {smallBlind: 10, bigBlind: 25},
      {smallBlind: 25, bigBlind: 50},
      {smallBlind: 50, bigBlind: 100},
      {smallBlind: 100, bigBlind: 200},
      {smallBlind: 200, bigBlind: 400}]
  }

  updateTimer() {
    let timePassed = new Date() - this.state.startTime - this.state.pause;
    let passedRounds = Math.floor(timePassed/(this.state.levelTime));
    let timeLeft = new Date(this.state.levelTime - (timePassed-passedRounds*this.state.levelTime));
    let seconds = timeLeft.getSeconds().toString();
    let minutes = timeLeft.getMinutes().toString();
    this.setState({ remainingMinutes: minutes.padStart(2, '0'),
                    remainingSeconds: seconds.padStart(2, '0'),
                    smallBlind: this.state.rounds[passedRounds].smallBlind,
                    bigBlind: this.state.rounds[passedRounds].bigBlind, })
  }

  onPressStart = () => {
    this.setState({
      appState: 'started',
      startTime: new Date()
    },
      () => {
        this.updateTimer()
      })

    this.setState({
      intervalID:
      setInterval(() => {
        this.updateTimer()
      }, 100)
    })
  }

  onPressPause = () => {
    this.setState({ appState: 'stopped' })

    clearInterval(this.state.intervalID);

  }

  render() {
    return (
      <MainView
        remainingMinutes={this.state.remainingMinutes}
        remainingSeconds={this.state.remainingSeconds}
        smallBlind={this.state.smallBlind}
        bigBlind={this.state.bigBlind}
        appState={this.state.appState}
        onPressStart={this.onPressStart}
        onPressPause={this.onPressPause}
      />
    );
  }
}