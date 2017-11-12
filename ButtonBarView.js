import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import { createIconSet } from 'react-native-vector-icons';
import glyphMap from './icons/MiKaIcons.json';

const MiKaIcon = createIconSet(glyphMap, 'MiKaIcons', require('./icons/MiKaIcons.ttf'));

export default class ButtonBarView extends React.Component {
  render() {
    return (
      <View style={styles.buttonBar}>
        { (this.props.appState == 'paused' || this.props.appState == 'stopped' ) ? (
          <EvilIcon name='play' size={85} style={styles.button} onPress={this.props.onPressStart} />
        ) : (
            <MiKaIcon name='pause' size={85} style={styles.button} color="#77CC7B" onPress={this.props.onPressPause} />
          )}
        <EvilIcon name='gear' size={83} style={styles.button} onPress={this.props.onPressConfig}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  buttonBar: {
    width: 90,
    backgroundColor: '#0E8A17',
    alignItems: 'center',
  },

  button: {
    color: '#77CC7B',
    marginBottom: 8,
  }

});