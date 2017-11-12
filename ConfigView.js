import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ButtonBar from './ButtonBarView';
import ContentView from './ContentView';

const rows = [
  { id: 0, text: 'View' },
  { id: 1, text: 'Text' },
  { id: 2, text: 'Image' },
  { id: 3, text: 'ScrollView' },
  { id: 4, text: 'ListView' },
]

const extractKey = ({ id }) => id

export default class ConfigView extends React.Component {

  renderItem = ({ item }) => {
    return (
      <Text style={styles.row}>
        <View style={{width: 30, height: 15}}><Text>{item.id}</Text></View>
        <View style={{width: 200, height: 15}}><Text>{item.text}</Text></View>
      </Text>
    )
  }

  render() {
    return (
      <View style={styles.mainView}>
        <ButtonBar
          appState={this.props.appState}
          onPressStart={this.props.onPressStart}
          onPressPause={this.props.onPressPause}
        />
        <View style={styles.contentView}>

          <FlatList
            style={styles.container}
            data={rows}
            renderItem={this.renderItem}
            keyExtractor={extractKey}
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

  container: {
    marginTop: 20,
    flex: 1,
  },

  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },

});