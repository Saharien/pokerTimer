import React from 'react';
import { FlatList, StyleSheet, Text, View, TextInput } from 'react-native';
import ButtonBar from './ButtonBarView';
import ContentView from './ContentView';

const rows = [

  { id: 0, smallBlind: 5, bigBlind: 10 },
  { id: 1, smallBlind: 10, bigBlind: 25 },
  { id: 2, smallBlind: 25, bigBlind: 50 },
  { id: 3, smallBlind: 50, bigBlind: 100 },
]

const extractKey = ({ id }) => id

export default class ConfigView extends React.Component {

  state = {
    levelTime: '0',
  }

  renderItem = ({ item }) => {
    return (
      <Text style={styles.row}>
        <View style={{ width: 30, height: 15 }}><Text>{item.id}</Text></View>
        <View style={{ width: 200, height: 15 }}>

          <TextInput
            style={{ width: 80, height: 40, borderColor: '#77CC7B', borderWidth: 1 }}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />

        </View>
        <View style={{ width: 200, height: 15 }}><Text>{item.bigBlind}</Text></View>
      </Text>
    )
  }

  onSubmitEditing = () => {
    console.log('submiteditting');
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

          <View>
            <FlatList
              style={styles.container}
              data={rows}
              renderItem={this.renderItem}
              keyExtractor={extractKey}
            />
          </View>

          <View style={{justifyContent: 'flex-start'}}>
            <TextInput
              style={{ width: 80, height: 40, color: '#77CC7B', borderColor: '#77CC7B', borderWidth: 1 }}
              value={this.state.levelTime}
              onChangeText={(text) => this.setState({ levelTime: text })}
              onSubmitEditing={this.onSubmitEditing}
            />
          </View>

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
    flexDirection: 'row',
    alignItems: 'center',
  },

  container: {
    marginTop: 20,
    flex: 1,
  },

  row: {
    padding: 15,
    marginBottom: 5,
  },

});