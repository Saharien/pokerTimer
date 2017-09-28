import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonBar from './ButtonBarView';
import ContentView from './ContentView';

export default class MainView extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <ButtonBar />
        <ContentView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0A6810',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },

  mainText: {
    color: '#77CC7B',
  }

});