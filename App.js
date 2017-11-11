import React from 'react';
import MainView from './MainView';
import Util from './Util';

export default class App extends React.Component {

  state = {
    // Display in App
    smallBlind: '10',
    bigBlind: '25',
    // Internal State
    appState: 'stopped',
    intervalID: null,
    startTime: null,                      // when did we press start the first time
    pauseStart: null,                     // when did we start the pause
    pause: 0,                             // how long was the clock paused at all
    // Configuration
    levelTime: 0.25 * 60 * 1000 + 1000,   // in ms
    remainingMinutes: Util.getMinutes(new Date(0.25 * 60 * 1000)),
    remainingSeconds: Util.getSeconds(new Date(0.25 * 60 * 1000)),
    rounds: [
      { smallBlind: 5, bigBlind: 10 },
      { smallBlind: 10, bigBlind: 25 },
      { smallBlind: 25, bigBlind: 50 },
      { smallBlind: 50, bigBlind: 100 },
      { smallBlind: 100, bigBlind: 200 },
      { smallBlind: 200, bigBlind: 400 }]
  }

  updateTimer() {
    let timePassed = new Date() - this.state.startTime - this.state.pause;
    let passedRounds = Math.floor(timePassed / (this.state.levelTime));
    let timeLeft = new Date(this.state.levelTime - (timePassed - passedRounds * this.state.levelTime));
    this.setState({
      remainingMinutes: Util.getMinutes(timeLeft),
      remainingSeconds: Util.getSeconds(timeLeft),
      smallBlind: this.state.rounds[passedRounds].smallBlind,
      bigBlind: this.state.rounds[passedRounds].bigBlind,
    })
  }

  onPressStart = () => {

    if (this.state.pauseStart === null) {
      this.setState({
        appState: 'started',
        startTime: new Date()
      },
        () => {
          this.updateTimer()
        })
    } else {
      console.log('hui');
      this.setState({
        appState: 'started',
        pause: this.state.pause + ( new Date() - this.state.pauseStart ),
        pauseStart: null
      },
        () => {
          this.updateTimer()
        })
    }


    this.setState({
      intervalID:
        setInterval(() => {
          this.updateTimer()
        }, 100)
    })
  }

  onPressPause = () => {
    clearInterval(this.state.intervalID);
    this.setState({
      appState: 'paused',
      pauseStart: new Date()
    })
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