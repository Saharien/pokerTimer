import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ContentView extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.mainText}>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone tasdfasdfo open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  mainText: {
    color: '#77CC7B',
  }

});