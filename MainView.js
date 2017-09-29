import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ButtonBar from './ButtonBarView';
import ContentView from './ContentView';

export default class MainView extends React.Component {
  render() {
    return (
      <View style={styles.mainView}>
        <ButtonBar />
        <View style={styles.contentView}>
        <View style={styles.box} />
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
    backgroundColor: '#ff0000',
  },

  box: {
    width: 200,
    height: 200,
    backgroundColor: 'skyblue',
    borderWidth: 2,
    borderColor: 'steelblue',
    borderRadius: 20,
  },

});