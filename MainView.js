import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonBar from './ButtonBarView';
import ContentView from './ContentView';

export default class MainView extends React.Component {
  render() {  
    return (
      <View style={styles.mainView}>
        <ButtonBar 
          appState={this.props.appState}
          onPressStart={this.props.onPressStart}
          onPressPause={this.props.onPressPause}
          onPressConfig={this.props.onPressConfig}
        />
        <View style={styles.contentView}>
          <ContentView
            remainingMinutes={this.props.remainingMinutes}
            remainingSeconds={this.props.remainingSeconds}
            smallBlind={this.props.smallBlind}
            bigBlind={this.props.bigBlind}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  mainView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#0A6810',
  },

  contentView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

});