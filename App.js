import React from 'react';
import MainView from './MainView';

export default class App extends React.Component {

  state = {
    appState: 'stopped',
    remainingTime: '10:10',
    smallBlind: '10',
    bigBlind: '25',
    blindLevel: 0,
    levelTime: 10 * 60 * 1000,
    timeAbs: null,
    timeRel: 0,
    intervalID: null
  }

  onPressStart = () => {
    this.setState({ appState: 'started' })
    this.setState({ timeAbs: new Date() })


    this.setState({
      intervalID:
      setInterval(() => {
        let delta = new Date (this.state.levelTime - (this.state.timeRel + (new Date() - this.state.timeAbs)));
        this.setState({ remainingTime: delta.getMinutes() + ':' + delta.getSeconds() })
      }, 1000)
    })
  }

  onPressPause = () => {
    this.setState({ appState: 'stopped' })
    
    clearInterval(this.state.intervalID);
    
    this.setState({ remainingTime: '10:01' })
  }

  render() {
    return (
      <MainView
        remainingTime={this.state.remainingTime}
        smallBlind={this.state.smallBlind}
        bigBlind={this.state.bigBlind}
        appState={this.state.appState}
        onPressStart={this.onPressStart}
        onPressPause={this.onPressPause}
      />
    );
  }
}