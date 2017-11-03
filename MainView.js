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
        />
        <View style={styles.contentView}>
          <ContentView
            remainingTime={this.props.remainingTime}
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