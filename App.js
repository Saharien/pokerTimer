import React from 'react';
import MainView from './MainView';

export default class App extends React.Component {
  
  state = {
    appState: 'stopped',
    remainingTime: '10:10',
    smallBlind: '10',
    bigBlind: '25'
  }

  onPressStart = () => {
    this.setState({appState: 'started'})
    this.setState({remainingTime: '55:55'})
  }  

  onPressPause = () => {
    this.setState({appState: 'stopped'})
    this.setState({remainingTime: '10:00'})
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