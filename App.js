// ToDo MiKa Icons rausputzen und react-native-vector-icons forken!!!

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { createIconSet } from 'react-native-vector-icons';
import glyphMap from './icons/MiKaIcons.json';
const MiKaIcon = createIconSet(glyphMap, 'MiKaIcons', require('./icons/MiKaIcons.ttf'));

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <View style={styles.configContainer}>
          <EvilIcon name='play' size={85} color="#77CC7B" />
          <EvilIcon name='gear' size={83} color="#77CC7B" />
          <MiKaIcon name='pause' size={83} color="#77CC7B" />
          <EvilIcon name='user' size={83} color="#77CC7B" />

        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.mainText}>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
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

  mainContainer: {

  },

  configContainer: {
    width: 90,
    backgroundColor: '#0E8A17',
    alignItems: 'center',
  },


  mainText: {
    color: '#77CC7B',
  }

});
